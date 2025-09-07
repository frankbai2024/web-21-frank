import { updateProfiles } from "../database/database.js";
import { convertToBase64 } from "../utils/base64-image.js";

export const bindEditProfile = async () => {
    // 获取 HTML 元素
    const modal = document.getElementById("edit-profile-modal");
    const btn = document.getElementById("edit-profile-btn");
    const close = document.getElementById("edit-profile-close");
    const cancel = document.getElementById("edit-profile-cancel");
    const save = document.getElementById("edit-profile-save");

    btn.addEventListener("click", () => {
        // 获取侧边栏中的信息
        const userAvatar = document.getElementById("profile-avatar").src;
        const profileName = document.getElementById("profile-name").textContent;
        const profileEmail = document.getElementById("profile-email").textContent;
        const profileDescription = document.getElementById(
            "profile-description"
        ).textContent;
        const constellation = document.getElementById(
            "profile-constellation"
        ).textContent;
        const mbti = document.getElementById("profile-mbti").textContent;
        const hobby = document.getElementById("profile-hobby").textContent;
        const linked = document.getElementById("profile-linked").textContent;
        const x = document.getElementById("profile-x").textContent;
        const weChat = document.getElementById("profile-weChat").textContent;

        // 将侧边栏中的信息填入弹窗表单
        document.getElementById("upload-avatar").src = userAvatar;
        document.getElementById("name").value = profileName;
        document.getElementById("email").value = profileEmail;
        document.getElementById("constellation").value = constellation;
        document.getElementById("MBTI").value = mbti;
        document.getElementById("hobby").value = hobby;
        document.getElementById("linked").value = linked;
        document.getElementById("x").value = x;
        document.getElementById("weChat").value = weChat;
        document.getElementById("profile-introduction").value = profileDescription;

        // 显示弹窗
        modal.style.display = "flex";
    });

    close.addEventListener("click", () => {
        // 点击关闭按钮时隐藏弹窗
        modal.style.display = "none";
    });

    cancel.addEventListener("click", () => {
        // 点击取消按钮时隐藏弹窗
        modal.style.display = "none";
    });

    save.addEventListener("click", async () => {
        // 获取表单中的信息
        const avatarInput = document.getElementById("file-input");
        const profileName = document.getElementById("name").value;
        const profileEmail = document.getElementById("email").value;
        const profileDescription = document.getElementById(
            "profile-introduction"
        ).value;
        const constellation = document.getElementById("constellation").value;
        const mbti = document.getElementById("MBTI").value;
        const hobby = document.getElementById("hobby").value;
        const linked = document.getElementById("linked").value;
        const x = document.getElementById("x").value;
        const weChat = document.getElementById("weChat").value;

        let updatedProfile = {
            name: profileName,
            email: profileEmail,
            description: profileDescription,
            hobby: hobby,
            constellation: constellation,
            mbti: mbti,
            linked: linked,
            x: x,
            wechat: weChat,
        };

        // 上传头像 
        const file = avatarInput.files[0];
        if (file) {
            const avatarBase64String = await convertToBase64(file);
            // updatedProfile.avatar = avatarBase64String;
            updatedProfile = { ...updatedProfile, avatar: avatarBase64String };
        }

        await updateProfiles(updatedProfile);

        // 点击保存按钮时隐藏弹窗
        modal.style.display = "none";

        setTimeout(() => {
            location.reload();
        }, 500); // 延迟 0.5 秒
    });
};
