import { TaskType } from "@/protocols";
import { useRouter } from "next/router";
import React, { ReactNode, createContext, useEffect, useState } from "react";

interface TasksContextProps {
    tasks: TaskType[];
    setTasks: React.Dispatch<React.SetStateAction<TaskType[]>>;
}

export const TasksContext = createContext<TasksContextProps>({
    tasks: [],
    setTasks: () => { }
});

interface TasksProviderProps {
    children: ReactNode;
}

export default function TasksProvider({ children }: TasksProviderProps) {

    const [tasks, setTasks] = useState<TaskType[]>([]);
    const router = useRouter()

    return (
        <TasksContext.Provider value={{
            tasks, setTasks
        }}>
            {children}
        </TasksContext.Provider>
    )
}
