import {Button} from "@/components/ui/button";

type Props = {
    page: number;
    pageSize: number;
    totalItems: number;
    onPageChange: (page: number) => void;
};

export default function Pagination({
                                       page,
                                       pageSize,
                                       totalItems,
                                       onPageChange,
                                   }: Props) {
    const totalPages = Math.max(1, Math.ceil(totalItems / pageSize));

    return (
        <div className="flex items-center justify-center space-x-4 py-4">
            <Button
                variant={'outline'}
                onClick={() => onPageChange(page - 1)}
                disabled={page === 1}
                className=" disabled:opacity-50"
            >
                Prev
            </Button>

            <div>
                {Array.from({length: totalPages}, (_, i) => (
                    <Button onClick={() => onPageChange(i + 1)} disabled={page === i + 1} variant={'outline'}
                            key={i}>{i + 1}</Button>
                ))}
            </div>

            <Button
                onClick={() => onPageChange(page + 1)}
                disabled={page === totalPages}
                className="disabled:opacity-50"
            >
                Next
            </Button>
        </div>
    );
}
