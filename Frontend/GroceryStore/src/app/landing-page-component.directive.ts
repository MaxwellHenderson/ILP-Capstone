import { Directive, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[appLandingPageComponent]',
})
export class LandingPageComponentDirective {
  constructor(public viewContainerRef: ViewContainerRef) {}
}
