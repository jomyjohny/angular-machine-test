import { Routes } from "@angular/router";
import { UserComponent } from './user/user.component';

export const userRoutes: Routes = [
  {
    path: "",
    children: [
      {
        path: "",
        component: UserComponent
      }
    ],
  },
];
