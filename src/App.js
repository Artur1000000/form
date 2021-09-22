import React, { useCallback, useEffect, useState } from "react";
import Field from "./components/Field";
import SelectField from "./components/SelectField";
import Spinner from "./components/Spinner";

const items = ["Таиланд", "Индонезия", "Малайзия", "Вьетнам"];
const path = "https://test.toolympus.com/api/jfe-test";

export default function App() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [middleName, setMiddleName] = useState("");
  const [phone, setPhone] = useState("");
  const [country, setCountry] = useState("");
  const [message, setMessage] = useState(null);
  const [status, setStatus] = useState(null);

  const handleFirstName = useCallback((prop) => {
    setFirstName(prop);
  }, []);

  const handleLasttName = useCallback((prop) => {
    setLastName(prop);
  }, []);

  const handleMiddleName = useCallback((prop) => {
    setMiddleName(prop);
  }, []);
  const handlePhone = useCallback((prop) => {
    setPhone(prop);
  }, []);

  const send = useCallback(() => {
    setMessage({
      lastname: lastName,
      firstname: firstName,
      middlename: middleName,
      phone: phone,
      country: country
    });
  }, [country, firstName, lastName, middleName, phone]);
  useEffect(() => {
    if (message) {
      try {
        fetch(path, {
          method: "POST",
          headers: {
            "Content-Type": "application/json;charset=utf-8"
          },
          body: JSON.stringify(message)
        }).then((data) => setStatus(data.status));
      } catch (error) {
        console.log("error send");
      }
    }
  }, [message]);

  return (
    <div className="App">
      <form className="form">
        <div className="wrapper">
          <div id="second-name">
            <Field
              placeholder={"Фамилия"}
              value={lastName}
              handleProp={handleLasttName}
            />
          </div>
          <div id="first-name">
            <Field
              placeholder={"Имя"}
              value={firstName}
              handleProp={handleFirstName}
            />
          </div>
          <div id="middle-name">
            <Field
              placeholder={"Отчество"}
              value={middleName}
              handleProp={handleMiddleName}
            />
          </div>
          <div id="phone">
            <Field
              placeholder={"Телефон"}
              value={phone}
              handleProp={handlePhone}
            />
          </div>
          <div id="country">
            <SelectField items={items} selected={setCountry} />
          </div>
          {status === null && (
            <div id="send-button" className="d-grid gap-2">
              <button type="button" className="btn btn-primary" onClick={send}>
                Отправить
              </button>
            </div>
          )}
          <Spinner status={status} />
        </div>
      </form>
    </div>
  );
}
