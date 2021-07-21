const formatRepoNameForImage = (string) => {
  console.log(string);

  const formattedString = string.split("_").join("-");

  console.log(formattedString);

  return formattedString;
};

export default formatRepoNameForImage;
