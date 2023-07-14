import axios from 'axios';
import { load } from 'cheerio';

const quotes = [];

const getTwoPageQuotes = async () => {
  for (let i = 1; i <= 10; i++) {
    const url = `http://quotes.toscrape.com/page/${i}`;
    const response = await axios.get(url);
    const $ = load(response.data);

    // for each quote
    $('.quote').each((index, el) => {
      const quote = {
        id: quotes.length + 1,
        quote: $(el).find('.text').text(),
        author: $(el).find('.author').text(),
        authorUrl: $(el).find('span a').attr('href'),
      };

      quotes.push(quote);
    });
  }

  console.log('length ::', quotes.length);
  console.log('quotes ::', quotes);
};

getTwoPageQuotes();
