
import { FieldError } from "react-hook-form";
const InputField = ({
  label,
  placeholder,
  inputtype,
  name,
  form,
  error
}: {
  label: string;
  placeholder: string;
  inputtype: "text" | "number" | 'email' | 'password';
  name?: string;
  form?: object
  error?: FieldError
}) => {
  return (
    <div className="relative clear-both mb-4 table h-auto align-top w-full">
      <div className="relative mb-2 inline-block overflow-hidden whitespace-nowrap text-right align-middle leading-snug">
        <label
          title={label}
          className="relative mr-2 ml-px cursor-default text-neutral-700"
        >
          {label}
        </label>
      </div>
      <div className="relative">
        <div className="relative w-full">
          <span className="relative">
            <input
              placeholder={placeholder}
              type={inputtype}
              name={name}
              // onChange={(e) => {
              // }}
              className={`${
                error ? "input-error" : ""
              } input-bordered input inline-block h-12 w-full appearance-none overflow-visible overflow-ellipsis bg-white bg-none py-1`}
              {...form}
            ></input>
            {error && (
              <label className="label">
                <span className="label-text-alt text-error">
                  {error?.message}
                </span>
              </label>
            )}
          </span>
        </div>
      </div>
    </div>
  );
};

export default InputField;
