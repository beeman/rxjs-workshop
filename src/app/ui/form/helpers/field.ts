import { FormlyFieldConfig } from '@ngx-formly/core'

export class Field {

  public static field(type: string, key: string, templateOptions?: any, options?: any): FormlyFieldConfig {
    return {
      type,
      key,
      templateOptions,
      ...options,
    }
  }

  public static input(key: string, templateOptions?: any, options?: any): FormlyFieldConfig {
    return Field.field('input', key, templateOptions, options)
  }

  public static email(key: string, templateOptions?: any, options?: any): FormlyFieldConfig {
    const defaults = {
      type: 'email',
      label: 'Email',
    }

    return Field.input(key, { ...templateOptions, ...defaults }, options)
  }

  public static password(key: string, templateOptions?: any, options?: any): FormlyFieldConfig {
    const defaults = {
      label: 'Password',
      type: 'password',
      minLength: 8,
      required: true,
    }

    return Field.input(key, { ...templateOptions, ...defaults }, options)
  }

  public static select(key: string, templateOptions?: any, options?: any): FormlyFieldConfig {
    return Field.field('select', key, templateOptions, options)
  }

  public static textarea(key: string, templateOptions?: any, options?: any): FormlyFieldConfig {
    return Field.field('textarea', key, templateOptions, options)
  }

}
