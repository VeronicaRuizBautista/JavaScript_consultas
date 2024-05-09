// 1. Devuelve un listado con el código de oficina y la ciudad 
// donde hay oficinas.
export const getAllOficceAndCodeCity = async()=>{
    let res = await fetch("http://localhost:5504/offices")
    let data = await res.json();
    let dataUpdate = data.map(val =>{
        return {
            code_office: val.code_office,
            city: val.city
        }
    })
    return dataUpdate;
}
// 2. Devuelve un listado con la ciudad y el teléfono de las oficinas de España.
export const getAllOficceCityAndMovil = async()=>{
    let res = await fetch("http://localhost:5504/offices?country=España")
    let data = await res.json();
    let dataUpdate = data.map(val =>{
        return {
            code_office: val.code_office,
            country:val.country,
            movil: val.movil
        }
    })
    return dataUpdate
}

export const getCity = async(code)=>{
    let res = await fetch("http://localhost:5504/offices")
    let data = await res.json();
    let dataUpdate = []
    data.forEach(val=>{
        if(val.code_office == code){
            dataUpdate.push({
                city: val.city
            })
        }
    })
    return dataUpdate;
}


import {
    getClientForCity
} from "./clients.js";
import { 
    getEmployeeByCode
} from "./employees.js";

//1.4.5.6 Lista la dirección de las oficinas que tengan clientes en Fuenlabrada.
export const getAddressOffices = async()=>{
    let res = await fetch("http://localhost:5504/offices")
    let data = await res.json();
    let code= await getClientForCity("Fuenlabrada");
    console.log(code)
    let codeOffice;
    let l
    let dataUpdate=[]
    for (let key in code) {
        l= code[key].code
        codeOffice = await getEmployeeByCode(l);
        data.forEach(val=>{
            if(val.code_office == codeOffice){
                dataUpdate.push({
                    address: val.address1,
                })
            }
        })
    }return dataUpdate;
}
