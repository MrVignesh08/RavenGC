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

  function sendMessage() {
    const inputField = document.getElementById("input");
    let input = inputField.value.trim();
    input != "" && output(input);
    inputField.value = "";
  }
  document.addEventListener("DOMContentLoaded", () => {
    const inputField = document.getElementById("input");
    inputField.addEventListener("keydown", function (e) {
      if (e.code === "Enter") {
        let input = inputField.value.trim();
        input != "" && output(input);
        inputField.value = "";
      }
    });
  });
  
  function output(input) {
    let product;
  
    let text = input.toLowerCase().replace(/[^\w\s\d]/gi, "");
  
    text = text
      .replace(/[\W_]/g, " ")
      .replace(/ a /g, " ")
      .replace(/i feel /g, "")
      .replace(/whats/g, "what is")
      .replace(/please /g, "")
      .replace(/ please/g, "")
      .trim();
  
    let comparedText = compare(userMessage, botReply, text);
  
    product = comparedText
      ? comparedText
      : alternative[Math.floor(Math.random() * alternative.length)];
    addChat(input, product);
  }
  
  function compare(triggerArray, replyArray, string) {
    let item;
    for (let x = 0; x < triggerArray.length; x++) {
      for (let y = 0; y < replyArray.length; y++) {
        if (triggerArray[x][y] == string) {
          items = replyArray[x];
          item = items[Math.floor(Math.random() * items.length)];
        }
      }
    }
    //containMessageCheck(string);
    if (item) return item;
    else return containMessageCheck(string);
  }
  
    let item;
    for (let x = 0; x < expectedMessage.length; x++) {
      if (expectedMessage[x].includes(string)) {
        items = expectedReply[x];
        item = items[Math.floor(Math.random() * items.length)];
      }
    }
    return item;
  function addChat(input, product) {
    const mainDiv = document.getElementById("message-section");
    let userDiv = document.createElement("div");
    userDiv.id = "user";
    userDiv.classList.add("message");
    userDiv.innerHTML = `<span id="user-response">${input}</span>`;
    mainDiv.appendChild(userDiv);
  
    let botDiv = document.createElement("div");
    botDiv.id = "bot";
    botDiv.classList.add("message");
    botDiv.innerHTML = `<span id="bot-response">${product}</span>`;
    mainDiv.appendChild(botDiv);
    var scroll = document.getElementById("message-section");
    scroll.scrollTop = scroll.scrollHeight;
    voiceControl(product);
  }
