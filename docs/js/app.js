const app = document.getElementById('app');

// --- Components ---


// State for 3D Carousel
let currentCarouselIndex = 0;

function renderHome() {
  app.innerHTML = `
    <div class="persistent-header">
      <span onclick="navigateTo('')" class="header-nav-link home-link">Home</span>
      
      <!-- Hamburger Icon -->
      <div class="hamburger-btn" onclick="toggleMenu()">
        <div class="bar"></div>
        <div class="bar"></div>
        <div class="bar"></div>
      </div>

      <!-- Dropdown Menu Overlay -->
      <div id="nav-menu" class="nav-overlay">
         <span onclick="navigateTo('lingua-italiana'); toggleMenu()" class="nav-overlay-link">Lingua Italiana</span>
         <span onclick="navigateTo('map'); toggleMenu()" class="nav-overlay-link">La mappa</span>
      </div>
    </div>
    <div class="hero home-hero">
      <div class="hero-bg" style="background-image: url('images/italy_hero.png')"></div>
      
      <div class="hero-content">
        <h1 class="hero-title">Summer 2025 European Vacation</h1>
        <p class="hero-subtitle">Benvenuti in Italia</p>
        
        <div class="countdown-container">
          <div class="countdown-label">Countdown to Adventure</div>
          <div id="countdown" class="countdown">
            <div class="countdown-item">
              <span class="countdown-value" id="months">--</span>
              <span class="countdown-unit">Months</span>
            </div>
            <div class="countdown-item">
              <span class="countdown-value" id="days">--</span>
              <span class="countdown-unit">Days</span>
            </div>
            <div class="countdown-item">
              <span class="countdown-value" id="hours">--</span>
              <span class="countdown-unit">Hours</span>
            </div>
          </div>
        </div>
      </div>
      
      <div class="carousel-overlay">
        <div class="location-carousel">
          ${tripData.map((location, index) => `
            <div class="location-card" id="card-${index}" onclick="handleCardClick(${index})">
              <div class="card-image-wrapper">
                <img src="${location.imageName}" alt="${location.name}" class="card-image">
              </div>
              <div class="card-content">
                <h3 class="card-title">${location.name}</h3>
                <p class="card-date">${location.dates}</p>
              </div>
            </div>
          `).join('')}
        </div>
        
        <!-- Navigation Arrows -->
        <div class="carousel-nav-btn prev-btn" onclick="prevCard()">❮</div>
        <div class="carousel-nav-btn next-btn" onclick="nextCard()">❯</div>
      </div>

    </div>
  `;

  initAnimations();
  startCountdown();
  initSwipe(); // Initialize swipe logic

  // Initialize carousel view
  setTimeout(updateCarouselView, 50);
}

// Handle Card Clicks
window.handleCardClick = function (index) {
  if (index === currentCarouselIndex) {
    // Navigate if active card clicked
    navigateTo(tripData[index].id);
  } else {
    // Rotate to clicked card
    currentCarouselIndex = index;
    updateCarouselView();
  }
};

window.nextCard = function (e) {
  if (e) e.stopPropagation();
  currentCarouselIndex = (currentCarouselIndex + 1) % tripData.length;
  updateCarouselView();
};

window.prevCard = function (e) {
  if (e) e.stopPropagation();
  currentCarouselIndex = (currentCarouselIndex - 1 + tripData.length) % tripData.length;
  updateCarouselView();
};

window.updateCarouselView = function () {
  const cards = document.querySelectorAll('.location-card');
  const total = cards.length;

  cards.forEach((card, i) => {
    // Reset classes
    card.className = 'location-card';

    // Circular logic
    if (i === currentCarouselIndex) {
      card.classList.add('active');
    } else if (i === (currentCarouselIndex - 1 + total) % total) {
      card.classList.add('prev');
    } else if (i === (currentCarouselIndex + 1) % total) {
      card.classList.add('next');
    } else {
      // hidden
    }
  });
};

// Swipe Support
let touchStartX = 0;
let touchEndX = 0;

