import axios, {HttpStatusCode} from 'axios';
import cookieManager from '../storage/storage-controller';
import {cookieStorageIds} from '../../enums/cookie-storage-ids';
import {RequestStatus} from '../../enums/response-messages';
import {getNewToken} from './auth-controller';


export async function uploadImage(galleryPhoto: any) {
  try {
    let retries = 0;
    const idToken = await cookieManager.getCookieByName(
      cookieStorageIds.ID_TOKEN,
    );

    if (galleryPhoto !== '') {
      const formData = new FormData();
      formData.append('image', {
        uri: galleryPhoto,
        type: 'image/jpeg',
        name: 'profile.jpg',
      });

      const res = await axios.patch(
        'https://smcbe.prst.live/api/v1/students/upload-image',
        formData,
        {
          headers: {
            'Content-Type': 'multipart/form-data',
            Authorization: `Bearer ${idToken}`,
          },
        },
      );

      if (res.status === HttpStatusCode.Unauthorized) {
        if (retries < 3) {
          await getNewToken();
        } else {
          await cookieManager.removeCookieByName(cookieStorageIds.ID_TOKEN);
        }
        retries += 1;
      }
      console.log('Image uploaded');
    }
  } catch (error) {
    console.error('Error uploading image:', error);
  }
}

export async function getStudentDetails() {
  try {
    let retries = 0;

    const idToken = await cookieManager.getCookieByName(
      cookieStorageIds.ID_TOKEN,
    );

    try {
      const axiosResponse = await axios.get(
        'https://smcbe.prst.live/api/v1/students/profile',
        {
          headers: {
            Authorization: `Bearer ${idToken}`,
          },
        },
      );

      if (axiosResponse.status === HttpStatusCode.Ok) {
        if (axiosResponse.data.status === RequestStatus.ERROR) {
          throw new Error('Error fetching student details');
        }
        return axiosResponse.data;
      }

      if (axiosResponse.status === HttpStatusCode.Unauthorized) {
        if (retries < 3) {
          await getNewToken();
        } else {
          await cookieManager.removeCookieByName(cookieStorageIds.ID_TOKEN);
        }
        retries += 1;
      }
      return axiosResponse.data;
    } catch (error: any) {
      console.error('Error getting student details:', error);
      throw new Error(error);
    }
  } catch (error: any) {
    console.error('Error getting student token:', error);
    return false;
  }
}

export async function getProfileImage() {
  try {
    let retries = 0;

    const idToken = await cookieManager.getCookieByName(
      cookieStorageIds.ID_TOKEN,
    );

    try {
      const axiosResponse = await axios.get(
        'https://smcbe.prst.live/api/v1/students/image',
        {
          headers: {
            Authorization: `Bearer ${idToken}`,
          },
        },
      );

      if (axiosResponse.status === HttpStatusCode.Ok) {
        if (axiosResponse.data.status === 401) {
          throw new Error('Error fetching student details');
        }
        return axiosResponse.data.data.image;
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
    } catch (error) {
      console.error('Error in Axios request:', error);
      throw new Error('Error fetching student details');
    }
  } catch (error) {
    console.error('Error getting student token:', error);
    return false;
  }
}
