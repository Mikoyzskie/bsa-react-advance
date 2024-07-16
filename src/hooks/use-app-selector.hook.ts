import { TypedUseSelectorHook, useSelector } from "react-redux";
import { type RootState } from "../common/store-types/root-state-type";

const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

export { useAppSelector };
