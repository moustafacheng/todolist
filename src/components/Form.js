import React, { useState } from "react";
import { useTranslation } from "react-i18next";
export default function Form(props) {
  const [name, setName] = useState("");
  const [t, i18n] = useTranslation();

  function handleSubmit(e) {
    e.preventDefault();
    props.addTask(name);
    setName("");
  }

  function handleChange(e) {
    setName(e.target.value);
  }
  return (
    <form onSubmit={handleSubmit}>
      <h2 className="label-wrapper"></h2>
      <input
        type="text"
        id="new-todo-input"
        className="input input__lg"
        name="text"
        autoComplete="off"
        value={name}
        onChange={handleChange}
        placeholder={t("Task input placeholder")}
      />
      <button type="submit" className="btn btn__primary btn__lg">
        {t("Add")}
      </button>
    </form>
  );
}
