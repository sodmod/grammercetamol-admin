export function courseDetailsConverter({data}){

  const {authorDTO, courseId, courseName, videoIds} = data;

  console.log();

  return {
    "course-title": courseName,
    "course-key": courseId,
    "author-info": typeof authorDTO === "object" ? authorDTO : {},
    "course-contents": Array.isArray(videoIds) ? videoIds : []
  }
}

export const courseDetails = {
  price: 0,
  currency: "",
  courseName: "",
}

export const filesDetails = {
  file: null,
  file_topic: "",
  description: "",
}