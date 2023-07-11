/* eslint-disable no-unsafe-finally */
export const apiRequest = async (url = '', optionsObj = null, errMsg = null) => {
   try {
      const response = await fetch(url, optionsObj);
      if (!response.ok) {
         throw new Error('No result found, please reload app.');
      }
   } catch (err) {
      console.log(err);
      errMsg = err.message;
   } finally {
      return errMsg;
   }
};

export default apiRequest;
