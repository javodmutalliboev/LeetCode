#include <stdio.h>

int removeElement(int *nums, int numsSize, int val)
{
    int k = 0;
    for (int i = 0; i < numsSize; i++)
    {
        if (nums[i] != val)
        {
            nums[k] = nums[i];
            k++;
        }
    }
    return k;
}

int main()
{
    int nums[] = {3, 2, 2, 3};
    int numsSize = sizeof(nums) / sizeof(int);
    int val = 3;
    printf("\n%d\n", removeElement(nums, numsSize, val));
    for (int i = 0; i < numsSize; i++)
    {
        printf("%d, ", nums[i]);
    }

    return 0;
}