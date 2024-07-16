import { useDispatch } from "react-redux";

import { AppDispatch } from "../common/store-types/app-dispatch-type";

const useAppDispatch: () => AppDispatch = () => useDispatch<AppDispatch>();

export { useAppDispatch };
