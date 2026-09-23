/**
 * Core runtime script: Zero external dependencies (No jQuery).
 * Bootstrap 5.3 native lifecycle.
 */

// Native share helper
function share(url, title, text) {
  if (navigator.share) {
    navigator.share({ title: title, text: text, url: url })
      .catch((error) => console.log('Sharing canceled or error:', error));
  } else if (navigator.clipboard) {
    navigator.clipboard.writeText(url).then(() => {
      alert('Link copied to clipboard!');
    }).catch(() => {
      alert('Could not copy link to clipboard.');
    });
  } else {
    alert('Sharing API is not supported on this browser.');
  }
}

// Smooth scroll with fixed header offset
function scrollToElement(elementId, offset) {
  var element = document.getElementById(elementId);
  if (!element) return;
  var offsetPosition = element.getBoundingClientRect().top + window.pageYOffset - (offset || 120);
  window.scrollTo({
    top: offsetPosition,
    behavior: "smooth"
  });
}

// Render gallery cards dynamically from window.PORTFOLIO_DATA
function renderPortfolioGallery() {
  var container = document.getElementById("gallery-items-container");
  var modalsOutlet = document.getElementById("gallery-modals-outlet");
  if (!container || !modalsOutlet || !window.PORTFOLIO_DATA) return;

  var cardsHtml = "";
  var modalsHtml = "";

  window.PORTFOLIO_DATA.forEach(function(item) {
    // 1. Carousel slides
    var slidesHtml = item.thumbnails.map(function(thumb, idx) {
      return '<div class="ratio ratio-16x9 carousel-item ' + (idx === 0 ? 'active' : '') + '">' +
             '  <img class="d-block w-100 img-fluid rounded" src="' + thumb + '" alt="' + item.title + ' #' + (idx + 1) + '" loading="lazy">' +
             '</div>';
    }).join("");

    var hasControls = item.thumbnails.length > 1;
    var controlsHtml = hasControls ? (
      '<button class="carousel-control-prev" type="button" data-bs-target="#carousel_' + item.id + '" data-bs-slide="prev">' +
      '  <span class="carousel-control-prev-icon" aria-hidden="true"></span>' +
      '  <span class="visually-hidden">Previous</span>' +
      '</button>' +
      '<button class="carousel-control-next" type="button" data-bs-target="#carousel_' + item.id + '" data-bs-slide="next">' +
      '  <span class="carousel-control-next-icon" aria-hidden="true"></span>' +
      '  <span class="visually-hidden">Next</span>' +
      '</button>'
    ) : '';

    // 2. Card HTML
    cardsHtml +=
      '<div class="col col-md-4 col-12 mx-0 px-0 px-md-2 my-2 my-md-2 gallery-card-item ' + item.filterClass + '">' +
      '  <div id="' + item.id + '">' +
      '    <div id="carousel_' + item.id + '" class="carousel slide" data-bs-touch="true" data-bs-interval="false">' +
      '      <div class="carousel-inner thumbnail-shadow">' +
               slidesHtml +
      '      </div>' +
      '      <div class="d-flex position-absolute top-0 start-0 w-100 h-100 theme-gallery-item-title" role="button" data-bs-toggle="modal" data-bs-target="#modal_' + item.id + '" style="background: radial-gradient(circle, rgba(0,0,0,0) 36%, rgba(0,0,0,0) 45%, rgba(0,0,0,0.86) 100%);">' +
      '        <div class="btn position-absolute bottom-0 start-50 translate-middle-x mb-0 col-12 col-md-12 px-3 py-1 mg-0 theme-gallery-item-title" title="' + item.title + '">' +
      '          <div class="d-flex flex-row align-items-center">' +
      '            <div><i class="bi bi-plus-circle fs-5"></i></div>' +
      '            <div class="flex-grow-1 fs-5 text-start px-2 text-truncate">' + item.title + '</div>' +
      '          </div>' +
      '        </div>' +
      '      </div>' +
             controlsHtml +
      '    </div>' +
      '  </div>' +
      '</div>';

    // 3. Modal HTML
    var sketchfabBlock = item.sketchfabId ? (
      '<div id="3d-' + item.id + '" class="mt-0 mb-3 theme-subtitle fs-2">' +
      '  <i class="bi bi-badge-3d fs-1"></i><span> Model</span>' +
      '</div>' +
      '<div class="embed-responsive embed-responsive-16by9 theme-modal-img my-4" style="height: 50vh;">' +
      '  <iframe width="100%" height="100%" frameborder="0" allowfullscreen="allowfullscreen" allow="autoplay; fullscreen; xr-spatial-tracking" src="https://sketchfab.com/models/' + item.sketchfabId + '/embed?ui_theme=dark"></iframe>' +
      '</div>'
    ) : '';

    var videosBlock = (item.videos && item.videos.length > 0) ? (
      '<div id="film-' + item.id + '" class="mt-5 pt-4 mb-3 theme-subtitle fs-2">' +
      '  <i class="bi bi-film"></i><span> Videos</span>' +
      '</div>' +
      item.videos.map(function(vid) {
        return '<video class="img-fluid mx-auto d-block theme-modal-img my-4" autoplay muted loop controls playsinline>' +
               '  <source src="' + vid + '" type="video/mp4">' +
               '</video>';
      }).join("")
    ) : '';

    var imagesBlock = (item.images && item.images.length > 0) ? (
      '<div id="img-' + item.id + '" class="mt-5 pt-4 mb-3 theme-subtitle fs-2">' +
      '  <i class="bi bi-images"></i><span> Gallery</span>' +
      '</div>' +
      item.images.map(function(img) {
        return '<img class="img-fluid mx-auto d-block theme-modal-img my-4" src="' + img + '" alt="' + item.title + '" loading="lazy">';
      }).join("")
    ) : '';

    var conceptBlock = item.conceptCredit ? (
      '<div class="d-flex flex-column align-items-center my-4">' +
      '  <img class="img-fluid mx-auto d-block theme-modal-img my-2" src="' + item.conceptCredit.image + '" alt="Concept" loading="lazy">' +
      '  <div><span class="text-light">Concept by <a class="theme-menu-item text-warning" href="' + item.conceptCredit.url + '" target="_blank" rel="noopener">' + item.conceptCredit.artist + '</a></span></div>' +
      '</div>'
    ) : '';

    modalsHtml +=
      '<div class="modal fade" id="modal_' + item.id + '" tabindex="-1" aria-labelledby="label_' + item.id + '" aria-hidden="true">' +
      '  <div class="modal-dialog modal-fullscreen">' +
      '    <div class="modal-content theme-modal-body">' +
      '      <div class="modal-header border-0 pb-0">' +
      '        <h2 class="modal-title fs-4 text-light" id="label_' + item.id + '">' + item.title + '</h2>' +
      '        <button type="button" class="btn-close btn-close-white" data-bs-dismiss="modal" aria-label="Close"></button>' +
      '      </div>' +
      '      <div class="modal-body">' +
      '        <div class="d-flex flex-row">' +
      '          <div class="d-flex flex-grow-1" data-bs-dismiss="modal" role="button"></div>' +
      '          <div class="d-flex flex-column col-12 col-md-8 p-0">' +
                   sketchfabBlock +
                   videosBlock +
                   imagesBlock +
                   conceptBlock +
      '          </div>' +
      '          <div class="d-flex flex-grow-1" data-bs-dismiss="modal" role="button"></div>' +
      '        </div>' +
      '      </div>' +
      '      <div class="modal-footer theme-menu-bg p-0" style="border: none;">' +
      '        <div class="d-flex flex-row flex-grow-1 text-center p-0 fs-2">' +
      '          <a role="button" class="flex-fill theme-menu-item bi bi-arrow-left-circle" data-bs-dismiss="modal"></a>' +
      '        </div>' +
      '      </div>' +
      '    </div>' +
      '  </div>' +
      '</div>';
  });

  container.innerHTML = cardsHtml;
  modalsOutlet.innerHTML = modalsHtml;
}

// Checkbox filter setup
function setupCategoryFilters() {
  var filterCheckboxes = document.querySelectorAll(".theme-toggle-filter");
  filterCheckboxes.forEach(function(cb) {
    cb.addEventListener("change", function() {
      var filterClass = cb.getAttribute("data-filter");
      var elements = document.querySelectorAll("." + filterClass);
      elements.forEach(function(el) {
        if (cb.checked) {
          el.classList.remove("d-none");
        } else {
          el.classList.add("d-none");
        }
      });
    });
  });
}

// Bootstrap ready event
document.addEventListener("DOMContentLoaded", function() {
  renderPortfolioGallery();
  setupCategoryFilters();
});
