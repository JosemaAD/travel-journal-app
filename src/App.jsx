import Header  from './components/Header'
import Card from './components/Card'
import './App.css'
import data from './assets/data.js'

function App() {
  
  const travels = data.map( travel =>{
    return(
       <Card 
        key={travel.key}
        {...travel}
       />
    )
  } )

  return (
      <div>
        <Header />
        <section>
          {travels}
        </section>
      </div>
  )
}

export default App
