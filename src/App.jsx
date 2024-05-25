import {Suspense} from "react";
import {Provider} from "react-redux";
import {RouterProvider} from "react-router-dom";

import {store} from "./config/index.js";
import {router} from "./route/route.config.js";

import {Spinner} from "./components/templates/spinner/Spinner.jsx";

import styles from './App.module.css'

function App(){
  return (
    <div className={styles.all}>
      <Provider store={store}>
        <Suspense fallback={<Spinner/>}>
          <RouterProvider router={router}/>
        </Suspense>
      </Provider>
    </div>
  );
}

export default App;