import axios from "axios";

const userApi = axios.create({
  baseURL: "http://localhost:8000/",
  withCredentials: true,
});

export const addServiceApi = async (data: FormData) => {
  try {
    const config = {
      headers: {
        "Content-Type": "multipart/form-data",
      },
      withCredentials: true,
    };

    return await userApi.post("/addservices", data, config);
  } catch (err) {
    console.error("Error occurred during API call:", err);
  }
};

export const fetchServiceApi = async () => {
  try {
    return await userApi.get("/services");
  } catch (err) {
    console.error("Error occurred during API call:", err);
  }
};


export const fetchSingleServiceApi = async (serviceId:number) =>{
  try {
    return await userApi.get(`/editservice/${serviceId}`)
  } catch (err) {
    console.log(err)
  }
}

export const editServiceApi = async (serviceId: number, data: FormData) => {
  try {
    const config = {
      headers: {
        "Content-Type": "multipart/form-data",
      },
      withCredentials: true,
    };

    // Append serviceId to form data
    data.append("serviceId", serviceId.toString());

    return await userApi.put("/editservices", data, config);
  } catch (err) {
    console.error("Error occurred during API call:", err);
  }
};

export const deleteService = async (serviceId:number) =>{
  try{
    return await userApi.delete(`/deleteservice/${serviceId}`)
  }catch(err){
    console.log(err)
  }
}

