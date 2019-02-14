import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

@Component({
  selector: 'app-card-ghost',
  templateUrl: './card-ghost.component.html',
  styleUrls: ['./card-ghost.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CardGhostComponent {
  @Input() data;
}
