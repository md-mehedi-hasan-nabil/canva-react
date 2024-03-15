import { useState } from "react";
import rectangleIcon from "../../assets/rectangle.png"

export default function Rectangle({ canvasContext }: { canvasContext: CanvasRenderingContext2D | null }) {
    const [rectangleCount, setRectangleCount] = useState(0)

    function createRectangle() {
        const mainContent = document.getElementById("main-content")

        if (!mainContent) {
            throw new Error("Main content is not found.")
        }

        const { width, height } = mainContent.getBoundingClientRect();

        const midWidth = Math.floor(width / 2) + (rectangleCount * 4);
        const midHeight = Math.floor(height / 2) + (rectangleCount * 4);

        if (canvasContext) {
            canvasContext.fillStyle = 'red';
            canvasContext.fillRect(midWidth, midHeight, 100, 100);
            setRectangleCount(prev => prev + 1);
        }
    }
    return (
        <div className="w-20 transition cursor-pointer active:scale-95" onClick={createRectangle}>
            <img className="w-full" draggable={false} src={rectangleIcon} alt="rectangle" />
        </div>
    )
}
