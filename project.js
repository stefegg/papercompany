//https://wireframe.cc/B07ctI my wireframe

headlines = {
  one: 'Paper and Paper Accessories!',
  two: 'Notebooks for Everyone! Sweet!',
  three: 'Greeting Cards for All Ocassions!'
}

paperpics = {
  one: 'image/' + 'p1.jpg',
  two: 'image/' + 'p2.jpg',
  three: 'image/' + 'p3.jpg'
}

cardpics = {
  one: 'image/' + 'c1.jpg',
  two: 'image/' + 'c2.jpg',
  three: 'image/' + 'c3.jpg'
}

notepics = {
  one: 'image/' + 'n1.jpg',
  two: 'image/' + 'n2.jpg',
  three: 'image/' + 'n3.jpg'
}

para = {
  one: "Here at Munder Difflin we have so much paper, and so many paper things! We have white paper, color paper, and even paper envelopes!",
  two: "Notebooks are so cool. Do you have a notebook? If not, grab one of these, and if you have got one already - grab another!",
  three: "Find a special way to say hello to your special someone with our greeting cards! Holidays, birthdays, awkward third dates - we have cards for all occasions!",
  four: "Lol there isn't one"
}

saleOne = {
  h: "Slightly Used Shredded Paper!",
  p: "We accidentally shredded all of this paper, whoops! Our folly is your value, save extra when buying in bulk!",
  i: 'image/' + 's1.jpg'
}

saleTwo = {
  h: "Stylish Paper Airplanes!",
  p: "Save now on super stylish paper airplanes. Be the coolest person in town with our awesome styles and color selection!",
  i: 'image/' + 's2.jpg'
}

saleThree = {
  h: "Beautiful Paper Flowers!",
  p: "Live in a basement or bunker? Simply allergic to flowers? Our wonderful paper flowers are here to help! Save now by shopping ugly colors!",
  i: 'image/' + 's3.jpg'
}

for (x in saleOne) {
  document.getElementById('sale-one').src = saleOne.i;
  document.getElementById('sale-one-h').innerHTML = saleOne.h;
  document.getElementById('sale-one-p').innerHTML = saleOne.p;
}

for (x in saleTwo) {
  document.getElementById('sale-two').src = saleTwo.i;
  document.getElementById('sale-two-h').innerHTML = saleTwo.h;
  document.getElementById('sale-two-p').innerHTML = saleTwo.p;
}

for (x in saleThree) {
  document.getElementById('sale-three').src = saleThree.i;
  document.getElementById('sale-three-h').innerHTML = saleThree.h;
  document.getElementById('sale-three-p').innerHTML = saleThree.p;
}


function paperShow() {
  var x = document.getElementById("sec-2-inner");
  x.classList.add("paperShows");
  x.classList.remove("notebookShows");
  x.classList.remove("greetingcardShows");
  document.getElementById('sec-2-inner-h2').innerHTML = headlines.one;
  document.getElementById('sec-2-inner-p').innerHTML = para.one;
  document.getElementById('pic-one').src = paperpics.one;
  document.getElementById('pic-two').src = paperpics.two;
  document.getElementById('pic-three').src = paperpics.three;
}

function notebookShow() {
  var x = document.getElementById("sec-2-inner");
  x.classList.add("notebookShows");
  x.classList.remove("paperShows");
  x.classList.remove("greetingcardShows");
  document.getElementById('sec-2-inner-h2').innerHTML = headlines.two;
  document.getElementById('sec-2-inner-p').innerHTML = para.two;
  document.getElementById('pic-one').src = notepics.one;
  document.getElementById('pic-two').src = notepics.two;
  document.getElementById('pic-three').src = notepics.three;
}

function greetingcardShow() {
  var x = document.getElementById("sec-2-inner");
  x.classList.add("greetingcardShows");
  x.classList.remove("notebookShows");
  x.classList.remove("paperShows");
  document.getElementById('sec-2-inner-h2').innerHTML = headlines.three;
  document.getElementById('sec-2-inner-p').innerHTML = para.three;
  document.getElementById('pic-one').src = cardpics.one;
  document.getElementById('pic-two').src = cardpics.two;
  document.getElementById('pic-three').src = cardpics.three;
}

function privShow() {
  var x = document.getElementById('lol-priv');
  x.innerHTML = para.four;
}


window.addEventListener('scroll', function() {

  if (window.scrollY > 150) {
    x = document.getElementById('sec-2');
    x.classList.remove('hidden');

  }
});

window.addEventListener('scroll', function() {
  scrollPos = window.scrollY;
  if (window.scrollY > 1020) {
    x = document.getElementById('sec-3');
    x.classList.remove('hidden');
  }
});

window.addEventListener('scroll', function() {
  scrollPos = window.scrollY;
  if (window.scrollY > 1850) {
    x = document.getElementById('sec-4');
    x.classList.remove('hidden');
  }
});
