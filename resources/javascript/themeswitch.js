        // JavaScript to handle theme switch
        const themeSwitch = document.getElementById("theme-switch");
        const themeStylesheet = document.getElementById("theme-stylesheet");
    
        // Function to toggle between themes
        themeSwitch.addEventListener("click", () => {
          if (themeStylesheet.getAttribute("href") === "./resources/css/landingpage.css") {
            // Change to dark theme
            themeStylesheet.setAttribute("href", "./resources/css/landingpage-dark.css");
          } else {
            // Change back to default theme
            themeStylesheet.setAttribute("href", "./resources/css/landingpage.css");
          }
        });