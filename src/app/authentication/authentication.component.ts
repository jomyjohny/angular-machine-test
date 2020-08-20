import { Component, OnInit } from '@angular/core';
import { userList } from 'users';
import {
  FormBuilder,
  FormGroup,
  Validators,
  FormControl,
  FormArray,
  FormsModule,
} from "@angular/forms";
import { FormValidationService } from '../../app/services/formValidation/form-validation.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-authentication',
  templateUrl: './authentication.component.html',
  styleUrls: ['./authentication.component.css']
})
export class AuthenticationComponent implements OnInit {
    public form: FormGroup;
    dropdownList = [];
    selectedItems = [];
    arrSum:any = 0;
    dropdownSettings = {};
    constructor(private fb: FormBuilder, private formValidationService: FormValidationService,private router: Router,){}
    ngOnInit(){
      this.form = this.fb.group({
        firstInput: [null, Validators.compose([Validators.required])],
        secondInput: [null, Validators.compose([Validators.required,this.formValidationService.validateNumber])]
      });
      
      userList['users'].map((item, index)=>{
        this.dropdownList.push({
          "id":index,
          "itemName":index
        })
      })
      this.dropdownSettings = { 
                                singleSelection: false, 
                                text:"Select Item",
                                enableSearchFilter: true,
                                classes:"myclass custom-class"
                              };            
    }
    onItemSelect(item:any){
      console.log(item);
      console.log(this.selectedItems);
    }
    OnItemDeSelect(item:any){
        console.log(item);
        console.log(this.selectedItems);
    }


    onSubmit(){
      this.form.value.firstInput.map(item=>{
        this.arrSum += item.itemName;
      })
      localStorage.setItem('sum',this.arrSum);
      localStorage.setItem('value',this.form.value.secondInput);
      setTimeout(()=>{
        if(localStorage.getItem('sum')===localStorage.getItem('value')){
          this.router.navigate(['admin']);
        } else {
          this.router.navigate(['admin/chart']);
        }
      },100)
    }
}
