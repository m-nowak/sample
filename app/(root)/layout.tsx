

// import { Toaster } from '@/components/ui/toaster'

import Navbar from "./navBar"
import Sidebar from "./sideBar"

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <main className="root">
      <Sidebar />
      

      <div className="root-container">
        <Navbar/>
        <div className="wrapper">
          {children}
        </div>
      </div>
      
      {/* <Toaster /> */}
    </main>
  )
}

export default Layout