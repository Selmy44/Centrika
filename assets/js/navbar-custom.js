// ===== Navbar Custom JavaScript =====

(function($) {
  "use strict";

  // Dark/Light Mode Toggle
  function initThemeToggle() {
    const themeToggle = document.getElementById('themeToggle');
    const body = document.body;

    // Check for saved theme preference or default to light mode
    const currentTheme = localStorage.getItem('theme') || 'light';
    if (currentTheme === 'dark') {
      body.classList.add('dark-mode');
    }

    themeToggle.addEventListener('click', function(e) {
      e.preventDefault();
      body.classList.toggle('dark-mode');

      // Save theme preference
      if (body.classList.contains('dark-mode')) {
        localStorage.setItem('theme', 'dark');
      } else {
        localStorage.setItem('theme', 'light');
      }
    });
  }

  // Search Overlay Toggle
  function initSearchToggle() {
    const searchToggle = document.getElementById('searchToggle');
    const searchOverlay = document.getElementById('searchOverlay');
    const searchClose = document.getElementById('searchClose');
    const searchInput = document.getElementById('searchInput');
    const searchButton = document.getElementById('searchButton');

    // Open search overlay
    searchToggle.addEventListener('click', function(e) {
      e.preventDefault();
      searchOverlay.classList.add('active');
      setTimeout(() => {
        searchInput.focus();
      }, 300);
    });

    // Close search overlay
    searchClose.addEventListener('click', function() {
      searchOverlay.classList.remove('active');
      searchInput.value = '';
    });

    // Close on overlay click (outside content)
    searchOverlay.addEventListener('click', function(e) {
      if (e.target === searchOverlay) {
        searchOverlay.classList.remove('active');
        searchInput.value = '';
      }
    });

    // Close on ESC key
    document.addEventListener('keydown', function(e) {
      if (e.key === 'Escape' && searchOverlay.classList.contains('active')) {
        searchOverlay.classList.remove('active');
        searchInput.value = '';
      }
    });

    // Search button click
    searchButton.addEventListener('click', function() {
      performSearch();
    });

    // Search on Enter key
    searchInput.addEventListener('keypress', function(e) {
      if (e.key === 'Enter') {
        performSearch();
      }
    });

    // Perform search function
    function performSearch() {
      const query = searchInput.value.trim();
      if (query) {
        console.log('Searching for:', query);
        // Add your search logic here
        // For example: window.location.href = '/search?q=' + encodeURIComponent(query);

        // For demo purposes, just alert
        alert('Search functionality coming soon! You searched for: ' + query);
      }
    }
  }

  // Mobile Dropdown Toggle
  function initMobileDropdown() {
    // For mobile view, toggle dropdown on click
    if (window.innerWidth <= 992) {
      $('.main-nav ul.nav li.has-dropdown > a').on('click', function(e) {
        e.preventDefault();
        $(this).parent().toggleClass('active');
        $(this).next('.dropdown-menu').slideToggle(300);
      });
    }
  }

  // Update dropdown behavior on window resize
  function handleResize() {
    if (window.innerWidth > 992) {
      // Desktop - remove mobile dropdown behavior
      $('.main-nav ul.nav li.has-dropdown').removeClass('active');
      $('.main-nav ul.nav li .dropdown-menu').css('display', '');
    }
  }

  // Active menu item highlighting
  function initActiveMenu() {
    const sections = document.querySelectorAll('div[id]');
    const navLinks = document.querySelectorAll('.main-nav ul.nav li a');

    function highlightMenu() {
      let scrollPosition = window.scrollY + 100;

      sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.offsetHeight;
        const sectionId = section.getAttribute('id');

        if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
          navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === '#' + sectionId) {
              link.classList.add('active');
            }
          });
        }
      });
    }

    window.addEventListener('scroll', highlightMenu);
  }

  // Smooth scrolling for anchor links
  function initSmoothScroll() {
    $('a[href*="#"]').not('[href="#"]').not('[href="#0"]').click(function(event) {
      if (
        location.pathname.replace(/^\//, '') === this.pathname.replace(/^\//, '') &&
        location.hostname === this.hostname
      ) {
        let target = $(this.hash);
        target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');

        if (target.length) {
          event.preventDefault();

          // Close search overlay if open
          $('#searchOverlay').removeClass('active');

          $('html, body').animate({
            scrollTop: target.offset().top - 80
          }, 800);
        }
      }
    });
  }

  // Initialize all functions when document is ready
  $(document).ready(function() {
    initThemeToggle();
    initSearchToggle();
    initMobileDropdown();
    initActiveMenu();
    initSmoothScroll();

    // Handle window resize
    $(window).on('resize', function() {
      handleResize();
    });
  });

})(jQuery);
