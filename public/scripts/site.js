/**
 * Vanilla JavaScript for Mobile Menu & Lead Form Validation
 * Size: ~2 KB unminified (< 10 KB budget), deferred.
 */
document.addEventListener('DOMContentLoaded', function () {
  // 1. Mobile Navigation Toggle
  var menuToggle = document.querySelector('.mobile-menu-toggle');
  var siteNav = document.querySelector('.site-nav');

  if (menuToggle && siteNav) {
    menuToggle.addEventListener('click', function () {
      var isExpanded = menuToggle.getAttribute('aria-expanded') === 'true';
      menuToggle.setAttribute('aria-expanded', !isExpanded);
      siteNav.classList.toggle('is-open');
      menuToggle.textContent = isExpanded ? 'Menu' : 'Close';
    });
  }

  // 2. Lead Generation Form Validation
  var form = document.querySelector('form[name="estimate-request"]');
  if (form) {
    form.addEventListener('submit', function (event) {
      var isValid = true;

      // Full Name
      var nameInput = form.querySelector('#lead-name');
      var nameError = form.querySelector('#name-error');
      if (nameInput) {
        if (!nameInput.value.trim() || nameInput.value.trim().length < 2) {
          isValid = false;
          nameInput.setAttribute('aria-invalid', 'true');
          if (nameError) nameError.classList.add('is-visible');
        } else {
          nameInput.removeAttribute('aria-invalid');
          if (nameError) nameError.classList.remove('is-visible');
        }
      }

      // Telephone Number (min 10 digits)
      var phoneInput = form.querySelector('#lead-phone');
      var phoneError = form.querySelector('#phone-error');
      if (phoneInput) {
        var cleanPhone = phoneInput.value.replace(/\D/g, '');
        if (cleanPhone.length < 10) {
          isValid = false;
          phoneInput.setAttribute('aria-invalid', 'true');
          if (phoneError) phoneError.classList.add('is-visible');
        } else {
          phoneInput.removeAttribute('aria-invalid');
          if (phoneError) phoneError.classList.remove('is-visible');
        }
      }

      // Address or ZIP
      var locationInput = form.querySelector('#lead-location');
      var locationError = form.querySelector('#location-error');
      if (locationInput) {
        if (!locationInput.value.trim() || locationInput.value.trim().length < 3) {
          isValid = false;
          locationInput.setAttribute('aria-invalid', 'true');
          if (locationError) locationError.classList.add('is-visible');
        } else {
          locationInput.removeAttribute('aria-invalid');
          if (locationError) locationError.classList.remove('is-visible');
        }
      }

      // What is sinking (select)
      var serviceSelect = form.querySelector('#lead-service');
      var serviceError = form.querySelector('#service-error');
      if (serviceSelect) {
        if (!serviceSelect.value) {
          isValid = false;
          serviceSelect.setAttribute('aria-invalid', 'true');
          if (serviceError) serviceError.classList.add('is-visible');
        } else {
          serviceSelect.removeAttribute('aria-invalid');
          if (serviceError) serviceError.classList.remove('is-visible');
        }
      }

      // Honeypot check
      var honeypot = form.querySelector('input[name="bot-field"]');
      if (honeypot && honeypot.value !== '') {
        isValid = false;
      }

      if (!isValid) {
        event.preventDefault();
        var firstError = form.querySelector('[aria-invalid="true"]');
        if (firstError) {
          firstError.focus();
        }
      }
    });
  }
});
