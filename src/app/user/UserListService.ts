import { Injectable } from "@angular/core";
import { BehaviorSubject ,  ReplaySubject, Subject } from "rxjs";

@Injectable({
  providedIn: "root",
})
export class UserListService {

  public checkBoxInfo = new BehaviorSubject<any>(null);

}
