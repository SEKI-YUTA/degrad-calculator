exports.printMsg = () => {
  console.log("Thank you for using this package!");
};

exports.degTorad = (deg) => {
  return (Math.PI / 180) * deg;
};

exports.radTodeg = (rad) => {
  return (180 / Math.PI) * rad;
};
