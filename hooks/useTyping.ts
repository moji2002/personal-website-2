import wait from "@/utils/wait";
import { useEffect, useState } from "react";

const DELAY = 20;

export default function useTyping(codeStr: string) {
  const [code, setCode] = useState("");

  useEffect(() => {
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
