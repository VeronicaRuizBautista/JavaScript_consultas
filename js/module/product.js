import {
    getAllRequestDetailsByCode
} from "./request_details.js"

//15. Devuelve un listado con todos los productos que pertenecen a la gama `Ornamentales` y que tienen más de `100` unidades en stock.}
//El listado deberá estar ordenado por su precio de venta, mostrando en primer lugar los de mayor precio.
export const getAllproductsOrnamentales100= async() =>{
    let res=await fetch("http://localhost:5506/products?gama=Ornamentales&stock_gt=100&_sort=-price_sale")
    let data =await res.json();
    return data;
}

export const getProductByCodeProduct= async(code) =>{
    let res=await fetch(`http://localhost:5506/products?code_product=${code}`)
    let data =await res.json();
    let dataUpdate=[];
    data.forEach(val=> {
        dataUpdate.push(val.gama)
    });
    return dataUpdate;
}

//8. Devuelve un listado de los productos que nunca han aparecido en un pedido.
export const getAllProductsNotRequested = async()=>{
    let res = await fetch("http://localhost:5506/products")
    let data = await res.json();
    let dataUpdate=new Set()
    let promises = data.map(async (val) => {
        let  requested  = await getAllRequestDetailsByCode(val.code_product);
        
        if(requested==undefined) {
            dataUpdate.add(val.name)
        }
    })
    await Promise.all(promises);
    const dataArray = Array.from(dataUpdate);
    return dataArray;
}

//9. Devuelve un listado de los productos que nunca han aparecido en un pedido. El resultado debe mostrar el nombre, la descripción y la imagen del producto.
export const getAllProductsNotRequestedWithInformation = async()=>{
    let res = await fetch("http://localhost:5506/products")
    let data = await res.json();
    let dataUpdate=new Set()
    let promises = data.map(async (val) => {
        let  requested  = await getAllRequestDetailsByCode(val.code_product);
        if(requested==undefined) {
            dataUpdate.add({
                name:val.name,
                description:val.description,
            })
        }
    })
    await Promise.all(promises);
    const dataArray = Array.from(dataUpdate);
    return dataArray;
}