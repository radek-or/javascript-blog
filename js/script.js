'use strict';

function titleClickHandler(event) {
  console.log('Link was clicked!');
  // console.log(event);
  /* [DONE] remove class 'active' from all article links  */
  const activeLinks = document.querySelectorAll('.titles a.active');
  for (let activeLink of activeLinks) {
    activeLink.classList.remove('active');
  }

  /* [DONE] add class 'active' to the clicked link */
  event.preventDefault();
  const clickedElement = this;
  clickedElement.classList.add('active');
  // console.log("clickedElement (with plus): " + clickedElement);

  /* [DONE] remove class 'active' from all articles */
  const activeArticles = document.querySelectorAll('.posts .post');
  for (let activeArticle of activeArticles) {
    activeArticle.classList.remove('active');
  }

  /* [DONE] get 'href' attribute from the clicked link */
  const articleSelector = clickedElement.getAttribute('href');
  // console.log(articleSelector);

  /* [DONE] find the correct article using the selector (value of 'href' attribute) */
  const targetArticle = document.querySelector(articleSelector);
  // console.log(targetArticle)

  /* [DONE] add class 'active' to the correct article */
  targetArticle.classList.add('active');
}

const optArticleSelector = '.post',
  optTitleSelector = '.post-title',
  optTitleListSelector = '.titles',
  optArticleTagsSelector = '.post-tags .list',
  optArticleAuthorSelector = '.post p';

function generateTitleLinks(customSelector = '') {
  // console.log("Coś ta funkcja robi");

  /* remove contents of titleList */
  const titleList = document.querySelector(optTitleListSelector);
  // console.log(titleList)

  titleList.innerHTML = '';
  // console.log(titleList);

  const articles = document.querySelectorAll(
    optArticleSelector + customSelector
  );
  // console.log(articles);

  /* for each article */
  for (let article of articles) {
    /* get the article id */
    const articleId = article.getAttribute('id');
    // console.log(articleId)

    /* find the title element */
    /* get the title from the title element */
    const articleTitle = article.querySelector(optTitleSelector).textContent;
    // console.log(articleTitle)

    /* create HTML of the link */
    const linkHTML =
      '<li><a href="#' +
      articleId +
      '"><span>' +
      articleTitle +
      '</span></a></li>';
    // console.log(linkHTML);

    /* insert link into titleList */
    titleList.insertAdjacentHTML('beforeend', linkHTML);
  }

  const links = document.querySelectorAll('.titles a');
  // console.log(links);

  for (let link of links) {
    link.addEventListener('click', titleClickHandler);
  }
}

generateTitleLinks();

function generateTags() {
  const articles = document.querySelectorAll(optArticleSelector);
  // console.log(articles);

  for (let article of articles) {
    const wrapper = article.querySelector(optArticleTagsSelector);
    // console.log(wrapper);

    const articleTags = article.getAttribute('data-tags');
    // console.log(articleTags);

    const articleTagsArray = articleTags.split(' ');
    // console.log(articleTagsArray);

    for (let tag of articleTagsArray) {
      let html = '<li><a href="#tag-' + tag + '">' + tag + '</a></li> ';
      // console.log(html);
      wrapper.insertAdjacentHTML('beforeend', html);
    }
  }
}

generateTags();

function tagClickHandler(event) {
  event.preventDefault();

  const clickedElement = this;
  const href = clickedElement.getAttribute('href');
  const tag = href.replace('#tag-', '');

  // Wygenerowanie niestandardowego selektora dla tagu
  const customSelector = '[data-tags~="' + tag + '"]';

  // Wygenerowanie listy artykułów zgodnych z klikniętym tagiem
  generateTitleLinks(customSelector);

  // Usunięcie klasy "active" z wszystkich tagów
  const tagLinks = document.querySelectorAll('.post-tags a');
  for (let tagLink of tagLinks) {
    tagLink.classList.remove('active');
  }

  // Dodanie klasy "active" do klikniętego tagu
  clickedElement.classList.add('active');
  generateTitleLinks('[data-tags~="' + tag + '"]');
}

function addClickListenersToTags() {
  const tagLinks = document.querySelectorAll('.post-tags a');

  for (let tagLink of tagLinks) {
    tagLink.addEventListener('click', tagClickHandler);
  }
}

addClickListenersToTags();

function generateAuthors() {
  const articles = document.querySelectorAll(optArticleSelector);
  // console.log(articles);

  for (let article of articles) {
    const authorElement = article.querySelector(optArticleAuthorSelector);
    const authorName = authorElement.textContent;
    // console.log(authorElement);
    // console.log(authorName);

    const authorLinkHtml =
      "<a href='#" + authorName + "'>" + authorName + '</a>';
    // console.log(authorLinkHtml);

    authorElement.innerHTML = authorLinkHtml;
    // console.log(authorLinkHtml);
  }
}
generateAuthors();

// function authorClickHandler() {

//   const clickedElement = this;
//   const author = document.querySelector(optArticleAuthorSelector).textContent;
//   console.log(author);
//   console.log(clickedElement);

// }

// authorClickHandler();

function addClickListenersToAuthors() {
  const authorLinks = document.querySelectorAll('.post-author a');
  console.log(authorLinks);
}

addClickListenersToAuthors();
