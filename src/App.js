import DefaultLayout from '../src/layouts/DefaultLayout';
import { Fragment } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { publicRoutes } from '../src/routes';

function App() {
   return (
      <Router>
         <Routes>
            {publicRoutes.map((route, index) => {
               const Page = route.component;
               let Layout = DefaultLayout;
               if (route.layout) {
                  Layout = route.layout;
               } else if (route.layout === null) {
                  Layout = Fragment;
               }
               return (
                  <Route
                     exact
                     key={index}
                     path={route.path}
                     element={
                        <Layout>
                           <Page />
                        </Layout>
                     }
                  />
               );
            })}
         </Routes>
      </Router>
   );
}

export default App;
