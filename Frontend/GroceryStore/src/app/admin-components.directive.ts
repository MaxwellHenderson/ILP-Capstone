import { Directive, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[appAdminComponents]',
})
export class AdminComponentsDirective {
  constructor(public viewContainerRef: ViewContainerRef) {}
}
