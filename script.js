function calculateBMI() {
  let age = parseInt(document.getElementById("age").value);
  let genderElements = document.getElementsByName("gender");
  let weight = parseFloat(document.getElementById("weight").value);
  let heightCm = parseFloat(document.getElementById("height").value);
  let bmiResult = document.getElementById("bmiResult");
  let bmiCategory = document.getElementById("bmiCategory");

  // Get selected gender
  let gender = "";
  for (let i = 0; i < genderElements.length; i++) {
      if (genderElements[i].checked) {
          gender = genderElements[i].value;
          break;
      }
  }

  // Validate input
  if (isNaN(age) || age <= 0 || gender === "" || isNaN(weight) || weight <= 0 || isNaN(heightCm) || heightCm <= 0) {
      bmiResult.innerHTML = "Error";
      bmiCategory.innerHTML = "Please enter valid details";
      return;
  }

  // Convert height from cm to meters
  let height = heightCm / 100;

  // Calculate BMI
  let bmi = weight / (height * height);
  bmiResult.innerHTML = bmi.toFixed(2);

  // Determine BMI category
  if (bmi < 18.5) {
      bmiCategory.innerHTML = "Underweight";
      bmiCategory.style.color = "#ff9800";
  } else if (bmi >= 18.5 && bmi < 24.9) {
      bmiCategory.innerHTML = "Normal weight";
      bmiCategory.style.color = "#28a745";
  } else if (bmi >= 25 && bmi < 29.9) {
      bmiCategory.innerHTML = "Overweight";
      bmiCategory.style.color = "#ff5722";
  } else {
      bmiCategory.innerHTML = "Obese";
      bmiCategory.style.color = "#d32f2f";
  }
}


