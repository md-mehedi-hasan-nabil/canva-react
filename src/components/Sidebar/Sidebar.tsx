
import triangleIcon from "../../assets/triangle.png"
import circleIcon from "../../assets/circle.png"
import { useEffect, useState } from "react";
import Rectangle from "../Rectangle/Rectangle";

export default function Sidebar({ canvasRef }: { canvasRef: React.RefObject<HTMLCanvasElement> }) {
    const [canvasContext, setCanvasContext] = useState<CanvasRenderingContext2D | null>(null)

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;

        const context = canvas.getContext('2d');
        setCanvasContext(context);
        if (!context) return;

    }, [canvasRef]);


    function createTriangle() {
        const mainContent = document.getElementById("main-content")

        if (!mainContent) {
            throw new Error("Main content is not found.")
        }

        const { width, height } = mainContent.getBoundingClientRect();

        const midWidth = Math.floor(width / 2);
        const midHeight = Math.floor(height / 2);

        const scale = 2;

        if (canvasContext) {
            canvasContext.beginPath();
            canvasContext.fillStyle = "red";
            canvasContext.moveTo(0 * scale, 50 * scale);
            canvasContext.lineTo(50 * scale, 0 * scale);
            canvasContext.lineTo(100 * scale, 50 * scale);
            canvasContext.lineTo(0 * scale, 50 * scale);
            canvasContext.fill();
            canvasContext.closePath();
        }
    }

    return (
        <div className="flex flex-col justify-center items-center gap-4 pt-6">
            <Rectangle canvasContext={canvasContext} />
            <div className="w-20 transition cursor-pointer active:scale-95" onClick={createTriangle}>
                <img className="w-full" draggable={false} src={triangleIcon} alt="triangle" />
            </div>
            <div className="w-20 transition cursor-pointer active:scale-95">
                <img className="w-full" draggable={false} src={circleIcon} alt="circle" />
            </div>
        </div>
    )
}
