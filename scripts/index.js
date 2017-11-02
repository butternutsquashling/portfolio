window.addEventListener('load', function(){
  if (/MSIE 9/i.test(navigator.userAgent) || /MSIE 10/i.test(navigator.userAgent) || /rv:11.0/i.test(navigator.userAgent) || /Edge\/\d./i.test(navigator.userAgent)) {
    topButton.className += ' active-top';
    nav.className += ' active-nav';
    document.querySelector('.my-photos-one').className += ' activeL';
    document.querySelector('.my-photos-two').className += ' activeR';
  }

  for(var i = 0; i < projectList.length; i++){
    var row = document.createElement('div');
    var collumOne = document.createElement('div');
    var collumTwo = document.createElement('div');
    var projectText = document.createElement('div');
    var projectInfo = document.createElement('p');
    var buttons = document.createElement('div');
		row.setAttribute('class', 'row project-row');
    collumOne.setAttribute('class', 'col-md-6 col-sm-12');
    collumTwo.setAttribute('class', 'col-md-6 col-sm-12');
    projectText.setAttribute('class', 'project-text');
    projectInfo.setAttribute('class', 'largertxt description');
    buttons.setAttribute('class', 'button-container');
    projectInfo.innerHTML = projectList[i].description;
    buttons.innerHTML = projectList[i].live + projectList[i].code;
    projectText.innerHTML = projectList[i].title;
    collumOne.innerHTML = projectList[i].img;
    projectText.appendChild(projectInfo);
    collumTwo.appendChild(projectText);
    collumTwo.appendChild(buttons);
    row.appendChild(collumOne);
    row.appendChild(collumTwo);
    document.getElementById('projects').appendChild(row);
  }
});
//**SCROLLING EFFECTS AND THROTTLE (TO KEEP CALLS TO A MINIMUM)**//
//THROTTLE
  function throttle(fn, threshhold, scope) {
          threshhold || (threshhold = 250);
          var last,
          deferTimer;
          return function () {
            var context = scope || this;
            var now = +new Date,
            args = arguments;
            if (last && now < last + threshhold) {
              clearTimeout(deferTimer);
              deferTimer = setTimeout(function () {
              last = now;
              fn.apply(context, args);
              }, threshhold);
            } else {
                last = now;
                fn.apply(context, args);
            }
          };
        }
//THROTTLE END

  const topButton = document.querySelector('.top-button');
  const home = document.querySelector('.home');
  const body = document.querySelector('body');
  const mainLinks = document.querySelector('.main-links-container');
  const icon = document.querySelector('.iconT');
  const nav = document.querySelector('.navbar-light');
  const aboutContainer = document.querySelector('.about');


//HANDLE SCROLL EFFECTS
  function handleScrollEffects(){
//TO SHOW 'GO TO TOP BUTTON' AND NAVBAR
      console.log(window.scrollY);
      if(window.scrollY > 100){
        topButton.classList.add('active-top');
        nav.classList.add('active-nav');
      }else{
        topButton.classList.remove('active-top');
        nav.classList.remove('active-nav');
      }
  //TO SLIDE IN PICTURES OF ME
      const oneSlideInAt = (window.scrollY + window.innerHeight) - aboutContainer.clientHeight / 1.6;
      const twoSlideInAt = (window.scrollY + window.innerHeight) - aboutContainer.clientHeight / 1.2;
      const HalfIsShownOne = oneSlideInAt > aboutContainer.offsetTop;
      const HalfIsShownTwo = twoSlideInAt > aboutContainer.offsetTop;
      if(HalfIsShownOne){
        document.querySelector('.my-photos-one').classList.add('activeL');
      }
      if(HalfIsShownTwo){
        document.querySelector('.my-photos-two').classList.add('activeR');
      }

  }

  function ScrollTo(name) {
    //init thread
    smoothScroll(document.getElementById(name));
  }

  window.smoothScroll = function(target) {
    var scrollContainer = target;
    do { //find scroll container
        scrollContainer = scrollContainer.parentNode;
        if (!scrollContainer) return;
        scrollContainer.scrollTop += 1;
    } while (scrollContainer.scrollTop == 0);

    var targetY = 0;
    do { //find the top of target relative to the container
        if (target == scrollContainer) break;
        targetY += target.offsetTop;
    } while (target = target.offsetParent);

    scroll = function(c, a, b, i) {
        i++; if (i > 30) return;
        c.scrollTop = a + (b - a) / 30 * i;
        setTimeout(function(){ scroll(c, a, b, i); }, 10);
    }
    // start scrolling
    scroll(scrollContainer, scrollContainer.scrollTop, targetY, 0);
}
//HANDLE SCROLL EFFECTS END

