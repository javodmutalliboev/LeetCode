#include <stdbool.h>
#include <stdio.h>

void stack_push(char *stack, char c, int *i)
{
    stack[*i] = c;
    stack[++(*i)] = '\0';
}

bool isValid(char *s)
{
    char stack[10000] = {'\0'};
    int i = 0;
    while (*s != '\0')
    {
        switch (*s)
        {
        case '(':
            stack_push(stack, *s, &i);
            break;
        case ')':
            if (i != 0)
            {
                if (stack[i - 1] != '(')
                {
                    return false;
                }
                stack[--i] = '\0';
            }
            else
            {
                return false;
            }
            break;
        case '[':
            stack_push(stack, *s, &i);
            break;
        case ']':
            if (i != 0)
            {
                if (stack[i - 1] != '[')
                {
                    return false;
                }
                stack[--i] = '\0';
            }
            else
            {
                return false;
            }
            break;
        case '{':
            stack_push(stack, *s, &i);
            break;
        case '}':
            if (i != 0)
            {
                if (stack[i - 1] != '{')
                {
                    return false;
                }
                stack[--i] = '\0';
            }
            else
            {
                return false;
            }
            break;
        default:
            printf("*s: %c\n", *s);
            break;
        }
        s++;
    }
    if (*stack)
    {
        return false;
    }
    return true;
}

int main()
{
    bool result = isValid("]");
    printf("%s\n", result ? "true" : "false");

    return 0;
}