import { Component, OnInit } from '@angular/core';

import { Store } from '@ngrx/store';
import { AppState } from '../app.state';
import { Tutorial } from '../models/tutorial.model';
import { Observable } from 'rxjs';
import * as TutorialActions  from '../actions/tutorial.actions';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {

  constructor(private store: Store<AppState>) { }

  ngOnInit(): void {
  }

  addTutorial(name: string, url: string): void {
    this.store.dispatch(new TutorialActions.AddTutorial({name, url}));
  }

}
