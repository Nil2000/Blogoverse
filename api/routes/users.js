const router = require("express").Router();
const User = require("../models/User");
const Post = require("../models/Post");
const bcrypt = require("bcrypt");

//Update
//request id=>req.params.id
router.put("/:id", async (req, res) => {
    if (req.body.userId === req.params.id) {
        if (req.body.password) {
            const salts = await bcrypt.genSalt(10);
            req.body.password = await bcrypt.hash(req.body.password, salts);
        }
        try {
            //sets new updated values to userid
            const updatedUser = await User.findByIdAndUpdate(req.params.id, {
                $set: req.body,
            });
            res.status(200).json(updatedUser);
        } catch (err) {
            console.log(err);
            res.status(400).json(err);
        }
    } else {
        res.status(401).json("You can update your account only!!!");
    }
});

//Delete
router.delete("/:id", async (req, res) => {
    if (req.body.userId === req.params.id) {
        try {
            const user = await User.findById(req.params.id);
            try {
                await Post.deleteMany({ username: user.username });
                await User.findByIdAndDelete(req.params.id);
                res.status(200).json("User has been deleted...");
            } catch (err) {
                console.log(err);
                res.status(400).json(err);
            }
        } catch (err) {
            res.status(404).json("User not found!!!");
        }
    } else {
        res.status(401).json("You can delete your account only!!!");
    }
});

//Get User
router.get("/:id", async (req, res) => {
    try {
        const user = await User.findById(req.params.id);
        const { password, ...others } = user._doc;
        res.status(200).json(others);
    } catch (err) {
        res.status(500).json(err);
    }
});

module.exports = router;
