import { createContext, Dispatch, SetStateAction } from "react";

export const SectionsContext = createContext<string[]>([]);
export const SetSectionsContext = createContext<Dispatch<SetStateAction<string[]>>>(() => {});

export const SectionNameContext = createContext('')
export const SetSectionNameContext = createContext<Dispatch<SetStateAction<string>>>(() => {});