window.initSwipe = function () {
  const carousel = document.querySelector('.carousel-overlay'); // Swipe area
  if (!carousel) return;

  carousel.addEventListener('touchstart', (e) => {
    touchStartX = e.changedTouches[0].screenX;
  }, { passive: true });

  carousel.addEventListener('touchend', (e) => {
    touchEndX = e.changedTouches[0].screenX;
    handleSwipe();
  }, { passive: true });
};

// Toggle Menu Function
window.toggleMenu = function () {
  const menu = document.getElementById('nav-menu');
  menu.classList.toggle('active');
};

function handleSwipe() {
  const threshold = 50; // Min diff to trigger
  if (touchEndX < touchStartX - threshold) {
    // Swiped Left -> Next
    nextCard();
  }
  if (touchEndX > touchStartX + threshold) {
    // Swiped Right -> Prev
    prevCard();
  }
}

// State
let currentDayIndex = 0;
let currentLocationItinerary = [];
let isDayExpanded = false; // New state

function renderLocation(locationId) {
  const locationData = tripData.find(l => l.id === locationId);
  if (!locationData) {
    navigateTo('');
    return;
  }

  // Set local state
  currentLocationItinerary = locationData.itinerary;
  currentDayIndex = 0;
  isDayExpanded = false;

  app.innerHTML = `
    <div class="persistent-header">
      <span onclick="navigateTo('')" class="header-nav-link home-link">Home</span>
      
      <!-- Hamburger Icon -->
      <div class="hamburger-btn" onclick="toggleMenu()">
        <div class="bar"></div>
        <div class="bar"></div>
        <div class="bar"></div>
      </div>

      <!-- Dropdown Menu Overlay -->
      <div id="nav-menu" class="nav-overlay">
         <span onclick="navigateTo('lingua-italiana'); toggleMenu()" class="nav-overlay-link">Lingua Italiana</span>
         <span onclick="navigateTo('map'); toggleMenu()" class="nav-overlay-link">La mappa</span>
      </div>
    </div>
    <div class="hero location-hero">
      <div class="hero-bg" style="background-image: url('${locationData.imageName}')"></div>
      <div class="hero-content" id="hero-text-content">
        <h1 class="hero-title">${locationData.name}</h1>
        <p class="hero-subtitle">${locationData.dates}</p>
        <p class="hero-description">${locationData.description}</p>
      </div>
      
      <!-- Day Carousel Section (Now Inside Hero) -->
      <div class="day-carousel-section">
        <div class="day-carousel-wrapper">
          <!-- Day Cards Injected Here -->
          ${currentLocationItinerary.map((day, index) => `
            <div class="location-card" id="day-card-${index}" onclick="handleDayClick(${index}, event)">
              <div class="card-image-wrapper">
                <img src="${day.activities[0]?.image || locationData.imageName}" alt="${day.title}" class="card-image">
              </div>
              <div class="card-content">
                <h3 class="card-title">Day ${day.dayNumber}</h3>
                <p class="card-date">${day.title}</p>
                 <!-- Accordion Chevron -->
                <div class="card-chevron" style="margin-top: 10px; transition: transform 0.3s ease;">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="6 9 12 15 18 9"></polyline></svg>
                </div>
              </div>
              
              <!-- Hidden Timeline Content (Revealed on Expand) -->
              <div class="card-timeline-wrapper">
                 <div class="itinerary-timeline">
                    ${(day.activities.flatMap(act => act.details || [])).length > 0 ?
      (day.activities.flatMap(act => act.details || [])).map(detail => `
                        <div class="timeline-item">
                            <div class="timeline-time">
                                <span>${detail.time || 'General'}</span>
                            </div>
                            <div class="timeline-marker"></div>
                            <div class="timeline-content">
                                <h3 class="timeline-title">${detail.title}</h3>
                                <p class="timeline-desc">${detail.description}</p>
                            </div>
                        </div>
                    `).join('') : '<p style="text-align: center; color: #999; padding: 20px;">Relax and enjoy the day!</p>'}
                </div>
              </div>
            </div>
          `).join('')}
        </div>
        
        <!-- Navigation Arrows -->
        <div class="carousel-nav-btn prev-btn" onclick="prevDayCard()">❮</div>
        <div class="carousel-nav-btn next-btn" onclick="nextDayCard()">❯</div>
      </div>
    </div>
  `;

  initAnimations();
  initDaySwipe();

  // Inject Overlay Container if not present
  if (!document.getElementById('itinerary-overlay-container')) {
    const overlayHTML = `
      <div id="itinerary-overlay-container" class="itinerary-overlay-container" onclick="closeItineraryOverlay(event)">
        <div class="itinerary-modal-card">
            <!-- Content injected via JS -->
        </div>
      </div>
      `;
    document.body.insertAdjacentHTML('beforeend', overlayHTML);
  }

  // Initialize View
  updateDayCarouselView();
}

