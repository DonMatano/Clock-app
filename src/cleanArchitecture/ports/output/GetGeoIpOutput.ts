import { GeoIpData } from '@/cleanArchitecture/entities/geoIpData';

export interface GetGeoIpOutput {
  getGeoIp() : Promise<GeoIpData> ;
}
