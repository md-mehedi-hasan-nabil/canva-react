import { MouseEvent, useEffect } from "react";
import { useRef } from "react"

export default function App() {
  const sidebarRef = useRef(null);
  const mainContentRef = useRef(null);
  const resizeBarRef = useRef<<HTMLDivElement>(null);

  function handleResize(e: MouseEvent) {
    console.log(e)
  }

  useEffect(() => {
    const resizeBar = resizeBarRef.current;

    if (resizeBar) {
      resizeBar.addEventListener("mousedown", handleResize);

      return () => {
        resizeBar.removeEventListener("mousedown", handleResize);
      };
    }
  }, [])

  console.log(resizeBarRef)

  return (
    <div className="flex h-svh">
      <aside className="w-40 h-full bg-slate-200 p-2">
        dsds
      </aside>
      <div ref={resizeBarRef} className="w-1 transition select-none hover:cursor-ew-resize hover:bg-slate-500"></div>
      <main className="p-2">
        Main
      </main>
    </div>
  )
}