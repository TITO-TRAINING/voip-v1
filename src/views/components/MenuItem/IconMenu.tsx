import Call from "@/views/icons/Call";
import Delete from "@/views/icons/Delete";
import Mail from "@/views/icons/Mail";
import Message from "@/views/icons/Message";
import Notes from "@/views/icons/Notes";
import SeePass from "@/views/icons/SeePass";
import Ticket from "@/views/icons/Ticket";
import React, { memo } from "react";

// Components

interface Props {
  type: string;
}

const IconMenu: React.FC<Props> = ({ type }) => {
  switch (type) {
    case "seePass":
      return <SeePass />;
    case "notes":
      return <Notes />;
    case "ticket":
      return <Ticket />;
    case "call":
      return <Call />;
    case "message":
      return <Message />;
    case "mail":
      return <Mail />;
    default:
      return <Delete />;
  }
};

export default memo(IconMenu);
