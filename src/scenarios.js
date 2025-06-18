export const scenarios = [
  {
    id: "intro",
    title: "The Browser Awakens",
    description: "You are a browser making your first HTTP request. What do you want to do?",
    choices: [
      { text: "Request index.html", next: "200_ok" },
      { text: "Request a page that doesn't exist", next: "404_not_found" }
    ]
  },
  {
    id: "200_ok",
    title: "Everything is Fine",
    description: "You received a 200 OK. Everything went smoothly. What's next?",
    choices: [
      { text: "Post data to a server", next: "201_created" },
      { text: "Try to access a forbidden file", next: "403_forbidden" }
    ]
  },
  {
    id: "404_not_found",
    title: "Lost in Cyberspace",
    description: "404 Not Found. That page doesn’t exist. Try again?",
    ending: {
      type: "bad",
      message: "You got lost and the server couldn’t help. Try a different path next time."
    }
  },
  {
    id: "201_created",
    title: "Data Created",
    description: "201 Created. You successfully posted data!",
    ending: {
      type: "good",
      message: "You completed a successful request journey!"
    }
  },
  {
    id: "403_forbidden",
    title: "Access Denied",
    description: "403 Forbidden. You do not have permission.",
    ending: {
      type: "neutral",
      message: "You learned the hard way that permissions matter."
    }
  }
];