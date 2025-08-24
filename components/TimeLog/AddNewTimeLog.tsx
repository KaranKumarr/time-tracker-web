import React, {useState} from 'react';
import {Card, CardHeader} from "@/components/ui/card";
import {Button} from "@/components/ui/button";
import {SquarePen} from "lucide-react";
import SelectCategory from "@/components/TimeLog/SelectCategory";
import {useCategories} from "@/context/CategoryContext";

const AddNewTimeLog = () => {

    const {categories} = useCategories();
    const [selectValue, setSelectValue] = useState<string | undefined>(undefined)

    return (
        <>
            <CardHeader>
                Add New Time Log
            </CardHeader>
            <Card className={'flex p-4 flex-nowrap flex-row'}>
                <input
                    placeholder={"What you doing right now?"}
                    className={'transition-all duration-300 flex-1 p-1 border border-transparent outline-0 hover:border-border focus:border-primary rounded'}/>

                <SelectCategory categories={categories} onValueChange={
                    (value) => {
                        if (value === "none") {
                            setSelectValue(undefined)
                        } else {
                            setSelectValue(value)
                        }
                    }}/>

                <div className={'flex space-x-1'}>
                    <Button>
                        Start Tracking
                    </Button>
                    <Button variant={"ghost"}>
                        <SquarePen/>
                    </Button>
                </div>
            </Card>
        </>
    );
};

export default AddNewTimeLog;