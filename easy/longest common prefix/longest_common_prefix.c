#include <stdio.h>
#include <stdlib.h>
#include <string.h>

// int compare(const void *a, const void *b)
// {
//     return strlen(*(const char **)a) - strlen(*(const char **)b);
// }

// void sort(char **strs, int strsSize)
// {
//     qsort(strs, strsSize, sizeof(char *), compare);
// }

char *longestCommonPrefix(char **strs, int strsSize)
{
    if (strsSize == 0)
        return "";

    // sort(strs, strsSize);

    char *prefix = (char *)malloc(strlen(strs[0]) + 1);
    strcpy(prefix, strs[0]);

    for (int i = 1; i < strsSize; i++)
    {
        int j = 0;
        while (prefix[j] && strs[i][j] && prefix[j] == strs[i][j])
        {
            j++;
        }
        prefix[j] = '\0';
        if (prefix[0] == '\0')
        {
            break;
        }
    }
    return prefix;
}

int main()
{
    char *strs[] = {"flower", "flow", "flight"};
    int size = sizeof(strs) / sizeof(strs[0]);
    printf("%s\n", longestCommonPrefix(strs, size));
}