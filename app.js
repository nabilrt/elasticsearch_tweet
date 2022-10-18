const express = require("express");
const bodyParser = require("body-parser");
const elasticsearch = require("elasticsearch");
const { application } = require("express");
const app = express();
const path = require("path");
app.use(bodyParser.json());

app.listen(process.env.PORT || 3000, () => {
  console.log("connected");
});

const esClient = elasticsearch.Client({
  host: "http://127.0.0.1:9200",
});

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "./start.html"));
});


app.get("/search", (req, res) => {
  res.sendFile(path.join(__dirname, "./search.html"));
});


app.get("/tweets", (req, res) => {
  const searchText = req.query.key;
  esClient
    .search({
      index: "moviesdb",
      body: {
        query: {
          match: { body: searchText.trim() },
        },
      },
    })
    .then((response) => {
      return res.json(response);
    })
    .catch((err) => {
      return res.status(500).json({ message: "Error" });
    });
});
