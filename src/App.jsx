import Projects from "./components/Projects"
import Background from "./components/Background"
import Header from "./components/Header"
import Tools from "./components/Tools"
import AsideMenu from "./components/AsideMenu"
function App() {
  return (
    <>
    <Background />
    <AsideMenu />
    <div className="container">
      <Header />
      <Tools />
      <Projects />
    </div>
    </>
  )
}

export default App
