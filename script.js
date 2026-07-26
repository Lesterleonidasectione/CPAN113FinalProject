const continentSelect = document.getElementById("continentSelect");
const searchInput = document.getElementById("searchInput");
const recipeListEl = document.getElementById("recipeList");
const recipeDetailsEl = document.getElementById("recipeDetails");

// Start off with the full list of recipes
let filteredRecipes = recipes.slice(); 

function renderRecipeList(list) {
  recipeListEl.innerHTML = "";

  if (list.length === 0) {
    recipeListEl.innerHTML = "<p>No recipes found.</p>";
    return;
  }

  list.forEach(recipe => {
    const li = document.createElement("li");
    li.textContent = `${recipe.name} (${recipe.country}, ${recipe.continent})`;
    li.addEventListener("click", () => showRecipeDetails(recipe));
    recipeListEl.appendChild(li);
  });
}

function showRecipeDetails(recipe) {
  recipeDetailsEl.innerHTML = `
    <h3>${recipe.name}</h3>
    <p><strong>Continent:</strong> ${recipe.continent}</p>
    <p><strong>Country:</strong> ${recipe.country}</p>
    <p><strong>Type:</strong> ${recipe.type}</p>

    <h4>Ingredients</h4>
    <ul>
      ${recipe.ingredients.map(i => `<li>${i}</li>`).join("")}
    </ul>

    <h4>Steps</h4>
    <ol>
      ${recipe.steps.map(s => `<li>${s}</li>`).join("")}
    </ol>
  `;
}

function applyFilters() {
  const continent = continentSelect.value;
  const searchTerm = searchInput.value.toLowerCase();

  filteredRecipes = recipes.filter(recipe => {
    const matchesContinent =
      continent === "All" || recipe.continent === continent;
    const matchesSearch =
      recipe.name.toLowerCase().includes(searchTerm);
    return matchesContinent && matchesSearch;
  });

  renderRecipeList(filteredRecipes);
}

// Event listeners
continentSelect.addEventListener("change", applyFilters);
searchInput.addEventListener("input", applyFilters);

// Initial render
renderRecipeList(filteredRecipes);
