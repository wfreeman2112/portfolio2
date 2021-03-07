import React from "react"

function Portfolio() {
    return (
        <>
        <h1 className="text-center mt-3">Portfolio</h1>
      <article className="container">
        <section className="row">
          <section className="col-md-6">
            <a href= "https://github.com/group-6-project-1/Dinner-and-a-show"alt="Dinner and a Show"><img className = "w-100 mt-3" src="https://user-images.githubusercontent.com/67984998/99901954-f0f52b00-2c7f-11eb-8d12-4288bee9b8eb.png"/>  
            </a></section>
          <section className="col-md-6">
            <a href= "https://github.com/wfreeman2112/Code-Quiz"><img className = "w-100 mt-3"  src="https://user-images.githubusercontent.com/67984998/99902235-e89def80-2c81-11eb-904a-a0afc7530763.png" alt="Code Quiz"/>
            </a></section>
          <section className="col-md-6">
            <a href="https://github.com/wfreeman2112/daily-planner"><img className = "w-100 mt-3" src="https://user-images.githubusercontent.com/67984998/99902356-e5573380-2c82-11eb-861d-a8867599e5fc.png" alt="daily planner"/>
            </a></section>
          <section className="col-md-6">
            <a href="https://github.com/wfreeman2112/weather-dashboard"><img className = "w-100 mt-3" src="https://user-images.githubusercontent.com/67984998/99902521-ff454600-2c83-11eb-8ef1-bf0aeedbd061.png" alt="Weather Dashboard"/>
          </a></section>
       
        </section>   
       
      </article>
      </>
    )
}

export default Portfolio