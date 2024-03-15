import { useEffect } from 'react';

export default function CanvasContainer({ canvasRef }: { canvasRef: React.RefObject<HTMLCanvasElement> }) {
    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;

        const context = canvas.getContext('2d');
        if (!context) return;

        context.fillStyle = 'red';
        context.fillRect(0, 0, 100, 100);
    }, [canvasRef]);

    return <canvas ref={canvasRef}></canvas>;
}
