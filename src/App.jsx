import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Home from "./pages/Home";
import Faq from "./pages/Faq";
import Association from "./pages/Association";
import Agenda from "./pages/Agenda";
import Boutique from "./pages/Boutique";
import Actions from "./pages/Actions";
import Action from "./pages/Action";
import Contact from "./pages/Contact";
import Mentions from "./pages/Mentions";
import Centre from "./pages/Centre";
import Rejoindre from "./pages/Rejoindre";
import Presse from "./pages/Presse";
import Blog from "./pages/Blog";
import ArticleBlog from "./pages/ArticleBlog";
import ScrollToTop from "./components/ScrollToTop"; // Importe le composant
import "./App.css";

function App() {
  const helmet = {
    title: "Association Pilon | Association LGBT à La Réunion",
    href: "https://www.pilon.re",
    description: "Change description",
  };
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Header helmet={helmet} />
      <Routes>
        <Route path="/" element={<Home helmet={helmet} />} />
        <Route path="/Blog" element={<Blog helmet={helmet} />} />
        <Route path="/Blog/:id" element={<ArticleBlog helmet={helmet} />} />
        <Route path="/Presse" element={<Presse helmet={helmet} />} />
        <Route path="/Faq" element={<Faq helmet={helmet} />} />
        <Route path="/Rejoindre" element={<Rejoindre helmet={helmet} />} />
        <Route path="/Association" element={<Association helmet={helmet} />} />
        <Route path="/Centre" element={<Centre helmet={helmet} />} />
        <Route path="/Boutique" element={<Boutique helmet={helmet} />} />
        <Route path="/Agenda" element={<Agenda helmet={helmet} />} />
        <Route path="/Actions" element={<Actions helmet={helmet} />} />
        <Route path="/Actions/:id" element={<Action helmet={helmet} />} />
        <Route path="/Contact" element={<Contact helmet={helmet} />} />
        <Route path="/Mentions" element={<Mentions />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
