import { createContext, Dispatch, SetStateAction } from "react";

export const SectionsContext = createContext<string[]>([]);
export const SetSectionsContext = createContext<Dispatch<SetStateAction<string[]>>>(() => {});