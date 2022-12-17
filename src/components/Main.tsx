import React from "react"
import Item from "./Item"
import NewItem from "./NewItem"

const Main = () => {
  const [addForm, showAddForm] = React.useState(false) 
  
  const handleClose = () => {
   showAddForm(false) 
  }

  return (
    <>
      <div> 
        <Item />
      </div>

      {/* TODO: fix NewItem component style and components styles */}
      { addForm ? <NewItem onClose={handleClose} /> : <Button onAdd = {()=>showAddForm(!addForm)}/>}
    </>
  )
}

export default  Main 
{/* TODO: fix 'add task' button styles */}

const Button = ({onAdd}) => (
  <button onClick={onAdd} className="flex space-x-2" > 
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v6m3-3H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>

    <span> Add Task </span>

  </button>
)

