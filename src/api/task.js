import axiosInstance from "./axios";

export const getTasks = async () => {
    const response = await axiosInstance.get("/tasks");
    console.log(response.data);
    return response.data;
}

export const createTask = async (title) => {
    const response = await axiosInstance.post("/newTask", { title });
    return response.data;
}