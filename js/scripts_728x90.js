// --------------------------------------------------
//                        DATA
// --------------------------------------------------
    
var addLanguage = "en";

var addSize = {
  'width': 728,
  'height': 90
}

var productImg = {
  'url' : "./img/product.png",
  'bg'  : "grey",
}

var headline = {
  text : "Headline<br>Text",
  fontWeight : "bold",
  fontSize : "24",
  lineHeight : "30",
  textAlign : "center",
  textColor : "white",
  BgColor : "red",
}

var offerContainerRules = {
  padLeft: '10',
  padRight: '5',
  bg : "black",
}

var copyOne = {
  text : "Lorem ipsum dolor sit amet consectetur.",
  fontWeight : "regular",
  fontSize : "13",
  lineHeight : "13",
  textColor : "white",
  textAlign : "left",
  marginTop : "0",
  marginBottom : "0",
}

var copyTwo = {
  text : "",
  offer : {
    preText : "Text",
    whole : "00",
    cents : "00",
    postText : "text.",
  },
  fontWeight : "bold",
  fontSize : "30",
  lineHeight : "32",
  textDecoration: 'none',
  textColor : "white",
  textAlign : "left",
  marginTop : "5",
  marginBottom : "5",
}

var legal = {
  text : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum quisquam temporibus nulla est, saepe sit alias porro suscipit esse ratione.",
  fontWeight : "regular",
  fontSize : "8",
  lineHeight : "9",
  textColor : "white",
  textAlign : "left",
  marginTop : "0",
  marginBottom : "0",
}

var cta = {
  text : "Click Here",
  fontWeight : "semibold",
  fontSize : "12",
  lineHeight : "14",
  textDecoration: 'none',
  textAlign : "center",
  textColor : "white",
  BgColor : "burgundy",
}

var rogers = {
  'bg' : "red",
  'logo' : "white"
}


// --------------------------------------------------
//              GET ELEMENTS FROM HTML
// --------------------------------------------------

var table = document.getElementById('table');
var productContainer = document.getElementById('photo-container');
var headlineContainer = document.getElementById('headline-container');
var offerContainer = document.getElementById('offer-container');
var copiesContainer = document.getElementById('copies-container');
var copyOneContainer = document.getElementById('copy-one');
var copyTwoContainer = document.getElementById('copy-two');
var legalContainer = document.getElementById('legal');
var ctaContainer = document.getElementById('cta-container');
var logoContainer = document.getElementById('logo-container');
var logoImg = document.getElementById('logo-img');


// --------------------------------------------------
//                    USAGE
// --------------------------------------------------

// Set the ads size
table.style.width = addSize.width + "px";
table.style.height = addSize.height + "px";

// Set the product image
css (productContainer, {
  'background-image': "url(" + productImg.url + ")",
  'background-repeat': 'no-repeat',
  'background-position': 'center',
  'background-size': 'cover',
});
productContainer.classList.add("bg-" + productImg.bg);

// Set the headline
headlineContainer.classList.add("bg-" + headline.BgColor, "txt-" + headline.textColor, "txt-" + headline.textAlign, headline.fontWeight);
css (headlineContainer, {
  'font-size': headline.fontSize + "px",
  'line-height': headline.lineHeight + "px",
});
headlineContainer.innerHTML = headline.text;

// Set the offer container
offerContainer.classList.add("bg-" + offerContainerRules.bg);

// Set the copies container
css (copiesContainer, {
  'padding-left': offerContainerRules.padLeft + "px",
  'padding-right': offerContainerRules.padRight + "px",
});

// Set the TOP copy 
copyOneContainer.innerHTML = copyOne.text;
copyOneContainer.classList.add("txt-" + copyOne.textColor, copyOne.fontWeight);
css (copyOneContainer, {
  'font-size': copyOne.fontSize + "px",
  'line-height': copyOne.lineHeight + "px",
  'text-align': copyOne.textAlign,
  'margin-top': copyOne.marginTop + "px",
  'margin-bottom': copyOne.marginBottom + "px",
});

