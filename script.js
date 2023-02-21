

let ul = document.querySelector(".tabs");
ul.addEventListener("click", function (ev) {
  console.log(ev.target.dataset.tab);
  let data = ev.target.dataset.tab;

  console.log(document.querySelector(".active-p"));
  document.querySelector(".active-p").classList.remove("active-p");

  console.log(document.querySelector(".active-tab"));
  document.querySelector(".active-tab").classList.remove("active-tab");

  console.log(document.querySelector(`[data-li = ${data}]`));
  document.querySelector(`[data-li = ${data}]`).classList.add("active-p");

  ev.target.classList.add("active-tab");
});



// const tabs = document.querySelector(".tabs");
// const content = document.querySelector(".tabs_content");

// const getActiveTabName = () => {
//   return tabs.querySelector(".tabs_title_active").dataset.tab;
// };

// const setActiveContent = () => {
//   if (content.querySelector(".tab_description_active")) {
//     content
//       .querySelector(".tab_description_active")
//       .classList.remove("tab_description_active");
//   }
//   content
//     .querySelector(`[data-tab=${getActiveTabName()}]`)
//     .classList.add("tab_description_active");
// };

// if (!tabs.querySelector(".tabs_title_active")) {
//   tabs.querySelector(".tabs_title").classList.add("tabs_title_active");
// }

// setActiveContent(getActiveTabName());

// tabs.addEventListener("click", (event) => {
//   const caption = event.target.closest(".tabs_title");
//   if (!caption) return;
//   if (caption.classList.contains("tabs_title_active")) return;

//   if (tabs.querySelector(".tabs_title_active")) {
//     tabs
//       .querySelector(".tabs_title_active")
//       .classList.remove("tabs_title_active");
//   }

//   caption.classList.add("tabs_title_active");

//   setActiveContent(getActiveTabName());
// });