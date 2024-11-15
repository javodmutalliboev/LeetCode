#include <stdio.h>
#include <stdbool.h>

unsigned powerTen(int n)
{
    if (n == 0)
    {
        return 1;
    }
    return 10 * powerTen(n - 1);
}

bool isPalindrome(int x)
{
    if (x < 0)
    {
        return false;
    }
    else if (x < 10)
    {
        return true;
    }
    else if (x % 10 == 0)
    {
        return false;
    }

    unsigned long long useX = x;
    int power = -1;
    while (useX)
    {
        power++;
        useX /= 10;
    }
    useX = x;

    unsigned long long reverse = 0;
    while (useX)
    {
        // printf("useX: %llu\n", useX);
        // printf("(useX % 10): %llu\n", useX % 10);
        // printf("powerTen(%d): %llu\n", power, powerTen(power));
        // printf("%llu * %llu: %llu\n", useX % 10, powerTen(power), useX % 10 * powerTen(power));
        reverse += (useX % 10) * powerTen(power--);
        // printf("reverse: %llu\n", reverse);
        useX /= 10;
    }
    if (x == reverse)
    {
        return true;
    }

    return false;
}

int main()
{
    isPalindrome(1234567899);

    return 0;
}