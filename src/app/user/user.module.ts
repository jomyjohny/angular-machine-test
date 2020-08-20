import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { userRoutes } from "./user.routing";
import { UserComponent } from './user/user.component';
import { UserListingComponent } from './user-listing/user-listing.component';
import { UserSelectionComponent } from './user-selection/user-selection.component';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common'; 

@NgModule({
  imports: [
    CommonModule,
    MatTableModule,
    MatPaginatorModule,
    MatCheckboxModule,
    FormsModule,
    RouterModule.forChild(userRoutes),
  ],
  declarations: [
    UserComponent,
    UserListingComponent,
    UserSelectionComponent
  ]
})
export class UserModule {}
 