export interface InputProps {
  name?: string;
  defaultValue?: string | number;
  value?: string | number;
  disabled?: boolean;
  maxLength?: number;
  minLength?: number;
  placeholder?: string;
  prefix?: React.ReactNode;
  suffix?: React.ReactNode;
  type?: 'text' | 'number' | 'password';
  onChange?: React.ChangeEventHandler<HTMLInputElement>;
  onBlur?: React.FocusEventHandler<HTMLInputElement>;
  onFocus?: React.FocusEventHandler<HTMLInputElement>;
  onKeyUp?: React.KeyboardEventHandler<HTMLInputElement>;
  onKeyDown?: React.KeyboardEventHandler<HTMLInputElement>;
  autoCapitalize?: string;
}

export interface InputControlRef {
  get: () => string | number | undefined;
  set: (value: string) => void;
}
