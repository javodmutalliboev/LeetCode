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
    int first;
    int second;
    int last_index;
    if (size == 1) {
        function(s[0], &total);
        return total;
    }
    for (i = 0; i < size - 1;)
    {
        function(s[i], &first);
        last_index = i + 1;
        function(s[last_index], &second);
        if (first >= second)
        {
            printf("(first) %d + ", first);
            total += first;
            i++;
            if (i >= size - 1)
            {
                printf(" %d >= %d   ", i, size - 1);
            }
        }
        else if (first < second)
        {
            printf("(s - f) %d + ", second - first);
            total += second - first;
            i += 2;
            if (i >= size - 1)
            {
                printf(" %d >= %d   ", i, size - 1);
            }
        }
        if (i == size - 1)
        {
            printf(" %d == %d   ", i, size - 1);
            int last;
            function(s[i], &last);
            total += last;
        }
    }

    return total;
}

int function(char rome_digit, int *first)
{
    switch (rome_digit)
    {
    case 'I':
        *first = I;
        break;
    case 'V':
        *first = V;
        break;
    case 'X':
        *first = X;
        break;
    case 'L':
        *first = L;
        break;
    case 'C':
        *first = C;
        break;
    case 'D':
        *first = D;
        break;
    case 'M':
        *first = M;
        break;
    default:
        printf("Invalid character: %c\n", rome_digit);
        return -1; // Return an error code for invalid characters
    }

    return 0;
}