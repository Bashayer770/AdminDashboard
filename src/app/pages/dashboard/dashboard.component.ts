import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { StatisticComponent } from '../../components/statistic/statistic.component';
import { ProductCardComponent } from '../../components/product-card/product-card.component';
import { UsersJoinedTodayComponent } from '../../components/users-joined-today.component';
import { EarnGrowthComponentComponent } from '../../components/earn-growth-component/earn-growth-component.component';

@Component({
  selector: 'app-dashboard',
  imports: [
    RouterLink,
    StatisticComponent,
    ProductCardComponent,
    UsersJoinedTodayComponent,
    EarnGrowthComponentComponent,
  ],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css',
})
export class DashboardComponent {
  topProducts = [
    {
      name: 'Sneaker',
      price: 1500,
      imageUrl:
        'https://cdn.shopify.com/s/files/1/0587/3274/0775/files/R_1500x.jpg?v=latest',
    },
    // {
    //   name: 'Basic T-shirt',
    //   price: 15.0,
    //   imageUrl: 'https://picsum.photos/seed/tshirt/150/150',
    // },
    // {
    //   name: 'Standing Desk',
    //   price: 199.99,
    //   imageUrl: 'https://picsum.photos/seed/desk/150/150',
    // },
  ];

  isExpanded = false;

  toggleExpand() {
    this.isExpanded = !this.isExpanded;
  }
}
