import { Component, OnInit } from '@angular/core';
import { EventdriverService } from 'src/app/services/eventdriver.service';
import { ActionEvent } from 'src/app/state/product.state';

@Component({
  selector: 'app-stats',
  templateUrl: './stats.component.html',
  styleUrls: ['./stats.component.scss']
})
export class StatsComponent implements OnInit {

  counter: number = 0;
  constructor(private eventdriverService:EventdriverService) { }

  ngOnInit(): void {
    this.eventdriverService.sourceEventSubjectObservable.subscribe(
      (actionEvent: ActionEvent) => {
        ++this.counter;
      }
    )
  }

}
