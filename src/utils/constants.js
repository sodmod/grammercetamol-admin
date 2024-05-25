export const overLay = document.getElementById("overlays");

export const routePath = {
  landpage: "/",
  contact: "contact",
  profile: "profile",

  auth: {
    login: "/login",
    register: "/register",
  },

  course: {
    courses: "courses",
    "view": "view/",
    "upload-course": "/upload-course",
  },
};

export const routeName = {
  landpage: "Home",
  contact: "Contact",
  profile: "Profile",

  auth: {
    login: "Login",
    register: "Register",
  },

  course: {
    courses: "Courses",
    "view-course": "View course",
    "upload-course": "Upload course",
  },
};

export const time = {
  auth: {
    "token-time": 0.00694,
    "refresh-token": 1,
    loggedIn: 0.03125
  },
};

export const navbarContent = [
  {
    "dir": "Home",
    "to": routePath.landpage
  },
  {
    "dir": "Courses",
    "to": routePath.course.courses
  },
  {
    "dir": routeName.course["upload-course"],
    "to": routePath.course["upload-course"]
  }
];