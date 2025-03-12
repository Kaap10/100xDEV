async function fetchRecipes() {
    const ingredient = document.getElementById('ingredient').value.trim();
    if (ingredient === '') {
        alert('Please enter an ingredient.');
        return;
    }

    const url = `https://www.themealdb.com/api/json/v1/1/filter.php?i=${ingredient}`;

    try {
        const response = await fetch(url);
        if (!response.ok) throw new Error('Failed to fetch recipes');
        const data = await response.json();
        displayRecipes(data.meals);
    } catch (error) {
        console.error('Error:', error);
        alert('Error fetching recipes. Try again later.');
    }
}

function displayRecipes(meals) {
    const recipesContainer = document.getElementById('recipes');
    recipesContainer.innerHTML = '';

    if (!meals) {
        recipesContainer.innerHTML = '<p>No recipes found. Try another ingredient.</p>';
        return;
    }

    meals.forEach(meal => {
        const recipeCard = document.createElement('div');
        recipeCard.classList.add('recipe');

        recipeCard.innerHTML = `
            <h3>${meal.strMeal}</h3>
            <img src="${meal.strMealThumb}" alt="${meal.strMeal}">
            <p><a href="https://www.themealdb.com/meal/${meal.idMeal}" target="_blank">View Recipe</a></p>
        `;

        recipesContainer.appendChild(recipeCard);
    });
}
