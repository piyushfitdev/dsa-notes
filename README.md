# 167. Two Sum II

## Idea

Since the array is sorted:

- If sum < target → move left pointer
- If sum > target → move right pointer
- If sum == target → answer found

## Dry Run

Array = [2,7,11,15]
Target = 9

```mermaid
flowchart TD
    A["L=0, R=3<br/>2+15=17"] --> B["17 > 9"]
    B --> C["Move R"]
    C --> D["L=0, R=2<br/>2+11=13"]
    D --> E["13 > 9"]
    E --> F["Move R"]
    F --> G["L=0, R=1<br/>2+7=9"]
    G --> H["Answer Found"]
```

## Complexity

- Time: O(n)
- Space: O(1)
