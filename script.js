var foodData = [];
var dub_data = [];

var allFoodData = [];
var vegetablesData = [];
var fruitsData = [];
var protiensData = [];
var nutsData = [];
var grainsData = [];
var dairyData = [];
var cal_gt100Data = [];
var cal_lt100Data = [];

const checkBox = document.getElementById('checkboxes');

const filtercloseicon = document.getElementById('filtercloseicon');

const allfoodCheckBox = document.getElementById("allfood");

const vegetablesCheckBox = document.getElementById("vegetables");

const fruitsCheckBox = document.getElementById("fruits");

const protiensCheckBox = document.getElementById("protiens");

const nutsCheckBox = document.getElementById("nuts");

const grainsCheckBox = document.getElementById("grains");

const dairyCheckBox = document.getElementById("dairy");

const cal_gt100CheckBox = document.getElementById("cal_gt100");

const cal_lt100CheckBox = document.getElementById("cal_lt100");

const allfoodContent = document.getElementById("allfoodcontent");

const vegetablesContent = document.getElementById("vegetablescontent");

const fruitsContent = document.getElementById("fruitscontent");

const protiensContent = document.getElementById("protienscontent");

const nutsContent = document.getElementById("nutscontent");

const grainsContent = document.getElementById("grainscontent");

const dairyContent = document.getElementById("dairycontent");

const cal_gt100Content = document.getElementById("cal_gt100content");

const cal_lt100Content = document.getElementById("cal_lt100content");

const allfoodCards = document.getElementById("allfoodCards");

const vegetablesCards = document.getElementById("vegetablesCards");

const fruitsCards = document.getElementById("fruitsCards");

const protiensCards = document.getElementById("protiensCards");

const nutsCards = document.getElementById("nutsCards");

const grainsCards = document.getElementById("grainsCards");

const dairyCards = document.getElementById("dairyCards");

const cal_gt100Cards = document.getElementById("cal_gt100Cards");

const cal_lt100Cards = document.getElementById("cal_lt100Cards");

var AllFoodInnerHTML = "";
var VegetablesInnerHTML = "";
var FruitsInnerHTML = "";
var ProtiensInnerHTML = "";
var NutsInnerHTML = "";
var GrainsInnerHTML = "";
var DiaryInnerHTML = "";
var CalGt100InnerHTML = "";
var CalLt100InnerHTML = "";

fetch("food.json")
  .then((response) => response.json())
  .then((json) => {
    console.log(json)
    foodData = json;
    dub_data = json;
    InitiateApplication(json);

  })
  .catch((err) => {
    console.log("Error in fetching JSOn file" + err);
    foodData = [];
    dub_data = [];
  })

function InitiateApplication(json) {
  dataInitiate(json);
  vegetablesContent.style.display = "none";
  fruitsContent.style.display = "none";
  protiensContent.style.display = "none";
  nutsContent.style.display = "none";
  grainsContent.style.display = "none";
  dairyContent.style.display = "none";
  cal_gt100Content.style.display = "none";
  cal_lt100Content.style.display = "none";

  allfoodCheckBox.click();
}

function dataInitiate(json) {
  if (json == []) return;
  allFoodData = json;
  vegetablesData = json.filter((data) => data.category === "Vegetable");
  fruitsData = json.filter((data) => data.category === "Fruit");
  protiensData = json.filter((data) => data.category === "Protein");
  nutsData = json.filter((data) => data.category === "Nuts");
  grainsData = json.filter((data) => data.category === "Grain");
  dairyData = json.filter((data) => data.category === "Dairy");
  cal_gt100Data = json.filter((data) => data.calorie >= 100);
  cal_lt100Data = json.filter((data) => data.calorie < 100);
  InitiateInnerHTML();
}

const filterContent = document.getElementById("filter");

filterContent.addEventListener('click', filterToggle);

function filterToggle() {
  const filterDisplay = checkBox.style.display;
  if (filterDisplay === "grid") {
    checkBox.style.display = "none";
  } else {
    checkBox.style.display = "grid";
  }
}

