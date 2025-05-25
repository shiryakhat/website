// Custom JavaScript for Shir Ya Khat website

// Initialize when the DOM is fully loaded
document.addEventListener('DOMContentLoaded', function() {
    // Setup crypto address copy functionality
    document.querySelectorAll('.crypto-value').forEach(function(element) {
        element.addEventListener('click', function() {
            const text = this.getAttribute('data-clipboard-text');
            const parent = this.closest('.crypto-address');
            
            // Create temporary textarea element to copy text
            const textarea = document.createElement('textarea');
            textarea.value = text;
            textarea.style.position = 'absolute';
            textarea.style.left = '-9999px';
            document.body.appendChild(textarea);
            textarea.select();
            document.execCommand('copy');
            document.body.removeChild(textarea);
            
            // Show copied feedback
            this.classList.add('copied');
            parent.classList.add('copied');
            
            // Reset after 2 seconds
            setTimeout(() => {
                this.classList.remove('copied');
                parent.classList.remove('copied');
            }, 2000);
        });
    });
    
    // Animated elements
    const animatedElements = document.querySelectorAll('.animated');
    
    // Function to check if an element is in viewport
    function isElementInViewport(el) {
        var rect = el.getBoundingClientRect();
        return (
            rect.top >= 0 &&
            rect.left >= 0 &&
            rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
            rect.right <= (window.innerWidth || document.documentElement.clientWidth)
        );
    }
    
    // Function to handle scroll animation
    function handleScrollAnimation() {
        animatedElements.forEach(function(element) {
            if (isElementInViewport(element) && !element.classList.contains('fadeIn')) {
                element.classList.add('fadeIn');
            }
        });
    }
    
    // Listen for scroll events
    window.addEventListener('scroll', handleScrollAnimation);
    
    // Trigger on initial load
    handleScrollAnimation();
    
    // Episode Filter functionality
    const filterButtons = document.querySelectorAll('.btn-filter');
    const episodeItems = document.querySelectorAll('.episode-item');
    const seasonInfoDisplay = document.getElementById('seasonInfo');
    const seasonTitleEn = document.getElementById('seasonTitleEn');
    const seasonTitleFa = document.getElementById('seasonTitleFa');
    const seasonDateEn = document.getElementById('seasonDateEn');
    const seasonDateFa = document.getElementById('seasonDateFa');
    
    // Add click event for filtering to each button
    filterButtons.forEach(function(button) {
        button.addEventListener('click', function() {
            // Remove active class from all buttons
            filterButtons.forEach(function(btn) {
                btn.classList.remove('active');
            });
            
            // Add active class to clicked button
            this.classList.add('active');
            
            const filter = this.getAttribute('data-filter');
            
            // Update season info display
            updateSeasonInfo(this);
            
            // Show/hide episodes based on filter
            episodeItems.forEach(function(item) {
                if (filter === 'all') {
                    item.style.display = 'block';
                } else {
                    const season = item.getAttribute('data-season');
                    if (season === filter) {
                        item.style.display = 'block';
                    } else {
                        item.style.display = 'none';
                    }
                }
            });
        });
    });
    
    function updateSeasonInfo(button) {
        const filter = button.getAttribute('data-filter');
        const titleEn = button.getAttribute('data-title-en');
        const titleFa = button.getAttribute('data-title-fa');
        const dateEn = button.getAttribute('data-date-en');
        const dateFa = button.getAttribute('data-date-fa');
        
        if (filter === 'all') {
            // Hide season info for "All Seasons"
            if (seasonInfoDisplay) {
                seasonInfoDisplay.style.display = 'none';
                seasonInfoDisplay.classList.remove('active');
            }
        } else {
            // Show and populate season info
            if (seasonInfoDisplay && seasonTitleEn && seasonTitleFa && seasonDateEn && seasonDateFa) {
                seasonTitleEn.textContent = titleEn;
                seasonTitleFa.textContent = titleFa;
                seasonDateEn.textContent = dateEn;
                seasonDateFa.textContent = dateFa;
                
                seasonInfoDisplay.style.display = 'block';
                setTimeout(() => {
                    seasonInfoDisplay.classList.add('active');
                }, 50);
            }
        }
    }
    
    // Initialize with "All Seasons" (hide season info on load)
    if (seasonInfoDisplay) {
        seasonInfoDisplay.style.display = 'none';
    }
    
    // Handle season navigation from navbar
    document.querySelectorAll('.season-nav-link').forEach(function(link) {
        link.addEventListener('click', function(e) {
            const season = this.getAttribute('data-season');
            
            // Check if we're already on the archive page
            if (window.location.pathname.includes('/archive')) {
                e.preventDefault();
                
                // Find and click the corresponding filter button
                const targetButton = document.querySelector(`[data-filter="${season}"]`);
                if (targetButton) {
                    targetButton.click();
                }
                
                // Scroll to the episodes section
                const portfolioSection = document.getElementById('portfolio');
                if (portfolioSection) {
                    setTimeout(() => {
                        portfolioSection.scrollIntoView({ behavior: 'smooth' });
                    }, 300);
                }
            } else {
                // Store the season selection for when the archive page loads
                sessionStorage.setItem('selectedSeason', season);
            }
        });
    });
    
    // Check for stored season selection on page load (for archive page)
    if (window.location.pathname.includes('/archive')) {
        const storedSeason = sessionStorage.getItem('selectedSeason');
        if (storedSeason) {
            setTimeout(() => {
                const targetButton = document.querySelector(`[data-filter="${storedSeason}"]`);
                if (targetButton) {
                    targetButton.click();
                }
                sessionStorage.removeItem('selectedSeason');
            }, 500);
        }
    }
    
    // Navbar animation
    const navbar = document.querySelector('.navbar-fixed-top');
    const navLogo = document.querySelector('.navbar-logo');
    const brandText = document.querySelector('.brand-text');
    
    function animateNavbar() {
        if (window.scrollY > 100) {
            navbar.classList.add('navbar-shrink');
            if (navLogo) navLogo.classList.add('shrink');
            if (brandText) brandText.classList.add('shrink');
        } else {
            navbar.classList.remove('navbar-shrink');
            if (navLogo) navLogo.classList.remove('shrink');
            if (brandText) brandText.classList.remove('shrink');
        }
    }
    
    window.addEventListener('scroll', animateNavbar);
    animateNavbar(); // Call on load
    
    // Mobile menu toggle improvement
    const navToggle = document.querySelector('.navbar-toggle');
    const navCollapse = document.querySelector('.navbar-collapse');
    
    if (navToggle) {
        navToggle.addEventListener('click', function() {
            navToggle.classList.toggle('active');
        });
    }
    
    // Close mobile menu when clicking outside
    document.addEventListener('click', function(event) {
        if (navCollapse && navCollapse.classList.contains('in') && !event.target.closest('.navbar')) {
            navToggle.click();
        }
    });
    
    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(function(anchor) {
        anchor.addEventListener('click', function(e) {
            if (this.getAttribute('href') !== '#') {
                e.preventDefault();
                const target = document.querySelector(this.getAttribute('href'));
                if (target) {
                    window.scrollTo({
                        top: target.offsetTop - 70,
                        behavior: 'smooth'
                    });
                    
                    // Close mobile menu if open
                    if (navCollapse && navCollapse.classList.contains('in')) {
                        navToggle.click();
                    }
                }
            }
        });
    });
});

