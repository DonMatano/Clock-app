import { Dependencies } from '@/cleanArchitecture/Dependencies';
import { GeoIpData } from '../entities/geoIpData';
import { GetGeoIpOutput } from '../ports/output/GetGeoIpOutput';

type Response = {
  ip: string;
  country_code: string;
  country_name: string;
  region_code: string;
  region_name: string;
  city: string;
  zip_code: string;
  time_zone: string;
  latitude: number;
  longitude: number;
  metro_code: number;
};

export class FreeGeoIp implements GetGeoIpOutput {
  async getGeoIp(): Promise<GeoIpData> {
    try {
      const geoIpURL = 'https://freegeoip.app/json/';
      const res =
        await Dependencies.getInstance().http.getHttpRequest<Response>(
          geoIpURL
        );
      const dataToReturn = new GeoIpData();
      dataToReturn.city = res.city;
      dataToReturn.countryCode = res.country_code;
      dataToReturn.timeZone = res.time_zone;
      return dataToReturn;
    } catch (error) {
      console.log('Error in FreeGeoIp', error);
      throw new Error('Got Error while getting GeoIP' + { error });
    }
  }
}
