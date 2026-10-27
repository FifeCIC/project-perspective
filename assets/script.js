(function () {
  const menuButton = document.querySelector('.hamburger');
  const mobileMenu = document.getElementById('mobile-menu');

  if (menuButton && mobileMenu) {
    menuButton.addEventListener('click', function () {
      const isOpen = mobileMenu.classList.toggle('open');
      menuButton.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
      mobileMenu.setAttribute('aria-hidden', isOpen ? 'false' : 'true');
    });

    mobileMenu.querySelectorAll('a').forEach(function (link) {
      link.addEventListener('click', function () {
        mobileMenu.classList.remove('open');
        menuButton.setAttribute('aria-expanded', 'false');
        mobileMenu.setAttribute('aria-hidden', 'true');
      });
    });
  }

  const observer = new IntersectionObserver(
    function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add('revealed');
        }
      });
    },
    { threshold: 0.1 }
  );

  document.querySelectorAll('.reveal').forEach(function (el) {
    observer.observe(el);
  });

  const slider = document.querySelector('[data-stance-slider]');
  if (slider) {
    const tiltLabel = document.querySelector('[data-tilt-label]');
    const metricTrust = document.querySelector('[data-metric-trust]');
    const metricVolatility = document.querySelector('[data-metric-volatility]');
    const metricDialogue = document.querySelector('[data-metric-dialogue]');
    const metricConfidence = document.querySelector('[data-metric-confidence]');

    const points = {
      0: { label: 'Balanced', trust: 74, volatility: 32, dialogue: 71, confidence: 77 },
      50: { label: 'Mixed', trust: 64, volatility: 48, dialogue: 61, confidence: 67 },
      100: { label: 'High opinion intensity', trust: 49, volatility: 73, dialogue: 42, confidence: 54 }
    };

    function interpolate(value, min, max) {
      const ratio = value / 100;
      return Math.round(min + (max - min) * ratio);
    }

    function updateMetrics() {
      const value = Number(slider.value);
      const trust = interpolate(value, points[0].trust, points[100].trust);
      const volatility = interpolate(value, points[0].volatility, points[100].volatility);
      const dialogue = interpolate(value, points[0].dialogue, points[100].dialogue);
      const confidence = interpolate(value, points[0].confidence, points[100].confidence);

      if (tiltLabel) {
        tiltLabel.textContent = value <= 30 ? points[0].label : (value >= 70 ? points[100].label : points[50].label);
      }
      if (metricTrust) {
        metricTrust.textContent = String(trust);
      }
      if (metricVolatility) {
        metricVolatility.textContent = String(volatility);
      }
      if (metricDialogue) {
        metricDialogue.textContent = String(dialogue);
      }
      if (metricConfidence) {
        metricConfidence.textContent = String(confidence);
      }
    }

    slider.addEventListener('input', updateMetrics);
    updateMetrics();
  }
})();
