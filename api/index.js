import express from 'express';
import { user, videos } from './fakeData.js';


const app = express();
app.use(express.json());

app.get("/api/user/1", (req, res) => {
    req.json(user);
});

app.get("/api/videos/1", (req, res) => {
    req.json(videos);
});

app.listen(8800, () => {
    console.log("Backend Server is running!");
});