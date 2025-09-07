import { getPosts } from "../database/database.js";

// 获取容器
const postsContainer = document.getElementById("posts-container");

export const refreshPostData = async () => {
    const posts = await getPosts();
    // console.log("posts", posts);
    if (posts.length > 0) {
        // 遍历数据并生成HTML
        posts.forEach(post => {
            const postHTML = `
                <div class="post">
                    <div class="post-header">
                        <!-- 用户头像 -->
                        <div class="post-profile">
                            <img src=${post.avatar} alt="Avatar" class="post-avatar">
                            <span class="post-user">${post.user}</span>
                        </div>
                        <div class="post-buttons">
                            <img class="post-edit-btn" src="public/image/icon/icon-edit.png" alt="edit post button"  data-post-id=${post.id}>
                            <img class="post-remove-btn" src="public/image/icon/icon-close.png" alt="remove post button" data-post-id=${post.id}>
                        </div>
                    </div>
                    <div class="post-content">
                        <img src="${post.image}" alt="Post Image" class="post-image">
                        <p>${post.content}</p>
                    </div>
                    <div class="post-footer">
                        <p class="post-timestamp">${post.timestamp}</p>
                    </div>
                </div>
            `;
            // 将生成的HTML添加到容器中
            postsContainer.innerHTML += postHTML;
        });
    }
}
export const bindContentCardButtons = async () => { 
  // 绑定编辑按钮
  // 绑定删除按钮

}