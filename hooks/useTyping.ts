import wait from "@/utils/wait";
import { useEffect, useRef, useState } from "react";

const DELAY = 20;

export default function useTyping(codeStr: string) {
  const [code, setCode] = useState("");

  const  hasStarted = useRef(false);

  useEffect(() => {
    if (hasStarted.current) {
      return;
    }

    hasStarted.current = true
  
    const run = async () => {
      for (let index = 0; index < codeStr.length; index++) {
        const element = codeStr[index];
        await wait(DELAY);
        setCode((prev) => prev + element);
      }
    };

    run();
  }, [codeStr]);

  return { code };
}
