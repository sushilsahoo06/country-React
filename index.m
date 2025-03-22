% Simple MATLAB Calculator
clc;
clear;

disp('Simple MATLAB Calculator');

a = input('Enter the first number: ');
b = input('Enter the second number: ');
operator = input('Enter an operator (+, -, *, /): ', 's');

switch operator
    case '+'
        result = a + b;
        fprintf('Result: %.2f + %.2f = %.2f\n', a, b, result);
    case '-'
        result = a - b;
        fprintf('Result: %.2f - %.2f = %.2f\n', a, b, result);
    case '*'
        result = a * b;
        fprintf('Result: %.2f * %.2f = %.2f\n', a, b, result);
    case '/'
        if b ~= 0
            result = a / b;
            fprintf('Result: %.2f / %.2f = %.2f\n', a, b, result);
        else
            disp('Error: Division by zero is not allowed.');
        end
    otherwise
        disp('Invalid operator. Please use +, -, *, or /.');
end