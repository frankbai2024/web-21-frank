### Built an Instagramly app using HTML5, CSS3, JavaScript, node.Js and express for backend, vite for frontend
1. Add APIs for user profiles feature. Allow users to fetch, update, post, delete user profiles
2. Initialize three main frames in HTML and start adding the HTML and CSS for the profile sidebar.
3. Finish Edit Profile modal
4. Connect the backend to the frontend
5. Finish main post contents part
6.  Finish profile sidebar
7.  Finish advertisement sidebar
8.  Deployed on AWS
<img width="1024" height="600" alt="image" src="https://github.com/user-attachments/assets/28ed9c3e-6c9f-431f-a855-a0b821aedd9c" />
<img width="717" height="754" alt="image" src="https://github.com/user-attachments/assets/a5dc0cb7-d8ed-46af-b973-36eb9f14a772" />
<img width="1215" height="687" alt="bfc32819fb6923c050fac59f8fa22a8" src="https://github.com/user-attachments/assets/9bbc8bd1-c10e-4736-a1db-d41a400cdd14" />

local:
  frontend:
    .env:
      VITE_LOCAL_DB_PATH = localhost:80
    vite.config.js:
      port: 8080,
  backend:
    index.js:
      const PORT = 80;
aws:
  frontend:
    .env:
      VITE_LOCAL_DB_PATH = 13.214.192.181:8001
    vite.config.js:
      host: "0.0.0.0",
      port: 8080,
  backend:
    index.js:
      const PORT = 8001;
