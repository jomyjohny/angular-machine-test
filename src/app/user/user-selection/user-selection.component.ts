import { Component, OnInit, Input, SimpleChanges } from '@angular/core';
import { UserListService } from '../UserListService';

@Component({
  selector: 'app-user-selection',
  templateUrl: './user-selection.component.html',
  styleUrls: ['./user-selection.component.css']
})
export class UserSelectionComponent implements OnInit {
  selectedUsers;

  constructor(private userListService: UserListService){}

  ngOnInit() {
    this.userListService.checkBoxInfo.subscribe(res=>{
      if(res!=null){
        this.selectedUsers = res['data'];
      }
    });
  }
}
