import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service'
import { User } from '../user.class'

@Component({
  selector: 'app-userlist',
  templateUrl: './userlist.component.html',
  styleUrls: ['./userlist.component.css']
})
export class UserlistComponent implements OnInit {

  constructor(private userser: UserService) { }

  users: User[] = [];
  searchCriteria: string ="";
  sortCriteria: string ="id"
  ascSequence:boolean = true;

  sortColumn(column: string): void{
    if(column == this.sortCriteria){
      this.ascSequence = !this.ascSequence;
      console.log((this.ascSequence)? "Changed to Asc" : "Changed to Desc");
      return;
    }
    this.sortCriteria = column;
    console.log("Changed columns");
    this.ascSequence = true;
  }

  ngOnInit(): void {
    this.userser.list().subscribe(
      res => {
        console.log(res);
        this.users = res as User[];
      },
      err => {console.log(err)}
    )
  }

}
