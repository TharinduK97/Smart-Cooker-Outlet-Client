import Inventoryviewpage from "../../../components/Inventory page/Localinventoty/inventoryviewpage"

function Inventoryview() {
    
    const itemList = [
        {
            product_code: 1,
            product_name: "Rice Cooker",
            price: 1000,
            quantity: 10,
            last_updated: "2022-1-8"
        },
        {
            product_code: 2,
            product_name: "Gas Cooker",
            price: 2000,
            quantity: 20,
            last_updated: "2022-1-18"
        },
        {
            product_code: 3,
            product_name: "Induction Cooker",
            price: 3000,
            quantity: 30,
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