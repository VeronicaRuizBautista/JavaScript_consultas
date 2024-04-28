export const getCodeProductByCodeRequest= async(code) =>{
    let res=await fetch(`http://localhost:5507/request_details?code_request=${code}`)
    
    let data =await res.json();
    let dataUpdate=[];
    data.forEach(val=> {
        dataUpdate.push(val.product_code)
    });
    return dataUpdate;
}