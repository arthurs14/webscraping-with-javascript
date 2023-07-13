import { load } from 'cheerio';
import fs from 'fs';

// HTML SNIPPETS TO SCRAPE
const parrots = `
<ul>
  <li class="parrot">
    <span class="sharp">Parrots</span> are beautiful birds with <span class="beak">sharp beaks</span>
  </li>
  
  <li class="sharp">
    They are superfast.
  </li>
  
  <li class="crow">
    Crows are smart
  </li>
</ul>
`;

const script = `
  <div class="product">
    <h2 class="name">Product 1</h2>
    <span class="price">$10</span>
    <span class="discount">20% off</span>
  </div>
  <div class="product">
    <h2 class="name">Product 2</h2>
    <span class="price">$20</span>
  </div>
  <div class="product">
    <h2 class="name">Product 3</h2>
    <span class="price">$30</span>
    <span class="discount">10% off</span>
  </div>
`;

const booksObj = `
  <div class="book-info">
    <h2 class="book-title">The Great Gatsby</h2>
    <p class="author">By F. Scott Fitzgerald</p>
    <p class="release-date">Released: April 10, 1925</p>
    <p class="price">Price: $12.99</p>
  </div>
  <div class="book-info">
    <h2 class="book-title">To Kill a Mockingbird</h2>
    <p class="author">By Harper Lee</p>
    <p class="release-date">Released: July 11, 1960</p>
    <p class="price">Price: $10.99</p>
  </div>
  <div class="book-info">
    <h2 class="book-title">1984</h2>
    <p class="author">By George Orwell</p>
    <p class="release-date">Released: June 8, 1949</p>
    <p class="price">Price: $9.99</p>
  </div>
`;

const $ = load(booksObj);

// const $selectedElements = $('ul li');
// const $spans = $('span').filter('.sharp');
// const test = $('span');
// test.each((idx, el) => {
//   console.log($(el).text());
// });
// const $parrot = $('span').not('.sharp');
// console.log($parrot.text());
// console.log($selectedElements);
// console.log(test.text());

// HAS
const discountedProducts = $('.product').has('.discount');
// discountedProducts.each((idx, el) => console.log($(el).text()));

// CHEERIO OBJECT
const structuredData = {
  Book_Title: $('.book-title').text(),
  Author: $('.author').text(),
  Release_Date: $('.release-date').text(),
  Price: $('.price').text(),
};

// console.log(structuredData);

// MULTIPLE BOOKS + WRITE TO FILE
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

// console.log(booksArr);
