const getDisplayTimeFromTimeStamp = (timeStamp) => {
  const date = new Date(timeStamp);
  return date.toDateString();
};

export default getDisplayTimeFromTimeStamp;
