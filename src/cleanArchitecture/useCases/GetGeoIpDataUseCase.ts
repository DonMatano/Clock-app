import { Dependencies } from '@/cleanArchitecture/Dependencies';
import { GeoIpData } from '@/cleanArchitecture/entities/geoIpData';

export class GetGeoIpDataUseCase {
  async getGeoIpData(): Promise<GeoIpData> {
    try {
      const geoIp = await Dependencies.getInstance().getGeoIpOutput.getGeoIp();
      return geoIp;
    } catch (error) {
      console.log('Geo Ip Error', error);
      throw new Error('Error getting timeData' + { error });
    }
  }
}
