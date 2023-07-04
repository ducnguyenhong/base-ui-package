import { Input as AntdInput, InputRef } from 'antd';
import React, { Ref, forwardRef, memo, useEffect, useImperativeHandle, useRef, useState } from 'react';
import { InputControlRef, InputProps } from './input.type';

const Input = forwardRef((props: InputProps, ref: Ref<InputControlRef>) => {
  const {
    name,
    defaultValue,
    disabled,
    type,
    value,
    maxLength,
    minLength,
    placeholder,
    prefix,
    suffix,
    onChange,
    onBlur,
    onFocus,
    onKeyUp,
    onKeyDown,
    autoCapitalize
  } = props;
  const [valueInput, setValueInput] = useState<string | number | undefined>(defaultValue);
  const inputRef = useRef<InputRef>(null);

  useImperativeHandle(ref, () => ({
    get: () => {
      if (typeof valueInput === 'string') {
        return valueInput.trim();
      }
      return valueInput;
    },
    set: (newValue) => setValueInput(newValue),
    focus: () => inputRef?.current?.focus()
  }));

  useEffect(() => {
    setValueInput(value);
  }, [value]);

  return (
    <AntdInput
      ref={inputRef}
      size="large"
      name={name}
      defaultValue={defaultValue}
      disabled={disabled}
      type={type}
      value={valueInput}
      maxLength={maxLength}
      minLength={minLength}
      placeholder={placeholder}
      autoCapitalize={autoCapitalize}
      prefix={prefix}
      suffix={suffix}
      onChange={onChange}
      onBlur={onBlur}
      onFocus={onFocus}
      onKeyUp={onKeyUp}
      onKeyDown={onKeyDown}
    />
  );
});

export default memo(Input);
