
#include <stdio.h>
#include <stdbool.h>

int strStr(char *haystack, char *needle)
{
    char *needle_use = needle;
    int index = -1;
    int needle_length = 0;
    while (*needle_use != '\0')
    {
        needle_length++;
        needle_use++;
    }
    int k = 0;
    while (*haystack != '\0')
    {
        char *haystack_use = haystack;
        bool found = true;
        for (int i = 0; i < needle_length; i++)
        {
            if (haystack_use[i] == '\0')
            {
                found = false;
                break;
            }
            if (haystack_use[i] != needle[i])
            {
                found = false;
                break;
            }
        }
        if (found)
        {
            index = k;
            break;
        }
        haystack++;
        k++;
    }
    return index;
}

int main()
{
    char *haystack = "leetcode";
    char *needle = "leeto";
    printf("Needle found at index %d.\n", strStr(haystack, needle));

    return 0;
}