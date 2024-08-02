import {cookieStorageIds} from '../../enums/cookie-storage-ids';
import cookieManager from '../storage/storage-controller';

export async function logOutFunction() {
  try {
    await cookieManager.removeCookieByName(cookieStorageIds.ID_TOKEN);
  } catch (err: any) {
    throw new Error(err.res.data.message);
  }
}
