import { useRef } from 'react'
import Sidebar from './components/Sidebar/Sidebar'
import CanvasContainer from './components/CanvasContainer/CanvasContainer';

export default function App() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  return (
    <div className='bg-slate-50'>
      <div className="flex h-svh">
        <aside className="w-40 h-full bg-slate-200 p-2">
          <Sidebar canvasRef={canvasRef} />
        </aside>
        <main id="main-content" className="w-full">
          <CanvasContainer canvasRef={canvasRef} />
        </main>
      </div>
    </div>
  )
}
