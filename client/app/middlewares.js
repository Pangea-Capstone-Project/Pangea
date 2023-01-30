// const authPage = (permissions) => {
// return (req, res, next) = {
//     const userRole = req.body.role
//     if (permissions.includes(userRole)) {
//         next ()
//     } else {
//         return res.status(401).json("You don't have permission")
//     }
// }
// }

// // {
// //     name: "pedro",
// //     courses: [1220, 32]
// //     role: "student"
// // }
// const authCourse = (req, res, next) => {
//     const courseNumber = req.params.id
//     if (req.body.courses.includes(courseNumber)) {
//         next()
//     }  else {
//         return res.status(401).json("you don't have access to this course")
//     }
// }

// module.exports = {
//     authCourse,
//     authPage
// }

// // in the routes
// const express = require("express")
// const app = express();
// const {authCourse. authPage} = require("./middlewares")

// app.get("/course/grades", authPage(["teacher", "admin"]), (req, res) => {
//     res.json({
//         pedro: 100.
//         paulo: 95
//     })
// })

// app.get("/course/:number", authCourse, (req, res) => {
//     const courseNumber = req.params.number;
//     res.json('you have permission ')
// })

