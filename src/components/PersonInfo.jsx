import React from "react";

function PersonInfo({
  formData,
  setFormData,
  setPage,
  setBar,
  bar,
  page,
  length,
}) {
  return (
    <div className="personal-info-container">
      <input
        type="text"
        placeholder="First Name..."
        value={formData.firstName}
        onChange={(e) => {
          setFormData({ ...formData, firstName: e.target.value });
        }}
      />
      <input
        type="text"
        placeholder="Last Name..."
        value={formData.lastName}
        onChange={(e) => {
          setFormData({ ...formData, lastName: e.target.value });
        }}
      />
      <input
        type="text"
        placeholder="Username..."
        value={formData.username}
        onChange={(e) => {
          setFormData({ ...formData, username: e.target.value });
        }}
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
            setBar({ ...bar, third: true });
          }}
        >
          Next
        </button>
      </div>
    </div>
  );
}

export default PersonInfo;
