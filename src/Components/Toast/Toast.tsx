import React from 'react';
import {
  SemanticToastContainer,
  toast as trigger,
} from 'react-semantic-toasts';
import 'react-semantic-toasts/styles/react-semantic-alert.css';
import { SemanticICONS } from 'semantic-ui-react';

interface Props {
  [key: string]: any;
}

interface Message {
  title: string;
  description: string;
  type: 'info' | 'success' | 'warning' | 'error';
  icon?: SemanticICONS;
  time?: number;
}

type cb = () => void;

const defaultMessage = {
  time: 5000,
};
const ToastContainer = (props: Props) => {
  return <SemanticToastContainer position="top-right" animation="fade left" />;
};

const toast = (message: Message, onClose?: cb, onClick?: cb) => {
  trigger({ ...defaultMessage, ...message }, onClose, onClick);
};

export default ToastContainer;
export { toast };
