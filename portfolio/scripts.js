window.onload = function() {
    // Remove the preloader after 2.20 seconds
    setTimeout(function() {
        const preloader = document.getElementById('preloader');
        const content = document.getElementById('content');
        preloader.style.display = 'none';  // Hide preloader
        content.style.display = 'block';   // Show the main content
    }, 2300);  // 2200 milliseconds = 2.20 seconds
};
