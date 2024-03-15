import{ useEffect, useRef } from 'react';

export default function CanvasContainer() {
    const canvasRef = useRef<HTMLCanvasElement>(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;

        const context = canvas.getContext('2d');
        if (!context) return;

        context.fillStyle = 'red';
        context.fillRect(0, 0, 100, 100);
    }, []);

    return <canvas ref={canvasRef}></canvas>;
}
