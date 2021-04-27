import { EventEmitter, Type } from '@angular/core';

export class UserComponent {
  constructor(public component: Type<any>, public switchView: any) {}
}
