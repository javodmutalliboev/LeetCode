#include <stdio.h>
#include <stdlib.h>

int *result;

void lg(int *result, int *returnSize)
{
    for (int i = 0; i < *returnSize; i++)
    {
        if (*returnSize == 1)
        {
            printf("{ %d }", result[0]);
        }
        else if (i == 0)
        {
            printf("{ %d, ", result[i]);
        }
        else if (i == *returnSize - 1)
        {
            printf("%d }\n", result[i]);
        }
        else
        {
            printf("%d, ", result[i]);
        }
    }
}

/**
 * Note: The returned array must be malloced, assume caller calls free().
 */
int *plusOne(int *digits, int digitsSize, int *returnSize)
{
    int digitsSizeUse = digitsSize;
    int sum = 0;
    result = (int *)malloc(digitsSize * sizeof(int));
    if (!digitsSize)
    {
        *returnSize = 0;
        return result;
    }

call:
    if (digitsSize)
    {
        sum = digits[digitsSize - 1] + 1;
        if (sum / 10 == 0)
        {
            digits[digitsSize - 1] = sum;
        }
        else
        {
            digitsSize--;
            digits[digitsSize] = 0;
            goto call;
        }
        for (int i = 0; i < digitsSizeUse; i++)
        {
            result[i] = digits[i];
        }
        *returnSize = digitsSizeUse;
    }
    else
    {
        result = (int *)realloc(result, (digitsSizeUse + 1) * sizeof(int));
        result[0] = 1;
        for (int i = 0; i < digitsSizeUse; i++)
        {
            result[i + 1] = digits[i];
        }
        *returnSize = digitsSizeUse + 1;
    }

    return result;
}

int main()
{
    int test_case1[] = {9, 9, 9};
    int test_case2[] = {4, 0, 0, 1};
    int test_case3[] = {7, 2, 8, 5, 0, 9, 1, 2, 9, 5, 3, 6, 6, 7, 3, 2, 8, 4, 3, 7, 9, 5, 7, 7, 4, 7, 4, 9, 4, 7, 0, 1, 1, 1, 7, 4, 0, 0, 6};
    int tc3_length = sizeof(test_case3) / sizeof(int);
    printf("tc3_length: %d\n", tc3_length);

    int returnSize = 0;
    lg(plusOne(test_case1, 3, &returnSize), &returnSize);
    lg(plusOne(test_case2, 4, &returnSize), &returnSize);
    lg(plusOne(test_case3, tc3_length, &returnSize), &returnSize);
    free(result);

    return 0;
}