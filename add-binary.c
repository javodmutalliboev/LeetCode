#include <stdio.h>
#include <stdlib.h>

char resultUse[10000];

char *addBinary(char *a, char *b)
{
    char *aUse = a;
    char *bUse = b;
    int aLength = 0;
    int bLength = 0;
    while (*aUse != '\0')
    {
        aLength++;
        aUse++;
    }
    while (*bUse != '\0')
    {
        bLength++;
        bUse++;
    }
    if (aLength == 0)
    {
        return b;
    }
    if (bLength == 0)
    {
        return a;
    }
    aUse = a;
    bUse = b;
    int carry = 0;
    if (aLength > bLength)
    {
        for (int i = 0; i < aLength - bLength; i++)
        {
            resultUse[i] = '0';
        }
        for (int i = aLength - bLength, j = 0; i < aLength; i++, j++)
        {
            resultUse[i] = b[j];
        }
        for (int i = aLength - 1; i >= 0; i--)
        {
            if (aUse[i] == '0' && resultUse[i] == '0')
            {
                if (carry == 1)
                {
                    resultUse[i] = '1';
                    carry = 0;
                }
                else
                {
                    resultUse[i] = '0';
                }
            }
            else if (aUse[i] == '0' && resultUse[i] == '1')
            {
                if (carry == 1)
                {
                    resultUse[i] = '0';
                    carry = 1;
                }
                else
                {
                    resultUse[i] = '1';
                }
            }
            else if (aUse[i] == '1' && resultUse[i] == '0')
            {
                if (carry == 1)
                {
                    resultUse[i] = '0';
                    carry = 1;
                }
                else
                {
                    resultUse[i] = '1';
                }
            }
            else if (aUse[i] == '1' && resultUse[i] == '1')
            {
                if (carry == 1)
                {
                    resultUse[i] = '1';
                }
                else
                {
                    resultUse[i] = '0';
                }
                carry = 1;
            }
            if (i == 0)
            {
                // result = (char *)realloc(result, (aLength + 1) * sizeof(char));
                if (carry == 1)
                {
                    int temp = resultUse[0];
                    for (int j = 1; j < aLength + 1; j++)
                    {
                        int t2 = resultUse[j];
                        resultUse[j] = temp;
                        temp = t2;
                    }
                    resultUse[0] = '1';
                    resultUse[aLength + 1] = '\0';
                }
                else
                {
                    resultUse[aLength] = '\0';
                }
            }
        }
    }
    else
    {
        for (int i = 0; i < bLength - aLength; i++)
        {
            resultUse[i] = '0';
        }
        for (int i = bLength - aLength, j = 0; i < bLength; i++, j++)
        {
            resultUse[i] = a[j];
        }
        for (int i = bLength - 1; i >= 0; i--)
        {
            if (bUse[i] == '0' && resultUse[i] == '0')
            {
                if (carry == 1)
                {
                    resultUse[i] = '1';
                    carry = 0;
                }
                else
                {
                    resultUse[i] = '0';
                }
            }
            else if (bUse[i] == '0' && resultUse[i] == '1')
            {
                if (carry == 1)
                {
                    resultUse[i] = '0';
                    carry = 1;
                }
                else
                {
                    resultUse[i] = '1';
                }
            }
            else if (bUse[i] == '1' && resultUse[i] == '0')
            {
                if (carry == 1)
                {
                    resultUse[i] = '0';
                    carry = 1;
                }
                else
                {
                    resultUse[i] = '1';
                }
            }
            else if (bUse[i] == '1' && resultUse[i] == '1')
            {
                if (carry == 1)
                {
                    resultUse[i] = '1';
                }
                else
                {
                    resultUse[i] = '0';
                }
                carry = 1;
            }
            if (i == 0)
            {
                // result = (char *)realloc(result, (bLength + 1) * sizeof(char));
                if (carry == 1)
                {

                    int temp = resultUse[0];
                    for (int j = 1; j < bLength + 1; j++)
                    {
                        int t2 = resultUse[j];
                        resultUse[j] = temp;
                        temp = t2;
                    }
                    resultUse[0] = '1';
                    resultUse[bLength + 1] = '\0';
                }
                else
                {
                    resultUse[bLength] = '\0';
                }
            }
        }
    }
    return resultUse;
}

int main()
{
    char *test_case1[] = {"1", "1"};
    char *test_case2[] = {"1010", "1011"};
    /*
    addBinary(test_case2[0], test_case2[1]);
    while (*result)
    {
        printf("%c\n", *result);
        result++;
    }
    */
    printf("\"%s\"\n", addBinary(test_case1[0], test_case1[1]));
    printf("\"%s\"\n", addBinary(test_case2[0], test_case2[1]));

    return 0;
}