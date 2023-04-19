import React, { useState, useEffect } from "react";
import { useTheme } from "next-themes";
import { Switch } from "@headlessui/react";
import { MdSunny } from "react-icons/md";
import { BsFillMoonFill } from "react-icons/bs";

type Props = {};

export default function DarkModeSwitch({}: Props) {
  const { systemTheme, theme, setTheme } = useTheme();
  const [enabled, setEnabled] = useState(false);

  const currentTheme = theme === "system" ? systemTheme : theme;

  useEffect(() => {
    if (enabled) {
      setTheme("dark");
    } else {
      setTheme("light");
    }
  }, [enabled]);

  return (
    <div className="flex items-center gap-2 mt-4">
      <div className="flex items-center order-2 gap-3">
        {enabled ? (
          <button onClick={() => setTheme("dark")}>
            
            <BsFillMoonFill
              className={`${enabled ? "text-dashboard-active" : ""}`}
              size={24}
            />
          </button>
        ) : (
          <button onClick={() => setTheme("light")}>
            <MdSunny
              className={`${
                !enabled
                  ? "text-yellow-400 rotate-90 transition duration-300"
                  : ""
              } `}
              size={24}
            />
          </button>
        )}
      </div>

      <Switch
        checked={enabled}
        // @ts-ignore
        onChange={() => setEnabled(prev => !prev)}
        className={`${enabled ? "bg-zinc-800" : "bg-dashboard-active"}
          relative inline-flex h-[20px] w-[45px] shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus-visible:ring-2  focus-visible:ring-white focus-visible:ring-opacity-75`}
      >
        <span className="sr-only">Use setting</span>
        <span
          aria-hidden="true"
          className={`${enabled ? "translate-x-6 bg-white" : "translate-x-0 bg-white"}
            pointer-events-none inline-block h-[16px] w-[16px] transform rounded-full  shadow-lg ring-0 transition duration-200 ease-in-out`}
        />
      </Switch>
    </div>
  );
}
