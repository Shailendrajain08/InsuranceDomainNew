import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from '../service/auth.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  searchTerm = '';
  tags: any;
  role: any;
  searchResult: any;

  constructor(private activatedRoute: ActivatedRoute, private _router: Router, private _auth: AuthService) {

  }
  ngOnInit(): void {
    let query = this.activatedRoute.snapshot.paramMap.get('query');
    query && this._auth.searchPolicy(query).subscribe((res) => {
      this.searchResult = res
    })
    this.getUserRole()
  }

  search(term: string): void {
    this._router.navigate([`search/${term}`])
  }

  getUserRole() {
    this.role = sessionStorage.getItem('role') != null ? sessionStorage.getItem('role')?.toString() : '';
  }
}
