//hero section animation
const items = document.querySelectorAll(".hero-content");

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("show");
      } else {
        entry.target.classList.remove("show");
      }
    });
  },
  {
    threshold: 0.3
  }
);

items.forEach(item => observer.observe(item));

// advantages section animation
const advantage = document.querySelectorAll(".advantage-item, .about-text, .about-slider");

const advantageobserver = new IntersectionObserver((entries)=>{
  entries.forEach(entry=>{
    if(entry.isIntersecting){
      entry.target.classList.add("show");
    }else{
      entry.target.classList.remove("show");
    }
  });
},{
  threshold: 0.3
});

advantage.forEach(item => advantageobserver.observe(item));