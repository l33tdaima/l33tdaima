// g++ -std=c++11 *.cpp -o test && ./test && rm -f test
#include <vector>
#include <string>
#include <iostream>

using namespace std;

class Solution {
public:
    string addBoldTag(string s, vector<string>& dict) {
        vector<bool> mask(s.length(), false);
        for (auto& w: dict) {
            size_t found = 0;
            while ((found = s.find(w, found)) != string::npos) {
                for (int i = 0; i < w.length(); ++i) {
                    mask[found + i] = true;
                }
                found ++;
            }
        }
        string ans;
        for (int i = 0; i < s.length(); ++i) {
            if (mask[i] && (i == 0 || !mask[i-1])) {
                ans += "<b>";
            }
            ans.push_back(s[i]);
            if (mask[i] && (i == s.length() - 1 || !mask[i+1])) {
                ans += "</b>";
            }
        }
        return ans;
    }
};
// TEST
struct Test {
    vector<string> dict;
    string s;
    string expected;
    void run() {
        Solution sol;
        string actual = sol.addBoldTag(s, dict);
        cout << "Bold words in string '" << s << "' -> "
             << actual << ", "
             << boolalpha << (expected == actual) << endl;
    }
};
int main(int argc, char const *argv[])
{
    vector<Test> tests = {
        {
            {"ab", "bc"},
            "zzzzz",
            "zzzzz"
        },
        {
            {"ab", "z"},
            "zzzzz",
            "<b>zzzzz</b>"
        },
        {
            {"ab", "bc"},
            "aabcd",
            "a<b>abc</b>d"
        },
        {
            {"di","r","buhozb","lofjmyjj","qagllw","zzuid","loyugfh","w","hcfg","ttd","vjqigvx","u","mhbivve","x","nzbvyfzx","zs","j","zgtud","zm","huevyex","szwigrlwzm","vlrjmobu","b","h","gcmdgyv","anyfelm","vtcejv","myjjzn","jznnj","awcxmjn","lw","sju","szszwigrl","eze","ffikvecua","bklrhsju","gyazwel","pdhnsxsod","zn","rhsjus","zk","gctgu","vzndt","mfd","jlws","j","zxgaudyo","apa","znvixpdh","tgubzczgt"},
            "wwcyuaqzgtudmpjkluqoseslygywzkixjqghsocvjqigvxwqloyugfhcjscjghqmiglgyazwelshzapaezqgmcmrmfrfzttdgquizyducbvxzzuiddcnwuaapdunzlbagnifndbjyalqqgbramhbivvervxrtcszszwigrlwzmuteyswzagudtpvlrjmobuhozbghkhvoxawcxmjnazlqlkqqqnoclufgkovbokvkoezeknwhcfgcenvaablpvtcejvzndtzncrelhedwlwiqgdbdgctgubzczgtovufncicjlwsmfdcrqeaghuevyexqdhffikvecuazrelofjmyjjznnjdkimbklrhsjusbstqhvlejtjcczqnzbvyfzxgaudyosckysmminoanjmbafhtnbrrzqagllwxlxmjanyfelmwruftlzuuhbsjexoobjkmymlitiwjtdxscotzvznvixpdhnsxsodieatipiaodgcmdgyv",
            "<b>ww</b>cy<b>u</b>aq<b>zgtud</b>mp<b>j</b>kl<b>u</b>qoseslygy<b>wzk</b>i<b>xj</b>qg<b>h</b>soc<b>vjqigvxw</b>q<b>loyugfh</b>c<b>j</b>sc<b>j</b>g<b>h</b>qmigl<b>gyazwel</b>s<b>h</b>z<b>apa</b>ezqgmcm<b>r</b>mf<b>r</b>fz<b>ttd</b>gq<b>u</b>izyd<b>u</b>c<b>b</b>v<b>xzzuid</b>dcn<b>wu</b>aapd<b>u</b>nzl<b>b</b>agnifnd<b>bj</b>yalqqg<b>br</b>a<b>mhbivver</b>v<b>xr</b>tc<b>szszwigrlwzmu</b>teys<b>w</b>zag<b>u</b>dtp<b>vlrjmobuhozb</b>g<b>h</b>k<b>h</b>vo<b>xawcxmjn</b>azlqlkqqqnocl<b>u</b>fgkov<b>b</b>okvko<b>eze</b>kn<b>whcfg</b>cenvaa<b>b</b>lp<b>vtcejvzndtzn</b>c<b>r</b>el<b>h</b>ed<b>wlw</b>iqgd<b>b</b>d<b>gctgubzczgt</b>ov<b>u</b>fncic<b>jlwsmfd</b>c<b>r</b>qeag<b>huevyex</b>qd<b>hffikvecua</b>z<b>r</b>e<b>lofjmyjjznnj</b>dkim<b>bklrhsjusb</b>stq<b>h</b>vle<b>j</b>t<b>j</b>cczq<b>nzbvyfzxgaudyo</b>sckysmminoan<b>j</b>m<b>b</b>af<b>h</b>tn<b>brr</b>z<b>qagllwx</b>l<b>x</b>m<b>janyfelmwru</b>ftlz<b>uuhb</b>s<b>j</b>e<b>x</b>oo<b>bj</b>kmymliti<b>wj</b>td<b>x</b>scotzv<b>znvixpdhnsxsodi</b>eatipiaod<b>gcmdgyv</b>"
        }
    };
    for (auto& t: tests) t.run();
    return 0;
}
