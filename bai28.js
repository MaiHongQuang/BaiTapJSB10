let students = [
  {
    id: "T3HXX1",
    firstName: "NgAN",
    lastName: "Duong Tam",
  },
  {
    id: "T3HXX2",
    firstName: "Ha",
    lastName: "Nguyen Hanh",
  },
  {
    id: "T3HXX5",
    firstName: "Minh",
    lastName: "Nguyen Dunng",
  },
];
const checkName = (arr) => {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i].lastName.slice(0, 2) == "Do") {
      console.log(arr[i]);
      break;
    }
  }
};
console.log(students);
