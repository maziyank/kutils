export const sentenceCase = (text) => {
  return text
    .split(".")
    .map((sub) => {
      const firstChar = spaceBeforeFirstChar(sub);
      return (
        " ".repeat(firstChar) +
        sub.charAt(firstChar).toUpperCase() +
        sub.slice(firstChar + 1, sub.length)
      );
    })
    .join(".");
};

export const titleCase = (text) => {
  return text.replace(/\w\S*/g, (word) => {
    return (
      word.charAt(0).toUpperCase() + word.slice(1, word.length).toLowerCase()
    );
  });
};
