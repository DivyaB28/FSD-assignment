const valuesOfObj = (objArg = {}) => {
  let newArr = [];
  for (let key in objArg) {
    newArr.push(objArg[key]);
  }
  return newArr;
};
console.log(valuesOfObj({ name: "nbfdja", 1: 890, yui: ["jkl", 1, 0] }));
