import api from "@/lib/api/axios";
import Category from "@/lib/types/Category";

export async function getCategories() {
    try {
        const res = await api.get("/category");
        return res.data;
    } catch (e) {
        console.log("Error fetching categories.")
        console.log(e)
    }
}

export async function updateCategory(category: Category, updatedCategory: Category) {
    const updates: any = {};

    updates.deadline = updatedCategory.deadline;
    updates.loggedMinutes = updatedCategory.loggedMinutes

    if (category.name !== updatedCategory.name) {
        updates.name = updatedCategory.name;
    }
    if (category.description !== updatedCategory.description) {
        updates.description = updatedCategory.description;
    }
    if (category.goalHours !== updatedCategory.goalHours) {
        updates.goalHours = updatedCategory.goalHours;
    }
    if (category.status !== updatedCategory.status) {
        updates.status = updatedCategory.status;
    }

    try {
        const res = await api.patch(`/category/${category.id}`, updates);
        return res.data;
    } catch (e) {
        console.error(e);
        throw e;
    }
}


export async function deleteCategory(id: number) {
    try {
        const res = await api.delete("/category/" + id);
        return res.data;
    } catch (e) {
        console.log(e);
    }
}

export async function createCategory(category: Category) {
    const {name, description, goalHours, loggedMinutes, status, deadline} = category;
    try {
        const res = await api.post("/category", {name, description, goalHours, loggedMinutes, status, deadline});
        return res.data;
    } catch (e) {
        console.log(e);
    }
}
