const taxSheme = (salary) => {
  const limitA = 50000000;
  const limitB = 250000000;
  const limitC = 500000000;

  let annualIncome = (salary * 12);

  let tax = 0;

  if (annualIncome > limitC) {
    tax += (annualIncome - limitC) * 0.30;
    annualIncome = limitC;
  }
  if (annualIncome > limitB) {
    tax += (annualIncome - limitB) * 0.25;
    annualIncome = limitB;
  }
  if (annualIncome > limitA) {
    tax += (annualIncome - limitA) * 0.15;
    annualIncome = limitA;
  }
  if (annualIncome > 0) {
    tax += annualIncome * 0.05;
  }

  return tax;
};

console.log(taxSheme(25000000));
console.log(taxSheme(2000000));