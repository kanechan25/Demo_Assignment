"use strict";
import App from "../App.js";

const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);

// #region 1. Render html
function renderHtml(inputElement, html) {
  const output = html();
  inputElement.innerHTML = output;
}

var appElement = $(".app");
if (appElement) {
  renderHtml(appElement, App);
}
// #endregion Render html
