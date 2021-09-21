const meals = ['Mini Pizza','Dobladas', 'Bread with milk', 'French toasts', 'Sandwitch', 'Pasta', 'Mason jar with apple','Mason jar with strawberries', 'Banana shake', 'Red shake', ];
const button = document.getElementById('mealPicker');
const meal = document.getElementById('meal');
function pickMeal(){
    const i = meals[Math.floor(Math.random() * meals.length)];
    meal.innerHTML = i;
}
button.addEventListener('click', pickMeal)