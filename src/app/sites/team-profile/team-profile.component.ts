import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-team-profile',
  templateUrl: './team-profile.component.html',
  styleUrls: ['./team-profile.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TeamProfileComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