// --- Overlay Logic ---

window.openItineraryOverlay = function (index) {
  const day = currentLocationItinerary[index];
  const overlay = document.getElementById('itinerary-overlay-container');
  const modalCard = overlay.querySelector('.itinerary-modal-card');

  if (!day || !overlay) return;

  // Build Content
  const timelineHTML = (day.activities.flatMap(act => act.details || [])).map(detail => `
      <div class="timeline-item">
          <div class="timeline-time">
              <span>${detail.time || 'General'}</span>
          </div>
          <div class="timeline-marker"></div>
          <div class="timeline-content">
              <h3 class="timeline-title">${detail.title}</h3>
              <p class="timeline-desc">${detail.description}</p>
          </div>
      </div>
  `).join('');

  modalCard.innerHTML = `
    <img src="${day.activities[0]?.image || 'images/italy_hero.png'}" alt="${day.title}" class="modal-header-image">
    <div class="modal-content-body">
        <h2 class="modal-title">Day ${day.dayNumber}: ${day.title}</h2>
        <p class="modal-date">${day.date}</p>
        <div class="itinerary-timeline">
            ${timelineHTML || '<p>Relax and enjoy!</p>'}
        </div>
    </div>
  `;

  // Show
  overlay.classList.add('active');
};

window.closeItineraryOverlay = function (e) {
  if (e) e.stopPropagation(); // Safe check
  const overlay = document.getElementById('itinerary-overlay-container');
  if (overlay) overlay.classList.remove('active');
};

let dayTouchStartX = 0;
let dayTouchEndX = 0;

window.initDaySwipe = function () {
  const carousel = document.querySelector('.day-carousel-wrapper');
  if (!carousel) return;

  carousel.addEventListener('touchstart', (e) => {
    dayTouchStartX = e.changedTouches[0].screenX;
  }, { passive: true });

  carousel.addEventListener('touchend', (e) => {
    dayTouchEndX = e.changedTouches[0].screenX;
    handleDaySwipe();
  }, { passive: true });
};

window.handleDaySwipe = function () {
  const threshold = 50;
  if (dayTouchEndX < dayTouchStartX - threshold) {
    nextDayCard();
  }
  if (dayTouchEndX > dayTouchStartX + threshold) {
    prevDayCard();
  }
};

window.handleDayClick = function (index, event) {
  // Simple: Just open the overlay
  openItineraryOverlay(index);
};

window.nextDayCard = function (e) {
  if (e) e.stopPropagation();
  currentDayIndex = (currentDayIndex + 1) % currentLocationItinerary.length;
  updateDayCarouselView();
};

window.prevDayCard = function (e) {
  if (e) e.stopPropagation();
  currentDayIndex = (currentDayIndex - 1 + currentLocationItinerary.length) % currentLocationItinerary.length;
  updateDayCarouselView();
};

window.toggleDayExpansion = function () {
  // No longer used
};

window.updateDayCarouselView = function () {
  const cards = document.querySelectorAll('.day-carousel-wrapper .location-card');
  const total = cards.length;
  const heroText = document.getElementById('hero-text-content');
  const navBtns = document.querySelectorAll('.day-carousel-section .carousel-nav-btn');

  // Ensure Hero Text is visible (resetting old logic)
  if (heroText) {
    heroText.style.opacity = '1';
    heroText.style.pointerEvents = 'auto';
  }

  // Ensure Nav Buttons are visible
  navBtns.forEach(btn => btn.style.opacity = '1');
  navBtns.forEach(btn => btn.style.pointerEvents = 'auto');

  cards.forEach((card, i) => {
    // Reset base classes
    card.className = 'location-card';
    card.style.opacity = '';

    // CAROUSEL MODE ONLY
    if (i === currentDayIndex) {
      card.classList.add('active');
    } else if (i === (currentDayIndex - 1 + total) % total) {
      card.classList.add('prev');
    } else if (i === (currentDayIndex + 1) % total) {
      card.classList.add('next');
    }
  });
};

