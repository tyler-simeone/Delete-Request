import createRecipeCard from "./factory.js"

// To add & display data in DOM container
const recipeList = document.querySelector("#recipeList")
// To add & display data to be edited in form input fields
const recipeTitle = document.querySelector("#recipeTitle")
const recipeInstructions = document.querySelector("#recipeInstructions")

export default recipes => {
    // Clear the current content
    recipeList.textContent = ""

    // Fill container with recipe HTML representations
    for (const recipe of recipes) {
        const recipeCard = createRecipeCard(recipe)
        recipeList.innerHTML += recipeCard
    }
}
// Recipe instructions are being added to correct interface, but recipe title is not being added for some reason
// Had to change recipeTitle.innerHTML -> recipeTitle.value as the title input field is a self-closing tag and does not have innerHTML content :)
const renderToInput = recipe => {
    recipeTitle.value = ""
    recipeInstructions.innerHTML = ""

    recipeTitle.value = recipe.title
    recipeInstructions.innerHTML += recipe.instructions
}
// So important to import using same syntax as export when using the {}
export {renderToInput}