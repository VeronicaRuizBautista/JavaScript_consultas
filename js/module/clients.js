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
import{
    getClientsWithPayment
} from "./payments.js";
import { 
    getCity
} from "./offices.js";


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

//1.4.5.2 Muestra el nombre de los clientes que hayan realizado pagos junto con el nombre de sus representantes de ventas.
export const getAllClientWithPaymentAndSalesRepresentative= async() =>{
    let res=await fetch("http://localhost:5501/clients")
    let data =await res.json();
    let dataUpdate = [];
    let name=""
    let promises = data.map(async (val) => {
        let p=val.code_employee_sales_manager
        let validacion= await getClientsWithPayment(val.client_code)
        if (validacion){
            let [employeescode] =await getEmployeeByCode(p);
            for (let key in employeescode) {
                if (key == "name"){
                    name= employeescode[key]
                }
            }
                return{
                    code: val.client_code,
                    name: val.client_name,
                    salesRepresentative: name
                }
        }
    })
    return await Promise.all(promises)
}

//1.4.5.3 Muestra el nombre de los clientes que no hayan realizado pagos junto con el nombre de sus representantes de ventas.
export const getAllClientWithoutPaymentAndSalesRepresentative= async() =>{
    let res=await fetch("http://localhost:5501/clients")
    let data =await res.json();
    let dataUpdate = [];
    let name=""
    let promises = data.map(async (val) => {
        let p=val.code_employee_sales_manager
        let validacion= await getClientsWithPayment(val.client_code)
        if (!validacion){
            let [employeescode] =await getEmployeeByCode(p);
            for (let key in employeescode) {
                if (key == "name"){
                    name= employeescode[key]
                }
            }
                return{
                    code: val.client_code,
                    name: val.client_name,
                    salesRepresentative: name
                }
        }
    })
    return await Promise.all(promises)
}

//1.4.5.4 Devuelve el nombre de los clientes que han hecho pagos y el nombre de sus representantes junto con la ciudad de la oficina a la que pertenece el representante.
export const getAllClientWithPaymentAndSalesRepresentativeOfficeCity= async() =>{
    let res=await fetch("http://localhost:5501/clients")
    let data =await res.json();
    let dataUpdate = [];
    let name=""
    let code
    let city=[]
    let promises = data.map(async (val) => {
        let p=val.code_employee_sales_manager
        let validacion= await getClientsWithPayment(val.client_code)
        if (validacion){
            let [employeescode] =await getEmployeeByCode(p);
            for (let key in employeescode) {
                if (key == "name"){
                    name= employeescode[key]
                } else if (key == "code_office"){
                    code = employeescode[key]
                } 
                [city]= await getCity(code)
            }
            return{
                code: val.client_code,
                name: val.client_name,
                salesRepresentative: name,
                city: city
            }
        }
    })
    return await Promise.all(promises)
}

//1.4.5.5 Devuelve el nombre de los clientes que no hayan hecho pagos y el nombre de sus representantes junto con la ciudad de la oficina a la que pertenece el representante.
export const getAllClientWithoutPaymentAndSalesRepresentativeOfficeCity= async() =>{
    let res=await fetch("http://localhost:5501/clients")
    let data =await res.json();
    let dataUpdate = [];
    let name=""
    let code
    let city=[]
    let promises = data.map(async (val) => {
        let p=val.code_employee_sales_manager
        let validacion= await getClientsWithPayment(val.client_code)
        if (!validacion){
            let [employeescode] =await getEmployeeByCode(p);
            for (let key in employeescode) {
                if (key == "name"){
                    name= employeescode[key]
                } else if (key == "code_office"){
                    code = employeescode[key]
                } 
                [city]= await getCity(code)
            }
            return{
                code: val.client_code,
                name: val.client_name,
                salesRepresentative: name,
                city: city
            }
        }
    })
    return await Promise.all(promises)
}

export const getClientForCity= async (city="") =>{
    let res = await fetch("http://localhost:5501/clients")
    let data = await res.json();
    let dataUpdate=[];
    data.forEach(val=>{
        if(val.city == city){
            dataUpdate.push({
                code: val.code_employee_sales_manager
            })
        }
    })
    return dataUpdate
}
//1.4.5.7 Devuelve el nombre de los clientes y el nombre de sus representantes junto con la ciudad de la oficina a la que pertenece el representante.
export const getAllClientWithSalesRepresentativeAndCityOffice= async() =>{
    let res=await fetch("http://localhost:5501/clients")
    let data =await res.json();
    let dataUpdate = [];
    let name="";
    let codeOffice="";
    let city="";
    let citys="";
    let promises = data.map(async (val) => {
        let p=val.code_employee_sales_manager
        let [employeescode] =await getEmployeeByCode(p);
        for (let key in employeescode) {
            if (key == "name"){
                name= employeescode[key]
            }
            if(key == "code_office") {
                codeOffice =employeescode[key]
                citys= await getCity(codeOffice)
                city=citys[0]
            }
        }
            return{
                code: val.client_code,
                name: val.client_name,
                salesRepresentative: name,
                city:city
            }
    })
    return await Promise.all(promises)
}