//7. Devuelve un listado con los distintos estados por los que puede pasar un pedido.//
export const getAllStatusRequests= async() =>{
    let res=await fetch("http://localhost:5508/requests")
    let data =await res.json();
    let dataUpdate = []
    data.forEach(val=>{
        if(!dataUpdate.some(st => st.status === val.status)){
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
//2. Devuelve un listado con el código de pedido, código de cliente, fecha esperada y fecha de entrega de los pedidos cuya fecha de entrega ha sido al menos dos días antes de la fecha esperada.
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


import {
    getClientBycode
} from "./clients.js";
////1.4.5.10 Devuelve el nombre de los clientes a los que no se les ha entregado a tiempo un pedido.
export const getAllClientRequestNoTime= async() =>{
    let res=await fetch("http://localhost:5508/requests?status=Entregado")
    let data =await res.json();
    let dataUpdate = []
    let code_client;
    let client="";
    let Promises= data.map ( async(val)=>{
        if(val.date_wait>val.date_delivery){
            code_client=val.code_client
            client= await getClientBycode(code_client)
            return({
                client_name:client,
                date_wait:val.date_wait,
                date_delivery:val.date_delivery
            })
        }       
    })
    let result = await Promise.all(Promises);
    return result.filter(item => item !== undefined);
}

export const getAllRequestsByClientCode= async(code) =>{
    let res=await fetch("http://localhost:5508/requests")
    let data =await res.json();
    let dataUpdate = []
    let codes=[];
    data.forEach(val=>{
        if(val.code_client==code){
            codes.push(val.code_request)
        }
    })
    return codes
}

export const getAllClientWithRequest = async (id) => {
    let res = await fetch("http://localhost:5508/requests")
    let data = await res.json();
    let dataUpdate = [];
    let validacion = "hola"
    data.forEach(val=>{
        if(val.code_client == (id)){
            validacion=true
        }
    })
    return validacion
}