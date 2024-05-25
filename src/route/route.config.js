import {createBrowserRouter} from "react-router-dom";
import {routePath} from "../utils/constants.js";

import Root from "../pages/Root.jsx";
import {CourseDetails, CoursesPage, LandPage, LoginPage, Registration, Upload} from "../pages/index.js";
import Error from "../pages/errors/ErrorPage.jsx";
import CourseRootLayout from "../pages/CourseRootLayout";

export const router = createBrowserRouter([
  {
    path: routePath.landpage,
    errorElement: Error,
    children: [
      {
        path: routePath.landpage,
        Component: Root,
        children: [
          
          // home page
          {index: true, Component: LandPage},
          
          // course
          {
            path: routePath.course.courses,
            Component: CourseRootLayout,
            children: [
              
              // course page
              {index: true, Component: CoursesPage},
              
              // course detail
              {
                path: `${routePath.course.view}:courseId`,
                Component: CourseDetails
              },
            ]
          },
          {
            path: routePath.course["upload-course"],
            Component: Upload
          }
        ]
      },
      
      // login 
      {
        path: routePath.auth.login,
        Component: LoginPage
      },
      
      // register
      {
        path: routePath.auth.register,
        Component: Registration
      }
    ]
  }
]);