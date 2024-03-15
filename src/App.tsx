import ResizeSidebar from './components/ResizeSidebar/ResizeSidebar'

export default function App() {
  return (
    <div>
      <ResizeSidebar sidebar={<div>
        Sidebar
      </div>}>
        Main Content
      </ResizeSidebar>
    </div>
  )
}
