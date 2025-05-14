import { useState } from 'react'


function App() {


  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-12">
            <h1>REACT POST FORM</h1>
          </div>
        </div>
        <iv className="row">
          <div className="col-12">
            <form className='bg-light mt-3'>
              <div className="col-12">
                <label for="author " class="form-label">Author</label>
                <input name="author" type="text" class="form-control" id="author"></input>
              </div>
              <div className="col-12">
                <label for="title" class="form-label">Title</label>
                <input name="title" type="text" class="form-control" id="title"></input>
              </div>
              <div className="col-12">
                <label for="body ">Body</label>
                <textarea name="body" class="form-control" placeholder="Text goes here..." id="body"></textarea>
              </div>
              <div className="col-12">
                <label class="form-check-label" for="checkDefault">Do you want the post to be public ?</label>
                <div class="form-check">
                  <input name="public" class="form-check-input" type="checkbox" value="" id="public" />
                  <label class="form-check-label" for="public"> Yes </label>
                </div>
                <div class="form-check">
                  <input name="public" class="form-check-input" type="checkbox" value="" id="public" />
                  <label class="form-check-label" for="public"> No </label>
                </div>
              </div>
            </form>
          </div>
        </iv>
      </div>
    </>
  )
}

export default App
