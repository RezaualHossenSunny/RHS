import About from "./Component/About"
import Baner from "./Component/Baner"
import Contacet from "./Component/Contacet"
import Navbar from "./Component/Navbar"
import Portfolio from "./Component/Portfolio"
import Skill from "./Component/Skill"
import Whatido from "./Component/Whatido"
import ScrollToTop from "react-scroll-to-top";

function App() {
  

  return (
    <>
<ScrollToTop smooth color="#6f00ff" />

 <Navbar></Navbar>
<Baner></Baner>
<About></About>
<Whatido></Whatido>
<Skill></Skill>
<Portfolio></Portfolio>
<Contacet></Contacet>
    </>
  )
}

export default App
