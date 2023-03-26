import { useState } from "react";
import type { UseFormTrigger } from "react-hook-form";

const SexSelector = ({
  set,
  trigger,
}: {
  set: (name: "sex", value: "male" | "female" | "unidentify") => void;
  trigger: UseFormTrigger<any>;
}) => {
  const [sex, setSex] = useState<"male" | "female" | "unidentify" | "">("");
  return (
    <div>
      <label className="relative mr-2 mb-2 ml-px cursor-default text-neutral-700">
        เพศ (ไม่ระบุได้)
      </label>
      <div className="mb-2 py-1">
        <button
          value={"male"}
          className={`btn-primary no-animation btn mr-2 rounded-3xl ${
            sex === "male" ? "btn-active" : "btn-outline"
          }`}
          onClick={async (e) => {
            e.preventDefault();
            setSex("male");
            set("sex", "male");
            console.log("e");
            await trigger("sex");
          }}
        >
          ชาย
        </button>
        <button
          className={`btn-primary no-animation btn mr-2 rounded-3xl ${
            sex === "female" ? "btn-active" : "btn-outline"
          }`}
          onClick={async (e) => {
            e.preventDefault();
            setSex("female");
            set("sex", "female");
            await trigger("sex");
          }}
        >
          หญิง
        </button>
        <button
          className={`btn-primary no-animation btn mr-2 rounded-3xl ${
            sex === "unidentify" ? "btn-active" : "btn-outline"
          }`}
          onClick={async (e) => {
            e.preventDefault();
            setSex("unidentify");
            set("sex", "unidentify");
            await trigger("sex");
          }}
        >
          ไม่ระบุ
        </button>
      </div>
    </div>
  );
};
export default SexSelector;
