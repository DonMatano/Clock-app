import { QuotesData } from '@/cleanArchitecture/entities/quotesData';

export interface GetQuoteOutput {
  getQuote(): Promise<QuotesData>;
}
