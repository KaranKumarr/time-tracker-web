import React, {useEffect} from 'react';
import {Select, SelectContent, SelectItem, SelectTrigger, SelectValue} from "@/components/ui/select";
import Category from "@/lib/types/Category";

type SelectCategoryProps = {
    defaultSelected?: string | undefined;
    categories: Category[];
    onValueChange: (value: string) => void;
    selectOption: string | undefined;
    setSelectOption:  React.Dispatch<React.SetStateAction<string | undefined>>;
}

const SelectCategory = ({
                            defaultSelected,
                            categories,
                            onValueChange,
                            selectOption,
                            setSelectOption
                        }: SelectCategoryProps) => {

    useEffect(() => {
        console.log("SelectCategory", defaultSelected);
        if (defaultSelected) {
            setSelectOption(defaultSelected);
        }
    }, [defaultSelected, setSelectOption]);

    return (
        <Select
            value={selectOption}
            onValueChange={(value) => {
                onValueChange(value)
                setSelectOption(value);
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