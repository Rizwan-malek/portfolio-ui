import { toast } from 'react-toastify';
export default function RToast({ type, message }) {
    const options = { autoClose: 3000, position: toast.POSITION.TOP_CENTER };
    switch (type) {
        case "SUCCESS":
            return toast.success(message, options);
        case "ERROR":
            return toast.error(message, options);
        case "WARNING":
            return toast.warning(message, options);
        default:
            return toast(message, options);
    }
}