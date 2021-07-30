import { Dependencies } from '@/cleanArchitecture/Dependencies';
import { QuotesData } from '@/cleanArchitecture/entities/quotesData';

export type getQuoteParam = {
  isQuranSource: boolean;
};

export class GetQuoteUseCase {
  async getQuote(
    params: getQuoteParam = { isQuranSource: false }
  ): Promise<QuotesData> {
    params.isQuranSource
      ? Dependencies.setQuoteSourceQuran()
      : Dependencies.setQuoteSourceQuotable();
    const getQuoteOutput = Dependencies.getInstance().getQuoteOutput;
    try {
      return await getQuoteOutput.getQuote();
    } catch (error) {
      console.log('Error getting quote', error);
      throw new Error('Error getting quote' + error);
    }
  }
}
