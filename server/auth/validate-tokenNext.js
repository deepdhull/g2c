const jwt = require('jsonwebtoken');

const jwtAuthWN = (req, res, next) => {
  const full_token = req.headers['authorization'];
  console.log(full_token);
  console.log("*****************");

  var ary = full_token.split(" ");
  console.log(ary);
  console.log("^^^^^^^^^^^^^^^^^^^^^^^");
  let actualToken = ary[1];
  console.log(ary[0]);

  let isTokenValid;

  try {
      isTokenValid = jwt.verify(actualToken, process.env.SEC_KEY);
  }
  catch (err) {
    console.log("expired");
      res.json({ status: false, message: "Token Expired" });
      return;
  }

   
  if(isTokenValid)
  {
    console.log("*********************************************");
    const obj = jwt.decode(ary[1]);
    console.log(obj);
    req.body.email = obj.result.email;
    next();
  }
else{
    res.json({status:false,message:"unauthorized"});
    return;
}
}

module.exports=jwtAuthWN;