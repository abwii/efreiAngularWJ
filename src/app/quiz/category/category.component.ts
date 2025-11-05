import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-category',
  standalone: false,
  templateUrl: './category.component.html',
  styleUrl: './category.component.scss',
})
export class CategoryComponent {
  category = '';
  firstCategory = 'Fondamentaux';
  secondCategory = 'Developpement';
  thirdCategory = 'Navigation';
  isCategoryConfirmed = false;
  playerName = '';

  constructor(private router: Router, private route: ActivatedRoute) {
    this.route.params.subscribe(params => {
      this.playerName = params['playerName'];
    });
  }

  confirmCategory() {
    this.isCategoryConfirmed = true;
    console.log(this.category);
  }

  selectCategory(categoryName: string) {
    this.router.navigate(['/quiz', this.playerName, categoryName]);
  }
}
