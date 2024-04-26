"use strict";

function getElementWidth(content, padding, border) {
  const numericalContent = Number.parseFloat(content);
  const numericalPadding = Number.parseFloat(padding);
  const numericalBorder = Number.parseFloat(border);
  return numericalContent + numericalPadding * 2 + numericalBorder * 2;
}

console.log(getElementWidth("50px", "8px", "4px"));
console.log(getElementWidth("60px", "12px", "8.5px"));
console.log(getElementWidth("200px", "0px", "0px"));
