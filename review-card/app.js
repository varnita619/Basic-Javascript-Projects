// local reviews data
const reviews = [
  {
    id: 1,
    name: "susan smith",
    job: "web developer",
    img:
      "https://res.cloudinary.com/dqgqdj4jf/image/upload/v1638963800/samples/people/36316213-confident-business-woman-standing-in-the-office-ceo-of-great-corporate-successful-career-female-in-t_pf5pjl.jpg",
    text:
      "I'm baby meggings twee health goth +1. Bicycle rights tumeric chartreuse before they sold out chambray pop-up. Shaman humblebrag pickled coloring book salvia hoodie, cold-pressed four dollar toast everyday carry",
  },
  {
    id: 2,
    name: "anna johnson",
    job: "web designer",
    img:
      "https://res.cloudinary.com/dqgqdj4jf/image/upload/v1638963789/samples/people/_MG_7779-1.jpg_frhdxh.jpg",
    text:
      "Helvetica artisan kinfolk thundercats lumbersexual blue bottle. Disrupt glossier gastropub deep v vice franzen hell of brooklyn twee enamel pin fashion axe.photo booth jean shorts artisan narwhal.",
  },
  {
    id: 3,
    name: "peter jones",
    job: "intern",
    img:
      "https://res.cloudinary.com/dqgqdj4jf/image/upload/v1638963763/samples/people/john-timperley_popup_zsdza4.jpg",
    text:
      "Sriracha literally flexitarian irony, vape marfa unicorn. Glossier tattooed 8-bit, fixie waistcoat offal activated charcoal slow-carb marfa hell of pabst raclette post-ironic jianbing swag.",
  },
  {
    id: 4,
    name: "bill anderson",
    job: "the boss",
    img:
      "https://res.cloudinary.com/dqgqdj4jf/image/upload/v1638963748/samples/people/8_20210116201849_10955609_large_rir0ej.jpg",
    text:
      "Edison bulb put a bird on it humblebrag, marfa pok pok heirloom fashion axe cray stumptown venmo actually seitan. VHS farm-to-table schlitz, edison bulb pop-up 3 wolf moon tote bag street art shabby chic. ",
  },
  {
    id: 5,
    name: "john mayer",
    job: "data analylist",
    img:
      "https://res.cloudinary.com/dqgqdj4jf/image/upload/v1638963739/samples/people/Handsome-Man-White-Background-600x600_nn0lgi.jpg",
    text:
      "Edison bulb put a bird on it humblebrag, marfa pok pok heirloom fashion axe cray stumptown venmo actually seitan. VHS farm-to-table schlitz, edison bulb pop-up 3 wolf moon tote bag street art shabby chic. ",
  },
  {
    id: 6,
    name: "luis tomsom",
    job: "data scientist",
    img:
      "https://res.cloudinary.com/dqgqdj4jf/image/upload/v1638963734/samples/people/USR1018776_120605_SeanSullivan_25-8b38574_lenfil.jpg",
    text:
      "Edison bulb put a bird on it humblebrag, marfa pok pok heirloom fashion axe cray stumptown venmo actually seitan. VHS farm-to-table schlitz, edison bulb pop-up 3 wolf moon tote bag street art shabby chic. ",
  },
  {
    id: 7,
    name: "emma anderson",
    job: "python developer",
    img:
      "https://res.cloudinary.com/dqgqdj4jf/image/upload/v1638963736/samples/people/Jessica_Pfisterer_anonvm.jpg",
    text:
      "Edison bulb put a bird on it humblebrag, marfa pok pok heirloom fashion axe cray stumptown venmo actually seitan. VHS farm-to-table schlitz, edison bulb pop-up 3 wolf moon tote bag street art shabby chic. ",
  },
];

const img = document.querySelector("#person-img");
const author = document.querySelector("#author");
const job = document.querySelector("#job");
const info = document.querySelector("#info");

const prevBtn = document.querySelector(".prev-btn");
const nextBtn = document.querySelector(".next-btn");
const randomBtn = document.querySelector(".random-btn");

// set starting item
let currentItem = 0;

// load initial item
window.addEventListener("DOMContentLoaded",()=>{
  const item = reviews[currentItem];
  img.src = item.img;
  author.textContent = item.name;
  job.textContent = item.job;
  info.textContent = item.text;
})

// show person based on person no
function showPerson(person){
  const item = reviews[person];
  img.src = item.img;
  author.textContent = item.name;
  job.textContent = item.job;
  info.textContent = item.text;
}

// show prev person

prevBtn.addEventListener('click',()=>{
  currentItem--;
  if(currentItem<0){
    currentItem = reviews.length - 1;
  }
  showPerson(currentItem);

})

// show next person

nextBtn.addEventListener('click',()=>{
  currentItem++;
  if(currentItem > reviews.length-1){
    currentItem = 0;
  }
  showPerson(currentItem);

})

// show random person

randomBtn.addEventListener('click',()=>{
  
  currentItem = Math.floor(Math.random() * reviews.length);

  showPerson(currentItem);

})
