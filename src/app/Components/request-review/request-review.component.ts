import { Component } from '@angular/core';

import { RouterLink } from '@angular/router';
import { ProgressBarComponent } from '../shared/progress-bar/progress-bar.component';

@Component({
  selector: 'app-request-review',
  standalone: true,
  imports: [ProgressBarComponent,RouterLink],
  templateUrl: './request-review.component.html',
  styleUrl: './request-review.component.css'
})
export class RequestReviewComponent {

}
