//6. Devuelve un listado con el nombre de los todos los clientes españoles.//
export const getAllClientsFromSpain = async () => {
    let res = await fetch("http://localhost:5501/clients")
    let data = await res.json();
    let dataUpdate = []
    data.forEach(val => {
        if (val.country == "Spain") {
            dataUpdate.push({
                name: val.client_name,
                code: val.client_code,
                id: val.id,
                country: val.country
            })
        }
    })
    return dataUpdate
}
//6. Devuelve un listado con todos los clientes que sean de la ciudad de `Madrid` y 
//cuyo representante de ventas tenga el código de empleado `11` o `30`.
export const getAllClientFromMadridCodoEMploytesSales11Or30 = async () => {
    let res = await fetch("http://localhost:5501/clients?region=Madrid")
    let data = await res.json();
    let dataUpdate = []
    data.forEach(val => {
        if (val.code_employee_sales_manager == 11 || val.code_employee_sales_manager == 30) {
            dataUpdate.push({
                name: val.client_name,
                code: val.client_code,
                id: val.id,
                city: val.city,
                code_employee_sales_manager: val.code_employee_sales_manager,
            })
        }
    })
    return dataUpdate
}

//1.4.5.1 Obtén un listado con el nombre de cada cliente y el nombre y apellido de su representante de ventas.
import {
    getEmployeeByCode
} from "./employees.js";
import {
    getClientsWithPayment
} from "./payments.js";
import {
    getCity
} from "./offices.js";
import {
    getAllRequestsByClientCode,
    getAllClientWithRequest,
    getAllRequest
} from "./requests.js";
import {
    getProductByCodeProduct
} from "./product.js";
import {
    getCodeProductByCodeRequest,
    getAllRequestDetails,
} from "./request_details.js"

export const getAllClientqAndSalesRepresentative = async () => {
    let res = await fetch("http://localhost:5501/clients")
    let data = await res.json();
    let dataUpdate = [];
    let promises = data.map(async (val) => {
        let p = val.code_employee_sales_manager
        let [employeescode] = await getEmployeeByCode(p);
        return {
            name: val.client_name,
            code: val.client_code,
            id: val.id,
            salesRepresentative: employeescode.name
        }

    })
    return await Promise.all(promises)
}

//1.4.5.2 Muestra el nombre de los clientes que hayan realizado pagos junto con el nombre de sus representantes de ventas.
export const getAllClientWithPaymentAndSalesRepresentative = async () => {
    let res = await fetch("http://localhost:5501/clients")
    let data = await res.json();
    let dataUpdate = [];
    let name = ""
    let promises = data.map(async (val) => {
        let p = val.code_employee_sales_manager
        let validacion = await getClientsWithPayment(val.client_code)
        if (validacion) {
            let [employeescode] = await getEmployeeByCode(p);
            for (let key in employeescode) {
                if (key == "name") {
                    name = employeescode[key]
                }
            }
            return {
                code: val.client_code,
                name: val.client_name,
                salesRepresentative: name
            }
        }
    })  
    let result = await Promise.all(promises);
    return result.filter(item => item !== undefined);
}

//1.4.5.3 Muestra el nombre de los clientes que no hayan realizado pagos junto con el nombre de sus representantes de ventas.
export const getAllClientWithoutPaymentAndSalesRepresentative = async () => {
    let res = await fetch("http://localhost:5501/clients")
    let data = await res.json();
    let dataUpdate = [];
    let name = ""
    let promises = data.map(async (val) => {
        let p = val.code_employee_sales_manager
        let validacion = await getClientsWithPayment(val.client_code)
        if (!validacion) {
            let [employeescode] = await getEmployeeByCode(p);
            for (let key in employeescode) {
                if (key === "name") {
                    name = employeescode[key]
                }
            }
            return {
                code: val.client_code,
                name: val.client_name,
                salesRepresentative: name
            }
        }
    })

    let result = await Promise.all(promises);
    return result.filter(item => item !== undefined);
}

