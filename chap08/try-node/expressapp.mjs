import express from "express"
// const express = require("express")
const app = express();
const router = express.Router();
app.use(router);

app.use((req, res, next) => {

      console.log("First middleware.");
    
      next();
    
    });
    
    app.use((req, res, next) => {
    
      res.send("Hello world. I am custom middleware.");
    
    });
    
    app.listen({ port: 8000 }, () => {
    
      console.log("Express Node server has loaded!");
    
    });

    router.get("/a", (req, res, next) => {

          res.send("Hello this is route a");
        
        });
        
        router.post("/c", (req, res, next) => {
        
          res.send("Hello this is route c");
        
        });
        router.post("/api/v1/groups", (req, res, next) => {

              const groups = [
            
                {
            
                  id: 1,
            
                  groupname: "Admins",
            
                },
            
                {
            
                  id: 2,
            
                  groupname: "Users",
            
                },
            
                {
            
                  id: 3,
            
                  groupname: "Employees",
            
                },
            
              ];
            
              const group = groups.find((grp) => grp.id == req.body.groupid);
            
              res.send(`Group ${group.groupname}`);
            
            });
