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