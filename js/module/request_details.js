export const getCodeProductByCodeRequest= async(code) =>{
    let res=await fetch(`http://localhost:5507/request_details?code_request=${code}`)
    
    let data =await res.json();
    let dataUpdate=[];
    data.forEach(val=> {
        dataUpdate.push(val.product_code)
    });
    return dataUpdate;
}

export const getAllRequestDetailsByCode = async(code)=>{
    let res = await fetch(`http://localhost:5507/request_details?product_code=${code}`);
    let data = await res.json();
    let dataUpdate=[];
    let code_request
    data.forEach(val =>{
        code_request: val.code_request
    })
    return code_request
}

export const getAllRequestDetails = async(code) =>{
    let res = await fetch(`http://localhost:5507/request_details?code_request=${code}`)
    let data = await res.json()
    
    let nuevo = {
        code_request: undefined,
        product_code: undefined
    };
    let conjunto = new Set()
    if (data !== undefined && data.length > 0) {
        nuevo.code_request = data[0].code_request
        for (let i of data) {
            let paso = conjunto.add(i.product_code.match(/^.{2}/)[0]);
            nuevo.product_code = [...paso]
        }

    }
    return nuevo;
}