import express from "express";
import cors from "cors";

const app = express();
const port = 5000;

app.use(cors());

const courses = [
    {
      "id": 1,
      "title": "Basic Algorithms",
      "icon": "LibraryBooks",
      "lessons": "25 Lessons",
      "date": "27 Jan,2023",
      "lesson_completed": "10/25(48%)",
      "duration": "14h 38m 56s"
    },
    {
      "id": 2,
      "title": "Web Development",
      "icon": "UnfoldMore",
      "lessons": "45 Lessons",
      "date": "23 Feb,2023",
      "lesson_completed": "40/45(97%)",
      "duration": "36h 30m 00s"
    },
    {
      "id": 3,
      "title": "Basic Data Science",
      "icon": "DatasetOutlined",
      "lessons": "37 Lessons",
      "date": "14 Jan,2023",
      "lesson_completed": "9/37(40%)",
      "duration": "37h 00m 00s"
    },
    {
      "id": 4,
      "title": "UI/UX Design",
      "icon": "Monitor",
      "lessons": "32 Lessons",
      "date": "19 Feb,2023",
      "lesson_completed": "26/32(84%)",
      "duration": "16h 40m 50s"
    },
    {
      "id": 5,
      "title": "Project Management",
      "icon": "Source",
      "lessons": "19 Lessons",
      "date": "27 Jan,2023",
      "lesson_completed": "14/19(89%)",
      "duration": "13h 20m 00s"
    }
  ]
  

  app.get("/courses", (req, res) => {
    console.log("Sending courses:", courses); // Log courses data
    res.json(courses);
  });
  
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
