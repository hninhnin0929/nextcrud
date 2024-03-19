import Link from "next/link"
import { HiPencilAlt } from "react-icons/hi";
import DeleteButton from "./delete-button";

const ItemList = async () => {
    return (
        <>
            <div className="p-4 border border-orange-500 my-2 
                flex justify-between items-start">
                <div>
                    <h2 className="font-bold text-xl">Item Title</h2>
                    <div>Item Description</div>
                </div>
                <div className="flex gap-2">
                    <DeleteButton />
                    <Link href={`/editItem/1`}>
                        <HiPencilAlt size={24} />
                    </Link>
                </div>
            </div>
        </>
    );
}

export default ItemList