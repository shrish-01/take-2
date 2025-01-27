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

router.post('/signin', async (req, res) => {
    // Implement admin signup logic
    const { username, password } = req.body;

    try {
        const userExists = await User.findOne({
            username, password
        });
        console.log(userExists);

        if(!userExists) {
            return res.status(404).json({
                msg: "User not found!",
            });
        }

        const token = jwt.sign(userExists.username, "secret_password_hehe");
        console.log(token);

        res.status(200).json({
            msg: "User signed in successfully!",
            token: `Bearer ${token}`,  // Send token to client
        });
    } catch (error) {
        res.status(500).json({
            msg: "Something went wrong!", error: error.message
        });
    } finally {
        res.end();
    }
});

router.get('/courses', async (req, res) => {
    // Implement listing all courses logic
    const courses = await Course.find();
    res.status(200).json({
        courses,
    });
});

router.post('/courses/:courseId', userMiddleware, async (req, res) => {
    // Implement course purchase logic
    try {
        const { username } = req.headers;
        // console.log(username);
        const registeredUser = await User.findOne({
            username: username,
        });
        const { courseId } = req.params;
        // console.log(courseId);
        registeredUser.purchasedCourses.push(courseId);
        await registeredUser.save();
    
        res.status(200).json({
            msg: "Course purchased sucessfully!"
        });
    } catch (error) {
        res.status(500).json({
            msg: "An error occurred while purchasing the course",
            error: error.message
        });
    }
});

router.get('/purchasedCourses', userMiddleware, async (req, res) => {
    // Implement fetching purchased courses logic
    try {
        let userCourses = [];
        const { username, password } = req.headers;
        const registeredUser = await User.findOne({
            username, password
        });
    
        for(let i = 0; i < registeredUser.purchasedCourses.length; i++) {
            const course = await Course.findById(registeredUser.purchasedCourses[i]);
            if(course) {
                userCourses.push(course);
            }
        }

        // Promise.all -- slighly harder syntax
        // const userCourses = await Promise.all(
        //     registeredUser.purchasedCourses.map(courseId => Course.findById(courseId))
        // );
    
        res.status(200).json({
            purchasedCourses: userCourses,
        });
    } catch (error) {
        res.status(500).json({
            msg: "An error occured while fetching purchased course",
            error: error.message
        });
    }
});

module.exports = router