import { ReactNode, useEffect, useRef } from "react";

export default function ResizeSidebar({ children, sidebar }: { children: ReactNode, sidebar: ReactNode }) {
    const sidebarRef = useRef<HTMLDivElement>(null);
    const resizeBarRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        let isResizing = false;
        let startX: number;
        let sidebarWidth: number;

        const startResize = (e: MouseEvent) => {
            if (sidebarRef.current) {
                isResizing = true;
                startX = e.clientX;
                sidebarWidth = sidebarRef.current.offsetWidth;
            }
        };

        const resize = (e: MouseEvent) => {
            if (sidebarRef.current && isResizing) {
                const width = sidebarWidth + e.clientX - startX;
                if (100 <= width) {
                    sidebarRef.current.style.width = `${width}px`;
                }
            }
        };

        const stopResize = () => {
            isResizing = false;
        };

        const handleMouseUp = () => {
            if (isResizing) {
                stopResize();
            }
        };

        if (resizeBarRef.current) {
            resizeBarRef.current.addEventListener("mousedown", startResize);
            document.addEventListener("mousemove", resize);
            document.addEventListener("mouseup", handleMouseUp);
        }

        return () => {
            if (resizeBarRef?.current) {
                resizeBarRef.current.removeEventListener("mousedown", startResize);
                document.removeEventListener("mousemove", resize);
                document.removeEventListener("mouseup", handleMouseUp);
            }
        };
    }, []);

    return (
        <div className="flex h-svh">
            <aside ref={sidebarRef} className="w-40 h-full bg-slate-200 p-2">
                {sidebar}
            </aside>
            <div
                ref={resizeBarRef}
                className="w-1 transition select-none hover:cursor-ew-resize hover:bg-slate-500"
            ></div>
            <main id="main-content" className="p-2 w-full">
                {children}
            </main>
        </div>
    );
}
