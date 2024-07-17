function divideByTen(input: number) {
  if (!input) {
    return;
  }

  const result = input / 10;
  return Math.abs(result);
}