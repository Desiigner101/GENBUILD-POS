//API CALLS TO SERVER FOR CATEGORY DATA
import axios from "axios";

//api call to add category
export const addCategory = async (category) => {
    return await axios.post("http://localhost:8080/api/v1.0/categories", category)
}

//api call to fetch all categories
export const fetchCategories = async () => {
    return await axios.get("http://localhost:8080/api/v1.0/categories");
}

//api call to delete category
export const deleteCategory = async (categoryId) => {
    return await axios.delete(`http://localhost:8080/api/v1.0/categories/${categoryId}`);
}

