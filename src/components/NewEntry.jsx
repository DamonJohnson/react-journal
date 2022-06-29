import React from 'react'
import { useParams } from 'react-router-dom'

const NewEntry = () => {

  const params = useParams
  // or we can destructure params
  const { category } = useParams()
  const [entry, setEntry] = useState("")

  return (
    <>
    <h1>New Entry in {category}</h1>
    <form className="container mt-4">
        <div>
          <textarea rows='10' className="form-control">

          </textarea>
        </div>
        <button className="btn btn-primary mt-4">Create Entry</button>
    </form>
      </>
  )
}

export default NewEntry