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
    public dataResult: string // dont do this!!!
    public searchText: string
    constructor(private productsService: ProductsService) {
        this.products = []
        this.isLoading = true
        this.numberOfProducts = 0
        this.dataResult = ""
        this.searchText = ""
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

    async getProductsByTitle(title: string) {
        const result = await this.productsService.getProductsByTitleAxios(title)
        this.dataResult = JSON.stringify(result.data)
    }
}
