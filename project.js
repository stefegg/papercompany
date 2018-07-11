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
  one: 'Here at Munder Difflin we have so much paper, and so many paper things! We have white paper, color paper, and even paper envelopes!',
  two: 'Notebooks are so cool. Do you have a notebook? If not, grab one of these, and if you have got one already - grab another!',
  three: 'Find a special way to say hello to your special someone with our greeting cards! Holidays, birthdays, awkward third dates - we have cards for all occasions!'
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


window.addEventListener('scroll', function() {
  // scrollPos = window.scrollY;
  if (window.scrollY > 150) {
    x = document.getElementById('sec-2');
    x.classList.remove('hidden');
    y = document.getElementById('sec-3');
    y.classList.add('hidden');
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
