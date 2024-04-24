//8. Devuelve un listado con el código de cliente de aquellos clientes que realizaron algún pago en 2008. 
//Tenga en cuenta que deberá eliminar aquellos códigos de cliente que aparezcan repetidos.
export const getAllCode_clientData_payment2008= async() =>{
    let res=await fetch("http://localhost:5505/payments")
    let data =await res.json();
    let dataUpdate = []
    data.forEach(val=>{
        let date= new Date(val.date_payment);
        if((date).getFullYear() == "2008"){
            dataUpdate.push({
                code_client: val.code_client,
            })
        }
    })
    return dataUpdate
}
//3. Devuelve un listado con todos los pagos que se realizaron en el año `2008` 
//mediante `Paypal`. Ordene el resultado de mayor a menor.
export const getAllPayments2008WithPaypal= async() =>{
    let res=await fetch("http://localhost:5505/payments?payment=PayPal")
    let data =await res.json();
    let dataUpdate = []
    data.forEach(val=>{
        let date= new Date(val.date_payment);
        if(date.getFullYear() == "2008"){
            dataUpdate.push({
                code_client:val.code_client,
                payment: val.payment,
                id_transaction: val.id_transaction,
                date_payment: val.date_payment,
                total: val.total,
                id: val.id
            })
        }
    })
    return dataUpdate
}
//4. Devuelve un listado con todas las formas de pago que aparecen en la tabla `pago`. Tenga en cuenta que no deben aparecer formas de pago repetidas.
export const getAllpayments= async() =>{
    let res=await fetch("http://localhost:5505/payments")
    let data =await res.json();
    let dataUpdate = []
    data.forEach(val=>{
        if(!dataUpdate.some(p => p.payment === val.payment)){
            dataUpdate.push({
                payment: val.payment
            })
        }
    })
    return dataUpdate
}