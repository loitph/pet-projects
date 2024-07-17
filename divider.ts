function divideByTen(input: number) {
  if (!input) {
    return;
  }

  input = input / 10;
  return input.toFixed(2);
}