import {useState} from "react";

import {PlusOutlined} from "@ant-design/icons";

import useFormData from "../../hooks/useFormData";
import useFetchData from "../../hooks/useFetchData";

import Button from "../../components/ui/Button/Button";

import {endpoints} from "../../store/endpoints";

import styles from "./upload.module.css";

const Upload2 = () => {

  const {onSubmit, loading} = useFormData();
  const {data} = useFetchData(endpoints.courses.price.currency);

  const [files, setFiles] = useState([]);
  const [price, setPrice] = useState(0.0);
  const [currency, setCurrency] = useState("");
  const [courseName, setCourseName] = useState("");
  const [authorMail, setAuthorMail] = useState("");
  const [authorName, setAuthorName] = useState("");

  const handleUploadFiles = (files) => {
    const uploaded = [...files];

    files.some((files) => {
      if(uploaded.findIndex((f) => f.name === files.name) === -1) {
        uploaded.push(files);
      }
      return true;
    });
    setFiles(uploaded);
  };

  const courseNameChangeHandler = (event) => {
    setCourseName(event.target.value);
  };

  const authorNameChangeHandler = (event) => {
    setAuthorName(event.target.value);
  };

  const authorMailChangeHandler = (event) => {
    setAuthorMail(event.target.value);
  };

  const handleFileEvent = (e) => {
    const chosenFiles = Array.prototype.slice.call(e.target.files);
    handleUploadFiles(chosenFiles);
  };

  const handleSelectCurrencyType = (e) => {
    setCurrency(e.target.value);
  }

  function priceChangeHandler(e){
    setPrice(e.target.value);
  }

  const submitHandler = async(e) => {
    e.preventDefault();

    if(files && courseName && authorMail && authorMail && currency !== null && price > 0) {
      const fileDetails = {
        courseName: courseName,
        authorName: authorName,
        authorMail: authorMail,
        amount: price,
        currency,
      };

      await onSubmit({files, fileDetails});

      return null;
    }else {
      // todo handle the response message later that will show if the iinput are empty or not
      return console.log("it is else");
    }
  };

  return (
    <section className={styles.upload_section}>

      <div className={styles.upload_wrap}>
        <div className={styles.upload}>
          <div className={styles.upload_form}>
            <form className={styles.upload_form__} onSubmit={submitHandler}>
              
              <div>
                <label htmlFor="authorname">Author Name</label>
                <input
                  type="text"
                  name="authorname"
                  id="authorname"
                  value={authorName}
                  onChange={authorNameChangeHandler}
                />
              </div>
              <div>
                <label htmlFor="coursename">Course Name</label>
                <input
                  type="text"
                  name="coursename"
                  id="coursename"
                  onChange={courseNameChangeHandler}
                  value={courseName}
                />
              </div>
              <div>
                <label htmlFor="authormail">Author Mail</label>
                <input
                  type="text"
                  name="authormail"
                  id="authormail"
                  onChange={authorMailChangeHandler}
                  value={authorMail}
                />
              </div>
              {/*todo: Multipart files dynamically rendered*/}
              <div>
                <PlusOutlined/>
              </div>
              
              {/*todo: Price action redesign and accessible easily*/}
              <div className={styles["price-currency-action"]}>
                <label htmlFor="price">Course Price</label>
                <div className={styles["price-currency"]}>
                  <input
                    type="number"
                    name="price"
                    id="price"
                    onChange={priceChangeHandler}
                    value={price}
                  />
                  <select onChange={handleSelectCurrencyType}>
                    {Array.isArray(data) ?
                      data.map((cur, index) => (
                        <option key={index} value={cur}>
                          {cur}
                        </option>
                      )) : <option>N/n</option>}
                  </select>
                </div>

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
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Upload2;