/**
 * @param {string[]} emails
 * @return {number}
 */
var numUniqueEmails = function(emails) {
  const recipients = new Set();
  emails.forEach(email => {
    let [local, domain] = email.split("@", 2);
    let after = "";
    for (let c of local) {
      if (c === ".") continue;
      if (c === "+") break;
      after += c;
    }
    recipients.add(after + domain);
  });
  return recipients.size;
};
// TESTS
[
  {
    emails: [
      "test.email+alex@leetcode.com",
      "test.e.mail+bob.cathy@leetcode.com",
      "testemail+david@lee.tcode.com"
    ],
    expected: 2
  }
].forEach(t => {
  let actual = numUniqueEmails(t.emails);
  console.log("# of unique emails ->", actual);
  console.assert(actual === t.expected);
});
