const headerDropdown = document.querySelector(".header-link-dropdown");
const headerDropdownLink = document.querySelector("#dropdown-link");

const showDropwdown = () => {
  headerDropdownLink.addEventListener("mouseover", (evt) => {
    evt.preventDefault();
    headerDropdown.classList.add("header-link-dropdown-visible");
  });
  headerDropdownLink.addEventListener("mouseout", (evt) => {
    evt.preventDefault();
    headerDropdown.classList.remove("header-link-dropdown-visible");
  });
};
showDropwdown();
