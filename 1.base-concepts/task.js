"use strict"
function solveEquation(a, b, c) {
  let arr = [];
  let d = b ** 2 - 4*a*c;
  let firstSolution = "";
  let secondSolution = "";
  if (d > 0) {
    firstSolution = (-b + Math.sqrt(d) )/(2*a);
    secondSolution = (-b - Math.sqrt(d) )/(2*a);
    arr.push(firstSolution, secondSolution);
  } else if (d === 0) {
    firstSolution = -b/(2*a);
    arr.push(firstSolution);
  };
  return arr;
}
function calculateTotalMortgage(percent, contribution, amount, countMonths) {
  percent = (percent/100)/12;
  let creditBody = amount - contribution;
  let monthlyPayment = creditBody * (percent + (percent / (((1 + percent) ** countMonths) - 1)));
  let stringTotalMortrage = (monthlyPayment * countMonths).toFixed(2);
  let totalMortrage = parseFloat(stringTotalMortrage);
  return totalMortrage;
}