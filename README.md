# React counter

> Here is [the working version](https://mate-academy.github.io/react_counter/)

You are given the `App` component with a title with a text `Count is 0` by default and three buttons.
The buttons should work the next way:

- `Add 1` button calls `addOne` method to add `1` to the `count`;
- `Add 100` button calls `add100` method to add `100` to the `count`;
- `Increase` button calls `addOne` and then, if count was divisible by 5, it additionally calls `add100`.

So the third button should count like this:
`101, 102, 103, 104, 105, 206, 207, 208, 209, 210, 311 ...`


Вам предоставляется компонент «Приложение» с заголовком с текстом «Счетчик равен 0» по умолчанию и тремя кнопками.
Кнопки должны работать следующим образом:

- Кнопка «Добавить 1» вызывает метод «addOne», чтобы добавить «1» к «количеству»;
- Кнопка «Добавить 100» вызывает метод «add100», чтобы добавить «100» к «количеству»;
- Кнопка «Увеличить» вызывает «addOne», а затем, если count делился на 5, дополнительно вызывает «add100».

Итак, третья кнопка должна считаться так:
`101, 102, 103, 104, 105, 206, 207, 208, 209, 210, 311...`

## Instructions
- Install Prettier Extention and use this [VSCode settings](https://mate-academy.github.io/fe-program/tools/vscode/settings.json) to enable format on save.
- Implement a solution following the [React task guideline](https://github.com/mate-academy/react_task-guideline#react-tasks-guideline).
- Use [React TypeScript cheat sheet](https://mate-academy.github.io/fe-program/js/extra/react-typescript).
- Open one more terminal and run tests with `npm test` to ensure your solution is correct.
- Replace `<your_account>` with your Github username in the [DEMO LINK](https://yevhenii-stanchenko.github.io/react_counter/) and add it to PR description.
