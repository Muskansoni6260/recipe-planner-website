let mealPlan = [];

// Function to add a meal to the meal plan
function addToMealPlan(meal) {
    if (!mealPlan.includes(meal)) {
        mealPlan.push(meal);
        alert(meal + " has been added to your meal plan!");
    } else {
        alert(meal + " is already in your meal plan.");
    }
}

// Function to display the meal plan
function showMealPlan() {
    const mealPlanList = document.getElementById('meal-plan-list');
    mealPlanList.innerHTML = ''; // Clear the list before displaying

    if (mealPlan.length === 0) {
        mealPlanList.innerHTML = '<li>No meals selected.</li>';
    } else {
        mealPlan.forEach(meal => {
            const li = document.createElement('li');
            li.textContent = meal;
            mealPlanList.appendChild(li);
        });
    }
}