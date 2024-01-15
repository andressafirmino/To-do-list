import Task from "./Task";

export default function Tasks() {
    return (
        <div className="w-max-width h-auto p-4 bg-tasks-color rounded-md
        flex flex-col justify-around items-center shadow-md mx-auto mt-52">
            <Task/>
            <Task/>
        </div>
    )
}