import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import { RouterProvider } from 'react-router-dom';
import { router } from '@router/index';
import { store } from '@store/index';
import { HelmetProvider } from 'react-helmet-async';

const root = createRoot(document.getElementById('root')!);

// Only enable StrictMode in development
const isDevelopment = import.meta.env.VITE_NODE_ENV === 'development';

export const App = () => (
  <Provider store={store}>
    <HelmetProvider>
      <RouterProvider router={router} />
    </HelmetProvider>
  </Provider>
);

root.render(
  isDevelopment ? (
    <StrictMode>
      <App />
    </StrictMode>
  ) : (
    <App />
  )
);
