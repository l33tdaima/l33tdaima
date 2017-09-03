# 69. Sqrt(x) (Easy)

Implement int sqrt(int x).

Compute and return the square root of x.

Solution:
I believe the question is meant to test New iterative methods, to solve the root of equation f(x) = x^2 - s = 0, one will start from the initial guess, iterates using the formula x1 = x0 - f(x0)/f'(x0), then x1 = x0 - (x0^2 - s)/(2*x0) = 1/2 * (x0 + s/x0).
