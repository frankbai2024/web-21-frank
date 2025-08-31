import { getProfiles } from './src/js/database/database.js'


async function initialize() {
    const profiles = await getProfiles();
    console.log(profiles);
}


// Call the async function to execute the code
initialize()