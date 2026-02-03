
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
    

    const addToCartButtons = document.querySelectorAll('.add-to-cart');
    const cartCount = document.querySelector('.cart-count');
    let cartItems = 2;
    
    addToCartButtons.forEach(button => {
        button.addEventListener('click', function(e) {
            e.preventDefault();
            
            const originalText = button.innerHTML;
            button.innerHTML = '<i class="fas fa-check"></i> Added!';
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
    let wishlistItems = 3;
    
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
    
 
    const subscriptionForm = document.querySelector('.subscription-form');
    if (subscriptionForm) {
        subscriptionForm.addEventListener('submit', function(e) {
            e.preventDefault();
            const emailInput = this.querySelector('.email-input');
            const email = emailInput.value.trim();
            
            if (email && email.includes('@')) {
                alert('Thank you for subscribing to our newsletter! You will receive special bike offers soon.');
                emailInput.value = '';
            } else {
                alert('Please enter a valid email address.');
            }
        });
    }
    
    
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                e.preventDefault();
                window.scrollTo({
                    top: targetElement.offsetTop - 100,
                    behavior: 'smooth'
                });
            }
        });
    });
    
  
    window.addEventListener('scroll', function() {
        const navbar = document.querySelector('.navbar');
        if (window.scrollY > 50) {
            navbar.style.boxShadow = '0 5px 20px rgba(0, 0, 0, 0.1)';
            navbar.style.padding = '10px 0';
        } else {
            navbar.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.1)';
            navbar.style.padding = '20px 0';
        }
    });
  

    const productCards = document.querySelectorAll('.product-card, .special-bike-card');
    productCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.zIndex = '10';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.zIndex = '1';
        });
    });
    
    
    const copyrightText = document.querySelector('.copyright p');
    if (copyrightText) {
        const currentYear = new Date().getFullYear();
        copyrightText.innerHTML = copyrightText.innerHTML.replace('2024', currentYear);
    }
    
 
    const scrollingElements = document.querySelectorAll('.scrolling-content');
    scrollingElements.forEach(element => {
        element.innerHTML += element.innerHTML;
    });
    
 
    const helpIcon = document.querySelector('.help-icon');
    if (helpIcon) {
        helpIcon.addEventListener('click', function(e) {
            e.preventDefault();
            alert('Help & Support: Call us at 1-800-BIKESHOP or email support@bikeshop.com');
        });
    }
    

    document.querySelectorAll('.btn-primary, .download-btn').forEach(button => {
        button.addEventListener('mouseenter', function() {
            this.style.backgroundColor = '#e64520';
        });
        
        button.addEventListener('mouseleave', function() {
            this.style.backgroundColor = '';
        });
    });
});