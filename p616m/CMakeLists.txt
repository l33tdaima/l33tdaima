# mkdir -p build && cd build && cmake ../ && make && ./test

cmake_minimum_required(VERSION 3.0.0)

project(solution)

set(CMAKE_CXX_STANDARD 11)

add_executable(test add_bold_tag.cpp)
