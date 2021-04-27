import {
  Component,
  ComponentFactoryResolver,
  Input,
  OnInit,
  ViewChild,
} from '@angular/core';
import { UserComponent } from '../shared/user-component';
import { StorefrontComponent } from '../storefront/storefront.component';
import { UserCartComponent } from '../user-cart/user-cart.component';
import { UserCheckoutComponent } from '../user-checkout/user-checkout.component';
import { UserComponentsDirective } from '../user-components.directive';

@Component({
  selector: 'app-user-window',
  templateUrl: './user-window.component.html',
  styleUrls: ['./user-window.component.css'],
})
export class UserWindowComponent implements OnInit {
  componentNumber?: number;
  views: UserComponent[] = [
    new UserComponent(StorefrontComponent, {
      switchView: 'switchView',
    }),
    new UserComponent(UserCartComponent, {
      switchView: 'switchView',
    }),
    new UserComponent(UserCheckoutComponent, {
      switchView: 'switchView',
    }),
  ];

  @ViewChild(UserComponentsDirective, { static: true })
  componentHost!: UserComponentsDirective;

  constructor(public componentFactoryResolver: ComponentFactoryResolver) {}

  ngOnInit(): void {
    this.switchView(0);
  }

  switchView(componentNumber: any) {
    const userView = this.views[componentNumber];

    const componentFactory = this.componentFactoryResolver.resolveComponentFactory(
      userView.component
    );

    const viewContainerRef = this.componentHost.viewContainerRef;
    viewContainerRef.clear();

    const componetRef = viewContainerRef.createComponent<UserComponent>(
      componentFactory
    );
    componetRef.instance.switchView.subscribe((event: any) =>
      this.switchView(event)
    );
  }
}
