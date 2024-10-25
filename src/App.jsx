import {Suspense} from "react";
import {Provider} from "react-redux";
import {RouterProvider} from "react-router-dom";

import {store} from "./config/index.js";
import {router} from "./route/route.config.js";

import {Spinner} from "./components/templates/spinner/Spinner.jsx";
import {ThemeProvider} from "react-bootstrap";

function App(){
  return (
    <ThemeProvider breakpoints={['xxxl', 'xxl', 'xl', 'lg', 'md', 'sm', 'xs', 'xxs']}
                   minBreakpoint="xxs">
      <Provider store={store}>
        <Suspense fallback={<Spinner/>}>
          <RouterProvider router={router}/>
        </Suspense>
      </Provider>
    </ThemeProvider>

  );
}

export default App;
