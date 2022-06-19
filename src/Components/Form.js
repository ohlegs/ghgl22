import React, { useState } from "react";
import "../App.css";

export default function Form() {
  const [getValue, setValue] = useState({
    input: 0,
    textarea: 0,
    checkbox: 0,
  });

  const [build, setBuild] = useState();
  const createFortm = () => {
    let input = [];
    let textarea = [];
    let checkbox = [];

    for (const key in getValue) {
      for (let i = 0; i < getValue[key]; i++) {
        if (key === "input")
          input.push(<input style={{ margin: 10 }} key={i} />);
        if (key === "textarea")
          textarea.push(<textarea style={{ margin: 10 }} key={i} />);
        if (key === "checkbox")
          checkbox.push(
            <input type="checkbox" style={{ margin: 10 }} key={i} />
          );
      }
    }

    if (
      getValue.input == 0 &&
      getValue.textarea == 0 &&
      getValue.textarea == 0
    ) {
      return "";
    } else {
      return (
        <div className="form">
          <div
            style={{
              display: "flex",
              flexDirection: "column",
            }}
          >
            {input}
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
            }}
          >
            {textarea}
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
            }}
          >
            {checkbox}
          </div>
        </div>
      );
    }
  };

  return (
    <div className="container">
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <div className="wrapper">
          <p>input :</p>
          <input
            onChange={(el) => {
              setValue((prevState) => ({
                ...prevState,
                input: el.target.value,
              }));
            }}
          />
          <p>textarea :</p>
          <input
            onChange={(el) => {
              setValue((prevState) => ({
                ...prevState,
                textarea: el.target.value,
              }));
            }}
          />
          <p>checkbox :</p>
          <input
            onChange={(el) => {
              setValue((prevState) => ({
                ...prevState,
                checkbox: el.target.value,
              }));
            }}
          />
        </div>
        <button
          onClick={() => {
            setBuild(createFortm);
          }}
          style={{ marginTop: "10px" }}
        >
          BUILD
        </button>
        {build}
      </div>
    </div>
  );
}
