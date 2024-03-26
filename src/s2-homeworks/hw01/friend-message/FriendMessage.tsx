import React from "react";
import s from "./FriendMessage.module.css";
import { MessageStateType } from "../HW1";

type FriendMessagePropsType = {
  message: MessageStateType;
};

// создать тип вместо any и отобразить приходящие данные
const FriendMessage = (props: FriendMessagePropsType) => {
  const {
    message: { text, time },
    user: { avatar, name },
  } = props.message;

  return (
    <div
      id={"hw1-friend-message-" + props.message.id}
      className={s.friendMessage}
    >
      <div className={s.friendImageAndText}>
        <img
          id={"hw1-friend-avatar-" + props.message.id}
          // создаёт студент
          src={avatar}
          alt="Profile avatar"
          //
        />
        <div className={s.friendText}>
          <div
            id={"hw1-friend-name-" + props.message.id}
            className={s.friendName}
          >
            {/*создаёт студент*/}
            {name}
            {/**/}
          </div>
          <pre
            id={"hw1-friend-text-" + props.message.id}
            className={s.friendMessageText}
          >
            {/*создаёт студент*/}
            {text}
            {/**/}
          </pre>
        </div>
      </div>
      <div id={"hw1-friend-time-" + props.message.id} className={s.friendTime}>
        {/*создаёт студент*/}
        {time}
        {/**/}
      </div>
    </div>
  );
};

export default FriendMessage;
