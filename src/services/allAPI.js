import commonAPI from "./commonAPI"
import SERVERURL from "./serverURL"
///Create
export const adddetails = async(rentcardetails)=>{
    return await commonAPI("POST",`${SERVERURL}/rentaddedDetail`,rentcardetails)
}

///Display or Read
export const showAddDetails = async ()=>{
    return await commonAPI("GET",`${SERVERURL}/rentaddedDetail`,"")
}


//show view more
export const showViewMore = async (id)=>{
    return await commonAPI("GET",`${SERVERURL}/rentaddedDetail/${id}`,{})
}


//Update

export const updation = async (id, updatecardetail) => {
    return await commonAPI("PUT", `${SERVERURL}/rentaddedDetail/${id}`, updatecardetail);
}


//Delete
export const deleteDetails = async(id)=>{
    return await commonAPI("DELETE",`${SERVERURL}/rentaddedDetail/${id}`,{})
}