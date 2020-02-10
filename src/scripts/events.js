import apiActions from "./api.js"
import render from "./dom.js"
import {renderToInput, recipeTitle, recipeInstructions, hiddenRecipeId} from "./dom.js"

const recipeList = document.querySelector("#recipeList")
const saveBtn = document.querySelector("#saveRecipe")

export default {
    registerDeleteListener () {
        recipeList.addEventListener("click", event => {
            if (event.target.id.startsWith("deleteRecipe--")) {
                // Extract recipe id from the button's id attribute
                const recipeToDelete = event.target.id.split("--")[1]

                // Invoke the delete method, then get all recipes and render them
                apiActions.deleteRecipe(recipeToDelete)
                    .then(apiActions.getAllRecipes)
                    .then(render)
            }
        })
    },
    registerEditListener () {
        recipeList.addEventListener("click", event => {
            if (event.target.id.startsWith("editRecipe--")) {
                // Extract ID of container section el to edit in DB
                const toEdit = event.target.id.split("--")[1]
                // Redisplays selected section back in form to be edited
                const updateFormField = toEdit => {
                    apiActions.getRecipe(toEdit)
                        .then(entry => {
                            renderToInput(entry)
                        })                                            
                }
                updateFormField(toEdit)
                // Getting updated user input values
                const titleInp = recipeTitle.value
                const instructionsInp = recipeInstructions.value

                saveBtn.addEventListener("click", event => {
                    if (hiddenRecipeId.value !== "") {
                        apiActions.updateRecipe(toEdit)
                    } else {
                        apiActions.saveRecipe(toEdit)
                    }
                })
            }
        })
    }
}