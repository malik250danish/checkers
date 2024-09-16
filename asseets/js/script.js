// for activating the current page link
document.addEventListener("DOMContentLoaded", function () {
  // Get the current URL path (without query strings or hashes)
  const currentPath = window.location.pathname.split("/").pop();
  console.log("current page", currentPath);
  // Select all the <a> tags inside the menu
  const menuLinks = document.querySelectorAll(".menu li a");

  // Loop through each link and check if its href matches the current path
  menuLinks.forEach((link) => {
    // Get the href attribute from the <a> tag
    const linkPath = link.getAttribute("href").split("/").pop();

    // If the current path matches the link's href, add the 'activeLink' class
    if (currentPath.includes(linkPath)) {
      link.classList.add("activeLink");
    }
  });
});

// for active and inactive side bar

const sidebar = document.getElementById("sidebar");
const btnSideBar = document.getElementById("btnSideBar");
const mainContainer = document.getElementById("mainContainer");
const btnSideMobile = document.getElementById("btnSideMobile");

// Function to toggle sidebar
function toggleSidebar() {
  sidebar.classList.toggle("inactive");
  sidebar.classList.toggle("layout-mobile-active");
  mainContainer.classList.toggle("m-0");
}

// Function to close the sidebar if it's active
function closeSidebar() {
  if (sidebar.classList.contains("layout-mobile-active")) {
    sidebar.classList.remove("layout-mobile-active");
    sidebar.classList.add("inactive");
    mainContainer.classList.remove("m-0");
  }
}

// On click of the sidebar toggle button
btnSideBar.onclick = toggleSidebar;
btnSideMobile.onclick = toggleSidebar;

// Close the sidebar if clicking outside of it
document.addEventListener("click", function (event) {
  // Check if the click is outside the sidebar and not on the toggle button
  if (
    !sidebar.contains(event.target) && // Clicked outside the sidebar
    !btnSideBar.contains(event.target) && // Not clicking the sidebar button
    !btnSideMobile.contains(event.target) // Not clicking the mobile button
  ) {
    closeSidebar();
  }
});

// for selecting board

document.querySelectorAll('input[name="board"]').forEach((radio) => {
  radio.addEventListener("change", function () {
    console.log(`Selected board: ${this.value}`);
  });
});
