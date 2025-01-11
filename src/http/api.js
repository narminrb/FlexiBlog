import axios from "axios";
const axiosInstance = axios.create({
    baseURL:"http://localhost:3001/",
    timeout:1000
})

export const getCards = async(url,cb)=>{
    return await axiosInstance.get(url).then((res)=>{
        cb(res.data)
    });
}