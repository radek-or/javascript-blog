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
  optArticleTagsSelector = '.post-tags .list';

function generateTitleLinks() {
  // console.log("Coś ta funkcja robi");

  /* remove contents of titleList */
  const titleList = document.querySelector(optTitleListSelector);
  // console.log(titleList)

  titleList.innerHTML = '';
  // console.log(titleList);

  const articles = document.querySelectorAll(optArticleSelector);
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
  console.log(articles);

  for (let article of articles) {
    const wrapper = article.querySelector(optArticleTagsSelector);
    // console.log(wrapper);
    let html = '';
    const articleTags = article.getAttribute('data-tags');
    // console.log(articleTags);

    const articleTagsArrey = articleTags.split(' ');
    console.log(articleTagsArrey);

    for (let tag of articleTagsArrey) {
      const tagLinkHTML = '<li><a href="#tag-' + tag + '">' + tag + '</a></li>';
      console.log(tagLinkHTML);
    }
  }
}

generateTags();

function tagClickHandler(event) {
  /* prevent default action for this event */
  /* make new constant named "clickedElement" and give it the value of "this" */
  /* make a new constant "href" and read the attribute "href" of the clicked element */
  /* make a new constant "tag" and extract tag from the "href" constant */
  /* find all tag links with class active */
  /* START LOOP: for each active tag link */
  /* remove class active */
  /* END LOOP: for each active tag link */
  /* find all tag links with "href" attribute equal to the "href" constant */
  /* START LOOP: for each found tag link */
  /* add class active */
  /* END LOOP: for each found tag link */
  /* execute function "generateTitleLinks" with article selector as argument */
}

function addClickListenersToTags() {
  /* find all links to tags */
  /* START LOOP: for each link */
  /* add tagClickHandler as event listener for that link */
  /* END LOOP: for each link */
}

addClickListenersToTags();
