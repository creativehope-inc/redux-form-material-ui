
declare module 'redux-form-material-ui' {
  import { SelectFieldProps } from 'material-ui';
  import { TextFieldProps } from 'material-ui';
  import { WrappedFieldProps } from 'redux-form';
  import { Component, InputHTMLAttributes } from 'react';
   
  export class SelectField
    extends Component<SelectFieldProps & WrappedFieldProps & InputHTMLAttributes<HTMLInputElement>> {}
  
  export class TextField
    extends Component<TextFieldProps & WrappedFieldProps & InputHTMLAttributes<HTMLInputElement>> {}
}
