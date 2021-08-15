const courses = [
    { title: "course 1", isExist: true },
    { title: "course 2", isExist: false },
    { title: "course 3", isExist: true },
    { title: "course 4", isExist: false },
];
// show total number of Courses
const body = document.querySelector("body");
const availableCourses = courses.filter( c => c.isExist);
const msg = document.createElement('h3');
msg.textContent = `number of available courses is : ${availableCourses.length}`;
body.appendChild(msg);
// show name of available courses
availableCourses.forEach((item)=>{
    const p = document.createElement("p");
    p.textContent = item.title;
    body.appendChild(p);
});
