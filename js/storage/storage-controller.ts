import AsyncStorage from '@react-native-async-storage/async-storage';

const cookieManager = {
  getCookieByName: async (name: string) => {
    return await AsyncStorage.getItem(name);
  },

  setCookieByName: async (name: string, value: string) => {
    try {
      await AsyncStorage.setItem(name, value);
    } catch (error) {}
  },

  removeCookieByName: async (name: string) => {
    try {
      await AsyncStorage.removeItem(name);
    } catch (error) {}
  },
};
export default cookieManager;
