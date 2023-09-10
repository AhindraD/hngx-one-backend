const express = require('express');
const app = express();

//http://example.com/api?slack_name=example_name&track=backend
//http://localhost:8000/api?slack_name=ahindra&track=backend
app.get('/api', (req, res) => {
    const name = req.query.slack_name;
    const track = req.query.track;
    const Day_Names = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

    const date = new Date();
    const day = Day_Names[date.getDay()];
    const utc = date.toISOString().replace(/[.]\d+/, '');
    const response = {
        "slack_name": name,
        "current_day": day,
        "utc_time": utc,
        "track": track,
        "github_file_url": "https://github.com/AhindraD/hngx-one-backend/blob/main/server.js",
        "github_repo_url": "https://github.com/AhindraD/hngx-one-backend",
        "status_code": 200
    }
    try {
        res.status(200).json(response);
    } catch (e) {
        res.status(500).json(e);
    }
})

app.listen(8000, () => {
    console.log('Server listening on port 8000!');
})