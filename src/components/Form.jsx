import { useState } from "react";
import SignUpInfo from "./SignUpInfo";
import PersonInfo from "./PersonInfo";
import OtherInfo from "./OtherInfo";

function Form() {
  const [bar, setBar] = useState({
    first: true,
    second: false,
    third: false,
  });
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    confirmPassword: "",
    firstName: "",
    lastName: "",
    username: "",
    nationality: "",
    other: "",
  });
  const [page, setPage] = useState(0);
  const FormTitles = ["Sign Up", "Personal Info", "Other Info"];
  const PageDisplay = () => {
    if (page === 0) {
      return (
        <SignUpInfo
          formData={formData}
          setFormData={setFormData}
          setPage={setPage}
          setBar={setBar}
          page={page}
          bar={bar}
        />
      );
    } else if (page === 1) {
      return (
        <PersonInfo
          formData={formData}
          setFormData={setFormData}
          setPage={setPage}
          setBar={setBar}
          page={page}
          bar={bar}
        />
      );
    } else {
      return (
        <OtherInfo
          formData={formData}
          setFormData={setFormData}
          setPage={setPage}
          setBar={setBar}
          page={page}
          bar={bar}
          length={FormTitles.length}
        />
      );
    }
  };

  return (
    <form className="form">
      <div className="progressbar">
        {/* <div
          style={{
            width: page === 0 ? "33.3%" : page === 1 ? "66.6%" : "100%",
          }}
        ></div> */}
        <div className={`pro ${"active"}`}></div>
        <div className={`pro ${bar.second ? "active" : null}`}></div>
        <div className={`pro ${bar.third ? "active" : null}`}></div>
      </div>
      <div className="form-container">
        <div className="header">
          <h1>{FormTitles[page]}</h1>
        </div>
        <div className="body">{PageDisplay()}</div>
      </div>
    </form>
  );
}

export default Form;
