import { createContext } from "react";

export const FiltersContext = createContext();

export function FiltersProvider ({ children }) {

    return (
        <FiltersContext.Provider value={{ 
            category: 'all',
            maxPrice: 1000
        }}>
            {children}
        </FiltersContext.Provider >
    }