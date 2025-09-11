"use client";

import React, {createContext, useContext, useEffect, useState} from "react";
import Category from "@/lib/types/Category";
import {editCategory, getCategories} from "@/services/categoryApi";
import TimeLog from "@/lib/types/TimeLog";
import {editTimeLog} from "@/services/timeLogApi";
import {toast} from "sonner";

interface CategoryContextType {
    categories: Category[];
    handleUpdateCategory: (category: Category, updatedCategory: Category) => void
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


    const handleUpdateCategory = async (category:Category, updatedCategory:Category) => {
        const res = await editCategory(category, updatedCategory)
        if (res && res.status === 200) {
            setCategories((prev) =>
                prev.map((tl) => (tl.id === category.id ? res.data : tl))
            );
            toast.success("Updated!")
        }
    }

    // Load on mount
    useEffect(() => {
        fetchCategories();
    }, []);

    return (
        <CategoryContext.Provider
            value={{categories,handleUpdateCategory}}
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
