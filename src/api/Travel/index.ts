import axios, { AxiosResponse } from "axios";
import { API_PATH } from "../../constants/api";
import { Travel, TravelAddFormType, TravelUpdateFormType } from "../../model/Travel";

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

// insert Travel API call
export const insertTravelCall = async (form: TravelAddFormType) => {
    return axios.post(API_PATH + 'travel', form)
      .then(
        (result: AxiosResponse): Travel => {
          if (!result.data.hasOwnProperty('id')) {
            throw new Error('Travel Post: Fail');
          }
          return result.data;
        }
      )
}


// delete Travel API call
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


// fetch Travel API detail call
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

// update  Travel API call
export const updateTravelCall = async (id: number, form: TravelUpdateFormType) => {
  return axios.put(API_PATH + 'travel/' + id, form)
    .then(
      (result: AxiosResponse): Travel => {
        if (!result.data.hasOwnProperty('id')) {
          throw new Error('Travel Put: Fail');
        }
        return result.data;
      }
    )
}
