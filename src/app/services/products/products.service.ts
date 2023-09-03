import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import axios from "axios"

@Injectable({
    providedIn: 'root'
})
export class ProductsService {
    private url: string
    public sharedData = [];
    constructor(private httpClient: HttpClient) {
        this.url = "https://dummyjson.com/products"
    }

    getProducts(pName: string): Observable<{ products: Array<any> }> {
        // use this paramter...
        return this.httpClient.get<{ products: Array<any> }>(this.url)
    }

    getProductsAxios(pName: string): Promise<any> {
        // use this paramter...
        return axios.get(this.url)
    }


}
