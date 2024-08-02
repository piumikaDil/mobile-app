import axios, {HttpStatusCode} from 'axios';
import {RequestStatus, ResponseMessages} from '../../enums/response-messages';
import cookieManager from '../storage/storage-controller';
import {cookieStorageIds} from '../../enums/cookie-storage-ids';

const authAPI: string = 'https://smcbe.prst.live/api/v1/auth';

export async function register(body: any) {
  try {
    const res = await axios.post(`${authAPI}/register`, {
      ...body,
    });

    if (res.status === HttpStatusCode.Ok) {
      if (res.data.status === RequestStatus.ERROR) {
        throw new Error(ResponseMessages.REGISTRATION_FAILED);
      }
      console.log(res);

      return res;
    } else {
      throw new Error(res.data.message);
    }
  } catch (err: any) {
    console.error(err);
    throw new Error(err.response.data.message);
  }
}

export async function login(body: any) {
  try {
    const res = await axios.post(`${authAPI}/login`, body);

    if (res.status === HttpStatusCode.Ok) {
      if (res.data.status === RequestStatus.ERROR) {
        throw new Error(res.data.message);
      }

      return res.data.data;
    } else {
      throw new Error(ResponseMessages.LOGIN_FAILED);
    }
  } catch (err: any) {
    console.error(err);
    throw new Error(err.response.data.message);
  }
}

export async function forgotPassword(body: any) {
  try {
    const res = await axios.post(`${authAPI}/forgot-password`, body);

    if (res.status === HttpStatusCode.Ok) {
      if (res.data.status === RequestStatus.ERROR) {
        throw new Error(ResponseMessages.FORGOT_PASSWORD_FAILED);
      }
      return res.data.data;
    } else {
      throw new Error(ResponseMessages.FORGOT_PASSWORD_FAILED);
    }
  } catch (err) {
    throw new Error(ResponseMessages.REQUEST_ERROR);
  }
}

export async function confirmForgotPassword(body: any) {
  try {
    const res = await axios.post(`${authAPI}/confirm-forgot-password`, body);

    if (res.status === HttpStatusCode.Ok) {
      if (res.data.status === RequestStatus.ERROR) {
        throw new Error(ResponseMessages.FORGOT_PASSWORD_FAILED);
      }
      return res.data.data;
    } else {
      throw new Error(ResponseMessages.FORGOT_PASSWORD_FAILED);
    }
  } catch (err) {
    throw new Error(ResponseMessages.REQUEST_ERROR);
  }
}
export async function verifyPassword(body: any) {
  const email = await cookieManager.getCookieByName(cookieStorageIds.EMAIL);
  try {
    const res = await axios.post(`${authAPI}/confirm-registration`, {
      email,
      code: body,
    });

    if (res.status === HttpStatusCode.Ok) {
      if (res.data.status === RequestStatus.ERROR) {
        throw new Error(ResponseMessages.FORGOT_PASSWORD_FAILED);
      }
      return res.data.data;
    } else {
      throw new Error(ResponseMessages.FORGOT_PASSWORD_FAILED);
    }
  } catch (err) {
    console.error(err);

    throw new Error(ResponseMessages.REQUEST_ERROR);
  }
}

export async function getNewToken() {
  const idtoken = await cookieManager.getCookieByName(
    cookieStorageIds.ID_TOKEN,
  );
  const refreshToken = await cookieManager.getCookieByName(
    cookieStorageIds.REFRESH_TOKEN,
  );
  if (idtoken && refreshToken) {
    const res = await axios.post(`${authAPI}/refresh-token`, {refreshToken});
    if (res) {
      const newTokens = res.data.data.idToken;

      cookieManager.setCookieByName(cookieStorageIds.ID_TOKEN, newTokens);
    }
  }
}
