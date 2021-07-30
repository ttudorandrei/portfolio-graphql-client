// this wil format repo name, replacing the underscores to dashes
const formatRepoNameForImage = (string) => {
  const formattedString = string.split("_").join("-");

  return formattedString;
};

export default formatRepoNameForImage;
