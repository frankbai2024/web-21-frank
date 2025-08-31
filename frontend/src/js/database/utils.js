import path from "path-browserify";
import axios from "axios";

export const postData = async (path, data) => {
    try {
        await axios.post(path, data, {
            headers: { "Content-Type": "application/json" },
        });
    } catch (error) {
        console.error("Error posting data:", error);
    }
}

export const deleteData = async (path) => {
    try {
        await axios.delete(path);
    } catch (error) {
        console.error("Error deleting data:", error);
    }
}

export const putData = async (path, data) => { 
    try {
        await axios.put(path, data, {
            headers: { "Content-Type": "application/json" },
        });
    } catch (error) {
        console.error("Error updating data:", error);
    }
}

export const patchData = async (path, data) => {
    try {
        await axios.patch(path, data, {
            headers: { "Content-Type": "application/json" },
        });
    } catch (error) {
        console.error("Error patching data:", error);
    }
}

export const getData = async (path) => {
    try {
        const response = await axios.get(path);
        return response.data;
    } catch (error) {
        console.error("Error fetching data:", error);
    }
}

export const getResourcePath = (pathInfo) => {
    const dbPath = import.meta.env.VITE_LOCAL_DB_PATH;
    const protocol = 'http://';
    // http://localhost:80/api/{resource}

    // pathInfo = [userPosts, userPostsComments, ]
    // http://localhost:80/api/userPosts/userPostsComments
    return `${protocol}${dbPath}/api/${path.join(...pathInfo, '/')}`;
}