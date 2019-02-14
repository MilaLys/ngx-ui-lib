import { ChangeDetectionStrategy, Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

interface User {
  name: string;
  position: string;
  photo: string;
}

interface FeedbackData {
  reviewer: User;
  reviewee: User;
  status: string;
  dateStart: Date;
  dateEnd: Date;
}

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CardComponent implements OnInit {
  @Input() data: FeedbackData;
  @Output() notifyDeclineEvent = new EventEmitter();
  @Output() notifyProcessEvent = new EventEmitter();

  remainingDays = 0;
  dateEnding = 'th';

  private static formatDateEnding(date: Date): string {
    const days = date.getDate();
    if (days > 3 && days < 21) {
      return 'th';
    }
    switch (days % 10) {
      case 1:
        return 'st';
      case 2:
        return 'nd';
      case 3:
        return 'rd';
      default:
        return 'th';
    }
  }

  ngOnInit() {
    const statuses = ['to do', 'done', 'in process', 'declined', 'stopped'];
    const currentStatus = statuses.filter((status: string) => status === this.data.status);

    if (!currentStatus.length) {
      this.data.status = 'to do';
    }

    this.remainingDays = Number(this.data.dateEnd.getDay()) - Number(this.data.dateStart.getDay());
    this.dateEnding = CardComponent.formatDateEnding(this.data.dateStart);
  }

  decline(event: Event): void {
    this.notifyDeclineEvent.emit(event);
  }

  process(status: string): void {
    this.notifyProcessEvent.emit(status);
  }

  getProcessName(status: string): string[] {
    switch (status) {
      case 'to do':
        return ['Created on', 'Begin'];
      case 'in process':
        return ['Stopped on', 'Edit'];
      case 'declined':
        return ['Declined on', 'Reason'];
      case 'stopped':
        return ['Created on', 'View'];
      default:
        return ['', 'View'];
    }
  }
}
