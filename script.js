
const params = new URLSearchParams(window.location.search);
const course = params.get("course");

const courseData = {
  web: {
    title: "Web Development Course",
    video: "https://www.youtube.com/embed/UB1O30fR-EE"
  },
  data: {
    title: "Data Science Course",
    video: "https://www.youtube.com/embed/xC-c7E5PK0Y"
  },
  ai: {
    title: "AI & Machine Learning",
    video: "https://www.youtube.com/embed/aircAruvnKk"
  }
};

if (course && courseData[course]) {
  const titleElem = document.getElementById("courseTitle");
  const videoElem = document.getElementById("courseVideo");
  if(titleElem) titleElem.innerText = courseData[course].title;
  if(videoElem) videoElem.src = courseData[course].video;
}


let progress = {
  web: parseInt(localStorage.getItem("progress-web")) || 0,
  data: parseInt(localStorage.getItem("progress-data")) || 0,
  ai: parseInt(localStorage.getItem("progress-ai")) || 0
};

function updateProgress() {
  if(course){
    progress[course] = 100;
    localStorage.setItem("progress-" + course, 100);
    alert(courseData[course].title + " marked as completed!");
  }
}

// 3️⃣ Display progress on progress.html
window.onload = () => {
  for(let key in progress){
    const elem = document.getElementById("progress-" + key);
    if(elem) elem.style.width = progress[key] + "%";
  }
};
