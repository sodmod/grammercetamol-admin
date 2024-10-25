import {createBrowserRouter} from "react-router-dom";
import {routePath} from "../utils/constants.js";

import {
  ContinuedWatching,
  Courses,
  Dashboard,
  LoginPage,
  OverView,
  Profile,
  ProfileRoot,
  Registered,
  Registration,
  Upload,
} from "../pages/index.js";
import Error from "../pages/errors/ErrorPage.jsx";
import CoursePage from "../pages/courses-page/CoursePage.jsx";

export const router = createBrowserRouter([
  {
    path: routePath.landpage,
    errorElement: Error,
    children: [
      {
        path: routePath.landpage,
        Component: Dashboard,
        children: [
          {
            index: true, Component: OverView,
          },
          {
            path: routePath.course.courses,
            Component: CoursePage,
            children: [
              // course page
              {
                path: "registered",
                Component: Registered
              },
              {index: true, Component: Courses},
              {path: "viewAllcourse", Component: ContinuedWatching},
            ]
          },
          {
            path: routePath.course["upload-course"],
            Component: Upload
          },
          {
            path: routePath.profile["my-profile"],
            Component: ProfileRoot,
            children: [
              {
                // profile page
                index: true, Component: Profile
              },
              {}
            ]
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
