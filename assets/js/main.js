// Main JavaScript for La Svolta Website

// Initialize when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    initializeComponents();
});

// Initialize all components
function initializeComponents() {
    initAOS();
    initMobileMenu();
    initGDPRNotice();
    initSmoothScrolling();
    initFormValidation();
    initProgressBars();
    initRevealOnScroll();
    initAccessibilityFeatures();
    initVoiceWidget();
}

// Initialize AOS (Animate On Scroll)
function initAOS() {
    if (typeof AOS !== 'undefined') {
        AOS.init({
            duration: 800,
            offset: 50,
            once: true,
            easing: 'ease-out-cubic'
        });
    }
}

// Mobile menu functionality
function initMobileMenu() {
    const mobileMenuBtn = document.getElementById('mobile-menu-btn');
    const mobileMenu = document.getElementById('mobile-menu');
    
    if (mobileMenuBtn && mobileMenu) {
        mobileMenuBtn.addEventListener('click', function() {
            mobileMenu.classList.toggle('hidden');
            
            // Update aria-expanded
            const isExpanded = !mobileMenu.classList.contains('hidden');
            mobileMenuBtn.setAttribute('aria-expanded', isExpanded);
            
            // Update icon
            const icon = mobileMenuBtn.querySelector('svg');
            if (isExpanded) {
                icon.innerHTML = '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>';
            } else {
                icon.innerHTML = '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path>';
            }
        });
        
        // Close mobile menu when clicking outside
        document.addEventListener('click', function(e) {
            if (!mobileMenuBtn.contains(e.target) && !mobileMenu.contains(e.target)) {
                mobileMenu.classList.add('hidden');
                mobileMenuBtn.setAttribute('aria-expanded', 'false');
            }
        });
    }
}

// GDPR Notice functionality
function initGDPRNotice() {
    const gdprNotice = document.getElementById('gdpr-notice');
    
    // Check if user has already accepted
    if (!localStorage.getItem('gdpr-accepted') && gdprNotice) {
        // Show notice after a short delay
        setTimeout(() => {
            gdprNotice.classList.add('show');
            gdprNotice.style.transform = 'translateY(0)';
        }, 1000);
    }
}

function acceptGDPR() {
    localStorage.setItem('gdpr-accepted', 'true');
    const gdprNotice = document.getElementById('gdpr-notice');
    if (gdprNotice) {
        gdprNotice.style.transform = 'translateY(-100%)';
        setTimeout(() => {
            gdprNotice.style.display = 'none';
        }, 300);
    }
}

function showPrivacyInfo() {
    alert('Per maggiori informazioni sulla privacy, visita la nostra Privacy Policy. Utilizziamo solo cookie tecnici necessari per il funzionamento del sito.');
}

// Smooth scrolling for anchor links
function initSmoothScrolling() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
}

// Form validation
function initFormValidation() {
    const forms = document.querySelectorAll('form[data-validate]');
    
    forms.forEach(form => {
        form.addEventListener('submit', function(e) {
            if (!validateForm(this)) {
                e.preventDefault();
            }
        });
        
        // Real-time validation
        const inputs = form.querySelectorAll('input, textarea, select');
        inputs.forEach(input => {
            input.addEventListener('blur', function() {
                validateField(this);
            });
            
            input.addEventListener('input', function() {
                clearFieldError(this);
            });
        });
    });
}

function validateForm(form) {
    let isValid = true;
    const inputs = form.querySelectorAll('input[required], textarea[required], select[required]');
    
    inputs.forEach(input => {
        if (!validateField(input)) {
            isValid = false;
        }
    });
    
    return isValid;
}

function validateField(field) {
    const value = field.value.trim();
    let isValid = true;
    let errorMessage = '';
    
    // Required field validation
    if (field.hasAttribute('required') && !value) {
        isValid = false;
        errorMessage = 'Questo campo è obbligatorio';
    }
    
    // Email validation
    if (field.type === 'email' && value) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(value)) {
            isValid = false;
            errorMessage = 'Inserisci un indirizzo email valido';
        }
    }
    
    // Phone validation
    if (field.type === 'tel' && value) {
        const phoneRegex = /^[\+]?[0-9\s\-\(\)]{8,}$/;
        if (!phoneRegex.test(value)) {
            isValid = false;
            errorMessage = 'Inserisci un numero di telefono valido';
        }
    }
    
    // Show/hide error
    if (isValid) {
        clearFieldError(field);
    } else {
        showFieldError(field, errorMessage);
    }
    
    return isValid;
}

