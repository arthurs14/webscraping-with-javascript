import axios from 'axios';
import { load } from 'cheerio';
import express from 'express';

const app = express();

const PORT = 8000 || process.env.PORT;

const url = 'http://quotes.toscrape.com/';

axios(url).then((response) => {
  const html = response.data;
  const $ = load(html);
  let quotes = [];

  $('.quote').each((i, q) => {
    const quote = $(q).find('.text').text();
    const author = $(q).find('.author').text();
    const authorUrl = $(q).find('span a').attr('href');
    quotes.push({ quote, author, authorUrl });
  });

  console.log(quotes);
});

app.listen(PORT, () => console.log(`Listening on port ${PORT}`));
