// Dark mode setup
if (
    localStorage.theme === "dark" ||
    (!("theme" in localStorage) &&
      window.matchMedia("(prefers-color-scheme: dark)").matches)
  ) {
    document.documentElement.classList.add("dark");
  } else {
    document.documentElement.classList.remove("dark");
  }
  const data=require("./chart-init");
  res.render('content', {
    pictureUsers: data.pictureUsers,
    transactions: data.transactions
  });
  // Toggle dark mode
  function toggleDarkMode() {
    const html = document.documentElement;
    if (html.classList.contains("dark")) {
      html.classList.remove("dark");
      localStorage.theme = "light";
    } else {
      html.classList.add("dark");
      localStorage.theme = "dark";
    }
  }
  
  // Close dropdowns when clicking outside
  window.addEventListener("click", function (e) {
    const userMenu = document.getElementById("user-menu");
    const notificationsMenu = document.getElementById("notifications-menu");
  
    if (!e.target.closest(".relative")) {
      if (userMenu) userMenu.classList.add("hidden");
      if (notificationsMenu) notificationsMenu.classList.add("hidden");
    }
  });
  