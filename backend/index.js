const express = require('express');
const cors = require('cors');
const router = require('./routes/index');
const { handleErrors } = require('./middleware/errorMiddleware');
const app = express();

app.use(cors());
app.use(express.json());

app.use('/api',router)
//use error middleware at the end
app.use(handleErrors)

const PORT = 80;
app.listen(PORT, () => {
  console.log(`server is running on port http://localhost:${PORT}`);
});

