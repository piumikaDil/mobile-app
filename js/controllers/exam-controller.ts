import axios, {HttpStatusCode} from 'axios';
import {RequestStatus, ResponseMessages} from '../../enums/response-messages';

const examAPI: string = 'https://smcbe.prst.live/api/v1/exams/last';

export async function getLastExamAndTopMarks() {
  const res = await axios.get(`${examAPI}`);
  console.log('Hi', res);

  if (res.status === HttpStatusCode.Ok) {
    if (res.data.status === RequestStatus.ERROR) {
      throw new Error(ResponseMessages.EXAM_FAILD);
    }

    return res.data.data;
  } else {
    throw new Error(res.data.message);
  }
}
