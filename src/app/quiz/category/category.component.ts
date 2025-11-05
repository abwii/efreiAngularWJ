import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-category',
  standalone: false,
  templateUrl: './category.component.html',
  styleUrl: './category.component.scss',
})
export class CategoryComponent {
  category = '';
  firstCategory = 'Fondamentaux d’Angular';
  secondCategory = 'Développement et communication';
  thirdCategory = 'Navigation et performance';
  isCategoryConfirmed = false;
  constructor(private router: Router) {}

  confirmCategory() {
    this.isCategoryConfirmed = true;
    console.log(this.category);
  }
}
