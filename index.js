require('dotenv').config()
const express = require('express')
const app = express()
const port = 3000

const gitubdata = {
    "login": "Tayyab-Yaqoob",
    "id": 142832417,
    "node_id": "U_kgDOCINzIQ",
    "avatar_url": "https://avatars.githubusercontent.com/u/142832417?v=4",
    "gravatar_id": "",
    "url": "https://api.github.com/users/Tayyab-Yaqoob",
    "html_url": "https://github.com/Tayyab-Yaqoob",
    "followers_url": "https://api.github.com/users/Tayyab-Yaqoob/followers",
    "following_url": "https://api.github.com/users/Tayyab-Yaqoob/following{/other_user}",
    "gists_url": "https://api.github.com/users/Tayyab-Yaqoob/gists{/gist_id}",
    "starred_url": "https://api.github.com/users/Tayyab-Yaqoob/starred{/owner}{/repo}",
    "subscriptions_url": "https://api.github.com/users/Tayyab-Yaqoob/subscriptions",
    "organizations_url": "https://api.github.com/users/Tayyab-Yaqoob/orgs",
    "repos_url": "https://api.github.com/users/Tayyab-Yaqoob/repos",
    "events_url": "https://api.github.com/users/Tayyab-Yaqoob/events{/privacy}",
    "received_events_url": "https://api.github.com/users/Tayyab-Yaqoob/received_events",
    "type": "User",
    "site_admin": false,
    "name": "Tayyab Yaqoob",
    "company": null,
    "blog": "",
    "location": null,
    "email": null,
    "hireable": null,
    "bio": null,
    "twitter_username": null,
    "public_repos": 4,
    "public_gists": 0,
    "followers": 0,
    "following": 0,
    "created_at": "2023-08-21T17:56:28Z",
    "updated_at": "2024-06-26T16:49:05Z"
  }

app.get('/', (req, res) => {
  res.send('Hello1 World!')
})

app.get('/tayyab',(req,res)=>{
    res.send("<h1>Me Tayyab Hun</h1>")
})

app.get('/github',(req,res) => {
    res.json(gitubdata)
})

app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${process.env.PORT}`)
})