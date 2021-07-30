import axios from 'axios';

export class AxiosHttpService implements HttpInterface {
  async getHttpRequest<T>(url: string): Promise<T> {
    let response: T;
    try {
      const { data } = await axios.get(url);
      response = data;
      console.log('Data gotten', data)
      return response;
    } catch (error) {
      console.log('Error gotten', error);
      throw new Error ('Error getting data' + error );
    }
  }
}
