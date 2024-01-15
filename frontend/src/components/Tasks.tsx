import Task from "./Task";
import { IoMdAddCircle } from "react-icons/io";
import { VscSend } from "react-icons/vsc";


export default function Tasks() {
    return (
        <div className="w-max-width h-auto px-4 pt-16 bg-tasks-color rounded-md
        flex flex-col justify-around items-center shadow-md mx-auto mt-52 relative">
            <IoMdAddCircle className="w-12 h-12 text-gray-700 absolute top-2 right-2" />
            <form className="w-full relative">
                <input className="w-full h-10 p-3 mb-2 flex items-center rounded-md text-base font-normal border-none cursor-pointer 
            focus:outline-none placeholder-gray-500 placeholder-italic shadow-md bg-white " placeholder="Escreva a nova tarefa" type="text" />
                <button>
                    <VscSend className="absolute top-3 right-2"/>
                </button>
            </form>
            <Task />
            <Task />
        </div>
    )
}