function janeFollowers(arr) {
  let followers = {};

  for (let command of arr) {
    if (command === "Log out") {
      break;
    }

    let [action, username, operand] = command.split(": ");

    switch (action) {
      case "New follower":
        if (!followers.hasOwnProperty(username)) {
          followers[username] = { likes: 0, comments: 0 };
        }
        break;

      case "Like":
        if (!followers.hasOwnProperty(username)) {
          followers[username] = { likes: Number(operand), comments: 0 };
        } else {
          followers[username].likes += Number(operand);
        }
        break;

      case "Comment":
        if (!followers.hasOwnProperty(username)) {
          followers[username] = { likes: 0, comments: 1 };
        } else {
          followers[username].comments += 1;
        }
        break;

      case "Blocked":
        if (followers.hasOwnProperty(username)) {
          delete followers[username];
        } else {
          console.log(`${username} doesn't exist.`);
        }
        break;
    }
  }
  let sortedFollowers = Object.entries(followers).sort(
    (a, b) => b[1].likes + b[1].comments - (a[1].likes + a[1].comments)
  );

  console.log(`${sortedFollowers.length} followers`);

  for (let [follower, sumCommentsAndLikes] of sortedFollowers) {
    console.log(
      `${follower}: ${sumCommentsAndLikes.likes + sumCommentsAndLikes.comments}`
    );
  }
}
janeFollowers([
  "New follower: George",
  "Like: George: 5",
  "New follower: George",
  "Log out",
]);
