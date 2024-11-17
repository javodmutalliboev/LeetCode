#include <stdio.h>
#include <stdbool.h>

/**
 * Definition for singly-linked list. */

struct ListNode
{
    int val;
    struct ListNode *next;
};

struct ListNode dummy = {.val = 0, .next = NULL};
struct ListNode *mergeTwoLists(struct ListNode *list1, struct ListNode *list2)
{
    struct ListNode *current = &dummy;

    while (list1 && list2)
    {
        if (list1->val < list2->val)
        {
            current->next = list1;
            list1 = list1->next;
        }
        else
        {
            current->next = list2;
            list2 = list2->next;
        }
        current = current->next;
    }

    if (list1)
    {
        current->next = list1;
    }
    else
    {
        current->next = list2;
    }

    return dummy.next;

    /*

    if (!list1)
    {
        return list2;
    }
    else if (!list2)
    {
        return list1;
    }
    else if (!list1 && !list2)
    {
        return NULL;
    }

    struct ListNode *head = list1;
    while (head->next)
    {
        head = head->next;
    }
    head->next = list2;

    head = list1;
    int length = 0;
    while (head)
    {
        length++;
        head = head->next;
    }

    head = list1;
    while (length--)
    {
        struct ListNode *h = head;
        bool finished = true;
        while (h->next)
        {
            if (h->val > h->next->val)
            {
                finished = false;
                int temp = h->val;
                h->val = h->next->val;
                h->next->val = temp;
            }
            h = h->next;
        }
        if (finished)
        {
            break;
        }
    }

    return list1;
    */
}

int main()
{
    struct ListNode four1 = {.val = 4, .next = NULL};
    struct ListNode two = {.val = 2, .next = &four1};
    struct ListNode list1 = {.val = 1, .next = &two};

    struct ListNode four2 = {.val = 4, .next = NULL};
    struct ListNode three = {.val = 3, .next = &four2};
    struct ListNode list2 = {.val = 1, .next = &three};

    struct ListNode *mergedList = mergeTwoLists(&list1, &list2);
    while (mergedList)
    {
        printf("%d -> ", mergedList->val);
        mergedList = mergedList->next;
    }

    return 0;
}