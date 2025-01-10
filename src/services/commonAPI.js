import axios from "axios"
const commonAPI = async (httpMethod,url,reqBody)=>{
    const reqConfig = {
        method:httpMethod,
        url,
        data:reqBody
    }
    // axios returns promise so then and catch
    // api call is an async func so 'async' and 'await'
    return await axios(reqConfig).then(res=>{
        return res
    }).catch(err=>{
        return err
    })

}
export default commonAPI