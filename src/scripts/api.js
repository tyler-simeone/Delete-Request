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
    },
    getRecipe (recipeId) {
        return fetch(`http://localhost:8088/recipes/${recipeId}`)
            .then(resp => resp.json())
    },
    saveRecipe (recipeId) {
        return fetch(`http://localhost:8088/recipes/${recipeId}`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(recipeId)
        })
            .then(r => r.json())
    },
    // TODO: finish adding the fetch PUT req
    updateRecipe (recipeId) {
        return fetch(`http://localhost:8088/recipes/${recipeId}`, {
            method: "PUT",

        })
            .then(resp => resp.json())
    }
}