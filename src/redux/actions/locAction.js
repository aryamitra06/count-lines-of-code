import axios from "axios";
import { GET_LOC_FAIL, GET_LOC_REQUEST, GET_LOC_SUCCESS } from "../constants/types";
export const getLOCAction = (source, username, repo, branch, ignored) => async (dispatch) => {
    try {
        dispatch({ type: GET_LOC_REQUEST });
        const response = await axios.get(`https://api.codetabs.com/v1/loc?${source}=${username}/${repo}&branch=${branch}&ignored=${ignored}`);
        dispatch({ type: GET_LOC_SUCCESS, payload: response.data });
    } catch (error) {
        dispatch({ type: GET_LOC_FAIL, payload: error.response.data });
    }
}