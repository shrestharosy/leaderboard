import axios from "../utils/axios.utils";
import { sessionUtils } from "../utils";

function getNLPModel() {
    return async dispatch => {
      try {
        const URL = `user/nlp`;
  
        const session = sessionUtils.getJsonStorageComponent("session");
  
        const HEADER = {
          headers: {
            authorization: `Token ${session.data.token}`
          }
        };
        const response = await axios(URL, HEADER);
       
        return response.data;
      } catch (e) {
        console.log(e);
        throw e;
      }
    };
  }

  function getImageModel() {
    return async dispatch => {
      try {
        const URL = `user/image`;
  
        const session = sessionUtils.getJsonStorageComponent("session");
  
        const HEADER = {
          headers: {
            authorization: `Token ${session.data.token}`
          }
        };
        const response = await axios(URL, HEADER);
       
        return response.data;
      } catch (e) {
        console.log(e);
        throw e;
      }
    };
  }

function getAnalysisModel() {
  return async dispatch => {
    try {
      const URL = `user/analysis`;

      const session = sessionUtils.getJsonStorageComponent("session");

      const HEADER = {
        headers: {
          authorization: `Token ${session.data.token}`
        }
      };
      const response = await axios(URL, HEADER);
     
      return response.data;
    } catch (e) {
      console.log(e);
      throw e;
    }
  };
}

export const downloadService = {
  getNLPModel,
  getAnalysisModel,
  getImageModel
};
