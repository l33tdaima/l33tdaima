// g++ -std=c++11 *.cpp -o test && ./test && rm -f test
#include <iostream>
#include <vector>

using namespace std;

class NumMatrix {
    vector<vector<int>> sums; // (rows + 1) * (cols + 1)
public:
    NumMatrix(vector<vector<int>> matrix)
        : sums(matrix.size() + 1,
            vector<int>(matrix[0].size() + 1, 0))
    {
        for (int r = 0; r < matrix.size(); ++r) {
            vector<int> rowsum(matrix[r].size() + 1, 0);
            for (int c = 0; c < matrix[r].size(); ++c) {
                rowsum[c + 1] = rowsum[c] + matrix[r][c];
                sums[r + 1][c + 1] = sums[r][c + 1] + rowsum[c + 1];
            }
        }
    }

    int sumRegion(int row1, int col1, int row2, int col2)
    {
        return sums[row2 + 1][col2 + 1]
            - sums[row2 + 1][col1]
            - sums[row1][col2 + 1]
            + sums[row1][col1];
    }
};

/**
 * Your NumMatrix object will be instantiated and called as such:
 * NumMatrix obj = new NumMatrix(matrix);
 * int param_1 = obj.sumRegion(row1,col1,row2,col2);
 */
int main(int argc, char* argv[])
{
    NumMatrix obj(
        { { 3, 0, 1, 4, 2 },
            { 5, 6, 3, 2, 1 },
            { 1, 2, 0, 1, 5 },
            { 4, 1, 0, 1, 7 },
            { 1, 0, 3, 0, 5 } });
    cout << "sumRegion(2, 1, 4, 3) -> " << obj.sumRegion(2, 1, 4, 3) << endl;
    cout << "sumRegion(1, 1, 2, 2) -> " << obj.sumRegion(1, 1, 2, 2) << endl;
    cout << "sumRegion(1, 2, 2, 4) -> " << obj.sumRegion(1, 2, 2, 4) << endl;
    return 0;
}