function InitiateInnerHTML() {
  let allFoodHtmlContent = "";
  allFoodData.forEach((item, index) => {
    allFoodHtmlContent += '<div class="card" ><h4>' + item.foodname + '</h4><hr><br><div class="card-list"><b>Calarie</b><p>' + item.calorie + '</p><b>Protien</b><p>' + item.protiens + '</p><b>Cab</b><p>' + item.cab + '</div></div>'
  })
  allfoodCards.innerHTML = allFoodHtmlContent;
  
  let vegetablesHtmlContent = "";
  vegetablesData.forEach((item, index) => {
    vegetablesHtmlContent += '<div class="card" ><h4>' + item.foodname + '</h4><hr><br><div class="card-list"><b>Calarie</b><p>' + item.calorie + '</p><b>Protien</b><p>' + item.protiens + '</p><b>Cab</b><p>' + item.cab + '</div></div>'
  })
  vegetablesCards.innerHTML = vegetablesHtmlContent;

  let fruitsHtmlContent = "";
  fruitsData.forEach((item, index) => {
    fruitsHtmlContent += '<div class="card" ><h4>' + item.foodname + '</h4><hr><br><div class="card-list"><b>Calarie</b><p>' + item.calorie + '</p><b>Protien</b><p>' + item.protiens + '</p><b>Cab</b><p>' + item.cab + '</div></div>'
  })
  fruitsCards.innerHTML = fruitsHtmlContent;

  let protiensHtmlContent = "";
  protiensData.forEach((item, index) => {
    protiensHtmlContent += '<div class="card" ><h4>' + item.foodname + '</h4><hr><br><div class="card-list"><b>Calarie</b><p>' + item.calorie + '</p><b>Protien</b><p>' + item.protiens + '</p><b>Cab</b><p>' + item.cab + '</div></div>'
  })
  protiensCards.innerHTML = protiensHtmlContent;

  let nutsHtmlContent = "";
  nutsData.forEach((item, index) => {
    nutsHtmlContent += '<div class="card" ><h4>' + item.foodname + '</h4><hr><br><div class="card-list"><b>Calarie</b><p>' + item.calorie + '</p><b>Protien</b><p>' + item.protiens + '</p><b>Cab</b><p>' + item.cab + '</div></div>'
  })
  nutsCards.innerHTML = nutsHtmlContent;

  let grainsHtmlContent = "";
  grainsData.forEach((item, index) => {
    grainsHtmlContent += '<div class="card" ><h4>' + item.foodname + '</h4><hr><br><div class="card-list"><b>Calarie</b><p>' + item.calorie + '</p><b>Protien</b><p>' + item.protiens + '</p><b>Cab</b><p>' + item.cab + '</div></div>'
  })
  grainsCards.innerHTML = grainsHtmlContent;

  let dairyHtmlContent = "";
  dairyData.forEach((item, index) => {
    dairyHtmlContent += '<div class="card" ><h4>' + item.foodname + '</h4><hr><br><div class="card-list"><b>Calarie</b><p>' + item.calorie + '</p><b>Protien</b><p>' + item.protiens + '</p><b>Cab</b><p>' + item.cab + '</div></div>'
  })
  dairyCards.innerHTML = dairyHtmlContent;

  let calGTHtmlContent = "";
  cal_gt100Data.forEach((item, index) => {
    calGTHtmlContent += '<div class="card" ><h4>' + item.foodname + '</h4><hr><br><div class="card-list"><b>Calarie</b><p>' + item.calorie + '</p><b>Protien</b><p>' + item.protiens + '</p><b>Cab</b><p>' + item.cab + '</div></div>'
  })
  cal_gt100Cards.innerHTML = calGTHtmlContent;

  let calLTHtmlContent = "";
  cal_lt100Data.forEach((item, index) => {
    calLTHtmlContent += '<div class="card" ><h4>' + item.foodname + '</h4><hr><br><div class="card-list"><b>Calarie</b><p>' + item.calorie + '</p><b>Protien</b><p>' + item.protiens + '</p><b>Cab</b><p>' + item.cab + '</div></div>'
  })
  cal_lt100Cards.innerHTML = calLTHtmlContent;
}

/**
 * This is the case where any other specific checkboxes like fruits | nuts etc are checked, 
 * then all food items need to be un checked and not displayed.
 */
function triggerAllFoodCategoryUnChecked() {
  if (allfoodCheckBox.checked == true) {
    allfoodCheckBox.click();
  }
}

