import React, { useState } from "react";
import "./diary.css";
// import { firebase, firestore } from '../../firebase.js';
// import 'firebase/storage';
import Topbar from "../../components/topbar/Topbar";
import Dropdown from "react-dropdown";
import "react-dropdown/style.css";
// import DatePicker from "react-datepicker";
// import "react-datepicker/dist/react-datepicker.css";

// import { ReactComponent as ImageIcon } from '../../assets/image.svg';
import { ReactComponent as Circle } from "../../assets/circle.svg";
import { ReactComponent as CheckedCircle } from "../../assets/check-circle.svg";

function Diary() {
  document.documentElement.style.setProperty(
    "--main-color",
    "var(--text-dark)"
  );
  document.documentElement.style.setProperty(
    "--loginbutton-color",
    "var(--primary-green)"
  );
  document.documentElement.style.setProperty("--logintext-color", "#FFFFFF");

  const [title, setTitle] = useState("");
  const [category, setCategory] = useState("Zero Waste");
  const [isPublic, setIsPublic] = useState(false);
  const [contents, setContents] = useState("");
  // const [startDate, setStartDate] = useState(new Date());

  const [image, setImage] = useState(null);
  const [imgBase64, setImgBase64] = useState("");
  // const [url, setUrl] = useState("");
  // const [progress, setProgress] = useState(0);

  // const [imageloading, setImageloading] = useState(false);
  const options = ["Zero Waste", "Carbon Footprint", "Food", "Others"];
  const defaultOption = options[0];

  // let user = {
  //   displayName: "Jiyun Park",
  //   uid: 1
  // }
  // let name: string, uid: number;

  const handleSubmit = (e: any) => {
    e.preventDefault();
  };

  return (
    <form className="Diary" onSubmit={(e) => handleSubmit(e)}>
      <Topbar />
      <div className="diaryinfo">
        <div className="date">
          {/* <DatePicker className="datePicker" selected={startDate}
            onChange={function async(date) {
              setStartDate(date!);
              console.log("date: " + date);
            }} /> */}
        </div>
        <div className="d_category">
          <Dropdown
            options={options}
            onChange={function (e) {
              setCategory(e.value);
              console.log("category: " + e.value);
            }}
            value={defaultOption}
            placeholder="Select an option"
          />
        </div>
      </div>

      <div className="wrapper">
        <div className="d_title">
          <input
            type="text"
            required
            value={title}
            placeholder="Diary Title"
            onChange={(e) => setTitle(e.target.value)}
          />
          <div className="underline"></div>
        </div>
      </div>
      <hr className="line" />

      <div className="contents_wrapper">
        <div className="d_contents">
          <textarea
            required
            placeholder="Diary Contents"
            value={contents}
            onChange={(e) => setContents(e.target.value)}
          />
        </div>
        {image === "" || image === null ? (
          <br></br>
        ) : (
          <img
            className="image_preview"
            src={imgBase64}
            alt="diary-write-upload"
          />
        )}
      </div>

      <div className="d_buttons">
        {/* <div className="image_button" >
          <button type="button" onClick={handleClick}>
            <ImageIcon width="40px" height="40px" />
          </button>
          <input
            type="file"
            style={{ display: 'none' }}
            ref={hiddenFileInput}
            onChange={uploadImage} />
        </div> */}
        <div className="isPublic">
          <button
            className="public_button"
            type="button"
            onClick={() => setIsPublic(!isPublic)}
          >
            {isPublic ? (
              <CheckedCircle width="20px" />
            ) : (
              <Circle width="20px" />
            )}
          </button>
          {isPublic ? (
            <div style={{ color: "var(--primary-green)" }}>public</div>
          ) : (
            <div style={{ color: "#959595" }}>public</div>
          )}
        </div>
        <div className="space"></div>
        <button className="done" type="submit">
          Done
        </button>
      </div>
    </form>
  );
}

export default Diary;
