import { useEffect, useState, useCallback } from "react";
import rectangleIcon from "../../assets/rectangle.png";

export default function Rectangle({ canvasContext, canvasRef }: { canvasContext: CanvasRenderingContext2D | null, canvasRef?: React.RefObject<HTMLCanvasElement> }) {
    const [rectangleCount, setRectangleCount] = useState(0);

    useEffect(() => {
        const mainContent = document.getElementById("main-content");

        if (!mainContent) {
            throw new Error("Main content is not found.");
        }

        const { width, height } = mainContent.getBoundingClientRect();
        const midWidth = Math.floor(width / 2) + (rectangleCount * 4);
        const midHeight = Math.floor(height / 2) + (rectangleCount * 4);

        createRectangle(midWidth, midHeight, 100, 100);
        setRectangleCount(prevCount => prevCount + 1);
    }, []);

    const createRectangle = useCallback((x: number, y: number, width: number, height: number) => {
        if (canvasContext) {
            canvasContext.fillStyle = 'red';
            canvasContext.fillRect(x, y, width, height);
        }
    }, [canvasContext]);

    const handleMouseMove = useCallback((e: MouseEvent) => {
        if (canvasContext && e.target instanceof HTMLElement && e.target.tagName === "CANVAS") {
            const { offsetX, offsetY } = e;
            const rectWidth = 100; 
            const rectHeight = 100;

            canvasContext.clearRect(0, 0, canvasContext.canvas.width, canvasContext.canvas.height);

            createRectangle(offsetX, offsetY, rectWidth, rectHeight);
        }
    }, [canvasContext, createRectangle]);


    useEffect(() => {
        window.addEventListener("mousemove", handleMouseMove);
        return () => {
            window.removeEventListener("mousemove", handleMouseMove);
        };
    }, [handleMouseMove]);

    return (
        <div className="w-20 transition cursor-pointer active:scale-95">
            <img className="w-full" draggable={false} src={rectangleIcon} alt="rectangle" />
        </div>
    );
}
