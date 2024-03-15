import { useEffect, useState } from 'react';

export default function CanvasContainer({ canvasRef }: { canvasRef: React.RefObject<HTMLCanvasElement> }) {
    const [canvasSize, setCanvasSize] = useState<{ width: number; height: number }>({ width: 0, height: 0 });

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;

        const context = canvas.getContext('2d');
        if (!context) return;

    }, [canvasRef]);

    useEffect(() => {
        const handleResize = () => {
            const mainContent = document.getElementById("main-content");
            if (!mainContent) {
                throw new Error("Main content is not found.");
            }

            const { width, height } = mainContent.getBoundingClientRect();
            setCanvasSize({ width: width, height: height });
        };

        handleResize();
        
        window.addEventListener("resize", handleResize);

        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, []);

    return <canvas width={canvasSize.width} height={canvasSize.height} ref={canvasRef} className='bg-gray-700'></canvas>;
}
