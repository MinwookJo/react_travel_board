import axios, { AxiosResponse } from "axios";
import { API_PATH } from "../../constants/api";
import { Travel, TravelAddFormType } from "../../model/Travel";

// fetch Travel List API call
export const fetchTravelCall = async () => {
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

// insert  Travel API call
export const insertTravelCall = async (form: TravelAddFormType) => {
    return axios.post(API_PATH + 'travel', form)
      .then(
        (result: AxiosResponse): Travel => {
          if (!result.data.hasOwnProperty('id')) {
            throw new Error('Travel Post: Fail');
          }
          return result.data.form
        }
      )
}

export const deleteTravelCall = async(id: number) => {
    return axios.delete(API_PATH + 'travel/' + id)
      .then(
        (result: AxiosResponse) => {
          if(!result.hasOwnProperty('data')) {
            throw new Error('Travel Delete: Fail');
          }
        }
      )
}

export const fetchTravelDetailCall = async(id: number) => {
    return axios.get(API_PATH + 'travel/' + id)
    .then(
      (result: AxiosResponse): Travel => {
        if(!result.data.hasOwnProperty('id')) {
          throw new Error('Travel Detail Fetch: Fail');
        }
        return result.data;
      }
    )
}
