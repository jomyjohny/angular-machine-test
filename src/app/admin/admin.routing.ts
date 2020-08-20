import { Routes } from "@angular/router";
import { ChartComponent } from './chart/chart.component';
import { AdminPanelComponent } from './admin-panel/admin-panel.component';
 
export const AdminRoutes: Routes = [
  {
    path: "",
    children: [
      {
        path: "",
        component: AdminPanelComponent
      },
      {
        path: "chart",
        component: ChartComponent
      }
    ],
  },
];
