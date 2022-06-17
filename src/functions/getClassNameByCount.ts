export const getClassNameByCount = (count: number): string => {
  switch (true) {
    case (count >= 2000):
      return 'is-size-1 has-background-success';
    case (count < 2000 && count >= 1500):
      return 'is-size-2 has-background-primary';
    case (count < 1500 && count >= 1000):
      return 'has-background-info is-size-3';
    case (count < 1000 && count >= 500):
      return 'has-background-warning is-size-4';
    case (count >= 500 && count < 1000):
      return 'has-background-warning';
    default:
      return 'has-background-danger';
  }
};
