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