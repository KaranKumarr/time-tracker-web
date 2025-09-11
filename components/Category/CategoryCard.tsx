import React from 'react';
import Category from "@/lib/types/Category";
import {Card, CardContent, CardDescription, CardHeader} from "@/components/ui/card";
import {Button} from "@/components/ui/button";
import {Archive, EllipsisVertical, Trash} from "lucide-react";
import {Progress} from "@/components/ui/progress";
import {formatTimeLogDate} from "@/lib/timeformat";
import CategoryDialog from "@/components/Category/CategoryDialog";
import {useCategories} from "@/context/CategoryContext";
import ConfirmDialog from "@/components/core/ConfirmDialog";
import GoalStatus from "@/lib/types/GoalStatus";


const CategoryCard = ({category}: { category: Category }) => {

    const {handleUpdateCategory} = useCategories()

    const handleArchive = () => {
        let newStatus: GoalStatus;

        if (category.status === GoalStatus.ARCHIVED) {
            const isExpired =
                !!category.deadline && new Date(category.deadline) < new Date();
            const isCompleted =
                category.goalHours > 0 &&
                category.loggedMinutes >= category.goalHours * 60;

            if (isExpired) newStatus = GoalStatus.EXPIRED;
            else if (isCompleted) newStatus = GoalStatus.COMPLETED;
            else newStatus = GoalStatus.ACTIVE;
        } else {
            newStatus = GoalStatus.ARCHIVED;
        }
        const newCategory: Category = {
            ...category,
            status: category.status === GoalStatus.ARCHIVED ? GoalStatus.ACTIVE : GoalStatus.ARCHIVED
        }
        handleUpdateCategory(category, newCategory)
    }

    return (
        <Card className={'flex flex-col gap-0 space-y-3'}>
            <CardHeader className={'flex justify-between items-center '}>
                <h5 className={'font-medium'}>
                    {category.name}
                </h5>
                <div>
                    <div
                        className={'relative group h-9 p-1 hover:bg-accent transition-all rounded-t w-9 flex justify-center'}>
                        <EllipsisVertical className={'group-hover:rotate-90 transition-all'}/>
                        <div
                            className={'shadow-lg animate-fade-in-bottom absolute w-9 border-t flex-col z-10 hidden rounded-b group-hover:flex top-9 bg-accent'}>
                            <CategoryDialog handleSubmit={(updatedCategory) => {
                                handleUpdateCategory(category, updatedCategory)
                            }} category={category}/>

                            {/*Archive Button*/}
                            <ConfirmDialog
                                title={
                                    category.status === GoalStatus.ARCHIVED
                                        ? "Unarchive category?"
                                        : "Confirm archive?"
                                }
                                description={
                                    category.status === GoalStatus.ARCHIVED
                                        ? "Bring this category back from storage."
                                        : "Do you really want to tuck this category under the rug?"
                                }
                                confirmLabel={
                                    category.status === GoalStatus.ARCHIVED
                                        ? "Yes, restore it!"
                                        : "Yes, archive it!"
                                }
                                confirmVariant="default"
                                onConfirm={handleArchive}
                            >
                                <Button
                                    className="rounded-none hover:bg-background transition-all relative"
                                    variant="link"
                                >
                                    <Archive className="text-foreground"/>
                                    {category.status === GoalStatus.ARCHIVED && (
                                        <div className="h-px w-6 absolute bg-foreground rotate-45"/>
                                    )}
                                </Button>
                            </ConfirmDialog>


                            <Button className={'rounded-none hover:bg-background transition-all'} variant={'link'}>
                                <Trash className={'text-foreground'}/>
                            </Button>
                        </div>
                    </div>

                </div>
            </CardHeader>

            <CardContent className={'flex-1 h-full space-y-2'}>
                <CardDescription>
                    {category.description.length > 0 ? category.description : "No description provided."}
                </CardDescription>
                {category.goalHours > 0 ? <div className={'space-y-1'}>
                    <div className={'flex justify-between items-center'}>
                        <p className={'text-sm'}>Progress so far</p>
                        <p className={'text-sm text-end'}><span
                            className={'text-muted-foreground'}> End Goal : </span>{category.goalHours}h</p>
                    </div>
                    <Progress value={((category.loggedMinutes / 60) / category.goalHours) * 100}/>
                </div> : null}
                {
                    category.deadline ? <div>
                        <p className={'text-primary text-sm font-medium'}>
                            <span
                                className={'text-muted-foreground font-normal'}>Due On: </span> {formatTimeLogDate(category.deadline)}
                        </p>
                    </div> : null
                }
            </CardContent>
        </Card>
    );
};

export default CategoryCard;