// No longer needed: updateDayDetails (logic moved inside card rendering)
window.updateDayDetails = null;

window.scrollCarousel = function (direction) {
  const carousel = document.querySelector('.phrase-carousel');
  if (carousel) {
    const scrollAmount = carousel.offsetWidth;
    carousel.scrollBy({ left: direction * scrollAmount, behavior: 'smooth' });
  }
};

// Map Page
function renderMap() {
  app.innerHTML = `
    <div class="persistent-header">
      <span onclick="navigateTo('')" class="header-nav-link home-link">Home</span>
      
      <!-- Hamburger Icon -->
      <div class="hamburger-btn" onclick="toggleMenu()">
        <div class="bar"></div>
        <div class="bar"></div>
        <div class="bar"></div>
      </div>

      <!-- Dropdown Menu Overlay -->
      <div id="nav-menu" class="nav-overlay">
         <span onclick="navigateTo('lingua-italiana'); toggleMenu()" class="nav-overlay-link">Lingua Italiana</span>
         <span onclick="navigateTo('map'); toggleMenu()" class="nav-overlay-link">La mappa</span>
      </div>
    </div>
    <div class="hero">
      <div class="hero-bg" style="background-image: url('images/italy_hero.png')"></div>
      <div class="hero-content">
        <h1 class="hero-title">Our Italian Journey</h1>
        <p class="hero-subtitle">June 11-25, 2026</p>
      </div>
    </div>
    <div class="map-page-container">
      <div class="container">
        <div class="italy-map-wrapper">
          <img src="images/italy_map.png" alt="Map of Italy" class="italy-map-bg">
          <svg class="italy-map-overlay" viewBox="0 0 800 1000">
            <!-- Route path connecting cities in travel order: Rome -> Florence -> Cinque Terre -> Venice -->
            <path d="M 390 510 L 340 390 L 230 330 L 425 260" 
                  class="route-path" fill="none" stroke="#D62828" stroke-width="4" stroke-dasharray="8,8" opacity="0.8">
              <animate attributeName="stroke-dashoffset" from="0" to="32" dur="2s" repeatCount="indefinite"/>
            </path>
            
            <!-- City markers with accurate Italy positions based on reference map -->
            <!-- Rome - Just south and east of Florence (red star position) -->
            <g class="city-marker" data-city="rome" onclick="navigateTo('rome')">
              <circle cx="390" cy="510" r="20" class="marker-circle"/>
              <circle cx="390" cy="510" r="10" fill="white"/>
              <text x="390" y="555" class="city-label-map">Rome</text>
              <text x="390" y="575" class="city-dates-map">June 11-15</text>
            </g>
            
            <!-- Florence - Tuscany, North-Central -->
            <g class="city-marker" data-city="florence" onclick="navigateTo('florence')">
              <circle cx="340" cy="390" r="20" class="marker-circle"/>
              <circle cx="340" cy="390" r="10" fill="white"/>
              <text x="340" y="430" class="city-label-map">Florence</text>
              <text x="340" y="450" class="city-dates-map">June 15-19</text>
            </g>
            
            <!-- Cinque Terre - Northwest Coast on Ligurian Sea -->
            <g class="city-marker" data-city="cinque-terre" onclick="navigateTo('cinque-terre')">
              <circle cx="230" cy="330" r="20" class="marker-circle"/>
              <circle cx="230" cy="330" r="10" fill="white"/>
              <text x="230" y="310" class="city-label-map">Cinque Terre</text>
              <text x="230" y="292" class="city-dates-map">June 19-22</text>
            </g>
            
            <!-- Venice - Northeast (black star position) -->
            <g class="city-marker" data-city="venice" onclick="navigateTo('venice')">
              <circle cx="425" cy="260" r="20" class="marker-circle"/>
              <circle cx="425" cy="260" r="10" fill="white"/>
              <text x="425" y="245" class="city-label-map">Venice</text>
              <text x="425" y="227" class="city-dates-map">June 22-25</text>
            </g>
          </svg>
        </div>
        <div class="reveal nav-footer">
          <button class="btn-back" onclick="navigateTo('')">
            ← Back to Home
          </button>
        </div>
      </div>
    </div>
  `;

  initAnimations();
}

