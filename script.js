// ===== AI Hub - Main JavaScript =====

document.addEventListener('DOMContentLoaded', function() {
    
    // Smooth scroll for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
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

    // Navbar scroll effect
    const navbar = document.querySelector('.navbar');
    let lastScroll = 0;

    window.addEventListener('scroll', () => {
        const currentScroll = window.pageYOffset;
        
        if (currentScroll > 100) {
            navbar.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.1)';
        } else {
            navbar.style.boxShadow = 'none';
        }
        
        lastScroll = currentScroll;
    });

    // Newsletter form handling
    const newsletterForm = document.getElementById('newsletter-form');
    
    if (newsletterForm) {
        newsletterForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const emailInput = this.querySelector('.newsletter-input');
            const email = emailInput.value;
            
            // Show success message
            const successMessage = document.createElement('div');
            successMessage.style.cssText = `
                background: linear-gradient(135deg, #0066FF 0%, #00D4AA 100%);
                color: white;
                padding: 16px 24px;
                border-radius: 12px;
                margin-top: 16px;
                font-weight: 500;
                text-align: center;
                animation: fadeInUp 0.3s ease;
            `;
            successMessage.textContent = '✓ 订阅成功！周报将发送至 ' + email;
            
            this.appendChild(successMessage);
            emailInput.value = '';
            
            // Remove success message after 5 seconds
            setTimeout(() => {
                successMessage.remove();
            }, 5000);
            
            // Log subscription (for demo purposes)
            console.log('Newsletter subscription:', email);
        });
    }

    // Tool card hover effect enhancement
    document.querySelectorAll('.tool-card').forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-4px)';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0)';
        });
    });

    // Intersection Observer for fade-in animations
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);

    // Observe sections for animation
    document.querySelectorAll('.tool-card, .news-card, .stat-item').forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(el);
    });

    // Dynamic year in footer
    const footerYear = document.querySelector('.footer-text');
    if (footerYear) {
        const currentYear = new Date().getFullYear();
        footerYear.textContent = footerYear.textContent.replace('2026', currentYear);
    }

    // Add "back to top" button functionality
    createBackToTopButton();

    // Tool filter functionality (future enhancement)
    initToolFilter();
});

// ===== Back to Top Button =====
function createBackToTopButton() {
    const button = document.createElement('button');
    button.innerHTML = '↑';
    button.style.cssText = `
        position: fixed;
        bottom: 30px;
        right: 30px;
        width: 50px;
        height: 50px;
        border-radius: 50%;
        background: linear-gradient(135deg, #0066FF 0%, #00D4AA 100%);
        color: white;
        border: none;
        font-size: 1.5rem;
        cursor: pointer;
        opacity: 0;
        visibility: hidden;
        transition: all 0.3s ease;
        z-index: 999;
        box-shadow: 0 4px 15px rgba(0, 102, 255, 0.3);
    `;
    
    document.body.appendChild(button);

    window.addEventListener('scroll', () => {
        if (window.pageYOffset > 500) {
            button.style.opacity = '1';
            button.style.visibility = 'visible';
        } else {
            button.style.opacity = '0';
            button.style.visibility = 'hidden';
        }
    });

    button.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });

    button.addEventListener('mouseenter', () => {
        button.style.transform = 'scale(1.1)';
    });

    button.addEventListener('mouseleave', () => {
        button.style.transform = 'scale(1)';
    });
}

// ===== Tool Filter (Future Enhancement) =====
function initToolFilter() {
    // This can be expanded to add filtering functionality
    const filterTags = ['文本处理', '多模态', '编程', '工具库', '教程', '国产'];
    
    console.log('Available filter tags:', filterTags);
    
    // Future: Add filter UI and functionality
}

// ===== Analytics Tracking (Optional) =====
function trackPageView() {
    // Add your analytics code here
    // Google Analytics, Plausible, etc.
    console.log('Page view tracked');
}

// ===== Share Functionality (Future) =====
function shareToSocial(platform, url, title) {
    const shareUrls = {
        twitter: `https://twitter.com/intent/tweet?url=${encodeURIComponent(url)}&text=${encodeURIComponent(title)}`,
        weibo: `https://service.weibo.com/share/share.php?url=${encodeURIComponent(url)}&title=${encodeURIComponent(title)}`,
        wechat: 'wechat-share' // Requires WeChat JS SDK
    };
    
    if (shareUrls[platform]) {
        window.open(shareUrls[platform], '_blank', 'width=600,height=400');
    }
}

// ===== Loading State Management =====
function showLoading(element) {
    element.style.opacity = '0.5';
    element.style.pointerEvents = 'none';
}

function hideLoading(element) {
    element.style.opacity = '1';
    element.style.pointerEvents = 'auto';
}

// ===== Error Handling =====
window.addEventListener('error', function(e) {
    console.error('Error occurred:', e.error);
    // Send to error tracking service if configured
});

console.log('🚀 AI Hub loaded successfully');
