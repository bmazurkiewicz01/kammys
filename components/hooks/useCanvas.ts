import { createContext, useContext} from "react";

interface CanvasContextType {
  context?: any; 
}

export const CanvasContext = createContext<CanvasContextType>({
  context: undefined,
});

export const useCanvasContext = () => {
  return useContext(CanvasContext);
};


