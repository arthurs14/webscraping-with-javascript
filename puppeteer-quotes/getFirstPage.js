import puppeteer from 'puppeteer';

const getQuotes = async (page) => {
  // get page data
  const quotes = await page.evaluate(() => {
    // fetch the first element with class "quote"
    const quoteList = document.querySelectorAll('.quote');

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

  // display the quotes
  console.log(quotes);
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
