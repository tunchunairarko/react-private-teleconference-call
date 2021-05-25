const router = require("express").Router();

router.get("/roomid",(req,res)=>{
    res.send({roomid:process.env.ROOM_ID})
})

module.exports = router;