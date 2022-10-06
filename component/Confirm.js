import html from "../js/core.js";

function Confirm(confirm) {
  return html`
    <div class="modal-box" id="app__confirm">
      <div class="modal-title" id="confirm__header">
        <span class="modal-title-right">${confirm.header}</span>
      </div>

      <div class="modal-content">
        <div class="content-right">
          <span class="content-headline">${confirm.content}</span>
        </div>
      </div>
      <div class="modal-action">
        <button class="btn confirm-btn" id="confirm-upload-btn">
          ${confirm.btn}
        </button>
        <button class="btn close-btn" id="confirm-close-btn">Close</button>
      </div>
    </div>
  `;
}
export default Confirm;
