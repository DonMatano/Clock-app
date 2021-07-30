import { GetQuoteOutput } from '@/cleanArchitecture/ports/output/GetQuoteOutput';
import { QuotesData } from '@/cleanArchitecture/entities/quotesData';
import { Dependencies } from '@/cleanArchitecture/Dependencies';

type Translation = {
  resource_id: number;
  text: string;
};

type Verse = {
  id: number;
  verse_number: number;
  verse_key: string;
  juz_number: number;
  hizb_number: number;
  rub_number: number;
  sajdah_type?: any;
  sajdah_number?: any;
  translations: Translation[];
};

type Response = {
  verse: Verse;
};

export class QuranService implements GetQuoteOutput {
  async getQuote(): Promise<QuotesData> {
    const httpServer = Dependencies.getInstance().http;
    const url =
      'https://api.quran.com/api/v4/verses/random?language=en&words=false&translations=131';
    try {
      const resp = await httpServer.getHttpRequest<Response>(url);
      const quoteData = new QuotesData();
      quoteData.quote = resp.verse.translations[0].text;
      quoteData.author = `Quran ${resp.verse.verse_key}`;
      return quoteData;
    } catch (e) {
      console.log('Got Error when getting quote in Quran', e);
      throw new Error('Error when getting quote from Quran' + e);
    }
  }
}
