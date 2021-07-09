import { Component, Input } from '@angular/core';
// import { faStar, faStarHalf } from '@fortawesome/free-solid-svg-icons';
// import { faStar as star} from '@fortawesome/free-regular-svg-icons';


@Component({
  selector: 'app-star-rating',
  templateUrl: './star-rating.component.html',
  styleUrls: ['./star-rating.component.scss']
})
export class StarRatingComponent  {
  // faStar = faStar;
  // faStarHalf = faStarHalf;
  // star = star;

  @Input() public rating = 0;
  highestRating = 5;

  public get fullStars(): number[] {
    const totalFullStars = Math.floor(this.rating);
    return Array(totalFullStars).fill(''); // to itterate
  }

  public get hasHalfStar(): boolean {
    const hasHalfStar = ((this.rating - Math.floor(this.rating)) >= 0.5)
        && this.rating !== this.highestRating;
    return hasHalfStar;
  }

  public get emptyStars(): number[] {
    const totalEmptyStars = Math.floor(this.highestRating - this.rating);
    return Array(totalEmptyStars).fill('');
  }


}
