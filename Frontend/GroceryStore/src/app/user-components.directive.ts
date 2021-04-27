import { Directive, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[appUserComponents]',
})
export class UserComponentsDirective {
  constructor(public viewContainerRef: ViewContainerRef) {}
}
