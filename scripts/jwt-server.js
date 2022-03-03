const express = require('express');
// const dotenv = require('dotenv');
const jwt = require('jsonwebtoken');
const https = require('https')

const app = express();

// Set up Global configuration access
// dotenv.config();

const port = process.env.PORT || 5000;

app.listen(port, () => {
  console.log(`Server is up and running on ${port} ...`);
});

app.get("/user/generateToken", (req, res) => {
  let jwtSecretKey = 'InURs6IlvTU74piBYzxb5qQl2NkC54zl' //stg 
  // const jwtSecretKey = 'HDRzl6OZvOLIAiyOeIIif0dRxzgBvM22' // prod
  const iat = Math.floor(Date.now() / 1000)
  const exp = iat + (24 * 60 * 60)

  const data = {
    iss: 'Pt7WLcACsCyGUERhd2QqfERs3jhe0ViL', // stg
    // iss: 'N2hkMwSTa4giJH8bKOPQzoWMaryr3JQo', // prd
    iat,
    exp
  }

  const token = jwt.sign(data, jwtSecretKey);

  res.send({code: 200, token });
});

app.post('/accoutBalance', (req, res) => {
  https.request({

  })

  res.send('ok')
})

// Verification of JWT
app.get("/user/validateToken", (req, res) => {
  // Tokens are generally passed in header of request
  // Due to security reasons.

  let tokenHeaderKey = process.env.TOKEN_HEADER_KEY;
  let jwtSecretKey = process.env.JWT_SECRET_KEY;

  try {
    const token = req.header(tokenHeaderKey);

    const verified = jwt.verify(token, jwtSecretKey);
    if (verified) {
      return res.send("Successfully Verified");
    } else {
      // Access Denied
      return res.status(401).send(error);
    }
  } catch (error) {
    // Access Denied
    return res.status(401).send(error);
  }
});


