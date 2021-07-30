import { Dependencies } from '@/cleanArchitecture/Dependencies';
import { TimeData } from '@/cleanArchitecture/entities/timeData';

export type getTimeDataParam = {
  timeZone: string;
};
export class GetTimeDataUseCase {
  async getTimeData(params: getTimeDataParam): Promise<TimeData> {
    try {
      return await Dependencies.getInstance().getTimeDataOutput.getTimeData(
        params.timeZone
      );
    } catch (error) {
      console.log('Error', error);
      throw new Error('Error getting timeData' + error);
    }
  }
}
