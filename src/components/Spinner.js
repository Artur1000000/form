import React, { useEffect, useState } from "react";
import MessageComponent from "./MessageComponent";
import MessagesBlock from "./MessagesBlock";

export default function Spinner({ status }) {
  const [timer, setTimer] = useState(false);

  const success = "Форма успешно отправлена";
  const error = "Произошла ошибка";

  useEffect(() => {
    if (status) {
      setTimeout(() => {
        setTimer(true);
      }, 3000);
    }
  }, [timer, status]);
  return (
    <div id="messages">
      {!timer && status && (
        <div className="spinner-border text-primary" role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
      )}
      <MessagesBlock
        success={status === 200 && timer && <MessageComponent text={success} />}
        error={status === 400 && timer && <MessageComponent text={error} />}
      />
    </div>
  );
}