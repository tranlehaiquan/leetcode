/**
 * delay for input milliseconds
 * @param milliseconds
 */
const delay = (milliseconds: number): Promise<void> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve();
    }, milliseconds);
  });
};

export default delay;