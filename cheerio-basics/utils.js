import { load } from 'cheerio';

function getBookInfo(htmlString) {
  const $ = load(htmlString);

  return {
    Book_Title: $('.book-title').text(),
    Author: $('.author').text(),
    Release_Date: $('.release-date').text(),
    Price: $('.price').text(),
  };
}

export default getBookInfo;
