import { ReactNode } from "react";

interface Props {
  children: ReactNode
}
const Layout  = ({children} : Props) => {
  return (
    <div className="max-w-xl  mx-auto max-h-screen bg-gray-400">
      <div className="flex justify-center items-center h-16">
        <h1>Pangilia Todo</h1>
      </div>
      <div> { children }</div>
    </div>
  )

}
export default Layout;