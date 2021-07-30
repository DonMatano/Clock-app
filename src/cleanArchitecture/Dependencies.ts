import '@/cleanArchitecture/services/AxiosHttpService';
import { AxiosHttpService } from '@/cleanArchitecture/services/AxiosHttpService';
import { FreeGeoIp } from './services/FreeGeoIp';
import { WorldTimeApi } from '@/cleanArchitecture/services/WorldTimeApi';
import { GetGeoIpOutput } from './ports/output/GetGeoIpOutput';
import { GetTimeDataOutput } from './ports/output/GetTimeDataOutput';
import { GetQuoteOutput } from '@/cleanArchitecture/ports/output/GetQuoteOutput';
import { QuotableService } from '@/cleanArchitecture/services/QuotableService';
// import { QuranService } from '@/cleanArchitecture/services/QuranService';

export class Dependencies {
  private static instance: Dependencies;
  http: HttpInterface;
  getGeoIpOutput: GetGeoIpOutput;
  getTimeDataOutput: GetTimeDataOutput;
  getQuoteOutput: GetQuoteOutput;
  private constructor() {
    this.http = new AxiosHttpService();
    this.getGeoIpOutput = new FreeGeoIp();
    this.getTimeDataOutput = new WorldTimeApi();
    this.getQuoteOutput = new QuotableService();
    // this.getQuoteOutput = new QuranService();
  }
  public static getInstance(): Dependencies {
    if (!Dependencies.instance) {
      Dependencies.instance = new Dependencies();
    }
    return Dependencies.instance;
  }
}
