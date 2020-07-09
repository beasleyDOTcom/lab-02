
console.log('in file');



// GOAL: render our neighborhoods to the page
const arr = [];

'use strict';

// run our dataSet through a constructor to normalize the data
let allHoods = [];


function Hood(objectInMyneighborhoodDataSet2){

  this.image_url = objectInMyneighborhoodDataSet2.image_url;
  this.title = objectInMyneighborhoodDataSet2.title;
  this.description = objectInMyneighborhoodDataSet2.description;
  this.keyword = objectInMyneighborhoodDataSet2.keyword;
  this.horns = objectInMyneighborhoodDataSet2.horns;

  allHoods.push(this);
  console.log(this);

}

neighborhoodDataSet2.forEach(objectInMyneighborhoodDataSet2 => {


  new Hood(objectInMyneighborhoodDataSet2);

  if(!arr.includes(objectInMyneighborhoodDataSet2.keyword)){

    arr.push(objectInMyneighborhoodDataSet2.keyword);
    console.log('This is our arr at real time: '+ objectInMyneighborhoodDataSet2.keyword);


    $( 'select' ).append( '<option>'+objectInMyneighborhoodDataSet2.keyword+'</option>' );

  }

});

// put the data through the magic mustache library machine
Hood.prototype.createHtml = function(){
  //1. get template from the html

  let template = $('#neighborhood-template').html();
  
  //2. use Mustache to "create" new html by merging the template with the object instance that I have
  let html = Mustache.render(template, this);

  //3. return the "html" from this method
  return html;
}

allHoods.forEach(hood => {
  
  // append it to the DOM
  $('main').append(hood.createHtml());

})

$(document).ready(function(){


  $('select').change(function(){

    var selected = $(this).children('option:selected').val();

    $('section').hide();

    $(`.${selected}`).show();

  });

});