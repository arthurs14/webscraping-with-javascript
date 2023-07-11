import puppeteer from 'puppeteer';

const getAQuotes = async (page) => {
  // store quotes
  let quotes = [];

  // indicator to let us know when we are on the last page
  let nextPage = await page.$('.pager .next a');

  // loop over each page and gather quotes
  while (nextPage !== 'stop') {
    const pageQuotes = await page.evaluate(() => {
      // fetch the first element with class "quote"
      const quoteList = document.querySelectorAll('.quote');

      console.log('quote list ::', quoteList);

      // convert the quotelist to an iterable array
      // for each quote ftetch the text and author
      return Array.from(quoteList).map((quote) => {
        // fetch the sub elements from the previously fetched quote element
        // get the displayed text and return it ('.innerText')
        const text = quote.querySelector('.text').innerText;
        const author = quote.querySelector('.author').innerText;

        return { text, author };
      });
    });

    quotes = [...quotes, ...pageQuotes];

    if ((await page.$('.pager .next a')) === null) {
      nextPage = 'stop';
    } else {
      await page.click('.pager .next a');
    }
  }

  console.log('quotes ::', quotes);
};

const beginScrape = async () => {
  // start a puppeteer session with:
  // - a visible browser ('headless: false' - easier to debug because you'll see the browser in action)
  // - no default viewport ('defaultViewport: null' - website page will in full width and height)
  const browser = await puppeteer.launch({
    headless: false,
    defaultViewport: null,
  });

  // open a new page
  const page = await browser.newPage();

  // On this new page:
  // - open the "http://quotes.toscrape.com/" website
  // - wait until the dom content is loaded (HTML is ready)
  await page.goto('http://quotes.toscrape.com/', {
    waitUntil: 'domcontentloaded',
  });

  // evaluate the data
  await getQuotes(page);

  // close the browse
  await browser.close();
};

// start the scraping
beginScrape();
