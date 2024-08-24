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
int function(char, int *);

int main()
{
    puts("How are you?");
    char roman1[] = "III";
    char roman2[] = "LVIII";
    char roman3[] = "MCMXCIV";
    char roman4[] = "MDCXCV";
    char roman5[] = "MCDLXXVI";
    char roman6[] = "MMMDXLI";
    printf("\b\b= %s: %d\n", roman1, romanToInt(roman1));
    printf("\b\b= %s: %d\n", roman2, romanToInt(roman2));
    printf("\b\b= %s: %d\n", roman3, romanToInt(roman3));
    printf("\b\b= %s: %d\n", roman4, romanToInt(roman4));
    printf("\b\b= %s: %d\n", roman5, romanToInt(roman5));
    printf("\b\b= %s: %d\n", roman6, romanToInt(roman6));

    return 0;
}

int romanToInt(char *s)
{
    int total = 0;
    int i = 0;

    int size = 0;
    while (s[i++] != '\0')
    {
        size++;
    }
    int prev_value = 0;
    if (size == 1)
    {
        function(s[0], &total);
        return total;
    }
    for (i = 0; i < size; i++)
    {
        int value;
        function(s[i], &value);
        if (value > prev_value)
        {
            printf("((value) %d - %d) + ", value, 2 * prev_value);
            total += value - 2 * prev_value;
        }
        else
        {
            printf("(value) %d + ", value);
            total += value;
        }
        prev_value = value;
    }

    return total;
}

int function(char rome_digit, int *value)
{
    switch (rome_digit)
    {
    case 'I':
        *value = I;
        break;
    case 'V':
        *value = V;
        break;
    case 'X':
        *value = X;
        break;
    case 'L':
        *value = L;
        break;
    case 'C':
        *value = C;
        break;
    case 'D':
        *value = D;
        break;
    case 'M':
        *value = M;
        break;
    default:
        printf("Invalid character: %c\n", rome_digit);
        return -1; // Return an error code for invalid characters
    }

    return 0;
}