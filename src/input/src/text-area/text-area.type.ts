export interface TextAreaProps {
  name?: string;
  defaultValue?: string | number;
  value?: string | number;
  disabled?: boolean;
  maxLength?: number;
  minLength?: number;
  placeholder?: string;
  onChange?: React.ChangeEventHandler<HTMLTextAreaElement>;
  onBlur?: React.FocusEventHandler<HTMLTextAreaElement>;
  onFocus?: React.FocusEventHandler<HTMLTextAreaElement>;
  onKeyUp?: React.KeyboardEventHandler<HTMLTextAreaElement>;
  onKeyDown?: React.KeyboardEventHandler<HTMLTextAreaElement>;
  autoCapitalize?: string;
  rows?: number;
}

export interface TextAreaRef {
  get: () => string | number | undefined;
  set: (value: string) => void;
}
