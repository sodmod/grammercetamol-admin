import {useState} from "react";

import {MinusCircleOutlined, PlusOutlined} from "@ant-design/icons";

import useFetchData from "../../hooks/useFetchData";
import useFormData from "../../hooks/useFormData.js";

import Button from "../../components/ui/Button/Button.jsx";

import {endpoints} from "../../store/endpoints";
import {courseDetails, filesDetails} from "../../utils/customConverter.js";

import styles from "./upload.module.css";


// todo: handle multipart input interface more efficient
const Upload = () => {
  const {onSubmit, loading} = useFormData();

  const {data} = useFetchData(endpoints.courses.price.currency);

  const [files, setFiles] = useState([filesDetails]);

  const [details, setDetails] = useState(courseDetails);

  const detailChangeHandler = (newState) => {
    setDetails((prevState) => ({
      ...prevState,
      ...newState,
    }));
  };

  const toggleButton = () => {
    setDetails((prevState) => ({
      ...prevState,
      isFree: !prevState.isFree,
    }));
  };

  // Function to handle thumbnail changes
  const handleThumbnailChange = (event) => {
    const file = event.target.files[0];
    setDetails((prevState) => ({
      ...prevState,
      thumbnail: file,
    }));
  };

  // Function to handle adding a new field
  const handleAddField = () => {
    setFiles([...files, {file: null, topic: "", description: ""}]);
  };

  // Function to handle removing a field
  const handleRemoveField = (index) => {
    setFiles(files.filter((_, i) => i !== index));
  };

  // Function to handle file changes
  const handleFileChange = (index, event) => {
    const newFields = [...files];
    newFields[index].file = event.target.files[0];
    setFiles(newFields);
  };

  // Function to handle file topic changes
  const handleFileTopicChange = (index, event) => {
    const newFields = [...files];
    newFields[index].topic = event.target.value;
    setFiles(newFields);
  };

  // Function to handle description changes
  const handleDescriptionChange = (index, event) => {
    const newFields = [...files];
    newFields[index].description = event.target.value;
    setFiles(newFields);
  };

  const submitHandler = async(e) => {
    e.preventDefault();
    // Assuming your form submission logic here
    console.log("upload details: => ", files, details);

    await onSubmit({files, fileDetails: details})

  };

  return (
    <>
      <section className={styles.upload_section}>
        <form className={styles.form_wrap} onSubmit={submitHandler}>
          <div className={styles.course_detail_wrap}>
            <label htmlFor="coursename">Course Name</label>
            <input
              type="text"
              name="coursename"
              id="coursename"
              onChange={(e) =>
                detailChangeHandler({courseName: e.target.value})
              }
              value={details.courseName}
            />
            <label htmlFor="thumbnail">Thumbnail</label>
            <input
              type="file"
              name="thumbnail"
              id="thumbnail"
              accept=".jpg, .jpeg"
              onChange={handleThumbnailChange}
              placeholder="Thumbnail"
            />
            <button
              type="button"
              className={`${styles["boolean-button"]} ${details.isFree ? styles.active : styles.inactive}`}
              onClick={toggleButton}
            >
              {details.isFree ? 'Free Course' : 'Paid'}
            </button>

            {/* Price action redesign and accessible easily */}
            {!details.isFree && <div className={styles["price-currency-action"]}>
              <label htmlFor="price">Course Price</label>
              <div className={styles["price-currency"]}>
                <input
                  type="number"
                  name="price"
                  id="price"
                  onChange={(e) =>
                    detailChangeHandler({price: e.target.value})
                  }
                  value={details.price}
                />
                <select
                  onChange={(e) =>
                    detailChangeHandler({currency: e.target.value})
                  }
                >
                  {Array.isArray(data)
                    ? data.map((cur, index) => (
                      <option key={index} value={cur}>
                        {cur}
                      </option>
                    ))
                    : <option>N/n</option>}
                </select>
              </div>
            </div>}
          </div>
          <div className={styles.upload}>
            <div className={styles.upload_form}>
              {/* Multipart files dynamically rendered */}
              <div className={styles.file_container}>
                <div className={styles.file_add} onClick={handleAddField}>
                  <PlusOutlined className={styles.icons}/>
                </div>
                <div className={styles.file_wrap_}>
                  <h2>Files</h2>
                  <div className={styles.add}>
                    <h2>Description</h2>
                  </div>
                </div>
                {/* Render each file input dynamically */}
                {files.map((file, index) => (
                  <div key={index} className={styles.file_wrap}>
                    <div className={styles.files}>
                      <input
                        type="file"
                        name={`multipart-${index}`}
                        id={`multipart-${index}`}
                        onChange={(e) => handleFileChange(index, e)}
                      />
                      <div className={styles.file_icons}>
                        <PlusOutlined/>
                      </div>
                    </div>
                    <div className={styles.files_description}>
                      <input
                        type="text"
                        placeholder="File Topic"
                        value={file.topic}
                        onChange={(e) => handleFileTopicChange(index, e)}
                      />
                      <textarea
                        placeholder="Description"
                        value={file.description}
                        onChange={(e) => handleDescriptionChange(index, e)}
                      />
                    </div>
                    {files.length > 1 && (
                      <MinusCircleOutlined
                        onClick={() => handleRemoveField(index)}
                        className={styles.remove_icon}
                      />
                    )}
                  </div>
                ))}
              </div>
              <div id={styles.btn}>
                <Button
                  type="submit"
                  className={styles.btn}
                  disabled={loading}
                >
                  Submit
                </Button>
              </div>
            </div>
          </div>
        </form>
      </section>
    </>
  );
};

export default Upload;