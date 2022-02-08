import { number } from "yup/lib/locale";

export interface IProduct {
        product_code: number;
        product_name: string;
        price: number;
        quantity: number;
        last_updated: string;
        productDescription:string;
        productImage:string;
};

export interface IOrder {
        user_code: number;
        created_At:string;
        quantity: number;
        order_status: string;
        product_Code: number;
        outlet_code: number;
        order_Id: number;
};


