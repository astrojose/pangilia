import { ReactNode } from "react";

interface Props {
  children: ReactNode
}
const Layout  = ({children} : Props) => {
  return (
    <div
      className="max-w-xl my-12 mx-auto max-h-screen bg-white">
      <div className="flex justify-center items-center h-16">
        <h1 className="font-bold text-2xl">Pangilia Todo</h1>
      </div>
      <div> { children }</div>
    </div>
  )

}
export default Layout;