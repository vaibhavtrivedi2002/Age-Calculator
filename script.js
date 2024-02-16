const birthdateInput = document.getElementById('birthdate');
const currentdateInput = document.getElementById('currentdate');
const calculateButton = document.getElementById('calculate');
const resultDiv = document.getElementById('result');

calculateButton.addEventListener('click', calculateAge);

function calculateAge() {
  const birthdate = new Date(birthdateInput.value);
  const currentdate = new Date(currentdateInput.value);

  if (birthdate > currentdate) {
    resultDiv.textContent = 'Error: Invalid date. Birthdate cannot be in the future.';
    return;
  }

  const timeDiff = Math.abs(currentdate.getTime() - birthdate.getTime());
  const days = Math.floor(timeDiff / (1000 * 60 * 60 * 24));
  const months = Math.floor(days / 30);
  const years = Math.floor(months / 12);
  const remainingMonths = months % 12;
  const remainingDays = days % 30;

  resultDiv.textContent = `Your age is ${years} years, ${remainingMonths} months, and ${remainingDays} days`;
}