function navigateTo(route) {
  window.location.hash = route;
  window.scrollTo(0, 0);
}

function handleRoute() {
  const hash = window.location.hash.substring(1);
  if (hash === 'map') {
    renderMap();
  } else if (hash === 'lingua-italiana') {
    renderLanguage();
  } else if (hash.startsWith('activity/')) {
    const detailId = hash.split('/')[1];
    renderActivityDetail(detailId);
  } else if (hash) {
    renderLocation(hash);
  } else {
    renderHome();
  }
}

function renderLanguage() {
  app.innerHTML = `
    <div class="persistent-header">
      <span onclick="navigateTo('')" class="header-nav-link home-link">Home</span>
      
      <!-- Hamburger Icon -->
      <div class="hamburger-btn" onclick="toggleMenu()">
        <div class="bar"></div>
        <div class="bar"></div>
        <div class="bar"></div>
      </div>

      <!-- Dropdown Menu Overlay -->
      <div id="nav-menu" class="nav-overlay">
         <span onclick="navigateTo('lingua-italiana'); toggleMenu()" class="nav-overlay-link">Lingua Italiana</span>
         <span onclick="navigateTo('map'); toggleMenu()" class="nav-overlay-link">La mappa</span>
      </div>
    </div>
    <div class="hero">
      <div class="hero-bg" style="background-image: url('images/italy_hero.png')"></div>
      <div class="hero-content">
        <h1 class="hero-title">Lingua Italiana</h1>
        <p class="hero-subtitle">Speak like a local</p>
      </div>
    </div>
    <div class="container language-page-container">
      <div class="itinerary-container">
        ${languageData.map(category => `
          <div class="day-group reveal">
            <h2 class="category-title">${category.category}</h2>
            <div class="language-grid">
              ${category.phrases.map(phrase => `
                <div class="phrase-card">
                  <p class="phrase-italian">${phrase.italian}</p>
                  <p class="phrase-english">${phrase.english}</p>
                </div>
              `).join('')}
            </div>
          </div>
        `).join('')}
      </div>
      
      <div class="reveal nav-footer">
        <button class="btn-back" onclick="navigateTo('')">
          ← Back to Home
        </button>
      </div>
    </div>
  `;

  initAnimations();
}

function renderActivityDetail(detailId) {
  // Find the activity across all locations
  let foundActivity = null;
  let foundLocation = null;

  for (const loc of tripData) {
    for (const day of loc.itinerary) {
      const act = day.activities.find(a => a.detailId === detailId);
      if (act) {
        foundActivity = act;
        foundLocation = loc;
        break;
      }
    }
    if (foundActivity) break;
  }

  if (!foundActivity) {
    navigateTo('');
    return;
  }

  app.innerHTML = `
    <div class="persistent-header">
      <span onclick="navigateTo('')" class="header-nav-link home-link">Home</span>
      
      <!-- Hamburger Icon -->
      <div class="hamburger-btn" onclick="toggleMenu()">
        <div class="bar"></div>
        <div class="bar"></div>
        <div class="bar"></div>
      </div>

      <!-- Dropdown Menu Overlay -->
      <div id="nav-menu" class="nav-overlay">
         <span onclick="navigateTo('lingua-italiana'); toggleMenu()" class="nav-overlay-link">Lingua Italiana</span>
         <span onclick="navigateTo('map'); toggleMenu()" class="nav-overlay-link">La mappa</span>
      </div>
    </div>
    <div class="hero">
      <div class="hero-bg" style="background-image: url('${foundActivity.image}')"></div>
      <div class="hero-content">
        <h1 class="hero-title">${foundActivity.title}</h1>
      </div>
    </div>
    <div class="container detail-container">
      <div class="detail-content reveal">
        <p class="detail-intro">${foundActivity.description}</p>
        
        <div class="activity-detail-card">
          <h3 class="activity-detail-title">Activity Details</h3>
          ${foundActivity.details ? `
            <div class="detail-list">
              ${foundActivity.details.map(detail => `
                <div class="detail-list-item">
                  <h4 class="detail-item-header">${detail.title} ${detail.time ? `<span class="detail-item-time">(${detail.time})</span>` : ''}</h4>
                  <p class="detail-item-desc">${detail.description}</p>
                </div>
              `).join('')}
            </div>
          ` : '<p>More detailed information about this activity will appear here.</p>'}
        </div>

  <div class="reveal nav-footer">
    <button class="btn-back" onclick="navigateTo('${foundLocation.id}')">
      ← Back to ${foundLocation.name}
    </button>
  </div>
      </div>
    </div>
  `;

  initAnimations();
}

