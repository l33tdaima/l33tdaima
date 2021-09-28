/**
 * @param {string[]} emails
 * @return {number}
 */
var numUniqueEmails = function (emails) {
  const normalize = (email) => {
    let [local, domain] = email.split('@', 2);
    tokens = local.split('+')[0].split('.');
    return `${tokens.join('')}@${domain}`;
  };
  const uniq = new Set(emails.map(normalize));
  return uniq.size;
};
// TESTS
[
  [
    [
      'test.email+alex@leetcode.com',
      'test.e.mail+bob.cathy@leetcode.com',
      'testemail+david@lee.tcode.com',
    ],
    2,
  ],
  [['a@leetcode.com', 'b@leetcode.com', 'c@leetcode.com'], 3],
].forEach(([emails, expected]) => {
  let actual = numUniqueEmails(emails);
  console.log('# of unique emails in', emails, '->', actual);
  console.assert(actual === expected);
});
