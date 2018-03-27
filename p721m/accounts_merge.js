/**
 * @param {string[][]} accounts
 * @return {string[][]}
 */
var accountsMerge = function(accounts) {
    let len = accounts.length;
    // 1. Id each original account and create reverse map
    let emailIdMap = new Map();
    for (let i = 0; i < len; ++i) {
        let acct = accounts[i];
        for (let j = 1; j < acct.length; ++j) {
            let e = emailIdMap.get(acct[j]);
            if (e === undefined) {
                e = [i];
            } else {
                e.push(i);
            }
            emailIdMap.set(acct[j], e);
        }
    } // console.log(emailIdMap);
    
    // 2. Use DFS to merge accounts
    let merged = []; // name * Set of emails
    let visited = Array.from({length: len}, v => false);
    // Given an acccount id, fill in all the emails linked using the emailIdMap
    let recDFS = function(i, emails) {
        if (visited[i]) { return; }
        visited[i] = true;
        let acct = accounts[i];
        for (let j = 1; j < acct.length; ++j) {
            emails.add(acct[j]);
            let links = emailIdMap.get(acct[j]);
            for (let id of links) {
                recDFS(id, emails);
            }
        }
    };
    for (let i = 0; i < len; ++i) {
        let emails = new Set(); 
        recDFS(i, emails);
        if (emails.size > 0) {
            let name = [accounts[i][0]];
            let list = [];
            emails.forEach(v => { list.push(v); });
            list.sort();
            merged.push(name.concat(list));
        }
    }
    return merged;
};
// TEST
[
    [],
    [
        ["John", "johnsmith@mail.com", "john00@mail.com"],
    ],
    [
        ["John", "johnsmith@mail.com", "john00@mail.com"],
        ["John", "johnnybravo@mail.com"],
        ["John", "johnsmith@mail.com", "john_newyork@mail.com"],
        ["Mary", "mary@mail.com"]
    ],
].forEach(t => {
    process.stdout.write("Merged accounts: ->\n");
    console.log(accountsMerge(t));
});