// Image Modal functionality
function openImageModal(imageSrc, caption) {
    const modal = document.getElementById('imageModal');
    const modalImg = document.getElementById('modalImage');
    const modalCaption = document.getElementById('modalCaption');
    
    if (modal && modalImg && modalCaption) {
        modal.classList.add('show');
        modal.style.display = 'block';
        modalImg.src = imageSrc;
        modalCaption.textContent = caption;
        
        // Prevent body scroll when modal is open
        document.body.style.overflow = 'hidden';
    }
}

function closeImageModal() {
    const modal = document.getElementById('imageModal');
    
    if (modal) {
        modal.classList.add('hide');
        modal.classList.remove('show');
        
        // Restore body scroll
        document.body.style.overflow = 'auto';
        
        setTimeout(() => {
            modal.style.display = 'none';
            modal.classList.remove('hide');
        }, 300);
    }
}

// Close modal when pressing Escape key
document.addEventListener('keydown', function(event) {
    if (event.key === 'Escape') {
        closeImageModal();
    }
});

// Prevent modal from closing when clicking on the image itself
document.addEventListener('DOMContentLoaded', function() {
    const modalContent = document.getElementById('modalImage');
    if (modalContent) {
        modalContent.addEventListener('click', function(event) {
            event.stopPropagation();
        });
    }
});