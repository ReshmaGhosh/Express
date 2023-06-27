// creating server
import Express, { Request, Response } from "express";

const app = Express();

app.use(Express.json());

app.get("/", (request: Request, response: Response) => {
 
  response.json({ message: "hello" });
});

app.post("/users", (request: Request, response: Response) => {
  // get info
  console.log(request.body, "request");
  response.json({ message: "add user" });
});

app.put("/products", (request: Request, response: Response) => {
  response.json({ message: "create product" });
});

app.delete("/carts", (request: Request, response: Response) => {
  response.json({ message: "delete cart" });
});

const port = 8001;
app.listen(port, () => {
  console.log("server is running");
});
