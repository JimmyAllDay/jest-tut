import React from "react";
import "./button.css";

export default function Button({ disabled, label, handler, loading }) {
  return (
    <button
      data-testid="button"
      className="button-style"
      disabled={disabled}
      onClick={handler}
    >
      {loading ? "Loading..." : `${label}`}
    </button>
  );
}
