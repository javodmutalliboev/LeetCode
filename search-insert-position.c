#include <stdio.h>
#include <stdbool.h>

int searchInsert(int *nums, int numsSize, int target)
{
    int index = -1;
    bool notFound = false;
    for (int i = 0; i < numsSize; i++)
    {
        if (notFound)
        {
            if (target < nums[i])
            {
                index = i;
                break;
            }
        }
        if (!notFound && target == nums[i])
        {
            index = i;
            break;
        }
        if (!notFound && i == numsSize - 1)
        {
            notFound = true;
            i = -1;
        }
    }
    if (index == -1)
    {
        index = numsSize;
    }
    return index;
}

struct TestCase
{
    int nums[4];
    int numsSize;
    int target;
};

int main()
{
    int nums[] = {1, 3, 5, 6};
    int target = 5;
    struct TestCase test_cases[] = {
        {.nums = {1, 4, 5, 6}, .numsSize = 4, .target = 5},
        {.nums = {1, 3, 5, 6}, .numsSize = 4, .target = 2},
        {.nums = {1, 3, 5, 6}, .numsSize = 4, .target = 7},
        {.nums = {1, 3, 5, 6}, .numsSize = 4, .target = 0}};
    int length = sizeof(test_cases) / sizeof(struct TestCase);
    for (int i = 0; i < length; i++)
    {
        struct TestCase test_case = test_cases[i];
        const int index = searchInsert(test_case.nums, test_case.numsSize, test_case.target);
        printf("index: %d\n", index);
    }

    return 0;
}