"use client";

import React, { createContext, useContext, useState, useEffect } from "react";
import Category from "@/lib/types/Category";
import {getCategories} from "@/services/categoryApi";

interface CategoryContextType {
    categories: Category[];
}

const CategoryContext = createContext<CategoryContextType | undefined>(undefined);

export function CategoryProvider({ children }: { children: React.ReactNode }) {
    const [categories, setCategories] = useState<Category[]>([]);

    const fetchCategories = async () => {
        try {
            const {data} = await getCategories();
            setCategories(data); // ✅ adjust depending on ApiResponse shape
        } catch (err) {
            console.error("Failed to fetch categories", err);
        }
    };

    // Load on mount
    useEffect(() => {
        fetchCategories();
    }, []);

    return (
        <CategoryContext.Provider
            value={{ categories}}
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
