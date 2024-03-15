import ResizeSidebar from './components/ResizeSidebar/ResizeSidebar'
import Sidebar from './components/Sidebar/Sidebar'

export default function App() {
  return (
    <div>
      <ResizeSidebar sidebar={<Sidebar />}>
        Main Content
      </ResizeSidebar>
    </div>
  )
}
