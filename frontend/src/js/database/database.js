import {
    getData,
    postData,
    putData,
    deleteData,
    patchData,
    getResourcePath,
} from "./utils";


export const getProfiles = async () => {
    // http://localhost:80/api/userProfiles
    const path = getResourcePath(["userProfiles"]);
    const userProfiles = await getData(path);
    return userProfiles.data;
}