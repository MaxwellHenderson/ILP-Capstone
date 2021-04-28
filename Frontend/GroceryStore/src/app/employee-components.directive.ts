import { Directive, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[appEmployeeComponents]',
})
export class EmployeeComponentsDirective {
  constructor(public viewContainerRef: ViewContainerRef) {}
}
