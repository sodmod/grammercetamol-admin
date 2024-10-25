export const overLay = document.getElementById("overlays");

export const routePath = {
  landpage: "/",
  contact: "contact",
  profile: {
    "my-profile": "/profile",
    "change-password": "change-password",
  },

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
    "upload-course": "Upload1 course",
  },
};

export const time = {
  auth: {
    "token-time": 0.00694,
    "refresh-token": 1,
    loggedIn: 0.03125
  },
};

export const homeDir = {
  dirName: "Grammercetamol",
  dir: routePath.landpage
}

export const mobileNavContent = [
  {
    dirName: "Courses",
    to: "/courses",
  },
  {
    dirName: "Profile",
    to: "",

  },
  {
    dirName: "Students",
    to: "",

  }, {
    dirName: "Upload",
    to: "",
  },
]

export const navbarContent = [
  {
    dirName: "Courses",
    icon: "fa-solid fa-book",
    dir: [
      {
        menu: "Your Courses",
        to: routePath.course.courses
      },
    ],
  },
  {
    dirName: "Upload",
    icon: "fa-solid fa-upload",
    dir: [
      {
        "menu": "Create New Course",
        "to": "new-course",
      },
    ],
  },
  // {
  //   dirName: "Profile",
  //   icon: "",
  //   dir: [
  //     {
  //       "menu": "Registered Course",
  //       "to": "registered-course",
  //     },
  //     {
  //       "menu": "Whitelisted Courses",
  //       "to": "registered-course",
  //     }
  //   ],
  // },
  // {
  //   dirName: "Students",
  //   icon: "",
  //   dir: [
  //     {
  //       "menu": "Registered Course",
  //       "to": "registered-course",
  //     },
  //     {
  //       "menu": "Whitelisted Courses",
  //       "to": "registered-course",
  //     }
  //   ],
  // },

];

export const profileContent = [
  {
    dir: "My ProfileRoot",
    to: routePath.profile["profile-details"]
  },
  {
    dir: "My ProfileRoot",
    to: routePath.profile["profile-details"]
  },
  {
    dir: "My ProfileRoot",
    to: routePath.profile["profile-details"]
  },
  {
    dir: "My ProfileRoot",
    to: routePath.profile["profile-details"]
  }
]
