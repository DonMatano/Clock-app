import { Dependencies } from '@/cleanArchitecture/Dependencies';
import { TimeData } from '../entities/timeData';
import { GetTimeDataOutput } from '@/cleanArchitecture/ports/output/GetTimeDataOutput';

type Response = {
  abbreviation: string;
  client_ip: string;
  datetime: Date;
  day_of_week: number;
  day_of_year: number;
  dst: boolean;
  dst_from?: any;
  dst_offset: number;
  dst_until?: any;
  raw_offset: number;
  timezone: string;
  unixtime: number;
  utc_datetime: Date;
  utc_offset: string;
  week_number: number;
};

export class WorldTimeApi implements GetTimeDataOutput {
  async getTimeData(timeZone: string): Promise<TimeData> {
    const httpService = Dependencies.getInstance().http;
    try {
      const url = `http://worldtimeapi.org/api/timezone/${timeZone}`;
      const timeDataResult = await httpService.getHttpRequest<Response>(url);
      const timeData = new TimeData();
      timeData.timeZone = timeDataResult.timezone;
      timeData.timeInUnix = timeDataResult.unixtime.toString();
      timeData.timezoneCode = timeDataResult.abbreviation;
      timeData.dayOfWeek = timeDataResult.day_of_week;
      timeData.dayOfYear = timeDataResult.day_of_year;
      timeData.weekNumber = timeDataResult.week_number;
      return timeData;
    } catch (error) {
      console.log('Got error in WorldTime Api', error);
      throw new Error('Got Error in WorldTime Api');
    }
  }
}