function showFieldError(field, message) {
    clearFieldError(field);
    
    field.classList.add('border-red-500');
    
    const errorDiv = document.createElement('div');
    errorDiv.className = 'text-red-500 text-sm mt-1';
    errorDiv.textContent = message;
    errorDiv.setAttribute('role', 'alert');
    
    field.parentNode.appendChild(errorDiv);
    field.setAttribute('aria-describedby', 'error-' + field.name);
    errorDiv.id = 'error-' + field.name;
}

function clearFieldError(field) {
    field.classList.remove('border-red-500');
    
    const errorDiv = field.parentNode.querySelector('.text-red-500');
    if (errorDiv) {
        errorDiv.remove();
    }
    
    field.removeAttribute('aria-describedby');
}

// Progress bars animation
function initProgressBars() {
    const progressBars = document.querySelectorAll('.progress-bar');
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const progressFill = entry.target.querySelector('.progress-fill');
                const percentage = progressFill.getAttribute('data-percentage') || '0';
                
                setTimeout(() => {
                    progressFill.style.width = percentage + '%';
                }, 200);
            }
        });
    });
    
    progressBars.forEach(bar => observer.observe(bar));
}

// Reveal elements on scroll
function initRevealOnScroll() {
    const revealElements = document.querySelectorAll('.reveal');
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, {
        threshold: 0.1
    });
    
    revealElements.forEach(el => observer.observe(el));
}

// Accessibility features
function initAccessibilityFeatures() {
    // Skip link functionality
    const skipLink = document.querySelector('a[href="#main-content"]');
    if (skipLink) {
        skipLink.addEventListener('click', function(e) {
            e.preventDefault();
            const mainContent = document.getElementById('main-content');
            if (mainContent) {
                mainContent.focus();
                mainContent.scrollIntoView();
            }
        });
    }
    
    // Enhanced focus management
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Tab') {
            document.body.classList.add('using-keyboard');
        }
    });
    
    document.addEventListener('mousedown', function() {
        document.body.classList.remove('using-keyboard');
    });
    
    // ARIA live regions for dynamic content
    createLiveRegion();
}

function createLiveRegion() {
    const liveRegion = document.createElement('div');
    liveRegion.setAttribute('aria-live', 'polite');
    liveRegion.setAttribute('aria-atomic', 'true');
    liveRegion.className = 'sr-only';
    liveRegion.id = 'live-region';
    document.body.appendChild(liveRegion);
}

function announceToScreenReader(message) {
    const liveRegion = document.getElementById('live-region');
    if (liveRegion) {
        liveRegion.textContent = message;
        setTimeout(() => {
            liveRegion.textContent = '';
        }, 1000);
    }
}

// Voice widget functionality
function initVoiceWidget() {
    // ElevenLabs widget is now loaded via HTML, no need to create manually
    // Just ensure it's properly styled and accessible
    const widgetContainer = document.getElementById('voice-widget-container');
    if (widgetContainer) {
        // Add custom styling to the ElevenLabs widget container
        widgetContainer.setAttribute('aria-label', 'Chat vocale con assistente AI');
        
        // Wait for the widget to load and then apply custom styles
        setTimeout(() => {
            const elevenlabsWidget = widgetContainer.querySelector('elevenlabs-convai');
            if (elevenlabsWidget) {
                elevenlabsWidget.style.cssText = `
                    position: fixed !important;
                    bottom: 24px !important;
                    right: 24px !important;
                    z-index: 1000 !important;
                `;
                
                // Hide the branding elements
                hideElevenLabsBranding(elevenlabsWidget);
            }
        }, 1000);
        
        // Also check periodically in case the branding loads later
        const brandingHider = setInterval(() => {
            const elevenlabsWidget = widgetContainer.querySelector('elevenlabs-convai');
            if (elevenlabsWidget) {
                hideElevenLabsBranding(elevenlabsWidget);
            }
        }, 2000);
        
        // Stop checking after 30 seconds
        setTimeout(() => clearInterval(brandingHider), 30000);
    }
}

