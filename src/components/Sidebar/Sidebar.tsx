import rectangleIcon from "../../assets/rectangle.png"
import triangleIcon from "../../assets/triangle.png"
import circleIcon from "../../assets/circle.png"

export default function Sidebar() {
    return (
        <div className="flex flex-col justify-center items-center gap-4 pt-6">
            <div className="w-20 transition cursor-pointer active:scale-95">
                <img className="w-full" draggable={false} src={rectangleIcon} alt="rectangle" />
            </div>
            <div className="w-20 transition cursor-pointer active:scale-95">
                <img className="w-full" draggable={false} src={triangleIcon} alt="triangle" />
            </div>
            <div className="w-20 transition cursor-pointer active:scale-95">
                <img className="w-full" draggable={false} src={circleIcon} alt="circle" />
            </div>
        </div>
    )
}
