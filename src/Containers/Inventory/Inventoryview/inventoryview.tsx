import Inventoryviewpage from "../../../components/Inventory page/Localinventoty/inventoryviewpage"

function Inventoryview() {

    const itemList = [
        {
            product_code: 1,
            product_name: "Rice Cooker",
            price: 1000,
            quantity: 10,
            productDescription:"Cras malesuada pretium orci, non ultricies orci fringilla eu. Praesent congue volutpat facilisis. Quisque sed vehicula libero. Curabitur fermentum pharetra tellus viverra iaculis. Ut convallis magna nisl, ut convallis massa convallis quis. Suspendisse vestibulum, risus nec congue gravida, enim lectus pellentesque lorem, non tempor dui diam non ex.",
            productImage:"https://www.jungle.lk/wp-content/uploads/2020/02/Abans-Electric-Rice-Cooker-with-Steamer-1.5L-%E2%80%93-AC15TR1.jpg",
            last_updated: "2022-1-8"
        },
        {
            product_code: 2,
            product_name: "Gas Cooker",
            price: 2000,
            quantity: 20,
            productDescription:"Cras malesuada pretium orci, non ultricies orci fringilla eu. Praesent congue volutpat facilisis. Quisque sed vehicula libero. Curabitur fermentum pharetra tellus viverra iaculis. Ut convallis magna nisl, ut convallis massa convallis quis. Suspendisse vestibulum, risus nec congue gravida, enim lectus pellentesque lorem, non tempor dui diam non ex.",
            productImage:"https://damroonline.lk/wp-content/uploads/2021/06/IGS006.jpg",
            last_updated: "2022-1-18"
        },
        {
            product_code: 3,
            product_name: "Induction Cooker",
            price: 3000,
            quantity: 30,
            productDescription:"Cras malesuada pretium orci, non ultricies orci fringilla eu. Praesent congue volutpat facilisis. Quisque sed vehicula libero. Curabitur fermentum pharetra tellus viverra iaculis. Ut convallis magna nisl, ut convallis massa convallis quis. Suspendisse vestibulum, risus nec congue gravida, enim lectus pellentesque lorem, non tempor dui diam non ex.",
            productImage:"https://www.ubuy.com.lk/productimg/?image=aHR0cHM6Ly9tLm1lZGlhLWFtYXpvbi5jb20vaW1hZ2VzL0kvNjFHNkVEV2pnYUwuX0FDX1NMMTUwMF8uanBn.jpg",
            last_updated: "2022-1-28"
        }
    ]
    
    return (
        <div>
               <Inventoryviewpage/>
        </div>
    )
}

export default Inventoryview