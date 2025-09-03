import {refreshProfileSidebarData} from './src/js/page-content/profile-sidebar'


async function initialize() {
    await refreshProfileSidebarData();
}

// Call the async function to execute the code
initialize()