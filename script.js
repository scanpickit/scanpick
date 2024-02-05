
  document.addEventListener("DOMContentLoaded", function() {
    var homeContent = document.getElementById("home-content");
    var aboutContent = document.getElementById("about-content");
    var serviceContent = document.getElementById("service-content");
    var contactContent = document.getElementById("contact-content");

    function showHomeContent() {
        homeContent.style.display = "block";
        aboutContent.style.display = "none";
        serviceContent.style.display = "none";
        contactContent.style.display = "none";
    }

    function showAboutContent() {
        homeContent.style.display = "none";
        aboutContent.style.display = "block";
        serviceContent.style.display = "none";
        contactContent.style.display = "none";
    }

    function showServiceContent() {
        homeContent.style.display = "none";
        aboutContent.style.display = "none";
        serviceContent.style.display = "block";
        contactContent.style.display = "none";
    }

    function showContactContent() {
        homeContent.style.display = "none";
        aboutContent.style.display = "none";
        serviceContent.style.display = "none";
        contactContent.style.display = "block";
    }

    document.getElementById("home-link").addEventListener("click", showHomeContent);
    document.getElementById("about-link").addEventListener("click", showAboutContent);
    document.getElementById("service-link").addEventListener("click", showServiceContent);
    document.getElementById("contact-link").addEventListener("click", showContactContent);
});
