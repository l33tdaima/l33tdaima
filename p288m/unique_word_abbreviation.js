
const abbr = function(word) {
    let len = word.length;
    return len > 2 ? word[0] + (len - 2) + word[len - 1] : word;
};

/**
 * @param {string[]} dictionary
 */
var ValidWordAbbr = function(dictionary) {
    this.abbrMap = new Map();
    for (let word of dictionary) {
        let a = abbr(word);
        let v = this.abbrMap.get(a);
        if (v === undefined) {
            this.abbrMap.set(a, new Set([word]));
        } else {
            v.add(word);
        }
    }
};

/** 
 * @param {string} word
 * @return {boolean}
 */
ValidWordAbbr.prototype.isUnique = function(word) {
    let v = this.abbrMap.get(abbr(word));
    return v === undefined || (v.size === 1 && v.has(word));
};

/** 
 * Your ValidWordAbbr object will be instantiated and called as such:
 * var obj = Object.create(ValidWordAbbr).createNew(dictionary)
 * var param_1 = obj.isUnique(word)
 */
[
    {
        dictionary: [ "deer", "door", "cake", "card" ],
        tests: [
            ["dear", false],
            ["cart", true],
            ["cane", false],
            ["make", true],
        ]
    },
    {
        dictionary: [ "hello" ],
        tests: [
            ["hello", true],
        ]
    },
].forEach(test => {
    let obj = new ValidWordAbbr(test.dictionary);
    console.log("Testing dictionary:", test.dictionary);
    test.tests.forEach(t => {
        let act = obj.isUnique(t[0]);
        console.log("  isUnique(\"" + t[0] + "\") ->", act);
        console.assert(t[1] === act);
    });
});
