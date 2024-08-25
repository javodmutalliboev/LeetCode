#include <stdio.h>
#include <stdbool.h>
#include <math.h>
#include <stdlib.h>

bool isValid(char *);

int main()
{
    char *s1 = "()";
    char *s2 = "(]";
    char *s3 = "([])";
    char *s4 = "((()))";

    printf("%s: %s\n", s1, isValid(s1) ? "True" : "False");
    printf("%s: %s\n", s2, isValid(s2) ? "True" : "False");
    printf("%s: %s\n", s3, isValid(s3) ? "True" : "False");
    printf("%s: %s\n", s4, isValid(s4) ? "True" : "False");

    return 0;
}

bool isValid(char *s)
{
    char *used_s = s;
    int length = 0;
    while (*used_s != '\0')
    {
        length++;
        used_s++;
    }
    used_s = s;
    if (length < 1 || length > pow(10, 4))
    {
        printf("s length (%d) should"
               " be between 1 and 10^4",
               length);
        return false;
    }

    char *stack = (char *)malloc(length * sizeof(char));
    if (stack == NULL)
    {
        return false;
    }

    int top = -1;

    for (int i = 0; i < length; i++)
    {
        char c = s[i];
        if (c == '(' || c == '{' || c == '[')
        {
            stack[++top] = c;
        }
        else
        {
            if (top == -1)
            {
                free(stack);
                return false;
            }

            char topChar = stack[top--];
            if ((c == ')' && topChar != '(') || (c == '}' && topChar != '{') || (c == ']' && topChar != '['))
            {
                free(stack);
                return false;
            }
        }
    }

    bool isValid = (top == -1);
    free(stack);
    return isValid;
}