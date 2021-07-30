import { Dependencies } from '@/cleanArchitecture/Dependencies';
import { QuotesData } from '../entities/quotesData';
import { GetQuoteOutput } from './../ports/output/GetQuoteOutput';

type Response = {
  _id: string;
  tags: string[];
  content: string;
  author: string;
  authorSlug: string;
  length: number;
  dateAdded: string;
  dateModified: string;
};

export class QuotableService implements GetQuoteOutput {
  async getQuote(): Promise<QuotesData> {
    const httpServer = Dependencies.getInstance().http;
    const url = 'https://api.quotable.io/random';
    try {
      const resp = await httpServer.getHttpRequest<Response>(url);
      const quoteData = new QuotesData();
      quoteData.quote = resp.content;
      quoteData.author = resp.author;
      return quoteData;
    } catch (error) {
      console.log('Got Error when getting quote', error);
      throw new Error('Error when getting quote from Quotable' + error);
    }
  }
}
