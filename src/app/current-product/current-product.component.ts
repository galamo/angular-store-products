import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../services/products/products.service';

@Component({
    selector: 'app-current-product',
    templateUrl: './current-product.component.html',
    styleUrls: ['./current-product.component.css']
})
export class CurrentProductComponent implements OnInit {

    constructor(public productService: ProductsService) {
    }
    ngOnInit(): void {
    }

}
