import axios from "../utils/axios.utils";
import { sessionUtils } from "../utils";

function uploadZipFile(file, task) {
  return async dispatch => {
    try {
      const URL = `user/upload`;
      const session = sessionUtils.getJsonStorageComponent("session");

      const HEADER = {
        headers: {
          authorization: `Token ${session.data.token}`
        }
      };
      const data = new FormData();
      data.append("file", file);
      data.append("task", task);
      const response = await axios.post(URL, data, HEADER);

      return response.data;
    } catch (e) {
      console.log(e);
      throw e;
    }
  };
}

export const uploadService = {
  uploadZipFile
};
