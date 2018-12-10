/**
 * @param {string} str
 * @return {string}
 */
var toLowerCase = function(str) {
  let ans = "";
  for (let i = 0; i < str.length; ++i) {
    let c = str.charCodeAt(i);
    if (c >= 65 && c <= 90) {
      ans += String.fromCharCode(c + 32);
    } else {
      ans += str[i];
    }
  }
  return ans;
};
var toLowerCaseFast = function(str) {
  return str.replace(/[A-Z]/g, c => String.fromCharCode(c.charCodeAt(0) + 32));
};

// TESTS
["Hello", "here", "LOVELY", "23AZ090"].forEach(t => {
  console.log("toLowerCase(" + t + ") ->", toLowerCaseFast(t));
});
