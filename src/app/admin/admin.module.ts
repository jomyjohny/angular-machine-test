import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { AdminRoutes } from "./admin.routing";
import { ChartComponent } from './chart/chart.component';
import { AdminPanelComponent } from './admin-panel/admin-panel.component';

@NgModule({
  imports: [
    RouterModule.forChild(AdminRoutes),
  ],
  declarations: [
    ChartComponent,
    AdminPanelComponent
  ],
})
export class AdminModule {}
