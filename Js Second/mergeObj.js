const mergeObj = (obj1 = {}, obj2 = {}) => {
  let objMerged = {};
  //copy the values of the key from first object
  for (let key in obj1) {
    objMerged[key] = obj1[key];
  }
  //loop through the key of the second object
  for (let key in obj2) {
    objMerged[key] = obj2[key];
  }
  return objMerged;
};

let obj1 = { name: "Alice", age: 25, skills: ["JavaScript", "HTML", "CSS"] };
let obj2 = { city: "New York", hobby: "reading", skills: ["Python", "React"] };
console.log(mergeObj(obj1, obj2));
