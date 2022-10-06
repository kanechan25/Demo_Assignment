"use strict";
import App from "../App.js";

const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);

// #region 1. Render html
function renderHtml(inputElement, html) {
  const output = html();
  inputElement.innerHTML = output;
}

let appElement = $(".app");
if (appElement) {
  renderHtml(appElement, App);
}
// #endregion Render html
// #region 2. Modal Box

let overlayElm = $("#overlay");

let modalElm = $("#app__modal");
let headerElm = $("#modal__header");

let confirmElm = $("#app__confirm");
let confirmHeaderElm = $("#confirm__header");

// #region 2.1. Open Modal Box
let btnElm = $("#modal_btn");
let btnClose = $("#modal-close-btn");
let btnUpload = $("#modal-upload-btn");
let btnCClose = $("#confirm-close-btn");
let btnConfirm = $("#confirm-upload-btn");
let btnX = $("#fa-xmark");

openModal(btnElm, modalElm);
openModal(btnUpload, confirmElm);

function openModal(btn, elm) {
  if (btn && elm) {
    btn.onclick = function () {
      elm.style.display = "block";
    };
  }
}
// #endregion

// #region 2.1. Close Modal Box

closeModal(btnClose, modalElm);
closeModal(btnCClose, confirmElm);
closeModal(btnConfirm, confirmElm);
closeModal(btnX, modalElm);

function closeModal(btn, elm) {
  if (btn && elm) {
    btn.onclick = function () {
      elm.style.display = "none";
    };
  }
}
// #endregion

// #region 2.3. Drag Element
dragElement(modalElm, headerElm);
dragElement(confirmElm, confirmHeaderElm);

function dragElement(elm, headerElm) {
  let pos1 = 0,
    pos2 = 0,
    pos3 = 0,
    pos4 = 0;

  if (headerElm) {
    headerElm.onmousedown = dragMouseDown;
  } else {
    elm.onmousedown = dragMouseDown;
  }

  function dragMouseDown(event) {
    event = event || window.event;
    event.preventDefault();
    // get position at start mouse position:
    pos3 = event.clientX;
    pos4 = event.clientY;
    document.onmousemove = draggable;
    document.onmouseup = stopDragElement;
  }

  function draggable(event) {
    event = event || window.event;
    event.preventDefault();
    // calculate the new position:
    pos1 = pos3 - event.clientX;
    pos2 = pos4 - event.clientY;
    pos3 = event.clientX;
    pos4 = event.clientY;
    // set new position for the element:
    elm.style.top = elm.offsetTop - pos2 + "px";
    elm.style.left = elm.offsetLeft - pos1 + "px";
  }

  function stopDragElement() {
    document.onmouseup = 0;
    document.onmousemove = 0;
  }
}
// #endregion

// #endregion Modal Box
