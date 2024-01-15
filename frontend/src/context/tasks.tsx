import { TaskType } from "@/protocols";
import { useRouter } from "next/router";
import React, { ReactNode, createContext, useState } from "react";

interface TasksContextProps {
    tasks: TaskType[];
    setTasks: React.Dispatch<React.SetStateAction<TaskType[]>>;
    delTask: boolean;
    setDelTask: React.Dispatch<React.SetStateAction<boolean>>;
    taskId: string;
    setTaskId: React.Dispatch<React.SetStateAction<string>>;
}

export const TasksContext = createContext<TasksContextProps>({
    tasks: [],
    setTasks: () => { },
    delTask: false,
    setDelTask: () => { },
    taskId: "",
    setTaskId: () => {}
});

interface TasksProviderProps {
    children: ReactNode;
}

export default function TasksProvider({ children }: TasksProviderProps) {

    const [tasks, setTasks] = useState<TaskType[]>([]);
    const [delTask, setDelTask] = useState<boolean>(false);
    const [taskId, setTaskId] = useState<string>("");
    const router = useRouter()

    return (
        <TasksContext.Provider value={{
            tasks, setTasks,
            delTask, setDelTask,
            taskId, setTaskId
        }}>
            {children}
        </TasksContext.Provider>
    )
}
