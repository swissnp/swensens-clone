import { useRef, useState } from "react";

const SexSelector = (
  {
    set
  }:{
    set: (name: 'sex', value: "male" | "female" | "unidentify") => void
  }
) => {
  const [sex, setSex] = useState<"male" | "female" | "unidentify" | "">("");
  return (
    <div>
      <label className="relative mr-2 mb-2 ml-px cursor-default text-neutral-700">
        เพศ (ไม่ระบุได้)
      </label>
      <div className="py-1 mb-2">
        <button
          value={'male'}
          className={`btn-primary no-animation btn mr-2 rounded-3xl ${
            sex === "male" ? "btn-active" : "btn-outline"
          }`}
          onClick={(e) => {
            e.preventDefault();
            setSex("male");
            set('sex',"male")
          }}
        >
          ชาย
        </button>
        <button
          className={`btn-primary no-animation btn mr-2 rounded-3xl ${
            sex === "female" ? "btn-active" : "btn-outline"
          }`}
          onClick={(e) => {
            e.preventDefault();
            setSex("female");
            set('sex',"female")
          }}
        >
          หญิง
        </button>
        <button
          className={`btn-primary no-animation btn mr-2 rounded-3xl ${
            sex === "unidentify" ? "btn-active" : "btn-outline"
          }`}
          onClick={(e) => {
            e.preventDefault();
            setSex("unidentify");
            set('sex',"unidentify")
          }}
        >
          ไม่ระบุ
        </button>
      </div>
    </div>
  );
};
export default SexSelector;
