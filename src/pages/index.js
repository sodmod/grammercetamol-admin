import {lazy} from "react";

const OverView = lazy(() => import("./overview/Overview"));
const Dashboard = lazy(() => import("./dashboard/Dashboard"))
const Upload = lazy(() => import("./upload/Upload"));
const Profile = lazy(() => import("./profile/Profile"))
const LoginPage = lazy(() => import("./login-form/LoginPage"));
const ProfileRoot = lazy(() => import("./profile/ProfileRoot"));
const Courses = lazy(()=> import("./courses-page/courses/Courses"))
const ContinuedWatching = lazy(() => import("../components/templates/courses/ContinuedWatching"));
const CourseDetails = lazy(() => import("./courses-page/course-details/CourseDetails"));
const Registration = lazy(() => import("./registration/Registration"));
const Registered = lazy(()=> import("./courses-page/registered/Registered"))

export {
  Dashboard,
  OverView,
  Upload,
  Registration,
  LoginPage,
  CourseDetails,
  ProfileRoot,
  Profile,
  ContinuedWatching,
  Registered,
  Courses,
};
