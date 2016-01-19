// Data for all 5 cats
var cats = {};
  cats[0] = {
      name: "Fluffy",
      imageURL: "cat.jpg",
      click: 0

  };

  cats[1] = {
      name: "Misty",
      imageURL: "cat2.jpg",
      click: 0
  }; 

var showCats = function(obj) {
  var catNumber = 0;
  for(var cat in cats) {
    catNumber++;
    var catTitle = "<h3>" + cats[cat].name + "</h3>";
    var catImage = '<img class="cat-image img-responsive ' + catNumber + '"src="' + cats[cat].imageURL + '">';
    //$('.cat-holder').append('<div class="cat-column"></div>');
    $('.cat-column').append(catTitle);
    $('.cat-column').append(catImage);
    $('.cat-column').append('<p>This cat has been clicked this many times: <strong><span class="count' + catNumber + '"></span></strong></p>');
    $('.cat-column').append('<hr>');
  };
};

showCats(cats);

  $('.1').click(function() {
    cats[0].click++;
    $('.count1').text(cats[0].click);
  }); 

    $('.2').click(function() {
    cats[1].click++;
    $('.count2').text(cats[1].click);
  }); 

