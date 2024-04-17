#! /usr/bin/env node
import inquirer from "inquirer";
let weightInKg = await inquirer.prompt({
    name: "weightinkg",
    type: "number",
    message: "Enter Your Weight in Kilogram (kg)"
});
let heightInMeters = await inquirer.prompt({
    name: "heightinMeters",
    type: "number",
    message: "Enter Your Height in Meters (m)"
});
const bmi = weightInKg.weightinkg / (heightInMeters.heightinMeters * heightInMeters.heightinMeters);
console.log(` Your Body Mass Index BMI in ${bmi}`);
let message = "The WHO suggests BMI categories for Asian are: \n\ Underweight:BMI less than 18. \n\Normal weight:BMI 18.5–22.9 \n\ Overweight:BMI 23–24.9 \n\ Obese:BMI 25 or greater";
console.log(message);
