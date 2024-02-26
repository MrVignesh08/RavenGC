// Global functions or utility functions
function showAlert(message) {
    alert(message);
}

// Mobile navigation toggle function
document.addEventListener('DOMContentLoaded', function () {
    const showMenu = (toggleId, navId) => {
        const toggle = document.getElementById(toggleId),
            nav = document.getElementById(navId);

        toggle.addEventListener('click', () => {
            // Add show-menu class to nav menu
            nav.classList.toggle('show-menu');

            // Add show-icon to show and hide the menu icon
            toggle.classList.toggle('show-icon');
        });
    };

    showMenu('nav-toggle', 'nav-menu');
});

// Function to toggle submenu visibility
function toggleSubmenu(element) {
    var submenu = element.nextElementSibling;
    submenu.classList.toggle('active');
}

// Event listener for submenu clicks
document.addEventListener('DOMContentLoaded', function () {
    var submenuItems = document.querySelectorAll('.dropdown__subitem');

    submenuItems.forEach(function (submenuItem) {
        var submenuLink = submenuItem.querySelector('.dropdown__link');

        if (submenuLink) {
            submenuLink.addEventListener('click', function (event) {
                event.preventDefault();
                toggleSubmenu(submenuLink);
            });
        }
    });
});

// Additional scripts specific to each page

// Example: blog.html - Show/hide full content on button click
document.addEventListener('DOMContentLoaded', function () {
    var blogPosts = document.querySelectorAll('.blog-post');

    blogPosts.forEach(function (post) {
        var showMoreButton = post.querySelector('.show-more-button');

        if (showMoreButton) {
            showMoreButton.addEventListener('click', function () {
                post.classList.toggle('expanded');
            });
        }
    });
});

// Add more page-specific scripts as needed

function myMenuFunction() {
    var i = document.getElementById("navMenu");
    if(i.className === "nav-menu") {
        i.className += " responsive";
    } else {
        i.className = "nav-menu";
    }
   }

