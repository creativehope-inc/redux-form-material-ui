import { 
  SelectFieldProps,
  TextFieldProps,
  RadioButtonGroupProps
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

}
