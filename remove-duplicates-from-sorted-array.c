#include <stdio.h>
#include <stdbool.h>

bool find(int *nums, int numsSize, int target)
{
    for (int i = 0; i < numsSize; i++)
    {
        if (nums[i] == target)
        {
            return true;
        }
    }
    return false;
}

int removeDuplicates(int *nums, int numsSize)
{
    int unique[numsSize];
    int k = 0;
    int lastDuplicate;
    for (int i = 0; i < numsSize; i++)
    {
        if (lastDuplicate == nums[i])
        {
            continue;
        }
        bool found = find(unique, k, nums[i]);
        if (!found)
        {
            lastDuplicate = nums[i];
            unique[k] = nums[i];
            nums[k] = nums[i];
            k++;
        }
    }

    return k;
}

int main()
{
    int nums[] = {0, 0, 1, 1, 1, 2, 2, 3, 3, 4};
    int numsSize = sizeof(nums) / sizeof(int);
    printf("%d\n", removeDuplicates(nums, numsSize));

    return 0;
}