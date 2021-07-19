const formatRepoName = (string) => {
  return string
    .split("_")
    .join(" ")
    .replace(/(^\w{1})|(\s+\w{1})/g, (letter) => letter.toUpperCase());
};

export default formatRepoName;
