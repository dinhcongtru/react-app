import { createBrowserRouter } from 'react-router-dom'
import App from '@/App'
import HomePage from '@/pages'
import AboutPage from '@/pages/about'
import ServicesPage from '@/pages/service'
import ContactPage from '@/pages/contact'
import NotFoundPage from '@/pages/NotFoundPage'
export const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <NotFoundPage />,
    children: [
      {
        index: true,
        element: <HomePage />,
        handle: { layout: 'default', name: 'home', breadcrumbs: [{ name: 'Home', url: '/' }] },
      },
      {
        path: 'about',
        element: <AboutPage />,
        handle: {
          layout: 'default',
          name: 'about',
          breadcrumbs: [
            { name: 'Home', url: '/' },
            { name: 'About', url: '/about' },
          ],
        },
      },
      {
        path: 'services',
        element: <ServicesPage />,
        handle: {
          layout: 'default',
          name: 'services',
          breadcrumbs: [
            { name: 'Home', url: '/' },
            { name: 'Services', url: '/services' },
          ],
        },
      },
      {
        path: 'contact',
        element: <ContactPage />,
        handle: {
          layout: 'default',
          name: 'contact',
          breadcrumbs: [
            { name: 'Home', url: '/' },
            { name: 'Contact', url: '/contact' },
          ],
        },
      },
    ],
  },
])

export default router
