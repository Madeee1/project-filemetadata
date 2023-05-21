import express from "express";
import cors from "cors";
import multer from "multer";

const upload = multer({ dest: "uploads/" });

import { config } from "dotenv";
config();

var app = express();

app.use(cors());
app.use("/public", express.static(process.cwd() + "/public"));

app.get("/", function (req, res) {
  res.sendFile(process.cwd() + "/views/index.html");
});

// Handle the POST from the form to the /api/fileanalyse endpoint
app.post("/api/fileanalyse", upload.single("upfile"), (req, res) => {
  // Get the file from the request
  const file = req.file;

  console.log(file);

  // Analyze the file
  const fileName = file.originalname;
  const fileSize: number = file.size;
  const fileType = file.mimetype;

  // Send the response in JSON format
  res.json({
    name: fileName,
    type: fileType,
    size: fileSize,
  });
});

const port = process.env.PORT || 3000;
app.listen(port, function () {
  console.log("Your app is listening on port " + port);
});
