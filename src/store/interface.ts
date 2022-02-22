

export interface IProduct {
        id: string;
        productName: string;
        description:string;
        price: number;
        quantity: number;
        imageUrl:string;
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


