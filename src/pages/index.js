import {lazy} from "react";

const Upload = lazy(() => import("./upload/Upload"));
const LandPage = lazy(()=> import("./land-page/LandPage.jsx"));
const LoginPage = lazy(() => import("./login-form/LoginPage"));
const CoursesPage = lazy(() => import("./courses-page/CoursePage"));
const CourseDetails = lazy(()=> import("./course-details/CourseDetails"));
const Registration = lazy(() => import("./registration/Registration.jsx"));

export {
  CoursesPage,
  Upload,
  Registration,
  LoginPage,
  LandPage,
  CourseDetails
};