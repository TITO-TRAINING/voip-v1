
import React, { memo } from "react";

import {ReactComponent as Call} from '@/assets/icons/Call.svg'
import {ReactComponent as Delete} from '@/assets/icons/Delete.svg'
import {ReactComponent as Mail} from '@/assets/icons/Mail.svg'
import {ReactComponent as Message} from '@/assets/icons/Message.svg'
import {ReactComponent as Notes} from '@/assets/icons/Notes.svg'
import {ReactComponent as SeePass} from '@/assets/icons/SeePass.svg'
import {ReactComponent as Ticket} from '@/assets/icons/Ticket.svg'

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