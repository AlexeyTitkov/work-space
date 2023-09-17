import {renderLoadingMessage} from "./loadingMessage.js";

export const renderError = (err) => {
  renderLoadingMessage('error')
  console.warn(err)
}
