/**
 * @param {string[]} words1
 * @param {string[]} words2
 * @param {string[][]} pairs
 * @return {boolean}
 */
var areSentencesSimilar = function(words1, words2, pairs) {
    if (words1.length !== words2.length) return false;
    const map = new Map();
    for (let p of pairs) {
        let s = map.get(p[0]);
        if (s === undefined) s = new Set();
        s.add(p[1]);
        map.set(p[0], s);
    }
    for (let i = 0; i < words1.length; ++i) {
        if (words1[i] === words2[i]) continue;
        if (map.has(words1[i]) && map.get(words1[i]).has(words2[i])) continue;
        if (map.has(words2[i]) && map.get(words2[i]).has(words1[i])) continue;
        return false;
    }
    return true;
};
// TEST
[
    {
        words1: ["great"],
        words2: ["great"],
        pairs: [],
        expected: true
    },
    {
        words1: ["great"],
        words2: ["fine"],
        pairs: [],
        expected: false
    },
    {
        words1: ["great", "acting", "skills"],
        words2: ["fine", "drama", "talent"],
        pairs: [["great", "fine"], ["acting","drama"], ["skills","talent"]],
        expected: true
    },
    {
        words1: ["an","extraordinary","meal"],
        words2: ["one","good","dinner"],
        pairs: [["great","good"],["extraordinary","good"],["well","good"],["wonderful","good"],["excellent","good"],["fine","good"],["nice","good"],["any","one"],["some","one"],["unique","one"],["the","one"],["an","one"],["single","one"],["a","one"],["truck","car"],["wagon","car"],["automobile","car"],["auto","car"],["vehicle","car"],["entertain","have"],["drink","have"],["eat","have"],["take","have"],["fruits","meal"],["brunch","meal"],["breakfast","meal"],["food","meal"],["dinner","meal"],["super","meal"],["lunch","meal"],["possess","own"],["keep","own"],["have","own"],["extremely","very"],["actually","very"],["really","very"],["super","very"]],
        expected: true
    },
    {
        words1: ["this","summer","thomas","get","actually","actually","rich","and","possess","the","actually","great","and","fine","vehicle","every","morning","he","drives","one","nice","car","around","one","great","city","to","have","single","super","excellent","super","as","his","brunch","but","he","only","eat","single","few","fine","food","as","some","fruits","he","wants","to","eat","an","unique","and","actually","healthy","life"],
        words2: ["this","summer","thomas","get","very","very","rich","and","possess","the","very","fine","and","well","car","every","morning","he","drives","a","fine","car","around","unique","great","city","to","take","any","really","wonderful","fruits","as","his","breakfast","but","he","only","drink","an","few","excellent","breakfast","as","a","super","he","wants","to","drink","the","some","and","extremely","healthy","life"],
        pairs: [["good","nice"],["good","excellent"],["good","well"],["good","great"],["fine","nice"],["fine","excellent"],["fine","well"],["fine","great"],["wonderful","nice"],["wonderful","excellent"],["wonderful","well"],["wonderful","great"],["extraordinary","nice"],["extraordinary","excellent"],["extraordinary","well"],["extraordinary","great"],["one","a"],["one","an"],["one","unique"],["one","any"],["single","a"],["single","an"],["single","unique"],["single","any"],["the","a"],["the","an"],["the","unique"],["the","any"],["some","a"],["some","an"],["some","unique"],["some","any"],["car","vehicle"],["car","automobile"],["car","truck"],["auto","vehicle"],["auto","automobile"],["auto","truck"],["wagon","vehicle"],["wagon","automobile"],["wagon","truck"],["have","take"],["have","drink"],["eat","take"],["eat","drink"],["entertain","take"],["entertain","drink"],["meal","lunch"],["meal","dinner"],["meal","breakfast"],["meal","fruits"],["super","lunch"],["super","dinner"],["super","breakfast"],["super","fruits"],["food","lunch"],["food","dinner"],["food","breakfast"],["food","fruits"],["brunch","lunch"],["brunch","dinner"],["brunch","breakfast"],["brunch","fruits"],["own","have"],["own","possess"],["keep","have"],["keep","possess"],["very","super"],["very","actually"],["really","super"],["really","actually"],["extremely","super"],["extremely","actually"]],
        expected: true
    }
].forEach(t => {
    let actual = areSentencesSimilar(t.words1, t.words2, t.pairs);
    console.log("", t.words1, "is similar to", t.words2, "with pair", t.pairs,
                "->", actual);
    console.assert(actual === t.expected);
});
