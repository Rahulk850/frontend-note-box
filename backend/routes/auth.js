const express =require('express');
const User = require('../models/User');
const { body, validationResult } = require('express-validator');
const bcrypt = require('bcryptjs');
const fetchUser = require('../middleware/fetchUser');
// const { model } = require('mongoose');
const router = express.Router();
var jwt = require('jsonwebtoken');
//  create a user using posts api/path/createuser no login is required 
const JWT_SECRET = "extraordinaryrahul";
router.post('/createuser',
[ 
    body('name','name must be of length 3').isLength({ min: 3 }),
    body('email','invalid email').isEmail(),
    body('password','password must be of length 5').isLength({ min: 5 })
]
, async (req,res)=>{

    // const user = User(req.body);
    // user.save() 
    // res.json(user);
    // // res.send(req.body);
    // console.log(req.body);
     const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });

    }
    // check whether user with this email exists already 
    try {

      let user = await User.findOne({email:req.body.email});
      if(user){
        return res.status(400).json({error:"sorry you filled wrong credentials"});
      }
        const salt = await bcrypt.genSalt(10);
        const secPass = await bcrypt.hashSync(req.body.password,salt);
        console.log(secPass)
        // create a new user
         user = await User.create({
          name: req.body.name,
          email: req.body.email,
          password: secPass,
        })
        const data = {
          user:
          {
            id:user.id
          }
        }
        const authtoken = jwt.sign(data,JWT_SECRET);
        res.send({authtoken});
      }catch(error){
      console.error(error.message);
      res.status(500).send("internal server error");
      }
}
)

// AUTHENTICATE A USER USING "/api/auth/login" . no login is required
router.post('/login',
[ 
    body('email','Enter a valid email').isEmail(),
    body('password','password can not be empty').exists()
]
, async (req,res)=>{
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
}
   const {email,password} = req.body;
   try {
    let user = await User.findOne({email})
    if(!user){
      return res.status(400).json({error: "Please try to login with correct crendentials"}) 
    }

    const passCompare = bcrypt.compare(password,user.password);
    if(!passCompare){
      return res.status(400).json({error: "Please try to login with correct crendentials"}) 
    }
    const data = {
      user:
      {
        id:user.id
      }
    }
    const authtoken = jwt.sign(data,JWT_SECRET);
    res.send({authtoken});
   } catch (error) {
    console.error(error.message);
    res.status(500).send("internal server error");
   }
    })

    // Get logged in user details using : POST "/api/auth/getuser"

    router.post('/getuser',fetchUser,async(req,res)=>{
    try {
      const userId = req.user.id;
      const user = await User.findById(userId).select("-password");
      res.send(user);
    } catch (error) {
      console.error(error.message);
      res.status(500).send("internal server error"); 
    }
    }
    )

    

module.exports = router;

0.0262 ,0.0582 ,0.1099 , 0.1083 ,0.0974,	0.228	,0.2431,	0.3771,	0.5598,	0.6194,	0.6333,	0.706	,0.5544	,0.532	,0.6479,	0.6931,	0.6759,	0.7551,	0.8929	,0.8619,	0.7974	,0.6737,	0.4293,	0.3648,	0.5331,	0.2413,	0.507,	0.8533,	0.6036	,0.8514,	0.8512	,0.5045,	0.1862	,0.2709,	0.4232,	0.3043,	0.6116,	0.6756,	0.5375	,0.4719	,0.4647,	0.2587	,0.2129	,0.2222,	0.2111,	0.0176	,0.1348,	0.0744	,0.013	,0.0106	,0.0033,	0.0232,	0.0166,	0.0095,	0.018,	0.0244,	0.0316,	0.0164,	0.0095,	0.0078


0.026	0.0363	0.0136	0.0272	0.0214	0.0338	0.0655	0.14	0.1843	0.2354	0.272	0.2442	0.1665	0.0336	0.1302	0.1708	0.2177	0.3175	0.3714	0.4552	0.57	0.7397	0.8062	0.8837	0.9432	1	0.9375	0.7603	0.7123	0.8358	0.7622	0.4567	0.1715	0.1549	0.1641	0.1869	0.2655	0.1713	0.0959	0.0768	0.0847	0.2076	0.2505	0.1862	0.1439	0.147	0.0991	0.0041	0.0154	0.0116	0.0181	0.0146	0.0129	0.0047	0.0039	0.0061	0.004	0.0036	0.0061	0.0115	M
