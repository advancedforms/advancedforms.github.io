(() => {
  // js/script.js
  var sidebar = document.querySelector("aside .menu");
  var mobileMenu = document.querySelector(".mobile-menu .menu");
  configureMenuNavigation(sidebar);
  configureMenuNavigation(mobileMenu);
  function configureMenuNavigation(parent) {
    var mainMenu = parent.querySelector(":scope .main-menu");
    var mainMenuItems = mainMenu.querySelectorAll(":scope .item");
    var subMenus = parent.querySelectorAll(":scope .sub-menu");
    subMenus.forEach((subMenu) => {
      var backLink = subMenu.querySelector(":scope .back");
      backLink.addEventListener("click", function(e) {
        e.preventDefault();
        freezeMenuHeight(mainMenu, subMenu);
        subMenu.classList.remove("active");
        mainMenu.classList.add("active");
      });
    });
    mainMenuItems.forEach((item) => {
      if (item.classList.contains("has-sub-pages")) {
        item.addEventListener("click", function(e) {
          e.preventDefault();
          var id = item.dataset.id;
          var subMenu = parent.querySelector(":scope .sub-menu[data-parent='" + id + "']");
          freezeMenuHeight(mainMenu, subMenus);
          subMenu.classList.add("active");
          mainMenu.classList.remove("active");
        });
      }
    });
    function freezeMenuHeight(mainMenu2, subMenu) {
      var mainMenuHeight = mainMenu2.offsetHeight;
      var subMenuHeight = subMenu.offsetHeight;
      var maxHeight = Math.max(mainMenuHeight, subMenuHeight);
      parent.style.height = maxHeight + "px";
      setTimeout(() => {
        parent.style.height = "";
      }, 300);
    }
  }
  var menuToggle = document.getElementsByClassName("menu-toggle")[0];
  var menuCloseBtn = document.getElementsByClassName("menu-close")[0];
  var menu = document.getElementsByClassName("mobile-menu")[0];
  menuToggle.addEventListener("click", function() {
    menu.classList.toggle("open");
  });
  menuCloseBtn.addEventListener("click", function() {
    menu.classList.remove("open");
  });
})();
