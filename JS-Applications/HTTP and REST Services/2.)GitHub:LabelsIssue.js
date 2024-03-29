//Task: Get the first issue from repository with name "test-nakov-repo". Send a GET request to https://api.github.com/repos/testnakov/test-nakov-repo/issues/:id, where :id is the issue.

//Solution:

//Request: https://api.github.com/repos/testnakov/test-nakov-repo/issues/1

//Response: 

// {
//     "url": "https://api.github.com/repos/testnakov/test-nakov-repo/issues/1",
//     "repository_url": "https://api.github.com/repos/testnakov/test-nakov-repo",
//     "labels_url": "https://api.github.com/repos/testnakov/test-nakov-repo/issues/1/labels{/name}",
//     "comments_url": "https://api.github.com/repos/testnakov/test-nakov-repo/issues/1/comments",
//     "events_url": "https://api.github.com/repos/testnakov/test-nakov-repo/issues/1/events",
//     "html_url": "https://github.com/testnakov/test-nakov-repo/issues/1",
//     "id": 188822935,
//     "node_id": "MDU6SXNzdWUxODg4MjI5MzU=",
//     "number": 1,
//     "title": "Test creation",
//     "user": {
//         "login": "testnakov",
//         "id": 23406465,
//         "node_id": "MDQ6VXNlcjIzNDA2NDY1",
//         "avatar_url": "https://avatars.githubusercontent.com/u/23406465?v=4",
//         "gravatar_id": "",
//         "url": "https://api.github.com/users/testnakov",
//         "html_url": "https://github.com/testnakov",
//         "followers_url": "https://api.github.com/users/testnakov/followers",
//         "following_url": "https://api.github.com/users/testnakov/following{/other_user}",
//         "gists_url": "https://api.github.com/users/testnakov/gists{/gist_id}",
//         "starred_url": "https://api.github.com/users/testnakov/starred{/owner}{/repo}",
//         "subscriptions_url": "https://api.github.com/users/testnakov/subscriptions",
//         "organizations_url": "https://api.github.com/users/testnakov/orgs",
//         "repos_url": "https://api.github.com/users/testnakov/repos",
//         "events_url": "https://api.github.com/users/testnakov/events{/privacy}",
//         "received_events_url": "https://api.github.com/users/testnakov/received_events",
//         "type": "User",
//         "site_admin": false
//     },
//     "labels": [
//         {
//             "id": 479839735,
//             "node_id": "MDU6TGFiZWw0Nzk4Mzk3MzU=",
//             "url": "https://api.github.com/repos/testnakov/test-nakov-repo/labels/bug",
//             "name": "bug",
//             "color": "ee0701",
//             "default": true,
//             "description": null
//         },
//         {
//             "id": 2669617565,
//             "node_id": "MDU6TGFiZWwyNjY5NjE3NTY1",
//             "url": "https://api.github.com/repos/testnakov/test-nakov-repo/labels/type:UI",
//             "name": "type:UI",
//             "color": "ededed",
//             "default": false,
//             "description": null
//         },
//         {
//             "id": 2670741378,
//             "node_id": "MDU6TGFiZWwyNjcwNzQxMzc4",
//             "url": "https://api.github.com/repos/testnakov/test-nakov-repo/labels/importance:medium",
//             "name": "importance:medium",
//             "color": "ededed",
//             "default": false,
//             "description": null
//         }
//     ],
//     "state": "open",
//     "locked": false,
//     "assignee": null,
//     "assignees": [],
//     "milestone": null,
//     "comments": 12,
//     "created_at": "2016-11-11T18:39:07Z",
//     "updated_at": "2023-12-12T22:16:50Z",
//     "closed_at": null,
//     "author_association": "OWNER",
//     "active_lock_reason": null,
//     "body": "Страшно е",
//     "closed_by": null,
//     "reactions": {
//         "url": "https://api.github.com/repos/testnakov/test-nakov-repo/issues/1/reactions",
//         "total_count": 1,
//         "+1": 1,
//         "-1": 0,
//         "laugh": 0,
//         "hooray": 0,
//         "confused": 0,
//         "heart": 0,
//         "rocket": 0,
//         "eyes": 0
//     },
//     "timeline_url": "https://api.github.com/repos/testnakov/test-nakov-repo/issues/1/timeline",
//     "performed_via_github_app": null,
//     "state_reason": null
// }