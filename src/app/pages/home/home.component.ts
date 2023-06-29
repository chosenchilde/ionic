import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  receita: any;

  constructor(
    private http: HttpClient) { this.getAllRecipes() }

  ngOnInit() { }

  getAllRecipes() {
    this.http.get('http://localhost:8080/receita')
      .subscribe((response) => { 
        console.log(response);
        this.receita = response;
      },
        (error) => {
          console.log(error);
        }
      )
  }

}
