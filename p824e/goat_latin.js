/**
 * @param {string} S
 * @return {string}
 */
var toGoatLatin = function (S) {
  const vowels = new Set('aeiouAEIOU');
  const words = S.split(' ');
  for (let i = 0; i < words.length; ++i) {
    if (!vowels.has(words[i][0]))
      words[i] = words[i].substring(1) + words[i][0];
    words[i] += 'ma';
    for (let j = 0; j < i + 1; ++j) words[i] += 'a';
  }
  return words.join(' ');
};
// TEST
[
  ['a', 'amaa'],
  ['b', 'bmaa'],
  ['bc', 'cbmaa'],
  ['I speak Goat Latin', 'Imaa peaksmaaa oatGmaaaa atinLmaaaaa'],
  [
    'The quick brown fox jumped over the lazy dog',
    'heTmaa uickqmaaa rownbmaaaa oxfmaaaaa umpedjmaaaaaa overmaaaaaaa hetmaaaaaaaa azylmaaaaaaaaa ogdmaaaaaaaaaa',
  ],
].forEach((t) => {
  const actual = toGoatLatin(t[0]);
  console.log('Goat Latin of', t[0], '->', actual);
  console.assert(actual === t[1]);
});
