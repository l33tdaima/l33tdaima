/**
 * @param {string} word
 * @param {string} abbr
 * @return {boolean}
 */
var validWordAbbreviation = function(word, abbr) {
  let [count, iword] = [0, -1];
  for (let a of abbr) {
    if (a < '0' || a > '9') {
      iword += count + 1;
      count = 0;
      if (iword >= word.length || word[iword] !== a) return false;
    } else {
      if (a === '0' && count === 0) return false;
      count = count * 10 + (a - '0');
    }
  }
  iword += count + 1;
  return iword == word.length;
};
// TESTS
[
  {
    word: 'a',
    abbr: '01',
    expected: false
  },
  {
    word: 'internationalization',
    abbr: 'i12iz4n',
    expected: true
  },
  {
    word: 'internationalization',
    abbr: 'i18n',
    expected: true
  },
  {
    word: 'internationalization',
    abbr: 'i19',
    expected: true
  },
  {
    word: 'apple',
    abbr: 'a2e',
    expected: false
  },
  {
    word: 'apple',
    abbr: '5',
    expected: true
  }
].forEach(t => {
  const actual = validWordAbbreviation(t.word, t.abbr);
  console.log('Is', t.abbr, 'a valid abbreviation of', t.word, '->', actual);
  console.assert(actual === t.expected);
});
