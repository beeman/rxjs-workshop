import { FormlyFieldConfig } from '@ngx-formly/core'
import { Field } from './field'

export class FieldGroup {

  public static contact(options): FormlyFieldConfig[] {
    return [
      Field.input('name', {
        label: 'Name',
        placeholder: 'Enter your name',
        required: true
      }),
      Field.input('email', {
        type: 'email',
        label: 'Email',
        placeholder: 'Enter your email',
        required: true
      }),
      Field.select('country', {
        label: 'Country',
        placeholder: 'Select your country',
        options,
        required: true,
      }, {
        defaultValue: '',
      }),
      Field.textarea('message',  {
        label: 'Message',
        placeholder: 'Enter a message',
        rows: 5,
        required: true
      }),

    ]
  }

}
