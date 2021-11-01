import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-log-in-form',
  templateUrl: './log-in-form.component.html',
  styleUrls: ['./log-in-form.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LogInFormComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
