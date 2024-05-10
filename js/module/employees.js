import {
    getAllClientsByCodeEmployeeSalesManger
} from "./clients.js";

// 3. Devuelve un listado con el nombre, apellidos y email de los empleados 
// cuyo jefe tiene un código de jefe igual a 7.
export const getAllFullNameAndEmailsAndBoss = async() =>{
    let res = await fetch("http://localhost:5502/employees?code_boss=7")
    let data = await res.json();
    let dataUpdate = data.map(val=>{
        return {
            name: val.name,
            code: val.employee_code,
            fullLastname: `${val.lastname1} ${val.lastname2}`,
            email: val.email.match(/(?<=\[)[^\[\]]+@[^@\[\]]+(?=\])/)[0],
            code_boss:val.code_boss,
        }
    })
    return dataUpdate;
}
// 4. Devuelve el nombre del puesto, nombre, apellidos y
//  email del jefe de la empresa.
export const getBossFullNameAndEmail = async() =>{
    let res=await fetch("http://localhost:5502/employees")
    let data =await res.json();
    let dataUpdate = []
    data.forEach(val=>{
        if(val.code_boss == null){
            dataUpdate.push({
                position: val.position,
                name: val.name,
                fullLastname: `${val.lastname1} ${val.lastname2}`,
                email: val.email.match(/(?<=\[)[^\[\]]+@[^@\[\]]+(?=\])/)[0]
    
            })
        }
    })
    return dataUpdate
}

//5. Devuelve un listado con el nombre, apellidos y puesto de aquellos empleados que no sean representantes de ventas.//
export const getAllEmployeesNotSalesRepresentatives = async() =>{
    let res=await fetch("http://localhost:5502/employees")
    let data =await res.json();
    let dataUpdate = []
    data.forEach(val=>{
        if(val.position != "Representante Ventas"){
            dataUpdate.push({
                name: val.name,
                fullLastname: `${val.lastname1} ${val.lastname2}`,
                position: val.position,
    
            })
        }
    })
    return dataUpdate
}

export const getEmployeeByCode = async (code = '') => {
    let res = await fetch(`http://localhost:5502/employees?employee_code=${code}`)
    let data = await res.json()
    return data
}

//1.4.5.8 Devuelve un listado con el nombre de los empleados junto con el nombre de sus jefes.
export const getAllEmployeesWithBoss = async() =>{
    let res=await fetch("http://localhost:5502/employees")
    let data =await res.json();
    let dataUpdate = []
    let codeboss="";
    let boss="";
    let promises = data.map(async (val) => {
        if(val.code_boss != null){
            codeboss= await getEmployeeByCode(val.code_boss)
            boss=codeboss[0]['name'];
            return({
                name: val.name,
                name_boss: boss,
                code:val.employee_code,
    
            })
        }
    })
    let result = await Promise.all(promises);
    return result.filter(item => item !== undefined);
}

//1.4.5.9 Devuelve un listado que muestre el nombre de cada empleados, el nombre de su jefe y el nombre del jefe de sus jefe.
export const getAllEmployeesWithBossAndHisBoss = async() =>{
    let res=await fetch("http://localhost:5502/employees")
    let data =await res.json();
    let dataUpdate = []
    let codeboss="";
    let codeboss_boss="";
    let boss="";
    let boss_boss="";
    let promises = data.map(async (val) => {
        if(val.code_boss != null){
            codeboss= await getEmployeeByCode(val.code_boss)
            boss=codeboss[0]['name'];
            if (codeboss[0]['code_boss']!=null) {
                codeboss_boss= await getEmployeeByCode(codeboss[0]['code_boss'])
                boss_boss=codeboss_boss[0]['name'];
            } else {
                boss_boss="No tiene jefe"
            }
            
            return({
                name: val.name,
                name_boss: boss,
                boss_boss:boss_boss
    
            })
        }
    })
    let result = await Promise.all(promises);
    return result.filter(item => item !== undefined);
}

//4. Devuelve un listado que muestre solamente los empleados que no tienen una oficina asociada.
export const getAllEmployeesDontHaveOffice = async()=>{
    let res=await fetch("http://localhost:5502/employees")
    let data =await res.json();
    let dataUpdate = [];
    data.forEach(val=>{
        if(val.code_office === null) {
            dataUpdate.push({
                name_employee: val.name
            })
        }
    })
    return dataUpdate;
}


//5. Devuelve un listado que muestre solamente los empleados que no tienen un cliente asociado.
export const getAllEmployeesWithoutClient = async()=>{
    let res=await fetch("http://localhost:5502/employees")
    let data =await res.json();
    let dataUpdate = [];
    for(let i=0; i<data.length; i++){
        let [ employees ] = await getAllClientsByCodeEmployeeSalesManger(data[i].employee_code);
        if(employees == undefined){
            dataUpdate.push(data[i]);
        }
    }
    return dataUpdate;
}

//6. Devuelve un listado que muestre solamente los empleados que no tienen un cliente asociado junto con los datos de la oficina donde trabajan.



//7. Devuelve un listado que muestre los empleados que no tienen una oficina asociada y los que no tienen un cliente asociado.
export const getAllEmployeesWithoutClientAndDontHaveOffice = async()=>{
    let res=await fetch("http://localhost:5502/employees")
    let data =await res.json();
    let dataUpdate = [];
    for(let i=0; i<data.length; i++){
        let [ employees ] = await getAllClientsByCodeEmployeeSalesManger(data[i].employee_code);
        if(employees == undefined){
            data.forEach(val=>{
                if(val.code_office === null){
                    dataUpdate.push(data[i]);
                }
            })
        }
    }
    return dataUpdate;
}