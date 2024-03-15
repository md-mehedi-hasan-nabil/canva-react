import ResizeSidebar from './components/ResizeSidebar/ResizeSidebar'
import Sidebar from './components/Sidebar/Sidebar'
import CanvasContainer from './components/CanvasContainer/CanvasContainer';

export default function App() {

  return (
    <div>
      <ResizeSidebar sidebar={<Sidebar />}>
        <CanvasContainer />
      </ResizeSidebar>
    </div>
  )
}
