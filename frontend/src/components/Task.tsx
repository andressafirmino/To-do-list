import { FaPen } from "react-icons/fa";
import { FaCircleCheck } from "react-icons/fa6";
import { TiDelete } from "react-icons/ti";

export default function Task() {
    return (
        <div className="w-full h-full p-1 mb-2 bg-white flex items-center justify-between rounded-md completed">
            <div className="w-full h-10 p-1 flex items-center">estudar javascript</div>
            <div className="w-24 flex items-center justify-between">
                <FaPen className="w-4 h-5 text-gray-500" />
                <FaCircleCheck className="w-4 h-6 text-gray-500"/>
                <TiDelete className="w-6 h-6 text-red-600" />
            </div>
        </div>
    )
}