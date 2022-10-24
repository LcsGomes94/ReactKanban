import { createContext, Dispatch, SetStateAction } from "react";

export const HandleOpenContext = createContext(() => {});

export const HandleTitleContext = createContext<Dispatch<SetStateAction<string>>>(() => {});

export const InputContext = createContext('');
export const SetInputContext = createContext<Dispatch<SetStateAction<string>>>(() => {});