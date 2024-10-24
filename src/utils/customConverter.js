export function courseDetailsConverter({data}){

  const {authorDTO, courseId, courseName, videoIds} = data;

  return {
    "course-title": courseName,
    "course-key": courseId,
    "author-info": typeof authorDTO === "object" ? authorDTO : {},
    "course-contents": Array.isArray(videoIds) ? videoIds : []
  }
}

export const courseDetails = {
  price: 0,
  free: false,
  summary: "",
  currency: "",
  courseName: "",
  thumbnail: null,
}

export const filesDetails = {
  file: null,
  topic: "",
  description: "",
}
