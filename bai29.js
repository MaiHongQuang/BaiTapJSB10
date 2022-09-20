let students = [
  {
    id: "T3HXX1",
    firstName: "Ngan",
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
const sapXep = () => {
  return students.sort(function (a, b) {
    if (a.firstname < b.firstname) {
      return -1;
    } else if (a.firstname > b.firstname) {
      return 1;
    }
    return 0;
  });
};
console.log(sapXep(students));
