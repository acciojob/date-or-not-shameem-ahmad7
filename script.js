var isDate = function (input) {
  //   write your code here
	  // Check if the input is already a valid Date object
  if (input instanceof Date && !isNaN(input)) {
    return true;
  }

  // Try to parse the input if it's a string or number
  const parsedDate = new Date(input);
  if (!isNaN(parsedDate.getTime())) {
    return true;
  }

  // Return false if neither condition is met
  return false;
};

// Do not change the code below.
const input = prompt("Enter Date.");
alert(isDate(input));
