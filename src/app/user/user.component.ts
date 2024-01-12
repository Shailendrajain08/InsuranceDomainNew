import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms'
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { AuthService } from '../service/auth.service';
import { MatDialog } from '@angular/material/dialog';
import { UpdatepopupComponent } from '../updatepopup/updatepopup.component'

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  constructor(private builder: FormBuilder, private service: AuthService, private dialog: MatDialog) {

  }
  ngOnInit(): void {
    this.getUser();
    this.LoadUser();
  }
  userlist: any;
  dataSource: any;
  currentUser:any;
  currentUserRole:any
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  LoadUser() {
    this.service.Getall().subscribe(res => {
      this.userlist = res;
      this.dataSource = new MatTableDataSource(this.userlist);
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
      for(let item of this.userlist){
        if(this.currentUser == item.id){
          this.currentUserRole=item.role
        }
      }
    });
  }
  displayedColumns: string[] = ['username', 'name', 'email', 'status', 'role', 'action'];

  updateuser(code: any) {
    this.OpenDialog('1000ms', '600ms', code);
  }

  OpenDialog(enteranimation: any, exitanimation: any, code: string) {
    const popup = this.dialog.open(UpdatepopupComponent, {
      enterAnimationDuration: enteranimation,
      exitAnimationDuration: exitanimation,
      width: '30%',
      data: {
        usercode: code
      }
    });
    popup.afterClosed().subscribe(res => {
      this.LoadUser();
    });
  }

  getUser() {
    this.currentUser = sessionStorage.getItem('username') != null ? sessionStorage.getItem('username')?.toString() : '';
    }

}
