import React from 'react';
import Category from "@/lib/types/Category";
import {Card, CardContent, CardDescription, CardHeader} from "@/components/ui/card";
import {Button} from "@/components/ui/button";
import {Archive, EllipsisVertical, Pencil, Trash} from "lucide-react";
import {Progress} from "@/components/ui/progress";


const CategoryCard = ({category}: { category: Category }) => {
    console.log(category.loggedMinutes)
    return (
        <Card className={'flex flex-col aspect-video'}>
            <CardHeader className={'flex justify-between items-center '}>
                <h5>
                    {category.name}
                </h5>
                <div>
                    <div
                        className={'relative group h-9 p-1 hover:bg-accent transition-all rounded-t w-9 flex justify-center'}>
                        <EllipsisVertical className={'group-hover:rotate-90 transition-all'}/>
                        <div
                            className={'shadow-lg animate-fade-in-bottom absolute w-9 border-t flex-col z-10 hidden rounded-b group-hover:flex top-9 bg-accent'}>
                            <Button className={'rounded-none hover:bg-background transition-all'} variant={'link'}>
                                <Pencil className={'text-foreground'}/>
                            </Button>
                            <Button className={'rounded-none hover:bg-background transition-all'} variant={'link'}>
                                <Archive className={'text-foreground'}/>
                            </Button>
                            <Button className={'rounded-none hover:bg-background transition-all'} variant={'link'}>
                                <Trash className={'text-foreground'}/>
                            </Button>
                        </div>
                    </div>

                </div>
            </CardHeader>

            <CardContent className={'flex-1 h-full space-y-2'}>
                <CardDescription >
                    {category.description.length > 0 ? category.description : "No description provided."}
                </CardDescription>
                {category.goalHours > 0 ? <div className={'space-y-1'}>
                    <div className={'flex justify-between items-center'}>
                        <p className={'text-sm'}>Progress so far</p>
                        <p className={'text-sm '}><span
                            className={'text-muted-foreground'}> End Goal : </span>{category.goalHours}h</p>
                    </div>
                    <Progress value={((category.loggedMinutes/60)/category.goalHours) *100}/>
                </div> : null}
            </CardContent>
        </Card>
    );
};

export default CategoryCard;