function hideElevenLabsBranding(widget) {
    // Try multiple selectors to find and hide the branding
    const selectors = [
        'p[class*="whitespace-nowrap"]',
        '[class*="text-[10px]"]',
        'p span[class*="opacity-30"]',
        'p a[class*="opacity-30"]',
        'p:has(span:contains("Powered by ElevenLabs"))',
        'p:has(a[href*="elevenlabs.io"])'
    ];
    
    selectors.forEach(selector => {
        try {
            const elements = widget.querySelectorAll(selector);
            elements.forEach(element => {
                if (element && (
                    element.textContent.includes('Powered by ElevenLabs') ||
                    element.textContent.includes('Conversational AI') ||
                    element.querySelector('a[href*="elevenlabs.io"]')
                )) {
                    element.style.cssText = 'opacity: 0.01 !important; pointer-events: none !important; display: none !important;';
                }
            });
        } catch (e) {
            // Ignore selector errors for unsupported pseudo-selectors
        }
    });
    
    // Also try to find and hide parent elements that might contain the branding
    const brandingTexts = ['Powered by ElevenLabs', 'Conversational AI'];
    const allElements = widget.querySelectorAll('*');
    
    allElements.forEach(element => {
        const textContent = element.textContent;
        if (brandingTexts.some(text => textContent.includes(text))) {
            // Check if this element only contains branding text (not other content)
            if (textContent.trim().length < 50) { // Branding text is usually short
                element.style.cssText = 'opacity: 0.01 !important; pointer-events: none !important; display: none !important;';
            }
        }
    });
}

function openVoiceWidget() {
    // Try to programmatically open the ElevenLabs widget if possible
    const elevenlabsWidget = document.querySelector('elevenlabs-convai');
    if (elevenlabsWidget && typeof elevenlabsWidget.open === 'function') {
        elevenlabsWidget.open();
        announceToScreenReader('Widget vocale aperto.');
    } else {
        // Fallback: show contact modal if widget isn't available
        const modal = createVoiceModal();
        document.body.appendChild(modal);
        
        // Animate modal in
        setTimeout(() => {
            modal.classList.add('opacity-100');
            modal.classList.remove('opacity-0');
        }, 10);
        
        // Focus management
        const firstButton = modal.querySelector('button');
        if (firstButton) {
            firstButton.focus();
        }
        
        announceToScreenReader('Widget vocale aperto. Puoi chiamarci direttamente o scriverci.');
    }
}

function createVoiceModal() {
    const modal = document.createElement('div');
    modal.className = 'fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 opacity-0 transition-opacity duration-300';
    
    modal.innerHTML = `
        <div class="bg-white rounded-lg p-8 max-w-md mx-4 transform scale-95 transition-transform duration-300">
            <div class="text-center mb-6">
                <div class="w-16 h-16 bg-secondary rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg class="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z"></path>
                    </svg>
                </div>
                <h3 class="text-xl font-bold text-neutral-900 mb-2">Parla con La Svolta</h3>
                <p class="text-neutral-600">Scegli come vuoi contattarci per iniziare il tuo percorso</p>
            </div>
            
            <div class="space-y-4">
                <a href="tel:+393401234567" class="w-full bg-primary text-white px-6 py-3 rounded-lg font-semibold hover:bg-opacity-90 transition-colors flex items-center justify-center">
                    <svg class="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path>
                    </svg>
                    Chiamaci Ora
                </a>
                
                <a href="pages/contatti.html" class="w-full border border-primary text-primary px-6 py-3 rounded-lg font-semibold hover:bg-primary/5 transition-colors flex items-center justify-center">
                    <svg class="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
                    </svg>
                    Scrivici
                </a>
                
                <button onclick="closeVoiceModal()" class="w-full text-neutral-500 px-6 py-2 rounded-lg hover:bg-neutral-50 transition-colors">
                    Chiudi
                </button>
            </div>
            
            <div class="mt-6 text-center text-sm text-neutral-500">
                <p>🔒 Chiamata riservata • ✅ Primo consulto gratuito</p>
            </div>
        </div>
    `;
    
    // Close on background click
    modal.addEventListener('click', function(e) {
        if (e.target === modal) {
            closeVoiceModal();
        }
    });
    
    // Close on escape key
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape') {
            closeVoiceModal();
        }
    });
    
    return modal;
}

