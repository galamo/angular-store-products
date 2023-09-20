import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import axios from "axios"
import productTemplate from "./p.json"
import { MatGridTileHeaderCssMatStyler } from '@angular/material';
export type Product = Partial<Omit<typeof productTemplate, "discountPercentage">>



@Injectable({
    providedIn: 'root'
})
export class ProductsService {
    private url: string
    public sharedData = [];
    public currentProduct: Product | null = { id: 111 }
    constructor(private httpClient: HttpClient) {
        this.url = "https://dummyjson.com/products"
        this.currentProduct = { id: 111 };
    }

    getProducts(pName: string): Observable<{ products: Array<any> }> {
        // use this paramter...
        return this.httpClient.get<{ products: Array<any> }>(this.url)
    }

    getProductsAxios(pName: string): Promise<any> {
        // use this paramter...
        return axios.get(this.url)
    }

    getProductsByTitleAxios(pTitle: string): Promise<any> {
        return axios.get(this.url + `/search?q=${pTitle}`)
    }

    setCurrentProduct(p: Product | {}) {
        if ("id" in p) {
            this.currentProduct = p;
        }
    }

    getCurrentProduct(): Product | null {
        if (!this.currentProduct) return null
        return this.currentProduct
    }

}
