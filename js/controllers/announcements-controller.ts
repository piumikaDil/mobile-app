import axios, {HttpStatusCode} from 'axios';
import {RequestStatus, ResponseMessages} from '../../enums/response-messages';

const announcementsAPI: string = 'https://smcbe.prst.live/api/v1/announcements';

export async function getAllAnnouncements() {
  try {
    const res = await axios.get(`${announcementsAPI}`);

    if (res.status === HttpStatusCode.Ok) {
      if (res.data.status === RequestStatus.ERROR) {
        throw new Error(ResponseMessages.REGISTRATION_FAILED);
      }

      return res.data.data;
    } else {
      throw new Error(res.data.message);
    }
  } catch (err: any) {
    throw new Error(err.response.data.message);
  }
}
