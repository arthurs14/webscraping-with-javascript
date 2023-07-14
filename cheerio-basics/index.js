import { load } from 'cheerio';
import fs from 'fs';

import { parrots, script, book, booksObj } from './html-snippets.js';

function main() {
  const $ = load(booksObj);
  // writeBooksToFile($);
  // cheerioObject($);
}

// HAS
function has() {
  const discountedProducts = $('.product').has('.discount');
  // discountedProducts.each((idx, el) => console.log($(el).text()));
}

// CHEERIO OBJECT
function cheerioObject($) {
  const structuredData = {
    Book_Title: $('.book-title').text(),
    Author: $('.author').text(),
    Release_Date: $('.release-date').text(),
    Price: $('.price').text(),
  };

  console.log(structuredData);
}

// MULTIPLE BOOKS + WRITE TO FILE
function writeBooksToFile($) {
  const booksArr = [];

  $('.book-info').each((idx, el) => {
    const data = {
      Book_Title: $(el).find('.book-title').text(),
      Author: $(el).find('.author').text(),
      Release_Date: $(el).find('.release-date').text(),
      Price: $(el).find('.price').text(),
    };

    booksArr.push(data);
  });

  const jsonifyData = JSON.stringify(booksArr);

  fs.writeFileSync('books.json', jsonifyData, () =>
    console.log('data written to file')
  );

  console.log(booksArr);
}

main();
