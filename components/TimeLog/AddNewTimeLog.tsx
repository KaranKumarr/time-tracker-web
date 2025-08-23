import React, {useEffect, useState} from 'react';
import {Card, CardHeader} from "@/components/ui/card";
import {getCategories} from "@/services/categoryApi";
import {Select, SelectContent, SelectItem, SelectTrigger, SelectValue,} from "@/components/ui/select"
import {Button} from "@/components/ui/button";
import {SquarePen} from "lucide-react";
import Category from "@/lib/types/Category";
import SelectCategory from "@/components/TimeLog/SelectCategory";

const AddNewTimeLog = () => {

    const [categories, setCategories] = useState<Category[]>([])
    const [selectValue, setSelectValue] = useState<string | undefined>(undefined)

    useEffect(() => {
        const fetchData = async () => {
            const {data} = await getCategories()
            setCategories(data)
        }
        fetchData()
    }, []);

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