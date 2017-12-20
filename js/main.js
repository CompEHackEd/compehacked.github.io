var mapKey = 'https://cartodb-basemaps-{s}.global.ssl.fastly.net/dark_all/{z}/{x}/{y}.png';
var mapCoords = {lat: 53.5281128, lng: -113.5294166};
var colours = [
    {name: 'red', colour: 'rgb(232,50,35)'},
    {name: 'yellow', colour: 'rgb(252,237,81)'},
    {name: 'green', colour: 'rgb(118,250,70)'},
    {name: 'blue', colour: 'rgb(93,140,247)'},
];

function startCursorBlinking() {
    var isCursorVisible = true;
    setInterval(function() {
        if (isCursorVisible) {
            d3.select('#cursor').style('visibility', 'hidden');
        } else {
            d3.select('#cursor').style('visibility', 'visible');
        }
        isCursorVisible = !isCursorVisible;
    }, 600);
}

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min;
}

function chooseBackgroundColour() {
    var colour = colours[getRandomInt(0, 4)];

    d3.selectAll('.accent').style('color', colour.colour);
    d3.selectAll('a').style('color', colour.colour);
    d3.selectAll('.button.accent').style('border', '1pt solid ' + colour.colour);
    d3.selectAll('.background-accent').style('background-color', colour.colour);
    d3.select('.hacked').classed(colour.name + 'neon-text', true);
    d3.select('.prompt').classed(colour.name + 'neon-symbols', true);
    d3.select('.cursor').classed(colour.name + 'neon-symbols', true);
    d3.select('#header').style('display', 'block');
}

var map;
function initMap() {
    map = new google.maps.Map(document.getElementById('map'), {
        center: mapCoords,
        zoom: 14,
        styles: mapStyles,
    });

    var marker = new google.maps.Marker({
        position: mapCoords,
        map: map,
        title: 'HackED',
    });
}

d3.select('#map').style('height', window.innerHeight * 0.5 + 'px');

startCursorBlinking();
chooseBackgroundColour();

d3.selectAll('p.question')
    .on('click', function() {
        var question = d3.select(this); 
        question.style('text-transform', question.style('text-transform') === 'uppercase' ? 'none' : 'uppercase'); 
        var answer = d3.select(this.parentNode).select('p.answer');
        answer.style('display', answer.style('display') === 'none' ? 'block' : 'none');
    });
