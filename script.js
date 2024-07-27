const headerDropdown = document.querySelector(".header-link-dropdown");
const headerDropdownLink = document.querySelector("#dropdown-link");
const blogContainer = document.querySelector(".blog-feed");
const photoUploader = document.querySelector("#photo-uploader");
const inputPostText = document.querySelector("#blog-search-input");
const postButton = document.querySelector(".blog-search-button");
const postForm = document.querySelector(".blog-search-form");
const burgerMenu = document.querySelector(".header-burger-lines");
const burgerMenuContent = document.querySelector(".header-burger-content");
const burgerMenuLine = document.querySelectorAll(".header-burger-lines-line");
const headerTabletButton = document.querySelector(
  ".header-aside-tablet-button"
);
const infoPanel = document.querySelector(".info-panel");
const infoPanelButton = document.querySelector(".info-panel-burger-button");
const dropDownTitle = document.querySelector("#burger-content-dropdown-title");
const dropDownList = document.querySelector("#burger-content-dropdown-list");

const posts = [
  {
    imageSrc: "./img/post-1-image.jpeg",
    header: "Как писать код быстро и безболезненно?",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Elementum volutpat orci turpis urna. Et vestibulum, posuere tortor lacinia sit. Sagittis porttitor orci auctor in at tincidunt arcu egestas. Fusce arcu sodales lacinia eu auctor nunc nam id. Diam sit sed volutpat massa. Egestas ornare vel volutpat.",
  },
  {
    imageSrc: "./img/post-2-image.jpeg",
    header: "Купил новый ноутбук за 150 000 руб",
  },
];

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

const getCurrentDate = () => {
  const date = new Date();
  const year = date.getFullYear();
  const month = date.getMonth() < 10 ? `0${date.getMonth()}` : date.getMonth();
  const day = date.getDate() < 10 ? `0${date.getDate()}` : date.getDate();
  return `${day}.${month}.${year}`;
};
console.log(posts);

const createBlogElement = (imgSrc, title, postText) => {
  const li = document.createElement("li");
  li.classList.add("blog-feed-post");
  const div = document.createElement("div");
  div.classList.add("blog-feed-post-content");
  const header = document.createElement("h2");
  header.classList.add("blog-feed-post-content-title");
  const image = document.createElement("img");
  image.classList.add("blog-feed-post-content-image");
  image.src = imgSrc;
  header.textContent = title;
  const text = document.createElement("p");
  text.classList.add("blog-feed-post-content-text");
  text.textContent = postText;
  const dateElement = document.createElement("p");
  dateElement.classList.add("blog-feed-post-content-date");
  dateElement.textContent = getCurrentDate();
  li.append(image);
  li.append(div);
  div.append(header);
  div.append(text);
  div.append(dateElement);
  blogContainer.append(li);
};

const createPosts = () => {
  posts.forEach((post) => {
    createBlogElement(post.imageSrc, post.header, post.text);
  });
};
createPosts();

const showBurgerContent = () => {
  burgerMenu.addEventListener("click", (evt) => {
    burgerMenuContent.classList.toggle("header-burger-content-shown");
    burgerMenuLine.forEach((line) => {
      line.classList.toggle("header-burger-lines-line--modifier");
    });
  });
};
showBurgerContent();

const changeTabletPanelVisibility = () => {
  headerTabletButton.addEventListener("click", () => {
    infoPanel.classList.add("info-panel-tablet-shown");
  });
  infoPanelButton.addEventListener("click", () => {
    infoPanel.classList.remove("info-panel-tablet-shown");
  });
};
const checkForWindowWidth = () => {
  if (window.innerWidth <= 600) {
    infoPanel.classList.remove("info-panel-tablet-shown");
  }
};
window.addEventListener("resize", () => {
  checkForWindowWidth();
});
changeTabletPanelVisibility();

const changeDropDownVisibility = () => {
  dropDownTitle.addEventListener("click", () => {
    dropDownList.classList.toggle(
      "header-burger-content-navigation-title-dropdown-visible"
    );

    /* setTimeout(() => {
      dropDownList.classList.toggle(
        "header-burger-content-navigation-title-dropdown-shown"
      );
    }, 400); */
  });
};
changeDropDownVisibility();
