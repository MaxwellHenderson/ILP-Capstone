import {
  Component,
  ComponentFactoryResolver,
  OnInit,
  ViewChild,
} from '@angular/core';
import { UserComponent } from '../shared/user-component';
import { StorefrontComponent } from '../storefront/storefront.component';
import { UserCartComponent } from '../user-cart/user-cart.component';
import { UserCheckoutComponent } from '../user-checkout/user-checkout.component';
import { UserComponentsDirective } from '../user-components.directive';
import { UserComponentsService } from '../user-components.service';

@Component({
  selector: 'app-user-window',
  templateUrl: './user-window.component.html',
  styleUrls: ['./user-window.component.css'],
})
export class UserWindowComponent implements OnInit {
  componentNumber?: number;
  views!: UserComponent[];
  @ViewChild(UserComponentsDirective, { static: true })
  componentHost!: UserComponentsDirective;

  constructor(
    public componentFactoryResolver: ComponentFactoryResolver,
    public userComponentService: UserComponentsService
  ) {}

  ngOnInit(): void {
    this.views = this.userComponentService.getViews();
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
