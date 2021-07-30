import { Dependencies } from '@/cleanArchitecture/Dependencies';
import { QuotesData } from '@/cleanArchitecture/entities/quotesData';

export type getQuoteParam = {
  isQuranSource: boolean;
};

export class GetQuoteUseCase {
  async getQuote(
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    params: getQuoteParam = { isQuranSource: false }
  ): Promise<QuotesData> {
    const getQuoteOutput = Dependencies.getInstance().getQuoteOutput;
    try {
      return await getQuoteOutput.getQuote();
    } catch (error) {
      console.log('Error getting quote', error);
      throw new Error('Error getting quote' + error);
    }
  }
}
