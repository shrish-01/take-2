const { Router } = require("express");
const adminMiddleware = require("../middleware/admin");
const { Admin, Course } = require("../db/index");
const router = Router();

// Admin Routes
router.post('/signup', async (req, res) => {
    // Implement admin signup logic
    const { username, password } = req.body;

    try {
        const userExists = await Admin.findOne({
            username
        });
    
        if(userExists) {
            res.status(409).json({
                msg: "Admin already exists!"
            });
            return;
        }
    
        const newAdmin = new Admin({
            username: username,
            password: password
        });
    
        const savedAdmin = await newAdmin.save();
        res.status(200).json({
            msg: "Admin created & saved!",
            id: savedAdmin._id,
        });
    } catch (error) {
        res.status(500).json({
            msg: "Something went wrong!", error: error.message
        });
    }
});

router.post('/courses', adminMiddleware, async (req, res) => {
    // Implement course creation logic
    const { username } = req.headers;
    const { title, description, price, imageLink } = req.body;

    try {
        const admin = await Admin.findOne({ username });
    
        const newCourse = new Course({
            title, description, price, imageLink, owner: admin._id
        });
    
        const createdNewCourse = await newCourse.save();
        // await Admin.updateOne({
        //     id: admin._id
        // }, {
        //     myCourse: createdNewCourse._id,
        // });

        admin.myCourses.push(createdNewCourse._id);
        await admin.save();
    
        res.status(201).json({
            msg: "Course created successfully",
            course: createdNewCourse,
        });
    } catch (error) {
        res.status(500).json({
            msg: "An error occurred while creating the course",
            error: error.message,
        });
    }
});

router.get('/courses', adminMiddleware, async (req, res) => {
    // Implement fetching all courses logic
    const courses = await Course.find();
    res.status(200).json({
        courses,
    });
});

module.exports = router;