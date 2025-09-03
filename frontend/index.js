import { refreshProfileSidebarData } from './src/js/page-content/profile-sidebar'
import { bindEditProfile } from './src/js/page-content/edit-profile'

async function initialize() {
    await refreshProfileSidebarData();

    await bindEditProfile();
}

// Call the async function to execute the code
initialize()