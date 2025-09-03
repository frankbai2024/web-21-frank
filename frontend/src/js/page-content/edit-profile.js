export const bindEditProfile = async () => {

    const modal = document.getElementById("edit-profile-modal");
    const btn = document.getElementById("edit-profile-btn");

    btn.addEventListener("click", () => {
        console.log("Edit Profile button clicked");
        // 显示弹窗
        modal.style.display = "flex";
    });
}