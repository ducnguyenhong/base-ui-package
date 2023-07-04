import { Input as AntdInput, InputRef } from 'antd';
import React, { Ref, forwardRef, memo, useEffect, useImperativeHandle, useRef, useState } from 'react';
import { TextAreaProps, TextAreaRef } from './text-area.type';

const TextArea = forwardRef((props: TextAreaProps, ref: Ref<TextAreaRef>) => {
  const {
    name,
    defaultValue,
    disabled,
    value,
    maxLength,
    minLength,
    placeholder,
    onChange,
    onBlur,
    onFocus,
    onKeyUp,
    onKeyDown,
    autoCapitalize,
    rows
  } = props;
  const [valueInput, setValueInput] = useState<string | number | undefined>(defaultValue);
  const textAreaRef = useRef<InputRef>(null);

  useImperativeHandle(ref, () => ({
    get: () => {
      if (typeof valueInput === 'string') {
        return valueInput.trim();
      }
      return valueInput;
    },
    set: (newValue) => setValueInput(newValue),
    focus: () => textAreaRef?.current?.focus()
  }));

  useEffect(() => {
    setValueInput(value);
  }, [value]);

  return (
    <AntdInput.TextArea
      ref={textAreaRef}
      size="large"
      name={name}
      defaultValue={defaultValue}
      disabled={disabled}
      value={valueInput}
      maxLength={maxLength}
      minLength={minLength}
      placeholder={placeholder}
      autoCapitalize={autoCapitalize}
      rows={rows}
      onChange={onChange}
      onBlur={onBlur}
      onFocus={onFocus}
      onKeyUp={onKeyUp}
      onKeyDown={onKeyDown}
    />
  );
});

export default memo(TextArea);