//1.4.5.4 Devuelve el nombre de los clientes que han hecho pagos y el nombre de sus representantes junto con la ciudad de la oficina a la que pertenece el representante.
export const getAllClientWithPaymentAndSalesRepresentativeOfficeCity = async () => {
    let res = await fetch("http://localhost:5501/clients")
    let data = await res.json();
    let dataUpdate = [];
    let name = ""
    let code
    let city = []
    let promises = data.map(async (val) => {
        let p = val.code_employee_sales_manager
        let validacion = await getClientsWithPayment(val.client_code)
        if (validacion) {
            let [employeescode] = await getEmployeeByCode(p);
            for (let key in employeescode) {
                if (key == "name") {
                    name = employeescode[key]
                } else if (key == "code_office") {
                    code = employeescode[key]
                }
                [city] = await getCity(code)
            }
            return {
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
export const getAllClientWithoutPaymentAndSalesRepresentativeOfficeCity = async () => {
    let res = await fetch("http://localhost:5501/clients")
    let data = await res.json();
    let dataUpdate = [];
    let name = ""
    let code
    let city = []
    let promises = data.map(async (val) => {
        let p = val.code_employee_sales_manager
        let validacion = await getClientsWithPayment(val.client_code)
        if (!validacion) {
            let [employeescode] = await getEmployeeByCode(p);
            for (let key in employeescode) {
                if (key == "name") {
                    name = employeescode[key]
                } else if (key == "code_office") {
                    code = employeescode[key]
                }
                [city] = await getCity(code)
            }
            return {
                code: val.client_code,
                name: val.client_name,
                salesRepresentative: name,
                city: city
            }
        }
    })
    let result = await Promise.all(promises);
    return result.filter(item => item !== undefined);
}

export const getClientForCity = async (city = "") => {
    let res = await fetch("http://localhost:5501/clients")
    let data = await res.json();
    let dataUpdate = [];
    data.forEach(val => {
        if (val.city == city) {
            dataUpdate.push({
                code: val.code_employee_sales_manager
            })
        }
    })
    return dataUpdate
}
//1.4.5.7 Devuelve el nombre de los clientes y el nombre de sus representantes junto con la ciudad de la oficina a la que pertenece el representante.
export const getAllClientWithSalesRepresentativeAndCityOffice = async () => {
    let res = await fetch("http://localhost:5501/clients")
    let data = await res.json();
    let dataUpdate = [];
    let name = "";
    let codeOffice = "";
    let city = "";
    let citys = "";
    let promises = data.filter(async (val) => {
        let p = val.code_employee_sales_manager
        let [employeescode] = await getEmployeeByCode(p);
        for (let key in employeescode) {
            if (key == "name") {
                name = employeescode[key]
            }
            if (key == "code_office") {
                codeOffice = employeescode[key]
                citys = await getCity(codeOffice)
                city = citys[0]
            }
        }
        return {
            code: val.client_code,
            name: val.client_name,
            salesRepresentative: name,
            city: city
        }
    })
    return await Promise.all(promises)
}

export const getClientBycode = async (code) => {
    let res = await fetch(`http://localhost:5501/clients?client_code=${code}`)
    let data = await res.json();
    let dataUpdate = [];
    let name;
    data.forEach(val => {
        name = val.client_name
    })
    return name
}

//1.4.5.11 Devuelve un listado de las diferentes gamas de producto que ha comprado cada cliente.
export const getAllProductByClient = async () => {
    let res = await fetch("http://localhost:5501/clients")
    let data = await res.json();
    let dataUpdate = [];
    let codes = [];
    let products = [];
    let codeProduct = [];
    let p
    let promises = data.map(async (val) => {
        codes = await getAllRequestsByClientCode(val.client_code)
        for (let code of codes) {
            codeProduct = await getCodeProductByCodeRequest(code)
            for (let c of codeProduct)
                p = await getProductByCodeProduct(c)
                products.push(p)
                
                //console.log(p)
        }
        return {
            client_name: val.client_name,
            gama_productos: p
        }
    })
    let result = await Promise.all(promises);
    return result.filter(item => item !== undefined);
  }
//1. Devuelve un listado que muestre solamente los clientes que no han realizado ningún pago.
export const getAllClientWithoutPayment = async () => {
    let res = await fetch("http://localhost:5501/clients")
    let data = await res.json();
    let dataUpdate = [];
    let name = ""
    let promises = data.map(async (val) => {
        let p = val.code_employee_sales_manager
        let validacion = await getClientsWithPayment(val.client_code)
        if (validacion == false) {
            return {
                code: val.client_code,
                name: val.client_name,
                pago:"No a realizado ningun pago"
            }
        }
    })
    let result = await Promise.all(promises);
    return result.filter(item => item !== undefined);
}

//2. Devuelve un listado que muestre solamente los clientes que no han realizado ningún pedido.
export const getAllClientWithoutRequest = async () => {
    let res = await fetch("http://localhost:5501/clients")
    let data = await res.json();
    let dataUpdate = [];
    let name = ""
    let promises = data.map(async (val) => {
        let validacion = await getAllClientWithRequest(val.client_code)
        if (validacion == "hola") {
            return {
                code: val.client_code,
                name: val.client_name,
                pedido:"No ha realizado ningun pedido"
            }
        }
    })
    let result = await Promise.all(promises);
    return result.filter(item => item !== undefined);
}

//3. Devuelve un listado que muestre los clientes que no han realizado ningún pago y los que no han realizado ningún pedido.
export const getAllClientWithoutPaymentAndRequest = async () => {
    let res = await fetch("http://localhost:5501/clients")
    let data = await res.json();
    let dataUpdate = [];
    let name = ""
    let promises = data.map(async (val) => {
        let validacion = await getClientsWithPayment(val.client_code)
        if (validacion == false) {
            let validacion2 = await getAllClientWithRequest(val.client_code)
            if (validacion2 == false) {
                return {
                    code: val.client_code,
                    name: val.client_name,
                    pago_y_pedido: "No ha realixado ningun pago ni pedido"
                }
            }
        }
    })
    let result = await Promise.all(promises);
    return result.filter(item => item !== undefined);
}

export const getAllClientsByCodeEmployeeSalesManger = async (code) => {
    let res = await fetch(`http://localhost:5501/clients?code_employee_sales_manager=${code}`)
    let data = await res.json();
    return data;
}

//11. Devuelve un listado con los clientes que han realizado algún pedido pero no han realizado ningún pago.
export const getAllCostumersWithGamas = async()=>{
    let res = await fetch("http://localhost:5501/clients")
    let clients = await res.json();
    // Obtenemos un array de todos los nombres de cliente
    let clientNames = clients.map(client => client.client_name);

    // Filtramos los clientes para mantener solo aquellos cuyos nombres son únicos
    let uniqueClients = clients.filter((client, index) => {
        // Comparamos el índice actual con el índice de la primera ocurrencia del nombre del cliente
        return clientNames.indexOf(client.client_name) === index;
    });

    let clientCodes = uniqueClients.map(client => client.client_code);
    let groups = {};

    uniqueClients.forEach((client,i) =>{
        let code_client = client.client_code;
        if(!groups[code_client]){
            groups[code_client] = []
        }
    })



    for (let i = uniqueClients.length - 1; i >= 0; i--) {
        var {
            id:id_client,
            limit_credit,
            postal_code:postal_code_client,
            country:country_client,
            region:region_client,
            address2:address2_client,
            address1:address1_client,
            fax,
            phone,
            city,
            code_employee_sales_manager,
            ...clientUpdate} = uniqueClients[i]
            uniqueClients[i] = clientUpdate
        let code_client = await getAllRequest(uniqueClients[i].client_code);
        if (code_client.code_client !== undefined) {
            uniqueClients[i] = {
                code_client: code_client.code_client,
                client_name: uniqueClients[i].contact_name,
                code_requests: code_client.codes_requests
            }
        } else {
            uniqueClients.splice(i, 1);
        }
    }
    var AllCodeRequestsLength = []
    for(let i = 0; i<uniqueClients.length; i++){
        AllCodeRequestsLength.push(uniqueClients[i].code_requests)
    }
    var nuevo = new Set()
    for(let i = 0; i<AllCodeRequestsLength.length; i++){
        for(let j = 0; j<AllCodeRequestsLength[i].length; j++){
            var requestsDetails = await getAllRequestDetails(AllCodeRequestsLength[i][j])
            nuevo.add(requestsDetails.product_code)
            uniqueClients[i]["single_code_request"] = requestsDetails.code_request

            continue
        }
        uniqueClients[i]["products"] = [...nuevo]
        nuevo = new Set()    
    }
    var uniqueInitials = new Set();
    for(let i = 0; i<uniqueClients.length; i++){
        // Recorrer el array de productos y agregar las iniciales al conjunto
        uniqueClients[i].products.forEach(subArray => {
            if(subArray === undefined){
                return
            }
            for(let i of subArray){
                uniqueInitials.add(i);
            }
        
        });
    
        uniqueClients[i].products = [...uniqueInitials];
    }

    return uniqueClients;
}