import { TaskType } from "@/protocols";
import { FaPen } from "react-icons/fa";
import { FaCircleCheck } from "react-icons/fa6";
import { TiDelete } from "react-icons/ti";
import { useContext, useState } from "react";
import DeleteTask from "./DeleteTask";
import { TasksContext } from "@/context/tasks";

export default function Task({ id, name, isFinished }: TaskType) {
    const { delTask, setDelTask, setTaskId } = useContext(TasksContext);

    return (
        <>
            {delTask && (
                <DeleteTask />
            )}
            <div className={`w-full h-full p-1 mb-2 bg-white flex items-center justify-between rounded-md ${isFinished ? 'completed' : ''}`}>
                <div className="w-full h-10 p-1 flex items-center">{name}</div>
                <div className="w-24 flex items-center justify-between">
                    <FaPen className="w-4 h-5 text-gray-500" />
                    <FaCircleCheck className="w-4 h-6 text-gray-500" />
                    <TiDelete className="w-6 h-6 text-red-600" onClick={() => { setTaskId(id), setDelTask(true) }} />
                </div>
            </div>
        </>
    )
}