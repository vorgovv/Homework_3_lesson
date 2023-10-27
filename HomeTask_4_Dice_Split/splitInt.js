function splitIntegerIntoParts(total, numParts) {
  if (total <= 0 || numParts <= 0) {
    return "Неверные входные данные";
  }

  const parts = [];
  let remaining = total;

  for (let i = 0; i < numParts - 1; i++) {
    const part = Math.floor(Math.random() * remaining);
    parts.push(part);
    remaining -= part;
  }

  parts.push(remaining);

  return parts;
}

const originalNumber = 92;
const numParts = 11;
const result = splitIntegerIntoParts(originalNumber, numParts);
console.log(result);