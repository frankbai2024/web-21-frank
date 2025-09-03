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
};

export const updateProfiles = async (profileData) => {
	const path = getResourcePath(["userProfiles", "1"]);
	const updatedProfile = await patchData(path, profileData);
	return updatedProfile;
};

export const getPosts = async () => {
	const path = getResourcePath(["userPosts"]);
	const userPosts = await getData(path);
	return userPosts.data;
};