//**EVENT LISTENERS**//
//EVENTLISTENER FOR HANDLE SCROLL EFFECTS
  window.addEventListener('scroll', throttle(handleScrollEffects), 900);
//**EVENT LISTENERS END**//

const projectList = [
  {
    id: '06',
    img: '<img src="./images/projects/jsccsui.png" alt="JavaScript, CSS, UIs" class="image-col" />',
    title: '<h3 class="spacing">JavaScript, CSS and UIs</h3>',
    description: 'This is an ongoing side project that I built with React. Its a much larger collection of daily ' +
                  'and weekly JavaScript, CSS and UI challenges that I follow. Ive had a lot of fun doing these ' +
                  'and have picked up a lot of useful information and skills along the way that I can now apply to other things that I create!',
    live: '<a href="https://lmutton.github.io/UIs-and-CSS/#/" target="_blank"><button class="btn live">Live</button></a>',
    code: '<a href="https://github.com/lmutton/UIs-and-CSS" target="_blank"><button class="btn live">Code</button></a>'
  },
  {
    id: '05',
    img: '<img src="./images/projects/calc.png" alt="Calculator" class="image-col" />',
    title: '<h3 class="spacing">Calculator</h3>',
    description: 'This is a fully functioning calculator that I built using jQuery. It made for good practice ' +
                 'when it came to Booleans and using regular expressions.',
    live: '<a href="https://codepen.io/lmutton/full/KvJaOG/" target="_blank"><button class="btn live">Live</button></a>',
    code: '<a href="https://github.com/lmutton/FCC/tree/master/FCC_Projects/Calculator" target="_blank"><button class="btn live">Code</button></a>'
  },
  {
    id: '04',
    img: '<img src="./images/projects/twitch.png" alt="Twitch" class="image-col" />',
    title: '<h3 class="spacing">Twitch</h3>',
    description: 'With this little nifty piece, I added my favourite Twitch streamers ' +
                 'so that at an easy glance I can see who’s currently streaming and what they’re playing, then with a click I can ' +
                 'navigate to their live stream! I can also sort the list so that those online or offline are only shown. ',
    live: '<a href="https://codepen.io/lmutton/full/LWOVXv/" target="_blank"><button class="btn live">Live</button></a>',
    code: '<a href="https://github.com/lmutton/FCC/tree/master/FCC_Projects/Twitch_Viewer" target="_blank"><button class="btn live">Code</button></a>'
  },
  {
    id: '03',
    img: '<img src="./images/projects/weather.png" alt="Weather" class="image-col" />',
    title: '<h3 class="spacing">Weather App</h3>',
    description: 'Using a Weather API and based on the user\'s location of their IP, ' +
                 'I can retrieve the weather in real-time for where they currently are. If needed ' +
                 'they can also toggle between fahrenheit and celsius degrees.',
    live: '<a href="https://codepen.io/lmutton/full/xqOBoG/" target="_blank"><button class="btn live">Live</button></a>',
    code: '<a href="https://github.com/lmutton/FCC/tree/master/FCC_Projects/Weather_App" target="_blank"><button class="btn live">Code</button></a>'
  },
  {
    id: '02',
    img: '<img src="./images/projects/canvas.png" alt="Canvas" class="image-col" />',
    title: '<h3 class="spacing">HTML5 Canvas</h3>',
    description: 'Using HTML5’s canvas element along with JavaScript, I was able to get to grips with using offsetX, offsetY and setting the canvas\'s  ' +
                 'properties and using it\'s methods to produce this fun little artsy toy!',
    live: '<a href="https://codepen.io/lmutton/pen/XeVjra" target="_blank"><button class="btn live">Live</button></a>',
    code: '<a href="https://github.com/lmutton/30daysJS/tree/master/08Canvas" target="_blank"><button class="btn live">Code</button></a>'
  },
  {
    id: '01',
    img: '<img src="./images/projects/wiki.png" alt="Wiki" class="image-col" />',
    title: '<h3 class="spacing">Wikipedia Search</h3>',
    description: 'This was the first time that I used Ajax and it prepared me well for working with APIs again. ' +
                 'I learnt about how to retrieve specific pieces of information and how to display them.',
    live: '<a href="https://codepen.io/lmutton/full/dNpxYa/" target="_blank"><button class="btn live">Live</button></a>',
    code: '<a href="https://github.com/lmutton/FCC/tree/master/FCC_Projects/Wiki_Viewer" target="_blank"><button class="btn live">Code</button></a>'
  },
]
