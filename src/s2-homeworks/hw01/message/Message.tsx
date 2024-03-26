import React from "react";
import s from "./Message.module.css";
import { MessageStateType } from "../HW1";

// нужно создать правильный тип вместо any
export type MessagePropsType = {
  message: MessageStateType;
};

// нужно отобразить приходящие данные
const Message = (props: MessagePropsType) => {
  const { message, user } = props.message;

  return (
    <div id={"hw1-message-" + props.message.id} className={s.message}>
      <div className={s.imageAndText}>
        <img
          id={"hw1-avatar-" + props.message.id}
          // создаёт студент
          src={user.avatar}
          alt="Profile avatar"
          //
        />
        <div className={s.text}>
          <div id={"hw1-name-" + props.message.id} className={s.name}>
            {/*создаёт студент*/}
            {user.name}
            {/**/}
          </div>
          <pre id={"hw1-text-" + props.message.id} className={s.messageText}>
            {/*создаёт студент*/}
            {message.text}
            {/**/}
          </pre>
        </div>
      </div>
      <div id={"hw1-time-" + props.message.id} className={s.time}>
        {/*создаёт студент*/}
        {message.time}
        {/**/}
      </div>
    </div>
  );
};

export default Message;
