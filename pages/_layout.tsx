import { ReactNode } from "react"
import Footer from "./_footer"
import Navbar from "./_navbar"

interface LayoutProps {
  children: ReactNode
}

export default function Layout({ children }: LayoutProps){
  return (
    <div className="bg-[#1D1F2B]">
      <Navbar />
      {children}
      <Footer />
    </div>
  )
}