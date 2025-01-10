import commonAPI from "./commonAPI"
import SERVERURL from "./serverURL"
export const adddetails = async(rentcardetails)=>{
    return await commonAPI("POST",`${SERVERURL}/rentaddedDetail`,rentcardetails)
}

export const showAddDetails = async ()=>{
    return await commonAPI("GET",`${SERVERURL}/rentaddedDetail`,"")
}