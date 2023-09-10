const express = require('express');
const app = express();

//http://example.com/api?slack_name=example_name&track=backend
app.get('/api', (req, res) => {
    const name = req.query.slack_name;
    const track = req.query.track;
    const Day_Names = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    const response = {
        "slack_name": name,
        "current_day": Day_Names[new Date().getDay()],
        "utc_time": new Date().toISOString(),
        "track": track,
        "github_file_url": "https://github.com/username/repo/blob/main/file_name.ext",
        "github_repo_url": "https://github.com/username/repo",
        "status_code": 200
    }
    try {
        res.status(200).json(response);
    } catch (e) {
        console.log(e);
    }
})

app.listen(8000, () => {
    console.log('Server listening on port 8000!');
})