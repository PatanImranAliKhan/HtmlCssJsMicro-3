var foodData = {};
var dub_data = {};

fetch("food.json")
  .then((response) => response.json())
  .then((json) => {
    console.log(json)
    foodData = json;
    dub_data = json;
  })
  .catch((err) => {
    console.log("Error in fetching JSOn file" + err);
    foodData = {};
    dub_data = {};
  })

const filterContent = document.getElementById("filter");

filterContent.addEventListener('click', filterToggle);

function filterToggle() {
  const filterBox = document.getElementById('checkboxes');

  const filterDisplay = filterBox.style.display;
  if (filterDisplay === "grid") {
    filterBox.style.display = "none";
  } else {
    filterBox.style.display = "grid";
  }
}


const allfoodCheckBox = document.getElementById("allfood");

const vegetablesCheckBox = document.getElementById("vegetables");

const fruitsCheckBox = document.getElementById("fruits");

const protiensCheckBox = document.getElementById("protiens");

const nutsCheckBox = document.getElementById("nuts");

const grainsCheckBox = document.getElementById("grains");

const dairyCheckBox = document.getElementById("dairy");

const cal_gt100CheckBox = document.getElementById("cal_gt100");

const cal_lt100CheckBox = document.getElementById("cal_lt100");

/**
 * This is the case where any other specific checkboxes like fruits | nuts etc are checked, 
 * then all food items need to be un checked and not displayed.
 */
function triggerAllFoodCategoryUnChecked() {
  console.log(allfoodCheckBox.checked);
  if(allfoodCheckBox.checked == true) {
    allfoodCheckBox.click()
  }
}

/**
 * This is the case where AlllFood checkbox was checked, then other categories need to be unchecked.
 */
function triggerAnothercategoryFoodToUnchecked() {
  if(vegetablesCheckBox.checked) vegetablesCheckBox.click()
  if(fruitsCheckBox.checked) fruitsCheckBox.click()
  if(protiensCheckBox.checked) protiensCheckBox.click()
  if(nutsCheckBox.checked) nutsCheckBox.click()
  if(grainsCheckBox.checked) grainsCheckBox.click()
  if(dairyCheckBox.checked) dairyCheckBox.click()
  if(cal_gt100CheckBox.checked) cal_gt100CheckBox.click()
  if(cal_lt100CheckBox.checked) cal_lt100CheckBox.click()
}

allfoodCheckBox.addEventListener('change', function() {
  if(allfoodCheckBox.checked) triggerAnothercategoryFoodToUnchecked()
})

vegetablesCheckBox.addEventListener('change', function() {
  if(vegetablesCheckBox.checked == true) {
    triggerAllFoodCategoryUnChecked()
  }
})

fruitsCheckBox.addEventListener('change', function() {
  if(fruitsCheckBox.checked == true) {
    triggerAllFoodCategoryUnChecked()
  }
})

protiensCheckBox.addEventListener('change', function() {
  if(protiensCheckBox.checked == true) {
    triggerAllFoodCategoryUnChecked()
  }
})

nutsCheckBox.addEventListener('change', function() {
  if(nutsCheckBox.checked == true) {
    triggerAllFoodCategoryUnChecked()
  }
})

grainsCheckBox.addEventListener('change', function() {
  if(grainsCheckBox.checked == true) {
    triggerAllFoodCategoryUnChecked()
  }
})

dairyCheckBox.addEventListener('change', function() {
  if(dairyCheckBox.checked == true) {
    triggerAllFoodCategoryUnChecked()
  }
})

cal_gt100CheckBox.addEventListener('change', function() {
  if(cal_gt100CheckBox.checked == true) {
    triggerAllFoodCategoryUnChecked()
  }
})

cal_lt100CheckBox.addEventListener('change', function() {
  if(cal_lt100CheckBox.checked == true) {
    triggerAllFoodCategoryUnChecked()
  }
})

const sortBox = document.getElementById("sort");

sortBox.addEventListener('change', function() {
  console.log(sortBox.value)
})