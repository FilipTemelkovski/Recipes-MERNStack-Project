import { toast } from "react-toastify";

export const TOAST_ALERT = (message, status) => toast[status](message);