document.addEventListener('DOMContentLoaded', function() {
    const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
    const navMenu = document.querySelector('.nav-menu');
    
    if (mobileMenuBtn) {
        mobileMenuBtn.addEventListener('click', function() {
            navMenu.classList.toggle('active');
            
            const icon = this.querySelector('i');
            if (navMenu.classList.contains('active')) {
                icon.classList.remove('fa-bars');
                icon.classList.add('fa-times');
            } else {
                icon.classList.remove('fa-times');
                icon.classList.add('fa-bars');
            }
        });
    }
    
    const navLinks = document.querySelectorAll('.nav-links a');
    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            navMenu.classList.remove('active');
            if (mobileMenuBtn) {
                mobileMenuBtn.querySelector('i').classList.remove('fa-times');
                mobileMenuBtn.querySelector('i').classList.add('fa-bars');
            }
        });
    });
    
    const filterToggle = document.querySelector('.filter-btn');
    const shopSidebar = document.querySelector('.shop-sidebar');
    
    if (filterToggle && shopSidebar) {
        filterToggle.addEventListener('click', function() {
            shopSidebar.classList.toggle('active');
            
            let overlay = document.querySelector('.sidebar-overlay');
            if (!overlay) {
                overlay = document.createElement('div');
                overlay.className = 'sidebar-overlay';
                overlay.style.cssText = `
                    position: fixed;
                    top: 0;
                    left: 0;
                    width: 100%;
                    height: 100%;
                    background: rgba(0, 0, 0, 0.5);
                    z-index: 1000;
                    display: none;
                `;
                document.body.appendChild(overlay);
            }
            
            if (shopSidebar.classList.contains('active')) {
                overlay.style.display = 'block';
                overlay.addEventListener('click', function() {
                    shopSidebar.classList.remove('active');
                    overlay.style.display = 'none';
                });
            } else {
                overlay.style.display = 'none';
            }
        });
    }
    
    const addToCartButtons = document.querySelectorAll('.add-to-cart');
    const cartCount = document.querySelector('.cart-count');
    let cartItems = parseInt(cartCount.textContent);
    
    addToCartButtons.forEach(button => {
        button.addEventListener('click', function(e) {
            e.preventDefault();
            
            const originalText = button.innerHTML;
            button.innerHTML = '<i class="fas fa-check"></i> Added';
            button.style.backgroundColor = '#28a745';
            
            cartItems++;
            cartCount.textContent = cartItems;
            
            cartCount.parentElement.style.transform = 'scale(1.3)';
            setTimeout(() => {
                cartCount.parentElement.style.transform = 'scale(1)';
            }, 300);
            
            setTimeout(() => {
                button.innerHTML = originalText;
                button.style.backgroundColor = '';
            }, 1500);
        });
    });
    
    const wishlistButtons = document.querySelectorAll('.add-wishlist');
    const wishlistCount = document.querySelector('.wishlist-count');
    let wishlistItems = parseInt(wishlistCount.textContent);
    
    wishlistButtons.forEach(button => {
        button.addEventListener('click', function(e) {
            e.preventDefault();
            const icon = this.querySelector('i');
            
            if (icon.classList.contains('far')) {
                icon.classList.remove('far');
                icon.classList.add('fas');
                icon.style.color = '#ff4757';
                wishlistItems++;
                wishlistCount.textContent = wishlistItems;
                
                this.style.transform = 'scale(1.3)';
                setTimeout(() => {
                    this.style.transform = 'scale(1)';
                }, 300);
            } else {
                icon.classList.remove('fas');
                icon.classList.add('far');
                icon.style.color = '';
                wishlistItems--;
                wishlistCount.textContent = wishlistItems;
            }
            
            wishlistCount.parentElement.style.transform = 'scale(1.3)';
            setTimeout(() => {
                wishlistCount.parentElement.style.transform = 'scale(1)';
            }, 300);
        });
    });
    
    const quickViewButtons = document.querySelectorAll('.quick-view');
    quickViewButtons.forEach(button => {
        button.addEventListener('click', function(e) {
            e.preventDefault();
            alert('Quick View feature would show product details in a modal.');
        });
    });
    
    
    const viewBtns = document.querySelectorAll('.view-btn');
    viewBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            viewBtns.forEach(b => b.classList.remove('active'));
            this.classList.add('active');
            
        });
    });
    
    const sizeBtns = document.querySelectorAll('.size-btn');
    sizeBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            sizeBtns.forEach(b => b.classList.remove('active'));
            this.classList.add('active');
        });
    });
    
    const colorDots = document.querySelectorAll('.color-dot');
    colorDots.forEach(dot => {
        dot.addEventListener('click', function() {
            colorDots.forEach(d => d.classList.remove('active'));
            this.classList.add('active');
        });
    });
    
   
    const priceSlider = document.querySelector('.price-slider');
    const minPrice = document.querySelector('.min-price');
    const maxPrice = document.querySelector('.max-price');
    
    if (priceSlider && minPrice && maxPrice) {
        priceSlider.addEventListener('input', function() {
            // Update inputs based on slider
        });
        
        minPrice.addEventListener('change', function() {
            // Update slider based on input
        });
        
        maxPrice.addEventListener('change', function() {
            // Update slider based on input
        });
    }
    
    
    const applyFilter = document.querySelector('.apply-filter');
    if (applyFilter) {
        applyFilter.addEventListener('click', function() {
            alert('Filter applied! This would filter the products.');
        });
    }
    
   
    const pageLinks = document.querySelectorAll('.page-link');
    pageLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            if (this.getAttribute('href') === '#') {
                e.preventDefault();
            }
            
            pageLinks.forEach(l => l.classList.remove('active'));
            this.classList.add('active');
            
            
            window.scrollTo({
                top: document.querySelector('.shop-section').offsetTop - 100,
                behavior: 'smooth'
            });
        });
    });
    
    
    const copyrightText = document.querySelector('.copyright p');
    if (copyrightText) {
        const currentYear = new Date().getFullYear();
        copyrightText.innerHTML = copyrightText.innerHTML.replace('2024', currentYear);
    }
    
    
    const helpIcon = document.querySelector('.help-icon');
    if (helpIcon) {
        helpIcon.addEventListener('click', function(e) {
            e.preventDefault();
            alert('Help & Support: Call us at 1-800-BIKESHOP');
        });
    }
});
    
    