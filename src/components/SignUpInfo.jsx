import { useRef, useEffect, useState } from "react";

function SignUpInfo({
  formData,
  setFormData,
  setPage,
  setBar,
  bar,
  page,
  length,
}) {
  const firstNameRef = useRef(null);
  var [show, setShow] = useState({
    first: true,
    second: false,
    third: false,
  });

  useEffect(() => {
    firstNameRef.current.focus();
  }, []);
  const handleRef = (e) => {
    if (e.key === "Enter") {
      const form = e.target.form;
      const index = [...form].indexOf(e.target);
      form.elements[index + 1].focus();
      e.preventDefault();
      setShow({ ...show, second: true });
    }
  };
  const handleSecond = (e) => {
    if (e.key === "Enter") {
      const form = e.target.form;
      const index = [...form].indexOf(e.target);
      form.elements[index + 1].focus();
      e.preventDefault();
      setShow({ ...show, third: true });
    }
  };
  return (
    <div className="sign-up-container">
      <input
        type="text"
        className={`input ${show.first ? "activeInput" : null}`}
        ref={firstNameRef}
        onKeyPress={(e) => handleRef(e)}
        placeholder="Email..."
        value={formData.email}
        onChange={(event) =>
          setFormData({ ...formData, email: event.target.value })
        }
      />
      <input
        type="text"
        className={`input ${show.second ? "activeInput" : null}`}
        placeholder="Password..."
        value={formData.password}
        onChange={(event) =>
          setFormData({ ...formData, password: event.target.value })
        }
        onKeyDown={(e) => handleSecond(e)}
      />
      <input
        type="text"
        className={`input ${show.third ? "activeInput" : null}`}
        placeholder="Confirm Password..."
        value={formData.confirmPassword}
        onChange={(event) =>
          setFormData({ ...formData, confirmPassword: event.target.value })
        }
      />
      <div className="footer">
        <button
          type="button"
          disabled={page === 0}
          onClick={() => {
            setPage((currentPage) => currentPage - 1);
          }}
        >
          Prev
        </button>

        <button
          type="button"
          disabled={page === length - 1}
          onClick={() => {
            setPage((currentPage) => currentPage + 1);
            setBar({ ...bar, second: true });
          }}
        >
          Next
        </button>
      </div>
    </div>
  );
}

export default SignUpInfo;
