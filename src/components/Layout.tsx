import { ReactNode } from "react";

interface Props {
  children: ReactNode
}
const Layout  = ({children} : Props) => {
  return (
    <div
      className="max-w-xl my-12 mx-auto max-h-screen bg-white">
      { children }
    </div>
  )

}
export default Layout;