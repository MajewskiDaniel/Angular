import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-rating',
  templateUrl: './rating.component.html',
  styleUrls: ['./rating.component.css']
})
export class RatingComponent  {
  @Input()
  rating: number;

  @Output()
  voteUp = new EventEmitter();

  @Output()
  voteDown = new EventEmitter();

  onUpVote() {
    this.voteUp.emit();
  }

  onDownVote() {
    this.voteDown.emit();
  }
}
