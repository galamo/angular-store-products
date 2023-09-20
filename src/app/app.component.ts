import { Component, OnInit } from '@angular/core';
import { Product, ProductsService } from './services/products/products.service';
import { AxiosResponse } from 'axios';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
    title = 'store';
    public products: Array<any> = [];
    public isLoading: boolean = true
    public numberOfProducts: number = 0
    public dataResult: string = "" // dont do this
    public searchText: string = ""
    constructor(private productsService: ProductsService) {
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
        console.log("title...")
        const result: AxiosResponse = await this.productsService.getProductsByTitleAxios(title)
        this.productsService.setCurrentProduct(result?.data?.products[0] as Product)
    }

    clearText() {
        this.searchText = ""
    }
}


class Person {
    constructor(public userName: string) {
    }
}

const person = new Person("rafi@gmail.com")
console.log(person)