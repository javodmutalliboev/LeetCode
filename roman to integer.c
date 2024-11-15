#include <stdio.h>

enum RI
{
    I = 1,
    V = 5,
    X = 10,
    L = 50,
    C = 100,
    D = 500,
    M = 1000
};

int integer(char roman)
{
    switch (roman)
    {
    case 'I':
        return I;
        break;
    case 'V':
        return V;
        break;
    case 'X':
        return X;
        break;
    case 'L':
        return L;
        break;
    case 'C':
        return C;
        break;
    case 'D':
        return D;
        break;
    case 'M':
        return M;
        break;
    default:
        return -1;
    }
}

int romanToInt(char *s)
{
    char *useS = s;
    int length = 0;
    while (*useS != '\0')
    {
        length++;
        useS++;
    }
    useS = s;

    int sum = 0;
    for (int i = 0; i < length; i++)
    {
        if (i == 0)
        {
            sum += integer(useS[i]);
        }
        else if (integer(useS[i]) > integer(useS[i - 1]))
        {
            sum += (integer(useS[i]) - integer(useS[i - 1]) * 2);
        }
        else
        {
            sum += integer(useS[i]);
        }
    }

    return sum;
}

int main()
{
    char *s = "MCMXCIV";
    romanToInt(s);

    return 0;
}