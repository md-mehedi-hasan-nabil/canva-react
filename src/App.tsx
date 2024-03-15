import { useRef } from 'react'
import ResizeSidebar from './components/ResizeSidebar/ResizeSidebar'
import Sidebar from './components/Sidebar/Sidebar'
import CanvasContainer from './components/CanvasContainer/CanvasContainer';

export default function App() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  return (
    <div>
      <ResizeSidebar sidebar={<Sidebar />}>
        <CanvasContainer canvasRef={canvasRef} />
      </ResizeSidebar>
    </div>
  )
}
