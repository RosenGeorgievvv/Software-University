function janeFollowers(arr) {
  let followers = {};

  for (let command of arr) {
    if (command === "Log out") {
      break;
    }

    let [action, username, value] = command.split(": ");

    switch (action) {
      case "New follower":
        if (!followers.hasOwnProperty(username)) {
          followers[username] = { likes: 0, comments: 0 };
        }
        break;

      case "Like":
        if (!followers.hasOwnProperty(username)) {
          followers[username] = { likes: Number(value), comments: 0 };
        } else {
          followers[username].likes += Number(value);
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
  let sortedFollowers = Object.entries(followers).sort((a, b) => {
    let sumA = a[1].likes + a[1].comments;
    let sumB = b[1].likes + b[1].comments;

    if (sumA !== sumB) {
      return sumB + sumA;
    } else {
      return a[0].localeCompare(b[0]);
    }
  });

  console.log(`${sortedFollowers.length} followers`);

  for (let [follower, sumCommentsAndLikes] of sortedFollowers) {
    console.log(
      `${follower}: ${sumCommentsAndLikes.likes + sumCommentsAndLikes.comments}`
    );
  }
}