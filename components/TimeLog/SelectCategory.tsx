import React, {useState} from 'react';
import {Select, SelectContent, SelectItem, SelectTrigger, SelectValue} from "@/components/ui/select";
import Category from "@/lib/types/Category";

type SelectCategoryProps = {
    defaultSelected?: string | undefined;
    categories: Category[];
    onValueChange: (value: string) => void;
}

const SelectCategory = ({defaultSelected, categories, onValueChange}: SelectCategoryProps) => {

    return (
        <Select
            defaultValue={defaultSelected}
            onValueChange={(value) => {
                onValueChange(value)
            }}>
            <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="Category"/>
            </SelectTrigger>
            <SelectContent>
                {categories.map((category) => (
                    <SelectItem key={category.id} value={category.id.toString()}>{category.name}</SelectItem>
                ))}
                <SelectItem value={"none"}>None</SelectItem>
            </SelectContent>
        </Select>
    );
};

export default SelectCategory;