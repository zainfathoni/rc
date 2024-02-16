# Task 1

## Solution

The problem is caused by race condition. To ensure the displayedSearchResults is
always the latest response, we should cancel prior requests before making a new
one.

It can be done by using
[AbortController](https://developer.mozilla.org/en-US/docs/Web/API/AbortController)
to cancel the ongoing fetch request.
