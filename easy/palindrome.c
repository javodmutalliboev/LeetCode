#include <stdio.h>
#include <stdbool.h>

bool isPalindrome(int);

int main()
{
    isPalindrome(10);
    return 0;
}

bool isPalindrome(int x)
{
    int digit = 0;
    int temp_x = x;
    long reverse = 0;
    while (temp_x > 0)
    {
        digit = temp_x % 10;
        reverse = reverse * 10 + digit;
        printf("reverse: %ld\n", reverse);
        temp_x /= 10;
    }

    return x == reverse;
}