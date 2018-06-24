// g++ -std=c++11 *.cpp -o test && ./test && rm test
#include <vector>
#include <iostream>

using namespace std;

class NumMatrix {
    vector<vector<int>> d_matrix; // value storage R x C
    vector<vector<int>> d_bitree; // partial sum (R+1)x(C+1)
    
    static int lowbit(int x) { return x & (-x); }
    
    int query(int ir, int ic) {
        if (d_matrix.size() == 0 || d_matrix[0].size() == 0) { return 0; }
        int sum = 0;
        for (int i = ir; i > 0; i -= lowbit(i)) {
            for (int j = ic; j > 0; j -= lowbit(j)) {
                sum += d_bitree[i][j];
            }
        }
        return sum;
    }
public:
    NumMatrix(vector<vector<int>> matrix) {
        if (matrix.size() == 0 || matrix[0].size() == 0) { return; }
        d_matrix = vector<vector<int>>(matrix.size(), vector<int>(matrix[0].size(), 0));
        d_bitree = vector<vector<int>>(matrix.size() + 1, vector<int>(matrix[0].size() + 1, 0));
        for (int i = 0; i < matrix.size(); ++i) {
            for (int j = 0; j < matrix[0].size(); ++j) {
                update(i, j, matrix[i][j]);
            }
        }
    }
    
    void update(int row, int col, int val) {
        if (d_matrix.size() == 0 || d_matrix[0].size() == 0) { return; }
        int delta = val - d_matrix[row][col];
        d_matrix[row][col] = val;
        for (int i = row + 1; i < d_bitree.size(); i += lowbit(i)) {
            for (int j = col + 1; j < d_bitree[0].size(); j += lowbit(j)) {
                d_bitree[i][j] += delta;
            }
        }
    }

    int sumRegion(int row1, int col1, int row2, int col2) {
        if (d_matrix.size() == 0 || d_matrix[0].size() == 0) { return 0; }
        return (query(row2 + 1, col2 + 1)
                - query(row2 + 1, col1)
                - query(row1, col2 + 1)
                + query(row1, col1));
    }
};

/**
 * Your NumMatrix object will be instantiated and called as such:
 * NumMatrix obj = new NumMatrix(matrix);
 * obj.update(row,col,val);
 * int param_2 = obj.sumRegion(row1,col1,row2,col2);
 */

int main(int argc, char const *argv[])
{
    NumMatrix nm({
        {3, 0, 1, 4, 2},
        {5, 6, 3, 2, 1},
        {1, 2, 0, 1, 5},
        {4, 1, 0, 1, 7},
        {1, 0, 3, 0, 5}
    });
    cout << "sumRegion(2,1,4,3) = 8 -> "
         << nm.sumRegion(2,1,4,3) << endl;
    nm.update(3,2,2);
    cout << "sumRegion(2,1,4,3) = 10 -> "
         << nm.sumRegion(2,1,4,3) << endl;
    return 0;
}
