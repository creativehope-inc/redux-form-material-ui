import {
  SelectFieldProps,
  TextFieldProps,
  RadioButtonGroupProps,
  CheckboxProps,
  DatePickerProps,
  TimePickerProps
} from 'material-ui';
import { WrappedFieldProps } from 'redux-form';
import { Component, InputHTMLAttributes } from 'react';

declare module 'redux-form-material-ui' {
  export class SelectField
    extends Component<SelectFieldProps & WrappedFieldProps & InputHTMLAttributes<HTMLInputElement>> {}

  export class TextField
    extends Component<TextFieldProps & WrappedFieldProps & InputHTMLAttributes<HTMLInputElement>> {}

  export class RadioButtonGroup
    extends Component<RadioButtonGroupProps & WrappedFieldProps & InputHTMLAttributes<HTMLInputElement>> {}

  export class Checkbox
    extends Component<CheckboxProps & WrappedFieldProps & InputHTMLAttributes<HTMLInputElement>> {}

  export class DatePicker
    extends Component<DatePickerProps & WrappedFieldProps & InputHTMLAttributes<HTMLInputElement>> {}

  export class TimePicker
    extends Component<TimePickerProps & WrappedFieldProps & InputHTMLAttributes<HTMLInputElement>> {}
}
