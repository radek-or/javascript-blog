"use strict";

function titleClickHandler(event) {
  console.log("Link was clicked!");
  // console.log(event);
  /* [DONE] remove class 'active' from all article links  */
  const activeLinks = document.querySelectorAll(".titles a.active");
  for (let activeLink of activeLinks) {
    activeLink.classList.remove("active");
  }

  /* [DONE] add class 'active' to the clicked link */
  event.preventDefault();
  const clickedElement = this;
  clickedElement.classList.add("active");
  // console.log("clickedElement (with plus): " + clickedElement);

  /* [DONE] remove class 'active' from all articles */
  const activeArticles = document.querySelectorAll(".posts .post");
  for (let activeArticle of activeArticles) {
    activeArticle.classList.remove("active");
  }

  /* [DONE] get 'href' attribute from the clicked link */
  const articleSelector = clickedElement.getAttribute("href");
  // console.log(articleSelector);

  /* [DONE] find the correct article using the selector (value of 'href' attribute) */
  const targetArticle = document.querySelector(articleSelector);
  // console.log(targetArticle)

  /* [DONE] add class 'active' to the correct article */
  targetArticle.classList.add("active");
}

const optArticleSelector = ".post",
  optTitleSelector = ".post-title",
  optTitleListSelector = ".titles",
  optArticleTagsSelector = ".post-tags .list",
  optArticleAuthorSelector = ".post p",
  optTagsListSelector = ".tags.list";

function generateTitleLinks(customSelector = "") {
  // console.log("Coś ta funkcja robi");

  /* remove contents of titleList */
  const titleList = document.querySelector(optTitleListSelector);
  // console.log(titleList)

  titleList.innerHTML = "";
  // console.log(titleList);

  const articles = document.querySelectorAll(
    optArticleSelector + customSelector
  );
  // console.log(articles);

  /* for each article */
  for (let article of articles) {
    /* get the article id */
    const articleId = article.getAttribute("id");
    // console.log(articleId)

    /* find the title element */
    /* get the title from the title element */
    const articleTitle = article.querySelector(optTitleSelector).textContent;
    // console.log(articleTitle)

    /* create HTML of the link */
    const linkHTML =
      "<li><a href='#" +
      articleId +
      "'><span>" +
      articleTitle +
      "</span></a></li>";
    // console.log(linkHTML);

    /* insert link into titleList */
    titleList.insertAdjacentHTML("beforeend", linkHTML);
  }

  const links = document.querySelectorAll(".titles a");
  // console.log(links);

  for (let link of links) {
    link.addEventListener("click", titleClickHandler);
  }
}

generateTitleLinks();

function generateTags() {
  const articles = document.querySelectorAll(optArticleSelector);
  // console.log(articles);
  /* [NEW] create a new variable allTags with an empty object */
  let allTags = {};

  for (let article of articles) {
    const wrapper = article.querySelector(optArticleTagsSelector);
    // console.log(wrapper);

    const articleTags = article.getAttribute("data-tags");
    // console.log(articleTags);

    const articleTagsArray = articleTags.split(" ");
    // console.log(articleTagsArray);

    for (let tag of articleTagsArray) {
      let html = "<li><a href='#tag-" + tag + "'>" + tag + "</a></li> ";

      // console.log(html);
      wrapper.insertAdjacentHTML("beforeend", html);
      if (!allTags.hasOwnProperty(tag)) {
        /* [NEW] add generated code to allTags array */
        allTags[tag] = 1;
      } else {
        allTags[tag]++;
      }
    }
  }
  const tagList = document.querySelector(optTagsListSelector);

  let allTagsHTML = "";
  for (let tag in allTags) {
    allTagsHTML += "<li><a href='#tag-" + tag + "'>" + tag + "</a> (" + allTags[tag] + ") </li>";
  }
  tagList.innerHTML = allTagsHTML;
}

generateTags();

function tagClickHandler(event) {
  event.preventDefault();
  const clickedElement = this;
  const href = clickedElement.getAttribute("href");
  const tag = href.replace("#tag-", "");
  const customSelector = "[data-tags~='" + tag + "']";
  generateTitleLinks(customSelector);
  const tagLinks = document.querySelectorAll(".post-tags a");
  for (let tagLink of tagLinks) {
    tagLink.classList.remove("active");
  }
  clickedElement.classList.add("active");
  generateTitleLinks("[data-tags~='" + tag + "']");
}

function addClickListenersToTags() {
  const tagLinks = document.querySelectorAll(".post-tags a");

  for (let tagLink of tagLinks) {
    tagLink.addEventListener("click", tagClickHandler);
  }
}

addClickListenersToTags();

function generateAuthors() {
  const articles = document.querySelectorAll(optArticleSelector);
  // console.log(articles);

  for (let article of articles) {
    const wrapper = article.querySelector(optArticleAuthorSelector);

    const authorName = article.getAttribute("data-author");
    // console.log(wrapper);
    // console.log(authorName);

    const authorLinkHtml =
      "<a href='#' data-author='" + authorName + "'>" + authorName + "</a>";
    // console.log(authorLinkHtml);

    wrapper.insertAdjacentHTML("beforeend", authorLinkHtml);
    // console.log(authorLinkHtml);
  }
}
generateAuthors();

function authorClickHandler(event) {
  event.preventDefault();
  const clickedElement = this;
  const dataAuthor = clickedElement.getAttribute("data-author");
  console.log(dataAuthor);

  const customSelector = "[data-author='" + dataAuthor + "']";
  console.log(customSelector);

  generateTitleLinks(customSelector);
  // console.log(generateTitleLinks(customSelector));
}

function addClickListenersToAuthors() {
  const authorLinks = document.querySelectorAll(".post-author a");
  // console.log(authorLinks);

  for (let authorLink of authorLinks) {
    authorLink.addEventListener("click", authorClickHandler);
  }
}
addClickListenersToAuthors();
