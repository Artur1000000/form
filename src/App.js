import Field from "./components/Field";
import "./index.css";
import React, { useCallback, useEffect, useState } from "react";
import SelectField from "./components/SelectField";
import Spinner from "./components/Spinner";

const items = ["Таиланд", "Индонезия", "Малайзия", "Вьетнам"];
const path = "https://test.toolympus.com/api/jfe-test";

export default function App() {
  const [message, setMessage] = useState({
    lastName: {
      id: "second-name",
      value: "",
      properties: { ru: "Фамилия", en: "lastName" }
    },
    firstName: {
      id: "first-name",
      value: "",
      properties: { ru: "Имя", en: "firstName" }
    },
    middleName: {
      id: "middle-name",
      value: "",
      properties: { ru: "Отчество", en: "middleName" }
    },
    phone: {
      id: "phone",
      value: "",
      properties: { ru: "Телефон", en: "phone" }
    },
    country: {
      id: "country",
      value: "",
      properties: { ru: "Страна", en: "country" }
    }
  });
  const [sendMessage, setSendMessage] = useState(null);
  const [status, setStatus] = useState(null);

  const handleMessage = useCallback(
    (prop, key) => {
      setMessage({
        ...message,
        [key]: {
          id: message[key].id,
          value: prop,
          properties: message[key].properties
        }
      });
    },
    [message]
  );

  const send = useCallback(() => {
    setSendMessage({
      lastname: message.lastName.value,
      firstname: message.firstName.value,
      middlename: message.middleName.value,
      phone: message.phone.value,
      country: message.country.value
    });
  }, [message]);

  useEffect(() => {
    if (sendMessage) {
      try {
        fetch(path, {
          method: "POST",
          headers: {
            "Content-Type": "application/json;charset=utf-8"
          },
          body: JSON.stringify(sendMessage)
        }).then((data) => setStatus(data.status));
      } catch (error) {
        console.log("error send");
      }
    }
  }, [sendMessage]);
  return (
    <div className="App">
      <form className="form">
        <div className="wrapper">
          {Object.values(message).map((item) => {
            if (item.properties.en !== "country") {
              return (
                <div key={item.id} id={item.id}>
                  <Field
                    placeholder={item.properties}
                    value={item.value}
                    handleProp={handleMessage}
                  />
                </div>
              );
            }
            return (
              <div key={item.id} id={item.id}>
                <SelectField
                  items={items}
                  placeholder={item.properties}
                  selected={handleMessage}
                />
              </div>
            );
          })}
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
