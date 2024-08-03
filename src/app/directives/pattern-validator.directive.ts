import { Directive, Input } from '@angular/core';
import {
  AbstractControl,
  NG_VALIDATORS,
  ValidationErrors,
  Validator,
} from '@angular/forms';

@Directive({
  selector: '[appPatternValidator]',
  providers: [
    {
      provide: NG_VALIDATORS,
      useExisting: PatternValidatorDirective,
      multi: true,
    },
  ],
})
export class PatternValidatorDirective implements Validator {
  @Input('appPatternValidator') pattern!: string;
  constructor() {}

  validate(control: AbstractControl): ValidationErrors | null {
    if (!control.value) {
      return null; // Don't validate empty values to allow optional controls
    }
    const regex = new RegExp(this.pattern);
    const valid = regex.test(control.value);
    return valid
      ? null
      : { pattern: { value: control.value, pattern: this.pattern } };
  }
}
