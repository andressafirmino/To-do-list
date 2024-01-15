export default function Categories() {
    return (
        <div className="w-max-width h-12 bg-sec-color rounded-md
        flex justify-around items-center shadow-md fixed top-36 z-10 m-auto">
            <div className="btn-category bg-selected-btn">Todas</div>
            <div className="btn-category">Pendentes</div>
            <div className="btn-category">Concluídas</div>
        </div>
    )
}