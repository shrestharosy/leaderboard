import axios from "../utils/axios.utils";
import { sessionUtils } from "../utils";
import { Actions } from "../constants/actions";

function getAllCompetitors() {
  return async dispatch => {
    try {
      const URL = `user/all`;

      const session = sessionUtils.getJsonStorageComponent("session");

      const HEADER = {
        headers: {
          authorization: `Token ${session.data.token}`
        }
      };
      const response = await axios(URL, HEADER);
      dispatch({
        type: Actions.competitorActions.SET_NLP_USERS,
        payload: response.data.data.nlp_users
      });
      dispatch({
        type: Actions.competitorActions.SET_IMAGE_USERS,
        payload: response.data.data.image_users
      });
      return response.data;
    } catch (e) {
      console.log(e);
      throw e;
    }
  };
}

export const competitorsService = {
  getAllCompetitors
};
