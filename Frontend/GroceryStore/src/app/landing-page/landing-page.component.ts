import {
  Component,
  ComponentFactoryResolver,
  OnInit,
  ViewChild,
} from '@angular/core';
import { LandingPageComponentDirective } from '../landing-page-component.directive';
import { LandingPageComponentService } from '../landing-page-component.service';
import { LandingComponent } from '../shared/landing-component';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.css'],
})
export class LandingPageComponent implements OnInit {
  landingViews!: LandingComponent[];
  @ViewChild(LandingPageComponentDirective, { static: true })
  componentHost!: LandingPageComponentDirective;
  constructor(
    public componentFactoryResolver: ComponentFactoryResolver,
    public landingComponentService: LandingPageComponentService
  ) {}

  ngOnInit(): void {
    this.landingViews = this.landingComponentService.getViews();
    this.switchView(0);
  }
  switchView(componentNumber: any) {
    const landingView = this.landingViews[componentNumber];

    const componentFactory = this.componentFactoryResolver.resolveComponentFactory(
      landingView.component
    );

    const viewContainerRef = this.componentHost.viewContainerRef;
    viewContainerRef.clear();

    const componetRef = viewContainerRef.createComponent<LandingComponent>(
      componentFactory
    );
    componetRef.instance.switchView.subscribe((event: any) =>
      this.switchView(event)
    );
  }
}
