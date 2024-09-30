import {Component, OnInit} from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Router } from '@angular/router';
import {CreateCardComponent} from "./create-card/create-card.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CreateCardComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent   {
  title = 'atmdesproject';



  // token$ = this.store.select('auth', 'idToken');


  // ngOnInit(): void {
  //   this.token$.subscribe(async (idToken) => {
  //     if (idToken) {
  //       this.store.dispatch(ProfileActions.createProfile({ idToken }));
  //       this.store.dispatch(ProfileActions.getProfile({ idToken }));
  //     }
  //   }
  //
  // }
}
