import { useDispatch } from "react-redux";

import { AppDispatch } from "../common/types";

const useAppDispatch: () => AppDispatch = () => useDispatch<AppDispatch>();

export { useAppDispatch };
