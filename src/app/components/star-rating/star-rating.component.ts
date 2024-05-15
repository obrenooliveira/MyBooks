import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'star-rating',
  templateUrl: './star-rating.component.html',
  styleUrls: ['./star-rating.component.scss']
})
export class StarRatingComponent implements OnInit {
  @Input() rating: number = 0;
  @Input() maxStars: number = 5;
  @Input() useForm: boolean = false;
  @Output() starRating = new EventEmitter<number>();

  stars: boolean[] = Array(this.maxStars).fill(false);

  ngOnInit(): void {
    this.rate();
  }

  rate(newRating?: number) {
    if(newRating) {
      this.rating = newRating;
      this.starRating.emit(newRating);
    }
    this.stars = this.stars.map((_, i) => this.rating > i);
  }
}
