import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.scss'
import Routes from './Routes'
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './i18n';
import { Provider } from 'react-redux';
import store from './store/store';


createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <StrictMode>
      <Routes />
    </StrictMode>,
  </Provider>
)
