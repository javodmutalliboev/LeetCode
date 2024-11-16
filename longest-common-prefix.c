#include <stdio.h>
#include <stdbool.h>

char lcp[1000];
char *longestCommonPrefix(char **strs, int strsSize)
{
    if (strsSize == 1)
    {
        int i = 0;
        while (*(strs[0]) != '\0')
        {
            lcp[i] = *(strs[0]);
            (strs[0])++;
            i++;
        }
        lcp[i] = '\0';
        return lcp;
    }
    int lcp_i = 0;
    int char_i = 0;
    while (strs[0][char_i] != '\0')
    {
        bool common = true;
        for (int i = 1; i < strsSize; i++)
        {
            if (strs[i][char_i] == '\0')
            {
                lcp[lcp_i] = '\0';
                return lcp;
            }
            if (strs[0][char_i] != strs[i][char_i])
            {
                common = false;
            }
        }
        if (common)
        {
            lcp[lcp_i] = strs[0][char_i];
            lcp_i++;
        }
        else
        {
            lcp[lcp_i] = '\0';
            return lcp;
        }
        char_i++;
    }
    lcp[lcp_i] = '\0';
    return lcp;
}

int main()
{
    char *strs[] = {"dog", "racecar", "car"};
    char *lcp = longestCommonPrefix(strs, sizeof(strs) / sizeof(char *));
    printf("%s\n", lcp);

    return 0;
}