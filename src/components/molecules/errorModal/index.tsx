import { Modal } from 'antd';

interface ErrorModalType {
  title: String;
  message: String;
  onOkClick: Function;
}

const ErrorModal = ({ title, message, onOkClick }: ErrorModalType) => {
  Modal.error({
    maskStyle: { backgroundColor: 'rgba(250, 249, 249, 1)' },
    title: title,
    content: message,
    onOk: () => onOkClick
  });
};

export default ErrorModal;
