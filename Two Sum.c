#include <stdio.h>
#include <stdlib.h>

/**
 * Note: The returned array must be malloced, assume caller calls free().
 */
int *twoSum(int *nums, int numsSize, int target, int *returnSize)
{
    int *result = (int *)malloc(2 * sizeof(int));
    for (int i = 0; i < numsSize - 1; i++)
    {
        for (int j = i + 1; j < numsSize; j++)
        {
            int sum = nums[i] + nums[j];
            if (sum == target)
            {
                result[0] = i;
                result[1] = j;
                *returnSize = 2;
                return result;
            }
        }
    }
    *returnSize = 0;
    return NULL;
}

int main()
{
    int nums[] = {3, 2, 4};
    const int numsSize = sizeof(nums) / sizeof(int);
    const int target = 6;
    int returnSize = 2;

    int *result = twoSum(nums, numsSize, target, &returnSize);
    for (int i = 0; i < 2; i++)
    {
        printf("%d ", result[i]);
    }
    free(result);

    return 0;
}