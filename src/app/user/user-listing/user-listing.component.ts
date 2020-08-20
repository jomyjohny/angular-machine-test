import {SelectionModel} from '@angular/cdk/collections';
import { Component, ViewChild, Output, EventEmitter} from '@angular/core';
import { MatTableDataSource } from '@angular/material';
import { MatPaginator } from '@angular/material/paginator';
import { userList } from 'users';
import { UserListService } from '../UserListService';

@Component({
  selector: 'app-user-listing',
  templateUrl: './user-listing.component.html',
  styleUrls: ['./user-listing.component.css']
})
export class UserListingComponent {
  @ViewChild(MatPaginator,{static:true}) paginator: MatPaginator;
  displayedColumns: string[] = ['select', 'userName', 'dob', 'phoneNumber'];
  dataSource = new MatTableDataSource(userList['users']);
  selection = new SelectionModel(true, []);

  constructor(private userListService: UserListService){}

  ngOnInit() {
    this.dataSource.paginator = this.paginator;
  }
  
  isAllSelected() {
    const numSelected = this.selection.selected.length;
    const numRows = this.dataSource.data.length;
    return numSelected === numRows;
  }

  masterToggle() {
    this.isAllSelected() ?
        this.selection.clear() :
        this.dataSource.data.forEach(row => this.selection.select(row));
  }

  onSubmit() {
    this.userListService.checkBoxInfo.next({
      data: this.selection.selected
    });
  }
}
