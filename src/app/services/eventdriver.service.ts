import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { ActionEvent } from '../state/product.state';

@Injectable({
  providedIn: 'root'
})
export class EventdriverService {

  sourceEventSubject:Subject<ActionEvent> = new Subject<ActionEvent>();
  sourceEventSubjectObservable:Observable<ActionEvent> = this.sourceEventSubject.asObservable();

  constructor() { }

  //publier l'evenement vers le sujet
  publishEvent(event: ActionEvent){
    this.sourceEventSubject.next(event);
  }
}
