import {renderLoadingMessage, deleteLoadingMessage} from "./loadingMessage.js";

export const getData = async (url, cbSuccess, cbError) => {

  renderLoadingMessage('loading')

  try {
    const response = await fetch(url)
    deleteLoadingMessage()
    if (response.ok) {
      const data = await response.json()
      cbSuccess(data)
    }

  } catch (err) {
    cbError(err)
  }
}
