import { useState } from "react";

const InputField = ({
  label,
  placeholder,
  inputtype,
  name,
  validator,
  form,
}: {
  label: string;
  placeholder: string;
  inputtype: "text" | "number" | 'email' | 'password';
  name?: string;
  validator?: ((value: string) => string);
  form?: object
}) => {
  const [errorMessage, setErrorMessage] = useState<string>('');
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
              onChange={(e) => {
                validator && setErrorMessage(validator(e.target.value)) ;
              }}
              className={`${
                errorMessage && "input-error"
              } input-bordered input inline-block h-12 w-full appearance-none overflow-visible overflow-ellipsis bg-white bg-none py-1`}
              {...form}
            ></input>
            {errorMessage && (
              <label className="label">
                <span className="label-text-alt text-error">
                  {errorMessage}
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
