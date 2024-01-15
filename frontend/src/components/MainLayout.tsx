import Categories from "./Categories";
import Menu from "./Menu";
import Tasks from "./Tasks";

export default function MainLayout({ children }: any) {
    return (
        <>
            <div className="h-screen flex items-center  flex-col bg-bg-color">
                <Menu />
                <Categories />
                <Tasks/>
                {children}
            </div>
        </>
    )
}