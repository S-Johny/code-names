import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-teams',
  templateUrl: './teams.component.html',
  styleUrls: ['./teams.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TeamsComponent implements OnInit {

  teams: { name: string; shortcut: string; motto: string }[] = [
    {
      name: 'INSTITUT PRO VÝZVĚDNÉ OPERACE',
      shortcut: 'IVO',
      motto: 'hbD4Nl4bg4kCMlG4Fd9reCgwj1IaFDhrfTyEeFfsDLr2Hh5j5u2CD36ExF432tl6lP6xjnb2GkseLPB6DYL8wiWCmFGRt3V5N fQ8dr3KUJGTa9mEjcuf6h',
    },
    {
      name: 'INSTITUT PRO VÝZVĚDNÉ OPERACE',
      shortcut: 'IVO',
      motto: 'There is a soft wrap opportunity around every typographic character unit, including around any punctuation character or preserved white spaces',
    },
    {
      name: 'INSTITUT PRO VÝZVĚDNÉ OPERACE',
      shortcut: 'IVO',
      motto: 'There is a soft wrap opportunity around every typographic character unit, including around any punctuThere is a soft wrap opportunity around every typographic character unit, including around any punctuThere is a soft wrap opportunity around every typographic character unit, including around any punctuThere is a soft wrap opportunity around every typographic character unit, including around any punctuation character or preserved white spaces',
    },
    {
      name: 'INSTITUT PRO VÝZVĚDNÉ OPERACE',
      shortcut: 'IVO',
      motto: 'There is a soft wrap opportunity around every typographic character unit, including around any punctuation character or preserved white spaces',
    },
    {
      name: 'INSTITUT PRO VÝZVĚDNÉ OPERACE',
      shortcut: 'IVO',
      motto: 'There is a soft wrap opportunity around every typographic character unit, including around any punctuation character or preserved white spaces',
    },
    {
      name: 'INSTITUT PRO VÝZVĚDNÉ OPERACE',
      shortcut: 'IVO',
      motto: 'There is a soft wrap opportunity around every typographic character unit, including around any punctuation character or preserved white spaces',
    },
  ];

  constructor() {
  }

  ngOnInit(): void {
  }
}
