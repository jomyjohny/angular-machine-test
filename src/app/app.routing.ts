import { Routes } from "@angular/router";
import { FullComponent } from "./layouts/full/full.component";
import { AppBlankComponent } from "./layouts/blank/blank.component";
import { AuthenticationComponent } from './authentication/authentication.component';

export const AppRoutes: Routes = [
  {
    path: "",
    component: AuthenticationComponent
  },
  {
    path: "admin",
    component: AppBlankComponent,
    children: [
      {
        path: "",
        loadChildren:
          () => import('./admin/admin.module').then(m => m.AdminModule),
      },
    ],
  },
  {
    path: "user",
    component: FullComponent,
    children: [
      {
        path: "",
        loadChildren: () => import('./user/user.module').then(m => m.UserModule),
      },
    ],
  }
];
