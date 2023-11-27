import http from "node:http";

const users = [];
users.push({
  id: 1,
  nome: "Jesimiel Nóbrega",
  email: "jesimielnobrega25@gmail.com",
});
const server = http.createServer((req, res) => {
  

  const { method, url } = req;
  
  if (method == "GET" && url == "/users") {
    return res
      .setHeader("Content-type", "application/json")
      .end(JSON.stringify(users));
  }

  if (method == "POST" && url == "/users") {

    return res.writeHead(201).end("Criação de usuários");
  }
  
  return res.writeHead(404).end();
});
const port = 3333;
server.listen(port);
