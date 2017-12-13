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

var colours = [
    {name: 'red', colour: 'rgb(232,50,35)'},
    {name: 'yellow', colour: 'rgb(252,237,81)'},
    {name: 'green', colour: 'rgb(118,250,70)'},
    {name: 'blue', colour: 'rgb(93,140,247)'},
];

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min;
}

function chooseBackgroundColour() {
    var colour = colours[getRandomInt(0, 4)];

    d3.select('body').style('color', colour.colour);
    d3.selectAll('.button.accent')
        .style('color', colour.colour)
        .style('border', '1pt solid ' + colour.colour);
    d3.select('body .hacked').classed(colour.name + 'neon-text', true);
    d3.select('body .prompt').classed(colour.name + 'neon-symbols', true);
    d3.select('body .cursor').classed(colour.name + 'neon-symbols', true);
    d3.select('#header').style('display', 'block');
}

startCursorBlinking();
chooseBackgroundColour();
