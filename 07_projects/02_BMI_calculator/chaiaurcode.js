let form = document.querySelector('form');
form.addEventListener('submit', function (e) {
  e.preventDefault(); // very important to stop this
  
  //Height
  let height = parseInt(document.querySelector('#height').value); //parseInt
  let finalHeight = height/100 * height/100;

  //Weight
  let weight = parseInt(document.querySelector('#weight').value); //parseInt
  
  //BMI
  let bmi = (weight / finalHeight).toFixed(2);
  
  //Result
  if(bmi < 18.6) {
    document.querySelector('#results').innerText = `BMI is ${bmi}, You are Under Weight`
  } else if (bmi >= 18.6 && bmi <= 24.9) {
    document.querySelector('#results').innerText = `BMI is ${bmi}, You Weight is Normal`
  } else if (bmi > 24.9) {
    document.querySelector('#results').innerText = `BMI is ${bmi}, You are Over Weight`
  } else if (height === "" || height < 0 || isNaN(height)) {
    document.querySelector('#results').innerText = `Please Give a Valid Height`
  } else if (weight === "" || weight < 0 || isNaN(weight)) {
    document.querySelector('#results').innerText = `Please Give a Valid Weight`
  } 

});
