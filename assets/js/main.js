// add loading tasks from local storage on start
// populateList() =>{}

//Check off tasks
$("ul").on("click", "li", function(){
  $(this).toggleClass("completed");
});

// click on X to del task adn remove from localStorage
$("ul").on("click","span", function(e){

  $(this).parent().fadeOut(600,function(){
  
    var taskTxt = $(this).text();
    console.log(String.taskTxt,'===', taskTxt);
    localStorage.removeItem(taskTxt);
  });

  e.stopPropagation();
});

// add new task to page and localStorage
$("input[type='text']").keydown(function(e){
  if(e.which === 13 && $(this).val() !== ''){
    var taskTxt = $(this).val();
    $(this).val('');
    $("ul").append('<li><span><i class="far fa-times-circle"></i></span> ' + taskTxt + '</li>'); 

    localStorage.setItem(' '+taskTxt,taskTxt);
  }
});

//console.log('local storage content', window.localStorage)

$("h1 span").click(function(){
  $("input[type='text']").fadeToggle();
});