import React from 'react';
import Category from "@/lib/types/Category";
import GoalStatus from "@/lib/types/GoalStatus";
import CategoryCard from "@/components/Category/CategoryCard";

type CategoryListProps = {
    categories: Category[],
    status:GoalStatus
}

const CategoryList = ({categories,status}:CategoryListProps) => {
    return (
        <main className={'pb-2'}>
            <header className={'pb-1'}>
                <h4>
                    {status}
                </h4>
            </header>
            <ul className={'grid grid-cols-4 gap-4 max-2xl:grid-cols-3 max-lg:grid-cols-2 max-sm:grid-cols-1'}>
                {categories.map((category)=>{
                    return <CategoryCard key={category.id} category={category}/>
                })}
            </ul>
        </main>
    );
};

export default CategoryList;