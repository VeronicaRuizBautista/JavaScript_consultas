//7. Devuelve un listado con los distintos estados por los que puede pasar un pedido.//
export const getAllStatusRequests= async() =>{
    let res=await fetch("http://localhost:5508/requests")
    let data =await res.json();
    let dataUpdate = []
    data.forEach(val=>{
        if(!dataUpdate.some(st => st === val.status)){
            dataUpdate.push({
                status: val.status
            })
        }
    })
    return dataUpdate
}
//1. Devuelve un listado con el código de pedido, código de cliente,
//fecha esperada y fecha de entrega de los pedidos que no han sido entregados a tiempo.
export const getAllCode_requestDate_deliveryLater= async() =>{
    let res=await fetch("http://localhost:5508/requests")
    let data =await res.json();
    let dataUpdate = []
    data.forEach(val=>{
        if(val.date_wait<val.date_delivery){
            dataUpdate.push({
                code_request: val.code_request,
                code_client: val.code_client,
                date_wait: val.date_wait,
                date_delivery: val.date_delivery
            })
        }
    })
    return dataUpdate
}
//2. Devuelve un listado con el código de pedido, código de cliente, fecha esperada y
//fecha de entrega de los pedidos cuya fecha de entrega ha sido al menos dos días antes 
//de la fecha esperada.
export const getAllCode_requestDate_deliveryBefore= async() =>{
    let res=await fetch("http://localhost:5508/requests")
    let data =await res.json();
    let dataUpdate = []
    data.forEach(val=>{
        if(val.date_wait>val.date_delivery){
            dataUpdate.push({
                code_request: val.code_request,
                code_client: val.code_client,
                date_wait: val.date_wait,
                date_delivery: val.date_delivery
            })
        }
    })
    return dataUpdate
}
//1. Devuelve un listado de todos los pedidos que fueron **rechazados** en `2009`.
export const getAllRequestsRefused2009= async() =>{
    let res=await fetch("http://localhost:5508/requests")
    let data =await res.json();
    let dataUpdate = []
    data.forEach(val=>{
        let date= new Date(val.date_request);
        if(val.status == "Rechazado" && date.getFullYear()=="2009"){
            dataUpdate.push({
                id:val.id,
                code_request: val.code_request,
                code_client: val.code_client,
                date_request: val.date_request,
                date_wait: val.date_wait,
                date_delivery: val.date_delivery,
                status: val.status,
                comment: val.comment
            })
        }
    })
    return dataUpdate
}
//2. Devuelve un listado de todos los pedidos que han sido **entregados** en el mes de enero de cualquier año.
export const getAllRequestsDeliveredJanuary= async() =>{
    let res=await fetch("http://localhost:5508/requests?status=Entregado")
    let data =await res.json();
    let dataUpdate = []
    data.forEach(val=>{
        let date= new Date(val.date_request);
        if(date.getMonth()==0){
            dataUpdate.push(val)
        }
    })
    return dataUpdate
}