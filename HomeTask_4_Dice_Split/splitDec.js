function splitIntegerIntoDecimalParts(total, numParts) {
  if (total <= 0 || numParts <= 0) {
    return "Неверные входные данные";
  }

  const parts = [];
  let remaining = total;

  for (let i = 0; i < numParts - 1; i++) {
    const part = Math.random() * remaining;
    const partWithTwoDecimals = parseFloat(part.toFixed(2));
    parts.push(partWithTwoDecimals);
    remaining -= partWithTwoDecimals;
  }

  parts.push(parseFloat(remaining.toFixed(2)));

  return parts;
}

const originalNumber = 53;
const numParts = 7;
const result = splitIntegerIntoDecimalParts(originalNumber, numParts);
console.log(result);