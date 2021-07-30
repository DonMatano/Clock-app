import { TimeData } from '@/cleanArchitecture/entities/timeData';

export interface GetTimeDataOutput {
  getTimeData(timeZone: string): Promise<TimeData>;
}
