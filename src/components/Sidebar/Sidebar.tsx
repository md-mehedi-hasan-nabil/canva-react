import rectangleIcon from "../../assets/rectangle.png"
import triangleIcon from "../../assets/triangle.png"
import circleIcon from "../../assets/circle.png"
import { useEffect, useState } from "react";

export default function Sidebar({ canvasRef }: { canvasRef: React.RefObject<HTMLCanvasElement> }) {
    const [canvasContext, setCanvasContext] = useState<CanvasRenderingContext2D | null>(null)

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;

        const context = canvas.getContext('2d');
        setCanvasContext(context);
        if (!context) return;

    }, [canvasRef]);

    function createRectangle() {
        const mainContent = document.getElementById("main-content")

        if (!mainContent) {
            throw new Error("Main content is not found.")
        }

        const { width, height } = mainContent.getBoundingClientRect();

        const midWidth = Math.floor(width / 10);
        const midHeight = Math.floor(height / 10);

        console.log({ midWidth, midHeight })

        if (canvasContext) {
            canvasContext.fillStyle = 'red';
            canvasContext.fillRect(100, 100, 50, 50);
        }
    }

    return (
        <div className="flex flex-col justify-center items-center gap-4 pt-6">
            <div className="w-20 transition cursor-pointer active:scale-95" onClick={createRectangle}>
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
