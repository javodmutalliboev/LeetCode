#include <stdio.h>

enum Romans
{
    I = 1,
    V = 5,
    X = 10,
    L = 50,
    C = 100,
    D = 500,
    M = 1000
};

int romanToInt(char *);

int main()
{
    puts("How are you?");
    printf("%d\n", romanToInt("III"));
    printf("%d\n", romanToInt("LVIII"));
    printf("%d\n", romanToInt("MCMXCIV"));

    return 0;
}

int romanToInt(char *s)
{
    int total = 0;
    int i = 0;

    while (s[i] != '\0')
    {
        switch (s[i])
        {
        case 'I':
            total += I;
            break;
        case 'V':
            total += V;
            break;
        case 'X':
            total += X;
            break;
        case 'L':
            total += L;
            break;
        case 'C':
            total += C;
            break;
        case 'D':
            total += D;
            break;
        case 'M':
            total += M;
            break;
        default:
            printf("Invalid character: %c\n", s[i]);
            return -1; // Return an error code for invalid characters
        }
        i++;
    }
    return total;
}