require("dotenv").config();
const mongoose = require('mongoose');

// Connect to MongoDB
const MONGO_URL = process.env.MONGO_URL;
mongoose.connect(MONGO_URL);

// Define schemas
const AdminSchema = new mongoose.Schema({
    // Schema definition here
    username: String,
    password: String,
    isAdmin: { type: Boolean, default: true },
    myCourses: {
        type: [mongoose.Schema.Types.ObjectId],
        ref: 'Course',
    },
    purchasedCourses: {
        type: [mongoose.Schema.Types.ObjectId],
        ref: 'Course',
    }
});

const UserSchema = new mongoose.Schema({
    // Schema definition here
    username: String,
    password: String,
    isAdmin: { type: Boolean, default: false },
    purchasedCourses: {
        type: [mongoose.Schema.Types.ObjectId],
        ref: 'Course',
    }
});

const CourseSchema = new mongoose.Schema({
    // Schema definition here
    title: String,
    description: String,
    price: Number,
    imageLink: String,
    published: {
        type: Boolean,
        default: true,
    },
    owner: {
        type: mongoose.Types.ObjectId,
        ref: 'Admin',
    }
});

const Admin = mongoose.model('Admin', AdminSchema);
const User = mongoose.model('User', UserSchema);
const Course = mongoose.model('Course', CourseSchema);

module.exports = {
    Admin,
    User,
    Course
}