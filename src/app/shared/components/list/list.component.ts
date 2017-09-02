import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'app-list-component',
  styleUrls: ['./list.component.css'],
  templateUrl: `./list.component.html`
})
export class ListComponent {
  @Input() items: string[];
}
