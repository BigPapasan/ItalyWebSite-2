const app = document.getElementById('app');

// --- Components ---

function renderHome() {
  app.innerHTML = `
    <div class="persistent-header">
      <span onclick="navigateTo('map')" style="cursor: pointer;">Italia</span>
      <div style="display: flex; gap: 20px;">
        <span onclick="navigateTo('lingua-italiana')" style="cursor: pointer;">Lingua Italiana</span>
        <span onclick="navigateTo('')" style="cursor: pointer;">Home</span>
      </div>
    </div>
    <div class="hero">
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
            <div class="countdown-item">
              <span class="countdown-value" id="minutes">--</span>
              <span class="countdown-unit">Minutes</span>
            </div>
            <div class="countdown-item">
              <span class="countdown-value" id="seconds">--</span>
              <span class="countdown-unit">Seconds</span>
            </div>
          </div>
        </div>
      </div>
      <div class="scroll-indicator">
        <span>Explore</span>
        <div class="arrow">↓</div>
      </div>
    </div>
    <div class="container" style="position: relative; height: 80vh; display: flex; flex-direction: column; justify-content: center; align-items: center;">
      <h2 class="reveal" style="text-align: center; margin-bottom: 10px; font-size: 2.5rem;">Your Destinations</h2>
      <button id="home-prev-btn" class="nav-corner-btn prev" onclick="scrollHomeCarousel(-1)" style="display: none;">
        ← Back
      </button>
      
      <div class="location-carousel" onscroll="updateHomeNavButtons()">
        ${tripData.map((location, index) => `
          <div class="location-card reveal" style="transition-delay: ${index * 100}ms" onclick="navigateTo('${location.id}')">
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

      <button id="home-next-btn" class="nav-corner-btn next" onclick="scrollHomeCarousel(1)">
        More →
      </button>
    </div>
  `;

  initAnimations();
  // Initialize button state
  setTimeout(updateHomeNavButtons, 100);
  // Start countdown timer
  startCountdown();
}

window.scrollHomeCarousel = function (direction) {
  const carousel = document.querySelector('.location-carousel');
  if (carousel) {
    const scrollAmount = carousel.offsetWidth;
    carousel.scrollBy({ left: direction * scrollAmount, behavior: 'smooth' });
    // Button visibility update happens via onscroll event
  }
};

window.updateHomeNavButtons = function () {
  const carousel = document.querySelector('.location-carousel');
  const prevBtn = document.getElementById('home-prev-btn');
  const nextBtn = document.getElementById('home-next-btn');

  if (!carousel || !prevBtn || !nextBtn) return;

  const scrollLeft = carousel.scrollLeft;
  const maxScrollLeft = carousel.scrollWidth - carousel.clientWidth;

  // Show/Hide Prev Button
  if (scrollLeft > 20) {
    prevBtn.style.display = 'flex';
  } else {
    prevBtn.style.display = 'none';
  }

  // Show/Hide Next Button
  if (scrollLeft >= maxScrollLeft - 20) {
    nextBtn.style.display = 'none';
  } else {
    nextBtn.style.display = 'flex';
  }
};

function renderLocation(locationId) {
  const locationData = tripData.find(l => l.id === locationId);
  if (!locationData) {
    navigateTo('');
    return;
  }

  const itineraryHtml = locationData.itinerary.map(day => `
    <div class="day-group">
      ${day.activities.map(activity => `
        <div class="activity-card reveal" ${activity.detailId ? `onclick="navigateTo('activity/${activity.detailId}')" style="cursor: pointer;"` : ''}>
          <div class="activity-image" style="background-image: url('${activity.image || locationData.imageName}')"></div>
          <div class="activity-overlay">
            <div class="card-header">
              <span class="day-badge">Day ${day.dayNumber}</span>
              ${activity.time ? `<span class="activity-time">${activity.time}</span>` : ''}
            </div>
            <div class="card-content">
              <h3 class="activity-title">${activity.title}</h3>
              <p class="activity-description">${activity.description}</p>
            </div>
          </div>
        </div>
      `).join('')}
    </div>
  `).join('');

  app.innerHTML = `
    <div class="persistent-header">
      <span onclick="navigateTo('map')" style="cursor: pointer;">Italia</span>
      <div style="display: flex; gap: 20px;">
        <span onclick="navigateTo('lingua-italiana')" style="cursor: pointer;">Lingua Italiana</span>
        <span onclick="navigateTo('')" style="cursor: pointer;">Home</span>
      </div>
    </div>
    <div class="hero location-hero">
      <div class="hero-bg" style="background-image: url('${locationData.imageName}')"></div>
      <div class="hero-content">
        <h1 class="hero-title">${locationData.name}</h1>
        <p class="hero-subtitle">${locationData.dates}</p>
        <p class="hero-description">${locationData.description}</p>
      </div>
    </div>
    <div class="container itinerary-container">
      ${itineraryHtml}
    </div>
  `;

  initAnimations();
}

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
      <span onclick="navigateTo('map')" style="cursor: pointer; font-weight: 700;">Italia</span>
      <div style="display: flex; gap: 20px;">
        <span onclick="navigateTo('lingua-italiana')" style="cursor: pointer;">Lingua Italiana</span>
        <span onclick="navigateTo('')" style="cursor: pointer;">Home</span>
      </div>
    </div>
    <div class="hero" style="min-height: 400px;">
      <div class="hero-bg" style="background-image: url('images/italy_hero.png')"></div>
      <div class="hero-content">
        <h1 class="hero-title" style="font-size: 5rem;">Our Italian Journey</h1>
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
        <div class="map-legend reveal">
          <h3 style="margin-bottom: 20px; color: var(--color-secondary);">Your Journey</h3>
          <div style="display: flex; flex-direction: column; gap: 12px;">
            <div style="display: flex; align-items: center; gap: 12px;">
              <div style="width: 20px; height: 20px; border-radius: 50%; background: var(--color-primary); border: 2px solid white;"></div>
              <span>City Destinations - Click to explore</span>
            </div>
            <div style="display: flex; align-items: center; gap: 12px;">
              <div style="width: 40px; height: 3px; background: var(--color-primary); opacity: 0.8;"></div>
              <span>Travel Route</span>
            </div>
          </div>
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
  if (hash === 'lingua-italiana') {
    renderLinguaItaliana();
  } else if (hash === 'map') {
    renderMap();
  } else if (hash.startsWith('activity/')) {
    const detailId = hash.split('/')[1];
    renderActivityDetail(detailId);
  } else if (hash) {
    renderLocation(hash);
  } else {
    renderHome();
  }
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
      <span onclick="navigateTo('map')" style="cursor: pointer;">Italia</span>
      <div style="display: flex; gap: 20px;">
        <span onclick="navigateTo('${foundLocation.id}')" style="cursor: pointer;">Back to ${foundLocation.name}</span>
        <span onclick="navigateTo('')" style="cursor: pointer;">Home</span>
      </div>
    </div>
    <div class="hero" style="min-height: 50vh;">
      <div class="hero-bg" style="background-image: url('${foundActivity.image}')"></div>
      <div class="hero-content">
        <h1 class="hero-title">${foundActivity.title}</h1>
      </div>
    </div>
    <div class="container" style="padding-top: 40px; max-width: 800px;">
      <div class="detail-content reveal">
        <p style="font-size: 1.5rem; line-height: 1.6; margin-bottom: 30px;">${foundActivity.description}</p>
        
        <div style="padding: 30px; background: white; border-radius: 15px; box-shadow: 0 5px 15px rgba(0,0,0,0.05);">
          <h3 style="margin-bottom: 15px; color: var(--color-primary);">Activity Details</h3>
          ${foundActivity.details ? `
            <div class="detail-list">
              ${foundActivity.details.map(detail => `
                <div class="detail-item" style="margin-bottom: 20px; padding-bottom: 20px; border-bottom: 1px solid #eee;">
                  <h4 style="margin: 0 0 5px 0; color: #333;">${detail.title} ${detail.time ? `<span style="font-weight: normal; font-size: 0.9em; color: #666;">(${detail.time})</span>` : ''}</h4>
                  <p style="margin: 0; color: #555;">${detail.description}</p>
                </div>
              `).join('')}
            </div>
          ` : '<p>More detailed information about this activity will appear here.</p>'}
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
      document.getElementById('minutes').textContent = '00';
      document.getElementById('seconds').textContent = '00';
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
    const minutes = Math.floor((remainingDist % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((remainingDist % (1000 * 60)) / 1000);

    document.getElementById('months').textContent = String(months).padStart(2, '0');
    document.getElementById('days').textContent = String(days).padStart(2, '0');
    document.getElementById('hours').textContent = String(hours).padStart(2, '0');
    document.getElementById('minutes').textContent = String(minutes).padStart(2, '0');
    document.getElementById('seconds').textContent = String(seconds).padStart(2, '0');
  }

  updateCountdown();
  setInterval(updateCountdown, 1000);
}

// Init
window.addEventListener('hashchange', handleRoute);
window.addEventListener('load', handleRoute);