// Set the OFFER copy
createOfferText(copyTwo);
copyTwoContainer.innerHTML = copyTwo.text;
copyTwoContainer.classList.add("txt-" + copyTwo.textColor, copyTwo.fontWeight);
css (copyTwoContainer, {
  'font-size': copyTwo.fontSize + "px",
  'line-height': copyTwo.lineHeight + "px",
  'text-align': copyTwo.textAlign,
  'margin-top': copyTwo.marginTop + "px",
  'margin-bottom': copyTwo.marginBottom + "px",
});

// Set the LEGAL copy
legalContainer.innerHTML = legal.text;
legalContainer.classList.add("txt-" + legal.textColor, legal.fontWeight);
css (legalContainer, {
  'font-size': legal.fontSize + "px",
  'line-height': legal.lineHeight + "px",
  'text-align': legal.textAlign,
  'margin-top': legal.marginTop + "px",
  'margin-bottom': legal.marginBottom + "px",
});

// Set the CTA
ctaContainer.classList.add("bg-" + cta.BgColor, "txt-" + cta.textColor, "txt-" + cta.textAlign, cta.fontWeight);
ctaContainer.style.fontSize = cta.fontSize + "px";
ctaContainer.style.lineHeight = cta.lineHeight + "px";
ctaContainer.innerHTML = cta.text;

// Set the logo
logoContainer.classList.add('bg' + '-' + rogers.bg);
logoImg.classList.add('logo' + '_' + addSize.width + 'x' + addSize.height, addLanguage + '-' + rogers.logo + '-logo');


// --------------------------------------------------
//                    FUNCTIONS
// --------------------------------------------------

//Function to add css to elements
function css(element, style) {
  for (const property in style)
      element.style[property] = style[property];
} 

// Function to create offer text
function createOfferText(copyTwo) {
  var Text = "";
  if (copyTwo.offer.preText) {
    Text += '<span style="font-size:.7em; padding-right:.5em;">' + copyTwo.offer.preText + "</span>";
  }
  if (addLanguage == "en") {
    if (copyTwo.offer.whole) {
      Text += '<span class="super">$</span>' + copyTwo.offer.whole;
    }
    if (copyTwo.offer.cents) {
      Text += '<span class="super">' + copyTwo.offer.cents + '</span>';
    }
  } else {
    if (copyTwo.offer.whole) {
      Text += copyTwo.offer.whole + ',' + copyTwo.offer.cents + ' $';
    }
  }
  if (copyTwo.offer.postText) {
    Text += '<span style="font-size:.7em; padding-left:.5em;">' + copyTwo.offer.postText + "</span>";
  }
  copyTwo.text = Text;
}


setPosition(copiesContainer, offerContainer);

// Function to define postion of the copy container
function setPosition(element, father) {
  var offerHeight = element.offsetHeight + 8;

  var coloffsetX = 0;
  var positionX = 0;

  if (father) { 

    if (productContainer) {
      coloffsetX = coloffsetX + 2;
    }
    if (headlineContainer) {
      coloffsetX = coloffsetX + 3;
    }

    var positionX = addSize.width / 12 * coloffsetX + "px";
    var positionY = (addSize.height - offerHeight) / 2 + "px";

    css (element, {
      'left': positionX,
      'padding-top': positionY,
      'width': offerContainer.clientWidth + "px",
    });
  }
}

var zIndex = 1;

// function to create frames
function createFrames(framesData) {
  // map the framesData array to create the frames animation rules
  for (let i=0; i < framesData.length; i++) {
    zIndex = zIndex + 10;
    if (framesData.length > 1) {
      css(framesData[i].animation, {
        'opacity': '0',
        '-webkit-animation' : '.5s ' + framesData[i].animationType + ' ease ' + i*3 + 's forwards 1;',
        '-moz-animation' : '.5s fadeIn ease 0s forwards 1;',
        'animation' : '.5s fadeIn ease 0s forwards 1;',
        'z-index': zIndex,
      });
    }
  }
}