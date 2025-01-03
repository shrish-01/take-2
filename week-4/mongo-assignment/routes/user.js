const { Router } = require("express");
const router = Router();
const userMiddleware = require("../middleware/user");
const { User, Course } = require("../db");

// User Routes
router.post('/signup', async (req, res) => {
    // Implement user signup logic
    const { username, password } = req.body;

    try {
        const userExists = await User.findOne({
            username
        });
    
        if(userExists) {
            res.status(409).json({
                msg: "User already exists!"
            });
            return;
        }
    
        const newUser = new User({
            username: username,
            password: password
        });
    
        const savedUser = await newUser.save();
        res.status(200).json({
            msg: "User created & saved!",
            id: savedUser._id,
        });
    } catch (error) {
        res.status(500).json({
            msg: "Something went wrong!", error: error.message
        });
    }
});

router.get('/courses', async (req, res) => {
    // Implement listing all courses logic
    const courses = await Course.find();
    res.status(200).json({
        courses,
    });
});

router.post('/courses/:courseId', userMiddleware, (req, res) => {
    // Implement course purchase logic
});

router.get('/purchasedCourses', userMiddleware, (req, res) => {
    // Implement fetching purchased courses logic
});

module.exports = router