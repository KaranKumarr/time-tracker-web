import api from "@/lib/api/axios";
import Category from "@/lib/types/Category";

export async function getCategories() {
    try {
        const res = await api.get("/category");
        return res.data;
    }catch (e) {
        console.log("Error fetching categories.")
        console.log(e)
    }
}

export async function editCategory(category: Category, updatedCategory: Category) {
    const updates: any = {};

    if (category.name !== updatedCategory.name) {
        updates.name = updatedCategory.name;
    }
    if (category.description !== updatedCategory.description) {
        updates.description = updatedCategory.description;
    }
    if (category.goalHours !== updatedCategory.goalHours) {
        updates.goalHours = updatedCategory.goalHours;
    }
    if (category.deadline !== updatedCategory.deadline) {
        updates.deadline = updatedCategory.deadline;
    }
    if (category.status !== updatedCategory.status) {
        updates.status = updatedCategory.status;
    }
    console.log(updates)

    try {
        const res = await api.patch(`/category/${category.id}`, updates);
        return res.data;
    } catch (e) {
        console.error(e);
        throw e;
    }
}
