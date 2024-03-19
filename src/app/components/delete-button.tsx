"use client"

import {HiOutlineTrash} from "react-icons/hi"

const DeleteButton = () => {

  return (
    <button className="text-red-500">
        <HiOutlineTrash size={24}/>
    </button>
  )
}

export default DeleteButton