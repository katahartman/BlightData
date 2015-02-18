
var dataset1; //Global Variable for data

d3.json("https://data.detroitmi.gov/resource/3fvy-533t.json?"
  //Query or data//
  //Application Token from Socrata//
  + "&$$app_token=SbkD2wNRdCX7OFPWsHLkMGZbA", function (error, data) {
  dataset1 = data; //Once data has loaded, copy to variable
  console.log(dataset1);
  // now that we have our data loaded, lets run a function that gets a unique count of violationcodes
  var countData = allViolation(dataset1);
  console.log(countData);
  var violationData = drawBars(dataset1);
  console.log(violationData);

});


function allViolation(d) {
   var countData = _.countBy(dataset1, 'violationcode');
   return countData;

};

function drawBars(d){
  var countViolation = _.countBy(dataset1, 'violationcode');
  var violationData = _.values(countViolation);

   d3.select ("body").selectAll("div")
    .data(violationData) //is this set up right?
    .enter()
    .append("div")
    .attr("class", "bar");

};


