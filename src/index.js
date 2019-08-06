import React from 'react'
import ReactDOM from 'react-dom'

// destructer
const Man = ({img, name, email,location, children}) => {
  const url = `https://randomuser.me/api/portraits/med/men/${img}.jpg`
  return(
    <article>
      <img 
      src= {url}
      alt="boswell lookalike"
      />
      <h3>{email}</h3>
      <h3>{name}</h3>
      <h3>{location}</h3>
      {children}
    </article>
  )
}

const Boswell = () => {
  return <section> 
  <Man img="65" name="rolf" location="rogaland"/> 
  <Man img="61" name="will" location="birmingham">
  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Praesentium nemo aperiam quis id fugit vel libero similique numquam dolores dolorem!</p>
  
  </Man> 
  <Man img="35" name="james" location="dallas"/> 
  </section> 
  
}

ReactDOM.render(<Boswell></Boswell>,
document.getElementById('root'))