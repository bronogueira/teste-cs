const functions = require("firebase-functions");
const express = require("express");
const cors = require("cors");

const admin = require("firebase-admin");
admin.initializeApp();

const app = express();

app.use(cors({origin: true}));

app.put("/:id", async (req, res) => {
  const registro = req.body;
  await admin.firestore().collection("agendas").doc(
      req.params.id).update(registro);
  res.status(200).send();
});

exports.agenda = functions.https.onRequest(app);
