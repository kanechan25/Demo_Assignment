import html from "../js/core.js";

function Modal(upload) {
  return html`
    <div class="modal-box" id="app__modal">
      <div class="modal-title" id="modal__header">
        <span class="modal-title-right">${upload.header}</span>
        <div class="modal-title-left">
          <i class="fa-solid fa-minus mini" id="fa-minus"></i>
          <i class="fa-solid fa-xmark close" id="fa-xmark"></i>
        </div>
      </div>

      <div class="modal-content">
        <div class="content-info">
          <div class="content-left">
            <span class="content-headline">Title: </span>
            <span class="content-headline">Name: </span>
            <span class="content-headline" id="header-skills">Skills: </span>
          </div>
          <div class="content-right">
            <span class="content-headline" id="input-title"
              >${upload.title}</span
            >
            <input
              type="text"
              class="content-headline"
              id="input-name"
              name="avatar"
            />
            <select id="input-skills">
              <option value=${upload.react}>${upload.react}</option>
              <option value=${upload.redux}>${upload.redux}</option>
              <option value=${upload.node}>${upload.node}</option>
              <option value=${upload.express}>${upload.express}</option>
              <option value=${upload.mongoDB}>${upload.mongoDB}</option>
              <option value=${upload.mySQL}>${upload.mySQL}</option>
              <option value=${upload.aws}>${upload.aws}</option>
            </select>
          </div>
        </div>
        <div class="content-input">
          <span class="content-headline">Avatar:</span>
          <input
            type="file"
            id="img-avatar"
            name="avatar"
            accept="image/png, image/jpeg"
          />
        </div>
      </div>
      <div class="modal-action">
        <button class="btn upload-btn" id="modal-upload-btn">
          ${upload.btn}
        </button>
        <button class="btn close-btn" id="modal-close-btn">Close</button>
      </div>
    </div>
  `;
}
export default Modal;
