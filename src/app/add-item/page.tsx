const AddItem = () => {
    return (
        <div>
            <form className="flex flex-col mt-2 gap-3">
                <input type="text"
                    id="title"
                    className="border border-orange-500 px-7 py-2"
                    placeholder="Enter item title" />
                <input type="text"
                    id="description"
                    className="border border-orange-500 px-7 py-2"
                    placeholder="Enter item description" />
                <button type="submit" className="bg-slate-700 font-bold text-white px-7 py-2 w-fit">
                    Submit
                </button>
            </form>
        </div>
    )
}

export default AddItem