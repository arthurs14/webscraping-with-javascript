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

const book = `
  <div class="book-info">
    <h2 class="book-title">The Great Gatsby</h2>
    <p class="author">By F. Scott Fitzgerald</p>
    <p class="release-date">Released: April 10, 1925</p>
    <p class="price">Price: $12.99</p>
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

export { parrots, script, book, booksObj };
