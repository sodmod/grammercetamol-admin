import React, { useState } from "react";
import axios from "axios";

const UploadCourse = () => {
  const [course, setCourse] = useState({
    name: "",
    price: "",
    free: false,
    description: "",
    courseType: "",
    thumbnail: null,
    modules: [{ moduleName: "", topics: [{ name: "", file: null }] }],
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setCourse({ ...course, [name]: value });
  };

  const handleFileChange = (e) => {
    setCourse({ ...course, thumbnail: e.target.files[0] });
  };

  const handleModuleChange = (index, e) => {
    const { name, value } = e.target;
    const updatedModules = [...course.modules];
    updatedModules[index][name] = value;
    setCourse({ ...course, modules: updatedModules });
  };

  const handleTopicChange = (moduleIndex, topicIndex, e) => {
    const { name, value, files } = e.target;
    const updatedModules = [...course.modules];
    updatedModules[moduleIndex].topics[topicIndex][name] = files ? files[0] : value;
    setCourse({ ...course, modules: updatedModules });
  };

  const addModule = () => {
    setCourse({ ...course, modules: [...course.modules, { moduleName: "", topics: [{ name: "", file: null }] }] });
  };

  const removeModule = (moduleIndex) => {
    const updatedModules = [...course.modules];
    updatedModules.splice(moduleIndex, 1);
    setCourse({ ...course, modules: updatedModules });
  };

  const addTopic = (moduleIndex) => {
    const updatedModules = [...course.modules];
    updatedModules[moduleIndex].topics.push({ name: "", file: null });
    setCourse({ ...course, modules: updatedModules });
  };

  const removeTopic = (moduleIndex, topicIndex) => {
    const updatedModules = [...course.modules];
    updatedModules[moduleIndex].topics.splice(topicIndex, 1);
    setCourse({ ...course, modules: updatedModules });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("name", course.name);
    formData.append("price", course.price);
    formData.append("free", course.free);
    formData.append("description", course.description);
    formData.append("courseType", course.courseType);
    formData.append("thumbnail", course.thumbnail);

    course.modules.forEach((module, moduleIndex) => {
      formData.append(`modules[${moduleIndex}].moduleName`, module.moduleName);
      module.topics.forEach((topic, topicIndex) => {
        formData.append(`modules[${moduleIndex}].topics[${topicIndex}].name`, topic.name);
        formData.append(`modules[${moduleIndex}].topics[${topicIndex}].file`, topic.file);
      });
    });

    try {
      const response = await axios.post("http://localhost:8088/api/courses", formData, {
        headers: { "Content-Type": "multipart/form-data", Authorization: "Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJob3JsdXdhdG9zaW5AZ21haWwuY29tIiwiaWF0IjoxNzQzNzg5NDI1LCJleHAiOjE3NDQ0NTU0MjV9.prgIOMS5neKIpcXLlXQo2woGcbr-BxZjX1K-Jjn1t1etOneFsXYa24o0PltmY2Nkc6hMdee_FSkqIosYYqGe5g" },
      });
      alert(response.data.message);
    } catch (error) {
      console.error("Upload error:", error);
      alert("Failed to upload course!");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Upload Course</h2>

      <input type="text" name="name" placeholder="Course Name" value={course.name} onChange={handleInputChange} required />
      <input type="number" name="price" placeholder="Price" value={course.price} onChange={handleInputChange} required />
      <label>
        Free Course? <input type="checkbox" name="free" checked={course.free} onChange={(e) => setCourse({ ...course, free: e.target.checked })} />
      </label>
      <textarea name="description" placeholder="Description" value={course.description} onChange={handleInputChange} required />
      <input type="text" name="courseType" placeholder="Course Type" value={course.courseType} onChange={handleInputChange} required />
      <input type="file" onChange={handleFileChange} required />

      <h3>Modules</h3>
      {course.modules.map((module, moduleIndex) => (
        <div key={moduleIndex} style={{ border: "1px solid #ccc", padding: "10px", margin: "10px 0" }}>
          <input
            type="text"
            name="moduleName"
            placeholder="Module Name"
            value={module.moduleName}
            onChange={(e) => handleModuleChange(moduleIndex, e)}
            required
          />
          <button type="button" onClick={() => removeModule(moduleIndex)} style={{ marginLeft: "10px", color: "red" }}>
            ❌ Remove Module
          </button>
          <h4>Topics</h4>
          {module.topics.map((topic, topicIndex) => (
            <div key={topicIndex} style={{ marginBottom: "10px" }}>
              <input
                type="text"
                name="name"
                placeholder="Topic Name"
                value={topic.name}
                onChange={(e) => handleTopicChange(moduleIndex, topicIndex, e)}
                required
              />
              <input type="file" name="file" onChange={(e) => handleTopicChange(moduleIndex, topicIndex, e)} required />
              <button type="button" onClick={() => removeTopic(moduleIndex, topicIndex)} style={{ marginLeft: "10px", color: "red" }}>
                ❌ Remove Topic
              </button>
            </div>
          ))}
          <button type="button" onClick={() => addTopic(moduleIndex)}>+ Add Topic</button>
        </div>
      ))}
      <button type="button" onClick={addModule}>+ Add Module</button>
      <button type="submit">Upload Course</button>
    </form>
  );
};

export default UploadCourse;
