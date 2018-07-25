/**
 * // This is the robot's control interface.
 * // You should not implement it, or speculate about its implementation
 * class Robot {
 *   public:
 *     // Returns true if the cell in front is open and robot moves into the cell.
 *     // Returns false if the cell in front is blocked and robot stays in the current cell.
 *     bool move();
 *
 *     // Robot will stay in the same cell after calling turnLeft/turnRight.
 *     // Each turn will be 90 degrees.
 *     void turnLeft();
 *     void turnRight();
 *
 *     // Clean the current cell.
 *     void clean();
 * };
 */
#include <unordered_set>
#include <string>
#include <sstream>

using namespace std;

class Solution {
    bool moveUp(Robot& robot) {
        return robot.move();
    }
    bool moveLeft(Robot& robot) {
        robot.turnLeft();
        bool ret = robot.move();
        robot.turnRight();
        return ret;
    }
    bool moveRight(Robot& robot) {
        robot.turnRight();
        bool ret = robot.move();
        robot.turnLeft();
        return ret;
    }
    bool moveDown(Robot& robot) {
        robot.turnLeft();
        robot.turnLeft();
        bool ret = robot.move();
        robot.turnRight();
        robot.turnRight();
        return ret;
    }
    void dfs(Robot& robot, unordered_set<string>& visited, int row, int col) {
        ostringstream oss;
        oss << row << "," << col;
        if (visited.count(oss.str()) > 0) { return; }
        robot.clean();
        visited.emplace(oss.str());
        if (moveUp(robot)) {
            dfs(robot, visited, row - 1, col);
            moveDown(robot);
        }
        if (moveLeft(robot)) {
            dfs(robot, visited, row, col - 1);
            moveRight(robot);
        }
        if (moveRight(robot)) {
            dfs(robot, visited, row, col + 1);
            moveLeft(robot);
        }
        if (moveDown(robot)) {
            dfs(robot, visited, row + 1, col);
            moveUp(robot);
        }
    }
public:
    void cleanRoom(Robot& robot) {
        unordered_set<string> visited;
        dfs(robot, visited, 1, 3);
    }
};