// Accordion Toggle
window.toggleDay = function (header) {
  const currentSection = header.parentElement;
  const allSections = document.querySelectorAll('.day-section');
  // Close other sections
  allSections.forEach(sec => {
    if (sec !== currentSection) sec.classList.remove('open');
  });
  // Toggle current section
  const isNowOpen = !currentSection.classList.toggle('open');
  // If opened, smooth scroll into view
  if (currentSection.classList.contains('open')) {
    currentSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }
};


// Scroll Animations (Intersection Observer)
function initAnimations() {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('active');
      }
    });
  }, { threshold: 0.1 });

  document.querySelectorAll('.reveal').forEach(el => observer.observe(el));

  // Parallax Effect
  const heroBg = document.querySelector('.hero-bg');
  const heroContent = document.querySelector('.hero-content');

  if (heroBg) {
    window.addEventListener('scroll', () => {
      const scrolled = window.pageYOffset;
      // Parallax for background
      heroBg.style.transform = `translate3d(0, ${scrolled * 0.4}px, 0) scale(${1 + scrolled * 0.0002})`;

      // Subtle parallax for content (moves slower)
      if (heroContent) {
        heroContent.style.transform = `translate3d(0, ${scrolled * 0.15}px, 0)`;
        heroContent.style.opacity = 1 - (scrolled / 700);
      }
    });
  }
}

// Countdown Timer
function startCountdown() {
  const targetDate = new Date('June 11, 2026 00:00:00');

  function updateCountdown() {
    const now = new Date();
    const currentTimestamp = now.getTime();
    const targetTimestamp = targetDate.getTime();
    const distance = targetTimestamp - currentTimestamp;

    if (distance < 0) {
      document.getElementById('months').textContent = '00';
      document.getElementById('days').textContent = '00';
      document.getElementById('hours').textContent = '00';
      return;
    }

    // Calculate Months
    let months = (targetDate.getFullYear() - now.getFullYear()) * 12;
    months -= now.getMonth();
    months += targetDate.getMonth();

    // Adjust if current day is after target day
    if (now.getDate() > targetDate.getDate()) {
      months--;
    }

    // Calculate remaining time after removing full months
    // Create a date object representing "now + months"
    // We need to be careful with day overflow (e.g. Jan 31 + 1 month = Feb 28/29)
    // But for a simple countdown, adding months to the current date is usually safe enough 
    // if we just want "remaining days".

    // Better approach for "remaining days":
    // 1. Take the target date.
    // 2. Subtract 'months' from it to get a "last month boundary" date? 
    // No, easier: Take 'now', add 'months', and see the difference to target.

    let tempDate = new Date(now);
    tempDate.setMonth(tempDate.getMonth() + months);

    // If adding months pushed us past the target (due to day length differences), 
    // it shouldn't happen if we did the check above correctly.

    let remainingDist = targetTimestamp - tempDate.getTime();

    // Handle potential negative remainingDist due to daylight savings or month length quirks
    if (remainingDist < 0) remainingDist = 0;

    const days = Math.floor(remainingDist / (1000 * 60 * 60 * 24));
    const hours = Math.floor((remainingDist % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));

    document.getElementById('months').textContent = String(months).padStart(2, '0');
    document.getElementById('days').textContent = String(days).padStart(2, '0');
    document.getElementById('hours').textContent = String(hours).padStart(2, '0');
  }

  updateCountdown();
  setInterval(updateCountdown, 1000);
}

// Init
window.addEventListener('hashchange', handleRoute);
window.addEventListener('load', handleRoute);
