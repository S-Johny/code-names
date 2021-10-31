import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-lore',
  templateUrl: './lore.component.html',
  styleUrls: ['./lore.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LoreComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
