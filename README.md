# React counter

> [React + Typescript cheat sheet](https://mate-academy.github.io/fe-program/js/extra/react-typescript)

You are given the `App` component with a title with a text `Count is 0` by default and three buttons.
The buttons should work the next way:

- `Add 1` button calls `addOne` method to add `1` to the `count`;
- `Add 100` button calls `add100` method to add `100` to the `count`;
- `Increase` button calls `addOne` and then, but if count was divisible by 5, it additionally calls `add100`.

So the third button should count like this:
`101, 102, 103, 104, 105, 206, 207, 208, 209, 210, 311 ...`

## Instructions
- Implement a solution following the [React task guideline](https://github.com/mate-academy/react_task-guideline#react-tasks-guideline).
- Use [React TypeScript cheat sheet](https://mate-academy.github.io/fe-program/js/extra/react-typescript).
- Open one more terminal and run tests with `npm test` to ensure your solution is correct.
- Replace `<your_account>` with your Github username in the [DEMO LINK](https://<your_account>.github.io/react_counter/) and add it to PR description.
