import React from "react"

const EditItemComponent = async () => {
    return (
        <div>
            <form
                // action={action}
                className="flex flex-col mt-2 gap-3">
                <input type="text"
                    name="title"
                    id="title"
                    className="border border-orange-500 px-7 py-2"
                    placeholder="Enter item title" />
                <input type="text"
                    name="description"
                    id="description"
                    className="border border-orange-500 px-7 py-2"
                    placeholder="Enter item description" />

                {/* {
                    formState.message ? <div className="my-2 p-2 bg-red-200 border rounded border-red-400">{formState.message}</div> : null
                } */}

                <button type="submit" className="bg-slate-700 font-bold text-white px-7 py-2 w-fit">
                    Update
                </button>
            </form>
        </div>
    )
}

export default EditItemComponent