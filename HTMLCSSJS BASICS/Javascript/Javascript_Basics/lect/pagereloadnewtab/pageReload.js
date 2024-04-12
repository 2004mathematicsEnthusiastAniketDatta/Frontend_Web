"use strict";

const about = document.querySelector('#About');
const home = document.querySelector('#Home');
const contact = document.querySelector('#Contact');
const hometext = document.querySelector('#content1');
const abouttext = document.querySelector('#content2');
const contacttext = document.querySelector('#content3');

function showContent(contentElement) {
  textclear();
  contentElement.style.display = 'block';
  contentElement.style.width = '50%';
}

about.addEventListener("click", () => showContent(abouttext));
home.addEventListener("click", () => showContent(hometext));
contact.addEventListener("click", () => showContent(contacttext));

function textclear() {
  document.querySelectorAll('h3').forEach(h3 => {
    h3.style.display = 'none';
  });
}
