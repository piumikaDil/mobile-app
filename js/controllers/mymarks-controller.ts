import axios, {HttpStatusCode} from 'axios';
import cookieManager from '../storage/storage-controller';
import {cookieStorageIds} from '../../enums/cookie-storage-ids';
import {RequestStatus, ResponseMessages} from '../../enums/response-messages';
import {getNewToken} from './auth-controller';

export async function getStudentMarks() {
  const myMarksAPI: string = 'https://smcbe.prst.live/api/v1/students/my-marks';
  let retries = 0;

  try {
    const idToken = await cookieManager.getCookieByName(
      cookieStorageIds.ID_TOKEN,
    );

    console.log(idToken);

    const axiosResponse = await axios.get(`${myMarksAPI}`, {
      headers: {
        Authorization: `Bearer ${idToken}`,
      },
    });

    if (axiosResponse.status === HttpStatusCode.Ok) {
      if (axiosResponse.data.status === RequestStatus.ERROR) {
        throw new Error(ResponseMessages.MY_MARKS_FETCH_ERROR);
      }

      return axiosResponse.data.data;
    }
    if (axiosResponse.status === HttpStatusCode.Unauthorized) {
      if (retries < 3) {
        await getNewToken();
      } else {
        await cookieManager.removeCookieByName(cookieStorageIds.ID_TOKEN);
      }
      retries += 1;
    }

    return false;
  } catch (err: any) {
    throw new Error(err.response.data.message);
  }
}
