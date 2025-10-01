# React counter

> Here is [the working version](https://mate-academy.github.io/react_counter/)

You are given the `App` component, which has a title with the default text `Count is 0` and three buttons.
The buttons should work in the following way:

- `Add 1` button calls `addOne` method to add `1` to the `count`;
- `Add 100` button calls `add100` method to add `100` to the `count`;
- `Increase` button calls `addOne` and then, if the count is divisible by 5, it additionally calls `add100`.

So the third button should count like this:
`101, 102, 103, 104, 105, 206, 207, 208, 209, 210, 311 ...`

Your task is to write the logic for the `addOne` and `add100` callbacks. Please don't modify any other code in this task.

## Instructions
- Install Prettier Extension and use this [VSCode settings](https://mate-academy.github.io/fe-program/tools/vscode/settings.json) to enable format on save.
- Implement a solution following the [React task guideline](https://github.com/mate-academy/react_task-guideline#react-tasks-guideline).
- Use [React TypeScript cheat sheet](https://mate-academy.github.io/fe-program/js/extra/react-typescript).
- Open one more terminal and run tests with `npm test` to ensure your solution is correct.
- Replace `<your_account>` with your Github username in the [DEMO LINK](https://DDefty.github.io/react_counter/) and add it to PR description.
