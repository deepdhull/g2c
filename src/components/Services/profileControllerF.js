import { privateReq, publicAxios } from "./axios-config";

const doSearchMvc=(obj)=>{
  // alert("in do srch mvc");
  //  return  privateReq.post("/GProfile/show-G",obj);
    //  return privateReq.post("/GProfile/search-product-validatetoken",obj);
    return privateReq.post("/GProfile/search-product-validatetokenNext",obj);
}

const doSearchMvcC=(obj)=>{
  return privateReq.post("/CProfile/search-product-validatetokenNext",obj);
}

const doSaveMvc=(obj)=>{
  return privateReq.post("/GProfile/add-G",obj);
}

const doUpdateMvc=(obj)=>{
  return privateReq.post("/GProfile/update-G",obj);
}

export{doSearchMvc, doSearchMvcC, doSaveMvc, doUpdateMvc};