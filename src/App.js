import About from './About';
import './App.css';
import Contact from './Contact';
import Home from './Home';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Service from './Service';
import Header from './components/Header';
import Footer from './components/Footer';
import { ThemeProvider } from 'styled-components';
import { GlobalStyle } from './GlobalStyle';

function App() {

  const theme = {
    colors: {
      heading: "rgb(24 24 29)",
      text: "#eee",
      white: "#fff",
      black: " #212529",
      helper: "#8490ff",
      bg: "rgb(249 249 255)",
      footer_bg: "#0a1435",
      btn: "rgb(98 84 243)",
      border: "rgba(98, 84, 243, 0.5)",
      hr: "#ffffff",
      gradient:
        "linear-gradient(0deg, rgb(132 144 255) 0%, rgb(98 189 252) 100%)",
      shadow:
        "rgba(0, 0, 0, 0.02) 0px 1px 3px 0px,rgba(27, 31, 35, 0.15) 0px 0px 0px 1px;",
      shadowSupport: " rgba(0, 0, 0, 0.16) 0px 1px 4px",
    },
    media: { mobile: "768px", tab: "998px" },
  };


  return (
   <>
   <ThemeProvider theme={theme}>
   <BrowserRouter>
   <GlobalStyle/>
   {/* <ThemeProvider theme={theme}> */}
   <Header/>
   <Routes>
   <Route path="/" element={<Home/>}/>
   <Route path="/About" element={<About/>}/>
   <Route path="/Work" element={<Service/>}/>
   <Route path="/Contact" element={<Contact/>}/>
   </Routes>
   <Footer/>
   {/* </ThemeProvider> */}
   </BrowserRouter>
   </ThemeProvider>
   </>
  );
}

export default App;
