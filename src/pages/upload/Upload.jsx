import {useState} from "react";

import {MinusCircleOutlined, PlusOutlined} from "@ant-design/icons";

import useFetchData from "../../hooks/useFetchData";

import Button from "../../components/ui/Button/Button.jsx";

import {endpoints} from "../../store/endpoints";
import {courseDetails, filesDetails} from "../../utils/customConverter.js";

import styles from "./upload.module.css";

const Upload = () => {
  // const {onSubmit, loading} = useFormData();

  const {data} = useFetchData(endpoints.courses.price.currency);

  const [files, setFiles] = useState([filesDetails]);

  const [details, setDetails] = useState(courseDetails);

  const detailChangeHandler = (newState) => {
    setDetails((prevState) => ({
      ...prevState,
      ...newState,
    }));
  };

  // Function to handle adding a new field
  const handleAddField = () => {
    setFiles([...files, {file: null, file_topic: "", description: ""}]);
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
    newFields[index].file_topic = event.target.value;
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

            {/* Price action redesign and accessible easily */}
            <div className={styles["price-currency-action"]}>
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
            </div>
          </div>
          <div className={styles.upload}>
            <div className={styles.upload_form}>
              {/* Multipart files dynamically rendered */}
              <div className={styles.file_container}>
                <h2 className={styles.file_add} onClick={handleAddField}>
                  Add
                </h2>
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
                        value={file.file_topic}
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
                  // disabled={loading}
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