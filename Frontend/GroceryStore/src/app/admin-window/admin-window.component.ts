import {
  Component,
  ComponentFactoryResolver,
  OnInit,
  ViewChild,
} from '@angular/core';
import { AdminComponentService } from '../admin-component.service';
import { AdminComponentsDirective } from '../admin-components.directive';
import { AdminComponent } from '../shared/admin-component';

@Component({
  selector: 'app-admin-window',
  templateUrl: './admin-window.component.html',
  styleUrls: ['./admin-window.component.css'],
})
export class AdminWindowComponent implements OnInit {
  adminViews!: AdminComponent[];
  @ViewChild(AdminComponentsDirective, { static: true })
  componentHost!: AdminComponentsDirective;
  constructor(
    public componentFactoryResolver: ComponentFactoryResolver,
    public adminComponentService: AdminComponentService
  ) {}

  ngOnInit(): void {
    this.adminViews = this.adminComponentService.getViews();
    this.switchView(0);
  }

  switchView(componentNumber: any) {
    const adminView = this.adminViews[componentNumber];

    const componentFactory = this.componentFactoryResolver.resolveComponentFactory(
      adminView.component
    );

    const viewContainerRef = this.componentHost.viewContainerRef;
    viewContainerRef.clear();

    const componetRef = viewContainerRef.createComponent<AdminComponent>(
      componentFactory
    );
    if (componetRef.instance.switchView)
      componetRef.instance.switchView.subscribe((event: any) =>
        this.switchView(event)
      );
  }
}
