import Menu from 'components/Menu';
import Cardapio from 'pages/Cardapio';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import DefaultPage from 'components/DefaultPage';
import Inicio from 'pages/Inicio';
import About from 'pages/About';
import Footer from 'components/Footer';
import NotFound from 'components/NotFound';
import Snack from 'components/Snack';

export default function AppRouter() {
  return (
    <main className='container'>
      <Router>
        <Menu />
        <Routes>
          <Route path='/' element={<DefaultPage />}>
            <Route path='*' element={<NotFound />} />
            <Route index element={<Inicio />} />
            <Route path='cardapio' element={<Cardapio />} />
            <Route path='about' element={<About />} />
            <Route path='snack/:id' element={<Snack />} />
          </Route>
        </Routes>
        <Footer />
      </Router>
    </main>
  );
}
