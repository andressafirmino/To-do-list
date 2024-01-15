import Menu from "./Menu";

export default function MainLayout({ children }: any) {
    return (
        <>
            <div className="h-screen flex items-center  flex-col bg-bg-color">
                <Menu />
                {children}
            </div>
        </>
    )
}