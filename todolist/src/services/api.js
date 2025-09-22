import axios from "axios"

const apiUrl= "https://localhost:7038";

const authUrl = "https://localhost:7037/api/UserAuth";
//get
export const GetTodos = async () => {
    try{
        const response = await axios.get(`${apiUrl}/api/Todo`)
        return response.data;
    }
    catch (error){
        console.error("Error fetching todos data", error);
        throw error;
    }
};
//post
export const CreateTodo = async(x)=>{
    try {
        const response = await axios.post(`${apiUrl}/api/Todo`,x,{
            headers:{"Content-Type":"application/json"},
        });
        return response.data;
        
    } catch (error) {
        console.error("error creating todo:",error);
        throw error;
    }

};
//update/put
export const UpdateTodo= async (id,x) => {
    try {
        const response = await axios.put(`${apiUrl}/api/Todo/${id}`,x,{headers:{"Content-Type":"application/json"}});
        return response.data;
        
    } catch (error) {
        console.error("error updating  todo:",error);
        throw error;
    }
    
};
// delete
export const DeleteTodo = async (id)=>{
    try {
         await axios.delete(`${apiUrl}/api/Todo/${id}`)
    } catch (error) {
        console.error("error deleting the todos sad!");
        throw error;
        
    }
};

//register 
export const registeruser= async(userdata)=>{
    const response = await axios.post (`${authUrl}/register `,userdata);
    return response.data;
};

//login 
 export const loginuser = async (credentials)=>{
    const response = await axios.post(`${authUrl}/login`,{
         Email: credentials.email,
        Password: credentials.password
    });
    return response.data;
};
//logout 

export const logoutuser = async () =>{
    const response = await axios.post (`${authUrl}/logout`);
    return response.data;
};
