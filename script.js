//Dinner picker
const dinners = ['Mini Pizza','Dobladas', 'French toasts', 'Sandwitch', 'Pasta', 'Mason jar with apple','Mason jar with strawberries', 'Banana shake', 'Purple shake', ];
console.log(dinners.length)
const button = document.getElementById('mealPicker');
const dinner = document.getElementById('dinner');
function pickDinner(){
    const i = dinners[Math.floor(Math.random() * dinners.length)];
    dinner.innerHTML = i;
}
button.addEventListener('click', pickDinner);

//Mid day food picker
const options = ['Mini Pizza','Dobladas', 'Sandwitch', 'Mason jar with apple','Mason jar with strawberries', 'Banana shake', 'Purple shake', 'bread with milk', 'cereal'];
console.log(options.length)
const button2 = document.getElementById('mealPicker2');
const meal = document.getElementById('mid-day');
function pickMeal(){
    const i = options[Math.floor(Math.random() * options.length)];
    meal.innerHTML = i;
}
button2.addEventListener('click', pickMeal);