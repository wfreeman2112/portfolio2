import React from "react"

function Contact() {
    return (
        <>
        <article className="container">
      
      
        <section className="row mt-3"></section>  
    
        <article className="form-group col-sm-9">
    
          <label for="exampleInputEmail1">Name</label>
          <input type="name" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
          
        </article>
        <article className="form-group col-sm-9">
          <label for="exampleInputPassword1">Email</label>
          <input type="email" className="form-control" id="exampleInputPassword1"/>
        </article>
        <article className="form-group col-sm-9">
          <label for="exampleInputPassword1">Message</label>
          <input type="message" className="form-control" id="exampleInputPassword1"/>
        </article>
        <div className="form-group"/>

        <button type="submit" className="btn btn-primary ml-3">Submit</button>
      
      </article> 
      </>
    )
}

export default Contact