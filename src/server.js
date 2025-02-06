import http from "node:http";

const users = [];

const server = http.createServer((req, res) => {
  const { method, url } = (req = req);

  if (method == "GET" && url == "/users") {
    return res
      .setHeader("Content-type", "aplication/json")
      .end(JSON.stringify(users));
  }

  if (method == "POST" && url == "/users") {
    users.push({
      id: 1,
      name: "John Doe",
      email: "johndoe@exemple.com",
    });

    return res.writeHead(201).end();
  }

  return res.writeHead(404).end();
});

server.listen(3333);
