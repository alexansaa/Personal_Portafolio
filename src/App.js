import { Routes, Route } from 'react-router-dom';
import Layout from './Components/Layout/LayoutLogic';
import HomepageLogic from './Components/Home/HomeLogic'
import AboutLogic from './Components/About/AboutLogic';
import PortfolioLogic from './Components/Portfolio/PortfolioLogic';
import ContactLogic from './Components/Contact/ContactLogic';

const App = () => (
  <Routes>
    <Route path="/" element={<Layout />}>
      <Route index element={<HomepageLogic />} />
      <Route path="about" element={<AboutLogic />} />
      <Route path="portfolio" element={<PortfolioLogic />} />
      <Route path="contact" element={<ContactLogic />} />
    </Route>
  </Routes>
)

export default App;
