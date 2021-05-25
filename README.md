# React counter
- Replace `<your_account>` with your Github username in the [DEMO LINK](https://Bogdan-Kotsupey.github.io/react_counter/)
- Follow the [React task guideline](https://github.com/mate-academy/react_task-guideline#react-tasks-guideline)

## Task
Create component `Counter` that renders `h1` and 3 buttons. Initially `h1` shows
"Count: 0".
- The first button adds 1 to the count. Please do it using `addOne` method.
- The second button adds 100. Create and use `add100` method.
- The third button always calls `addOne`, but if count is divisible by 5 it's additionally calls `add100`.

So the third button should count like this:
`101, 102, 103, 104, 105, 206, 207, 208, 209, 210, 311 ...`