function closeVoiceModal() {
    const modal = document.querySelector('.fixed.inset-0.bg-black.bg-opacity-50');
    if (modal) {
        modal.classList.add('opacity-0');
        modal.classList.remove('opacity-100');
        
        setTimeout(() => {
            modal.remove();
        }, 300);
    }
}

// Contact form handling
function handleContactForm(form) {
    const formData = new FormData(form);
    const button = form.querySelector('button[type="submit"]');
    const originalText = button.textContent;
    
    // Show loading state
    button.textContent = 'Invio in corso...';
    button.disabled = true;
    button.classList.add('loading');
    
    // Simulate form submission (replace with actual endpoint)
    setTimeout(() => {
        // Success state
        button.textContent = 'Messaggio Inviato!';
        button.classList.remove('loading');
        button.classList.add('bg-green-500');
        
        // Show success message
        showFormMessage('Grazie per averci contattato. Ti risponderemo entro 24 ore.', 'success');
        
        // Reset form
        form.reset();
        
        // Reset button after delay
        setTimeout(() => {
            button.textContent = originalText;
            button.disabled = false;
            button.classList.remove('bg-green-500');
        }, 3000);
    }, 2000);
    
    return false; // Prevent actual form submission
}

function showFormMessage(message, type) {
    const messageDiv = document.getElementById('form-message') || createMessageDiv();
    
    messageDiv.textContent = message;
    messageDiv.className = `mt-4 p-4 rounded-lg ${
        type === 'success' ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'
    }`;
    
    // Announce to screen readers
    announceToScreenReader(message);
    
    // Auto hide after 5 seconds
    setTimeout(() => {
        messageDiv.style.opacity = '0';
        setTimeout(() => {
            messageDiv.remove();
        }, 300);
    }, 5000);
}

function createMessageDiv() {
    const messageDiv = document.createElement('div');
    messageDiv.id = 'form-message';
    messageDiv.style.transition = 'opacity 0.3s ease';
    
    const form = document.querySelector('form');
    if (form) {
        form.parentNode.insertBefore(messageDiv, form.nextSibling);
    }
    
    return messageDiv;
}

// Newsletter subscription
function subscribeNewsletter(email) {
    if (!email || !email.includes('@')) {
        showFormMessage('Inserisci un indirizzo email valido', 'error');
        return;
    }
    
    // Simulate subscription
    setTimeout(() => {
        showFormMessage('Iscrizione completata! Riceverai aggiornamenti sulle nostre attività.', 'success');
    }, 1000);
    
    announceToScreenReader('Iscrizione alla newsletter completata');
}

// Utility functions
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

function throttle(func, limit) {
    let inThrottle;
    return function() {
        const args = arguments;
        const context = this;
        if (!inThrottle) {
            func.apply(context, args);
            inThrottle = true;
            setTimeout(() => inThrottle = false, limit);
        }
    }
}

// Performance optimization
function preloadImages() {
    const images = [
        'assets/images/hero-bg.jpg',
        'assets/images/team-1.jpg',
        'assets/images/team-2.jpg',
        'assets/images/success-story.jpg'
    ];
    
    images.forEach(src => {
        const img = new Image();
        img.src = src;
    });
}

// Initialize preloading after page load
window.addEventListener('load', preloadImages);

// Service Worker registration (for PWA capabilities)
if ('serviceWorker' in navigator) {
    window.addEventListener('load', function() {
        navigator.serviceWorker.register('/sw.js')
            .then(function(registration) {
                console.log('ServiceWorker registration successful');
            })
            .catch(function(err) {
                console.log('ServiceWorker registration failed');
            });
    });
}

// Export functions for global use
window.acceptGDPR = acceptGDPR;
window.showPrivacyInfo = showPrivacyInfo;
window.openVoiceWidget = openVoiceWidget;
window.closeVoiceModal = closeVoiceModal;
window.handleContactForm = handleContactForm;
window.subscribeNewsletter = subscribeNewsletter;
window.announceToScreenReader = announceToScreenReader;