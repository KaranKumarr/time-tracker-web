"use client";

import React, {createContext, useContext, useEffect, useState} from "react";
import Category from "@/lib/types/Category";
import {deleteCategory, getCategories, updateCategory} from "@/services/categoryApi";
import {toast} from "sonner";

interface CategoryContextType {
    categories: Category[];
    handleUpdateCategory: (category: Category, updatedCategory: Category) => void;
    handleDeleteCategory: (id: number) => void;
}

const CategoryContext = createContext<CategoryContextType | undefined>(undefined);

export function CategoryProvider({children}: { children: React.ReactNode }) {
    const [categories, setCategories] = useState<Category[]>([]);

    const fetchCategories = async () => {
        try {
            const {data} = await getCategories();
            setCategories(data);
        } catch (err) {
            console.error("Failed to fetch categories", err);
        }
    };

    const handleUpdateCategory = async (category: Category, updatedCategory: Category) => {
        const res = await updateCategory(category, updatedCategory)
        if (res && res.status === 200) {
            setCategories((prev) =>
                prev.map((tl) => (tl.id === category.id ? res.data : tl))
            );
            toast.success("Updated!")
        }
    }

    const handleDeleteCategory = async (id: number) => {
        const res = await deleteCategory(id)
        if (res && res.status === 204) {
            setCategories((prev) =>
                prev.filter((tl) => tl.id !== id)
            );
            toast.success("Deleted!")
        }
    }


    useEffect(() => {
        fetchCategories();
    }, []);

    return (
        <CategoryContext.Provider
            value={{categories, handleUpdateCategory, handleDeleteCategory}}
        >
            {children}
        </CategoryContext.Provider>
    );
}

// Hook for using context
export function useCategories() {
    const ctx = useContext(CategoryContext);
    if (!ctx) throw new Error("useCategories must be used within CategoryProvider");
    return ctx;
}
