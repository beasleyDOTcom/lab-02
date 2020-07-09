
console.log('in file');



// GOAL: render our neighborhoods to the page
const arr = [];

'use strict';

// run our dataSet through a constructor to normalize the data
let allHoods = [];


function Hood(objectInMyneighborhoodDataSet){

  this.image_url = objectInMyneighborhoodDataSet.image_url;
  this.title = objectInMyneighborhoodDataSet.title;
  this.description = objectInMyneighborhoodDataSet.description;
  this.keyword = objectInMyneighborhoodDataSet.keyword;
  this.horns = objectInMyneighborhoodDataSet.horns;

  allHoods.push(this);
  console.log(this);

}

neighborhoodDataSet.forEach(objectInMyneighborhoodDataSet => {


  new Hood(objectInMyneighborhoodDataSet);

  if(!arr.includes(objectInMyneighborhoodDataSet.keyword)){

    arr.push(objectInMyneighborhoodDataSet.keyword);
    console.log('This is our arr at real time: '+ objectInMyneighborhoodDataSet.keyword);


    $( 'select' ).append( '<option>'+objectInMyneighborhoodDataSet.keyword+'</option>' );

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