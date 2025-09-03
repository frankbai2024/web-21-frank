import { refreshProfileSidebarData } from './src/js/page-content/profile-sidebar'
import { bindEditProfile } from './src/js/page-content/edit-profile'
import { refreshPostData } from './src/js/page-content/post-content'

async function initialize() {
    await refreshProfileSidebarData();

    await bindEditProfile();
    await refreshPostData();
}

// Call the async function to execute the code
initialize()