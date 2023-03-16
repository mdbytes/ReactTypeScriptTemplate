import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from 'react-router-dom';
import { About } from '../components/about/About';
import { Contact } from '../components/contact/Contact';
import { FAQ } from '../components/faq/FAQ';
import { Home } from '../components/home/Home';
import { Layout } from '../components/layout/Layout';
import Terms from '../components/legal/Terms';
import Privacy from '../components/legal/Privacy';
import NotFound from '../components/NotFound';

// Creates the site router with a wrapper element called Layout
// Layout contains the navigation bar, footer, and metadata to
// be added to the head section of the website.
export const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layout />} errorElement={<NotFound />}>
      <Route index element={<Home />} />
      <Route path='about' element={<About />} />
      <Route path='faq' element={<FAQ />} />
      <Route path='contact' element={<Contact />} />
      <Route path='privacy' element={<Privacy />} />
      <Route path='terms' element={<Terms />} />
    </Route>
  )
);
