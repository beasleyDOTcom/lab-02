'use strict';

const arr = [];

// GOAL: get the information from the data.json file, fill the template and display to the page

// use ajax to get the information from data.json file
$.ajax('./data/page-1.json', {method: 'GET', dataType: 'JSON'})

  .then(data => {

    // run the information through a constructor function in order to normalize the data



    data.forEach(objectInDataArray => {
      new Pic(objectInDataArray).picBuilder();


      if(!arr.includes(objectInDataArray.keyword)){

        arr.push(objectInDataArray.keyword);
        console.log('This is our arr at real time: '+ arr);


        $( 'select' ).append( '<option>'+objectInDataArray.keyword+'</option>' );

      }

    });

  });



function Pic(obj){
  this.title = obj.title;
  this.image_url = obj.image_url;
  this.description = obj.description;
  this.keyword = obj.keyword;
  this.horns = obj.horns;
}

Pic.prototype.picBuilder = function(){
  // make a function prototype that is going to
  // get template from the html and
  // fill that template with each dog info
  // append it to the DOM

  // select all the html in the template
  const myTemplate = $('#photo-template').html();

  // create a new section to hold my new template
  const $newSection = $(`<section>${myTemplate}</section>`);

  $newSection.attr('class', this.keyword);

  // find the h2 tag and fill it with the name of the dog
  $newSection.find('h2').text(this.title);

  // find the p tag and fill it with the hobbies
  $newSection.find('p').text(this.description);

  // find the img and put in the imgage url
  $newSection.find('img').attr('src', this.image_url);

  let val = this.keyword;

  // find the img and add in the alt
  $newSection.find('img').attr('alt', this.title) ;



  $('main').append($newSection);




};

$(document).ready(function(){


  $("select").change(function(){

      var selected = $(this).children("option:selected").val();

      alert("You have selected " + selected);

    $('section').hide();

    $(`.${selected}`).show();

  });

});
