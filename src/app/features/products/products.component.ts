import { Component, inject, OnInit } from '@angular/core';
import { ProductItem, PRODUCTS_DETAIL } from './products.constants';
import { PanelMenu } from 'primeng/panelmenu';
import { BgTitleComponent } from '@shared/components/bg-title/bg-title.component';
import { BG_ABOUT_US_URL, HEADER_PRODUCTS } from '@shared/constants';
import { TranslatePipe } from '@ngx-translate/core';
import { Panel } from 'primeng/panel';
import { Router, RouterOutlet } from '@angular/router';

@Component({
  selector: 'xs-products',
  imports: [PanelMenu, BgTitleComponent, TranslatePipe, Panel, RouterOutlet],
  templateUrl: './products.component.html',
  styleUrl: './products.component.scss',
  standalone: true,
})
export class ProductsComponent implements OnInit {
  private router = inject(Router);
  products: ProductItem[] = PRODUCTS_DETAIL;
  selectedProduct: ProductItem = this.products[0];
  bgUrl = BG_ABOUT_US_URL;
  title = HEADER_PRODUCTS;

  ngOnInit() {
    // read url to find id
    const segments = this.router.url.split('/');
    const lastPath = segments[segments.length - 1];
    this.selectedProduct =
      this.products.find(p => p.id === lastPath) ?? this.products[0];
  }

  selectProduct(id: string) {
    const match = this.products.find(p => p.id === id);
    if (match) {
      this.selectedProduct = match;
      this.router.navigate(['/products', id]);
    }
  }

  model = this.products.map(p => ({
    label: p.title,
    command: () => this.selectProduct(p.id),
  }));
}
