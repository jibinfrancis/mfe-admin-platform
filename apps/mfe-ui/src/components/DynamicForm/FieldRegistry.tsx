import { createContext, ReactNode, useContext } from "react";

type FieldRegistryContextType = {
  fields: any;
};

const RegistryContext = createContext<FieldRegistryContextType | undefined>(undefined);

type FieldRegistryProviderProps = {
  fields: any;
  children: ReactNode;
};

export const FieldRegistryProvider: React.FC<FieldRegistryProviderProps> = ({
  fields,
  children
}) => {
  return (
    <RegistryContext.Provider value={{ fields }}>
      {children}
    </RegistryContext.Provider>
  );
};

export const useFieldRegistry = () =>
  useContext(RegistryContext);