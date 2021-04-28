import {
  Component,
  ComponentFactoryResolver,
  OnInit,
  ViewChild,
} from '@angular/core';
import { EmployeeComponentsDirective } from '../employee-components.directive';
import { EmployeeComponentsService } from '../employee-components.service';
import { EmployeeComponent } from '../shared/employee-component';

@Component({
  selector: 'app-employee-window',
  templateUrl: './employee-window.component.html',
  styleUrls: ['./employee-window.component.css'],
})
export class EmployeeWindowComponent implements OnInit {
  employeeViews!: EmployeeComponent[];
  @ViewChild(EmployeeComponentsDirective, { static: true })
  componentHost!: EmployeeComponentsDirective;
  constructor(
    public componentFactoryResolver: ComponentFactoryResolver,
    public employeeComponentService: EmployeeComponentsService
  ) {}

  ngOnInit(): void {
    this.employeeViews = this.employeeComponentService.getViews();
    this.switchView(0);
  }

  switchView(componentNumber: any) {
    const employeeView = this.employeeViews[componentNumber];

    const componentFactory = this.componentFactoryResolver.resolveComponentFactory(
      employeeView.component
    );

    const viewContainerRef = this.componentHost.viewContainerRef;
    viewContainerRef.clear();

    const componetRef = viewContainerRef.createComponent<EmployeeComponent>(
      componentFactory
    );
    componetRef.instance.switchView.subscribe((event: any) =>
      this.switchView(event)
    );
  }
}
