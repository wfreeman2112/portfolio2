import React from "react" 
 function AboutMe() {
     return (
        <section className="container">
        <section className="card mt-3" style={{maxWidth: "800px"}}>
          <section className="row no-gutters">
              <section className="col-sm-5" style={{background: "#868e96"}}>
                  <img src="WendiPhoto.jpeg" className="card-img-top h-100" alt="..."/>
              </section>
              <article className="col-sm-7">
                  <section className="card-body">
                      <h5 className="card-title">About Me</h5>
                      <p className="card-text">Wendi Freeman is certified from coding bootcamp at Northwestern University in full stack development.</p>
                      <p>Prior to this she taught private drum lessons at the Old Town School of Folk Music. She is the drummer for the bands Daemon Familiar and Sonny Veneer. She moved to Chicago to work as a recording engineer in 2000 and likes to apply her methodical thought processes to whatever she does.</p>
                      <p>Email wfreeman2112@gmail.com</p>
                      <p>Phone 773-405-0825</p>
                      <a href= "https://docs.google.com/document/d/15I_MoZ9umgaJwO-6gI00k9ceoNj9xL6tZnvAB7xlGIY/edit">Resume</a>
                  </section>
                </article>
              </section>
        </section>
      </section>
     )


 }

 export default AboutMe 