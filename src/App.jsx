import { useRef } from "react"

export default function App() {
  const sidebarRef = useRef(null);
  const mainContentRef = useRef(null);

  function handleResize(e) {
    console.log(e)
  }

  return (
    <div className="flex h-svh">
      <aside className="w-40 h-full bg-slate-200 p-2">
        dsds
      </aside>
      <div className="w-1 transition select-none hover:cursor-ew-resize hover:bg-slate-500"></div>
      <main className="p-2">
        Main
      </main>
    </div>
  )
}