import { Component, OnInit } from '@angular/core';
import { ProductsService } from './services/products/products.service';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
    title = 'store';
    public products: Array<any>
    public isLoading: boolean;
    public numberOfProducts: number
    constructor(private productsService: ProductsService) {
        this.products = []
        this.isLoading = true
        this.numberOfProducts = 0
    }

    getData() {
        // call service
    }
    async ngOnInit(): Promise<void> {
        const success = (data: any) => {
            this.products = data.products
        }
        const complete = () => { this.isLoading = false }
        this.productsService.getProducts("this is useless").subscribe({ next: success, complete })
        const result = await this.productsService.getProductsAxios("useless")
        this.numberOfProducts = result.data.products.length
    }
}
