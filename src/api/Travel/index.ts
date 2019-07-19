import axios, { AxiosResponse } from "axios";
import { API_PATH } from "../../constants/api";
import { Travel } from "../../model/Travel";

// fetch Travel List API call
export const fetchTravel = async () => {
    return axios.get(API_PATH + 'travel')
      .then(
        (result: AxiosResponse): Travel[] => {
          if (result.data.length < 1) {
            throw new Error('Travel: Invalid');
          }
          return result.data;
        }
      )
};
