const NewItem = ({onClose}) => {
  return (
    <>
      <div className="flex  flex-col bg-green-50">
        <div className="">
          inputs
        </div>
        <div className="flex space-x-3">
          <button onClick={()=>onClose()}>Close</button>
          <button>Save </button>
        </div>
      </div>
    </>
  )
}

export default NewItem 
