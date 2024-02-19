
document.addEventListener("DOMContentLoaded", function() {
    var homeContent = document.getElementById("home-content");
    var aboutContent = document.getElementById("about-content");
    var serviceContent = document.getElementById("service-content");
    var contactContent = document.getElementById("contact-content");
    var cartContent = document.getElementById("new-page-content");

    function showHomeContent() {
        homeContent.style.display = "block";
        aboutContent.style.display = "none";
        serviceContent.style.display = "none";
        contactContent.style.display = "none";
        cartContent.style.display = "none";
    }

    function showAboutContent() {
        homeContent.style.display = "none";
        aboutContent.style.display = "block";
        serviceContent.style.display = "none";
        contactContent.style.display = "none";
        cartContent.style.display = "none";
    }

    function showServiceContent() {
        homeContent.style.display = "none";
        aboutContent.style.display = "none";
        serviceContent.style.display = "block";
        contactContent.style.display = "none";
        cartContent.style.display = "none";
    }

    function showContactContent() {
        homeContent.style.display = "none";
        aboutContent.style.display = "none";
        serviceContent.style.display = "none";
        contactContent.style.display = "block";
        cartContent.style.display = "none";
    }
    function showCartContent() {
        homeContent.style.display = "none";
        aboutContent.style.display = "none";
        serviceContent.style.display = "none";
        contactContent.style.display = "none";
        cartContent.style.display = "block";
    }

    document.getElementById("home-link").addEventListener("click", showHomeContent);
    document.getElementById("about-link").addEventListener("click", showAboutContent);
    document.getElementById("service-link").addEventListener("click", showServiceContent);
    document.getElementById("contact-link").addEventListener("click", showContactContent);
    document.getElementById("cart-link").addEventListener("click", showCartContent);
});


document.addEventListener("DOMContentLoaded", function() {
    var menuLinks = document.querySelectorAll('.menu-link');
    var contents = document.querySelectorAll('.content');

    function showContent(targetId, clickedLink) {
        contents.forEach(function(content) {
            content.classList.remove('active');
        });

        menuLinks.forEach(function(link) {
            link.classList.remove('active');
        });

        var targetContent = document.getElementById(targetId);
        var activeLink = clickedLink || document.querySelector('[data-target="' + targetId + '"]');
        
        targetContent.classList.add('active');
        activeLink.classList.add('active');
    }

    menuLinks.forEach(function(link) {
        link.addEventListener('click', function(event) {
            event.preventDefault();
            var targetId = link.getAttribute('data-target');
            showContent(targetId, link);
        });
    });
});

function showTerms() {
    var termsContent = document.getElementById('terms-content');
    var contents = document.querySelectorAll('.content');

    contents.forEach(function(content) {
        content.classList.remove('active');
    });

    var menuLinks = document.querySelectorAll('.menu-link');
    menuLinks.forEach(function(link) {
        link.classList.remove('active');
    });

    termsContent.classList.add('active');
}

function showRefundPolicies() {
    var refundContent = document.getElementById('refund-content');
    var contents = document.querySelectorAll('.content');

    contents.forEach(function(content) {
        content.classList.remove('active');
    });

    var menuLinks = document.querySelectorAll('.menu-link');
    menuLinks.forEach(function(link) {
        link.classList.remove('active');
    });

    refundContent.classList.add('active');
}
function showPrivacy() {
    var privacyContent = document.getElementById('privacy-content');
    var contents = document.querySelectorAll('.content');

    contents.forEach(function(content) {
        content.classList.remove('active');
    });

    var menuLinks = document.querySelectorAll('.menu-link');
    menuLinks.forEach(function(link) {
        link.classList.remove('active');
    });

    privacyContent.classList.add('active');
}
