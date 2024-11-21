#include <stdio.h>
#include <stdlib.h>

int lengthOfLastWord(char *s)
{
    char *last_word = s;
    while (*s != '\0')
    {
        if (*s == ' ' && *(s + 1) != ' ' && *(s + 1) != '\0')
        {
            last_word = s + 1;
        }
        s++;
    }
    int length = 0;
    while (*last_word != '\0' && *last_word != ' ')
    {
        length++;
        last_word++;
    }
    return length;
}

char *test_cases[] = {
    "Hello World",
    "   fly me   to   the moon  ",
    "luffy is still joyboy",
};

int main()
{
    int length = sizeof(test_cases) / sizeof(char *);
    for (int i = 0; i < length; i++)
    {
        printf("length: %d\n", lengthOfLastWord(test_cases[i]));
    }

    return 0;
}