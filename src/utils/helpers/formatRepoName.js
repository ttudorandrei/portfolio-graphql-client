// this will replace all underscores with a space and change first letter of the word to uppercase
const formatRepoName = (string) => {
  const formattedString = string
    .split("_")
    .join(" ")
    .replace(/(^\w{1})|(\s+\w{1})/g, (letter) => letter.toUpperCase());

  return formattedString;
};

export default formatRepoName;
