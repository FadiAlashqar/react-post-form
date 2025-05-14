import { useState } from 'react'
import axios from 'axios'


function App() {

  const [formData, setFormData] = useState({
    author: "",
    title: "",
    body: "",
    public: false
  })

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.type === "checkbox" ? e.target.checked : e.target.value,
    })
    console.log(formData)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    axios.post("https://67c5b4f3351c081993fb1ab6.mockapi.io/api/posts", formData).then((resp) => {
      console.log(resp.data)
    })

  }

  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-12">
            <h1>REACT POST FORM</h1>
          </div>
        </div>
        <div className="row">
          <div className="col-12">
            <form onSubmit={handleSubmit} className='bg-light mt-3 p-4'>
              <div className="col-12">
                <label htmlFor="author " className="form-label">Author</label>
                <input value={formData.author} onChange={handleChange} name="author" type="text" className="form-control" id="author"></input>
              </div>
              <div className="col-12">
                <label htmlFor="title" className="form-label">Title</label>
                <input value={formData.title} onChange={handleChange} name="title" type="text" className="form-control" id="title"></input>
              </div>
              <div className="col-12">
                <label htmlFor="body ">Body</label>
                <textarea value={formData.body} onChange={handleChange} name="body" className="form-control" placeholder="Text goes here..." id="body"></textarea>
              </div>
              <div className="col-12">
                <label className="form-check-label" htmlFor="checkDefault">Do you want the post to be public ?</label>
                <div className="form-check">
                  <input checked={formData.public} onChange={handleChange} name="public" className="form-check-input" type="checkbox" id="public" />
                  <label className="form-check-label" htmlFor="public"> Public </label>
                </div>
              </div>
              <div className="col-12 mt-3">
                <button type="submit" className="btn btn-primary">Submit</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