/**
 * This is the case where AlllFood checkbox was checked, then other categories need to be unchecked.
 */
function triggerAnothercategoryFoodToUnchecked() {
  if (vegetablesCheckBox.checked) vegetablesCheckBox.click()
  if (fruitsCheckBox.checked) fruitsCheckBox.click()
  if (protiensCheckBox.checked) protiensCheckBox.click()
  if (nutsCheckBox.checked) nutsCheckBox.click()
  if (grainsCheckBox.checked) grainsCheckBox.click()
  if (dairyCheckBox.checked) dairyCheckBox.click()
  if (cal_gt100CheckBox.checked) cal_gt100CheckBox.click()
  if (cal_lt100CheckBox.checked) cal_lt100CheckBox.click()
}

filtercloseicon.addEventListener('click', () => {
  checkBox.style.display = "none";
})

allfoodCheckBox.addEventListener('change', function () {
  if (allfoodCheckBox.checked == true) {
    triggerAnothercategoryFoodToUnchecked();
    allfoodContent.style.display = "block";
  } else {
    allfoodContent.style.display = "none";
  }
})

vegetablesCheckBox.addEventListener('change', function () {
  if (vegetablesCheckBox.checked == true) {
    triggerAllFoodCategoryUnChecked();
    vegetablesContent.style.display="block"
  } else {
    vegetablesContent.style.display = "none";
  }
})

fruitsCheckBox.addEventListener('change', function () {
  if (fruitsCheckBox.checked == true) {
    triggerAllFoodCategoryUnChecked();
    fruitsContent.style.display = "block";
  } else {
    fruitsContent.style.display = "none";
  }
})

protiensCheckBox.addEventListener('change', function () {
  if (protiensCheckBox.checked == true) {
    triggerAllFoodCategoryUnChecked();
    protiensContent.style.display = "block";
  } else {
    protiensContent.style.display = "none";
  }
})

nutsCheckBox.addEventListener('change', function () {
  if (nutsCheckBox.checked == true) {
    triggerAllFoodCategoryUnChecked();
    nutsContent.style.display = "block";
  } else {
    nutsContent.style.display = "none";
  }
})

grainsCheckBox.addEventListener('change', function () {
  if (grainsCheckBox.checked == true) {
    triggerAllFoodCategoryUnChecked();
    grainsContent.style.display = "block";
  } else {
    grainsContent.style.display = "none";
  }
})

dairyCheckBox.addEventListener('change', function () {
  if (dairyCheckBox.checked == true) {
    triggerAllFoodCategoryUnChecked();
    dairyContent.style.display = "block";
  } else {
    dairyContent.style.display = "none";
  }
})

cal_gt100CheckBox.addEventListener('change', function () {
  if (cal_gt100CheckBox.checked == true) {
    triggerAllFoodCategoryUnChecked();
    cal_gt100Content.style.display = "block";
  } else {
    cal_gt100Content.style.display = "none";
  }
})

cal_lt100CheckBox.addEventListener('change', function () {
  if (cal_lt100CheckBox.checked == true) {
    triggerAllFoodCategoryUnChecked();
    cal_lt100Content.style.display = "block";
  } else {
    cal_lt100Content.style.display = "none";
  }
})

const sortBox = document.getElementById("sort");

sortBox.addEventListener('change', function () {
  const value = sortBox.value;
  if(value === "protienHL") {
    sortByProtienHighToLow();
  } else if (value === "cabLH") {
    sortByCabLowToHigh();
  }
})

function sortByProtienHighToLow() {
  foodData.sort((a,b) => {
    return b["protiens"]-a["protiens"];
  })
  dataInitiate(foodData)
}

function sortByCabLowToHigh() {
  foodData.sort((a,b) => {
    return a["cab"]-b["cab"];
  })
  dataInitiate(foodData)
}

setInterval(function() {
  if(!allfoodCheckBox.checked && !vegetablesCheckBox.checked && !fruitsCheckBox.checked && !protiensCheckBox.checked && !nutsCheckBox.checked && 
    !grainsCheckBox.checked && !dairyCheckBox.checked && !cal_gt100CheckBox.checked && !cal_lt100CheckBox.checked) {
      allfoodCheckBox.click();
    }
}, 3000);