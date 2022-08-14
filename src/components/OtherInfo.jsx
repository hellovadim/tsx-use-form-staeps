import React from "react";

function OtherInfo({
  formData,
  setFormData,
  setPage,
  setBar,
  bar,
  page,
  length,
}) {
  return (
    <div className="other-info-container">
      <input
        type="text"
        placeholder="Nationality..."
        value={formData.nationality}
        onChange={(e) => {
          setFormData({ ...formData, nationality: e.target.value });
        }}
      />
      <input
        type="text"
        placeholder="Other..."
        value={formData.other}
        onChange={(e) => {
          setFormData({ ...formData, other: e.target.value });
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
          }}
        >
          Next
        </button>
      </div>
    </div>
  );
}

export default OtherInfo;
