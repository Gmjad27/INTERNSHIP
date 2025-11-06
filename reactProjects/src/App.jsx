
import Progressbar from './components/Progressbar'


function App() {

  return (
    <>
      <div className="container">
        <div className="balls"><div className="ball"></div><div className="ball"></div></div>
        <h1>MY <span>SKILLS</span></h1>

        <div className="con">

          <div className="skills1">

            <Progressbar label='Laravel' skill='80%' color='red' />
            <Progressbar label='Vue js' skill='70%' color='rgb(0, 255, 13)' />
            <Progressbar label='Tailwind css' skill='70%' color='rgb(0, 225, 255)' />
          </div>
          <div className="skills2">
            <Progressbar label='PHP' skill='80%' color='rgb(0, 89, 255)' />
            <Progressbar label='HTML/CSS' skill='90%' color='red' />
            <Progressbar label='Javascript' skill='90%' color='rgb(238, 255, 0)' />

          </div>
        </div>
      </div>
    </>
  )
}

export default App
