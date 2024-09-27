var isDate = function (input) {
  return !isNaN(new Date(input).getTime());
};

// Do not change the code below.
const input = prompt("Enter Date.");
alert(isDate(input));
