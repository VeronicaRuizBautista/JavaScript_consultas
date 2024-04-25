//6. Devuelve un listado con el nombre de los todos los clientes españoles.//
export const getAllEmployeesSpanishPeople= async() =>{
    let res=await fetch("http://localhost:5501/clients")
    let data =await res.json();
    let dataUpdate = []
    data.forEach(val=>{
        if(val.country == "Spain"){
            dataUpdate.push({
                name: val.client_name,
            })
        }
    })
    return dataUpdate
}
//6. Devuelve un listado con todos los clientes que sean de la ciudad de `Madrid` y 
//cuyo representante de ventas tenga el código de empleado `11` o `30`.
export const getAllClientFromMadridCodoEMploytesSales11Or30= async() =>{
    let res=await fetch("http://localhost:5501/clients?region=Madrid")
    let data =await res.json();
    let dataUpdate = []
    data.forEach(val=>{
        if(val.code_employee_sales_manager == 11 || val.code_employee_sales_manager == 30){
            dataUpdate.push({
                name: val.client_name,
            })
        }
    })
    return dataUpdate
}

//1.4.5.1 Obtén un listado con el nombre de cada cliente y el nombre y apellido de su representante de ventas.
import { 
    getEmployeeByCode
} from "./employees.js";

export const getAllClientqAndSalesRepresentative= async() =>{
    let res=await fetch("http://localhost:5501/clients")
    let data =await res.json();
    let dataUpdate = [];
    let promises = data.map(async (val) => {
        let p=val.code_employee_sales_manager
        let [employeescode] =await getEmployeeByCode(p);
        return{
            name: val.client_name,
            salesRepresentative: employeescode
        }

    })
    return await Promise.all(promises)
}

