import React from "react";
import { useTranslation } from "react-i18next";

export default function FilterButton(props) {
  const [t, i18n] = useTranslation();
  return (
    <button
      type="button"
      className="btn toggle-btn"
      aria-pressed={props.isPressed}
      onClick={() => props.setFilter(props.name)}
    >
      <span className="visually-hidden">Show </span>
      {/* <span>{props.name}</span> */}
      <span>{t(props.name)}</span>
      <span className="visually-hidden"> tasks</span>
    </button>
  );
}
