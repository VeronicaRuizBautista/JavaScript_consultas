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