import { Age } from './age';
import './styles.css';
import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';


$(document).ready(function(){
  $('#input-form').submit(function(event){
    event.preventDefault();

    $("#age").empty();

   let inputAge = parseInt($('#age').val());
   let inputGender = parseInt($('#gender').val());

   let userInput = new Age(inputAge, inputGender);

  if(inputGender === 0 || inputAge === NaN) {
    $('#error').html("You must input your information!")
  } else {
    $('#error').hide();
    $("#show-result").show();

    $('#earth-age').text(inputAge);
    $('#earth-exp').text(userInput.timeLeftE());

    $('#mercury-age').text(userInput.ageConversionMercury());
    $('#mercury-exp').text(userInput.timeLeftMer());

    $('#venus-age').text(userInput.ageConversionVenus());
    $('#venus-exp').text(userInput.timeLeftV());

    $('#mars-age').text(userInput.ageConversionMars());
    $('#mars-exp').text(userInput.timeLeftMa());

    $('#jupiter-age').text(userInput.ageConversionJupiter());
    $('#jupiter-exp').text(userInput.timeLeftJ());
  }


 })
})
