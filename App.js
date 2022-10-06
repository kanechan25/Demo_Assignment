import html from "./js/core.js";
import BtnOpen from "./component/BtnOpen.js";
import Modal from "./component/Modal.js";
import { upload } from "./data/data.js";
import Confirm from "./component/Confirm.js";
import { confirm } from "./data/data.js";
import Minimize from "./component/Minimize.js";

function App() {
  return html`
    <div class="btn-open-modal">${BtnOpen()}</div>
    <span class="minimize-modal">${Minimize()}</span>
    <div class="modal-box-container">${Modal(upload)}</div>
    <div class="confirm-box-container">${Confirm(confirm)}</div>
  `;
}

export default App;
