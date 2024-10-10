import { createRoot } from 'react-dom/client';
import './index.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Layout from './Layout';
import Home from './pages/Home';
import About from './pages/About';
import Projects from './pages/Projects.jsx';
import Experience from './pages/Experience.jsx';
import Contact from './pages/Contact.jsx';



const router = createBrowserRouter([
    {
        path: '/',
        element: <Layout />,
        children: [
            {
                path: 'home',
                element: <Home />
            },
            {
                path: 'about',
                element: <About />
            },
            {
                path: 'projects',
                element: <Projects />
            },
            {
                path: 'experience',
                element: <Experience />
            },
            {
                path: 'contact',
                element: <Contact />
            }
        ]
    }
]);

createRoot(document.getElementById('root')).render(
    <RouterProvider router={router} />
);
