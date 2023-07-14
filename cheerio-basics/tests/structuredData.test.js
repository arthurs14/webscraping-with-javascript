import { book } from '../html-snippets';
import getBookInfo from '../utils';

test('getBookInfo returns the correct book information', () => {
  const htmlString = book;
  const bookData = getBookInfo(htmlString);

  expect(bookData).toEqual({
    Book_Title: 'The Great Gatsby',
    Author: 'By F. Scott Fitzgerald',
    Release_Date: 'Released: April 10, 1925',
    Price: 'Price: $12.99',
  });
});
