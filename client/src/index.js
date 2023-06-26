import React, {createContext} from 'react';
import App from './App';
import ReactDOM from 'react-dom/client';
import UserStore from './store/UserStore';
import { createRoot } from 'react-dom/client';
import CarStore from './store/CarStore';
import CustomerStore from './store/CustomerStore';

export const Context = createContext(null)


const root = createRoot(document.getElementById('root'))
root.render(
  <Context.Provider value={{
    user: new UserStore(),
    car: new CarStore(),
    customer: new CustomerStore()
  }}>
    <App />
  </Context.Provider>
)
// const rootElement = document.getElementById('root');
// const root = createRoot(rootElement);
// root.render(
//   <Context.Provider value = {{
//     user: new UserStore(),
//   }}>
//     <App />
//     </Context.Provider>
// )

// ReactDOM.render(
//     <Context.Provider value={{
//       user: new UserStore(),     
//   }}>
//       <App />
//   </Context.Provider>,
//   document.getElementById('root')
// );