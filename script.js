// ===============================
// ELEMENTS
// ===============================
const continentSelect = document.getElementById("continentSelect");
const searchInput = document.getElementById("searchInput");
const recipeListEl = document.getElementById("recipeList");
const recipeDetailsEl = document.getElementById("recipeDetails");
const savedListEl = document.getElementById("savedList");

// Start off with the full list of recipes
let filteredRecipes = recipes.slice();


// ===============================
// RENDER RECIPE LIST
// ===============================
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


// ===============================
// SHOW RECIPE DETAILS
// ===============================
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
    <button onclick="saveRecipe(${recipe.id})">Save to Favourites</button>
    <button onclick="removeRecipe(${recipe.id})">Unsave Recipe</button>
    <button onclick="downloadRecipe(${recipe.id})">Download Recipe</button>
  `;
}


// ===============================
// FILTERS
// ===============================
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


// ===============================
// SAVE RECIPE
// ===============================
function saveRecipe(id) {
  let saved = JSON.parse(localStorage.getItem("savedRecipes")) || [];

  if (!saved.includes(id)) {
    saved.push(id);
    localStorage.setItem("savedRecipes", JSON.stringify(saved));
    alert("Recipe saved!");
  } else {
    alert("Already saved.");
  }

  renderSavedRecipes();
}


// ===============================
// RENDER SAVED RECIPES
// ===============================
function renderSavedRecipes() {
  const saved = JSON.parse(localStorage.getItem("savedRecipes")) || [];
  savedListEl.innerHTML = "";

  saved.forEach(id => {
    const recipe = recipes.find(r => r.id === id);
    if (!recipe) return;

    const li = document.createElement("li");
    li.textContent = recipe.name;
    li.addEventListener("click", () => showRecipeDetails(recipe));
    savedListEl.appendChild(li);
  });
}


// ===============================
// DOWNLOAD RECIPE
// ===============================
function downloadRecipe(id) {
  const recipe = recipes.find(r => r.id === id);

  const content = `
${recipe.name}
-------------------------

Continent: ${recipe.continent}
Country: ${recipe.country}
Type: ${recipe.type}

Ingredients:
${recipe.ingredients.map(i => "- " + i).join("\n")}

Steps:
${recipe.steps.map((s, index) => (index + 1) + ". " + s).join("\n")}
`;

  const blob = new Blob([content], { type: "text/plain" });
  const url = URL.createObjectURL(blob);

  const a = document.createElement("a");
  a.href = url;
  a.download = `${recipe.name.replace(/\s+/g, "_")}.txt`;
  a.click();

  URL.revokeObjectURL(url);
}


// ===============================
// EVENT LISTENERS
// ===============================
continentSelect.addEventListener("change", applyFilters);
searchInput.addEventListener("input", applyFilters);


// ===============================
// INITIAL RENDER
// ===============================
renderRecipeList(filteredRecipes);
renderSavedRecipes();
