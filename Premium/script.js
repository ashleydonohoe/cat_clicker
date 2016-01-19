// Data for all 5 cats

var cats = {};
  cats.cats0 = {
      name: "Fluffy",
      imageURL: "cat.jpg",
      click: 0

  };

  cats.cats1 = {
      name: "Misty",
      imageURL: "cat2.jpg",
      click: 0
  }; 

 cats.cats2 = {
      name: "Snowball",
      imageURL: "cat3.jpg",
      click: 0
  }; 

 cats.cats3 = {
      name: "Spots",
      imageURL: "cat4.jpg",
      click: 0
  }; 

   cats.cats4 = {
      name: "Cuddles",
      imageURL: "cat5.jpg",
      click: 0
  }; 

var catClicked = cats.cats0;
var currentCat = "";

$('button').click(function(){
  $('.cat-display').remove();
  $('.cat-stuff').append('<div class="col-md-12 cat-display text-center"></div>');
  catClicked = this.id;
  switch(catClicked) {
    case "cats.cats0":
    currentCat = cats.cats2;
    break;
  default:
    currentCat = cats.cats1;
  }
  var catTitle = "<h3>" + currentCat.name + "</h3>";
    var catImage = '<img class="cat-image img-responsive center-block" src="' + currentCat.imageURL + '">';
    //$('.cat-holder').append('<div class="cat-column"></div>');
    $('.cat-display').append(catTitle);
    $('.cat-display').append(catImage);
    $('.cat-display').append('<p>This cat has been clicked this many times: <strong><span class="count' + currentCat.click + '"></span></strong></p>');
});


 /* $('.1').click(function() {
    cats[0].click++;
    $('.count1').text(cats[0].click);
  }); 

    $('.2').click(function() {
    cats[1].click++;
    $('.count2').text(cats[1].click);
  }); 
*/
