const CHARMAP =
  '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';

const short2long = new Map();

/**
 * Encodes a URL to a shortened URL.
 *
 * @param {string} longUrl
 * @return {string}
 */
var encode = function (longUrl) {
  const genShortUrl = function () {
    let rand = [];
    for (let i = 0; i < 6; ++i) {
      rand.push(CHARMAP[~~(Math.random() * 61)]);
    }
    return rand.join('');
  };

  let shortUrl = null;
  do {
    shortUrl = genShortUrl();
  } while (short2long.get(shortUrl) !== undefined);
  short2long.set(shortUrl, longUrl);
  return shortUrl;
};

/**
 * Decodes a shortened URL to its original URL.
 *
 * @param {string} shortUrl
 * @return {string}
 */
var decode = function (shortUrl) {
  return short2long.get(shortUrl);
};

/**
 * Your functions will be called as such:
 * decode(encode(url));
 */
[
  '',
  'abc',
  'https://leetcode.com/problems/design-tinyurl',
  'https://leetcode.com/problems/design-tinyurl',
].forEach((longUrl) => {
  const shortUrl = encode(longUrl);
  console.log('TinyURL of', longUrl, '->', shortUrl);
  console.assert(decode(shortUrl) === longUrl);
});
