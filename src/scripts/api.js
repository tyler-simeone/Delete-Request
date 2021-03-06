export default {
    deleteRecipe (recipeId) {
        return fetch(`http://localhost:8088/recipes/${recipeId}`, {
            method: "DELETE"
        })
            .then(resp => resp.json())
    },
    getAllRecipes () {
        return fetch("http://localhost:8088/recipes")
            .then(resp => resp.json())
    }
}