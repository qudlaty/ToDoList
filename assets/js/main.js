
var existing = localStorage.getItem('listItems');
console.log( existing);


//Check off tasks
$("ul").on("click", "li", function(){
  $(this).toggleClass("completed");
  console.log('clicked on li');
});

// click on X to del task

$("ul").on("click","span", function(e){
					
  $(this).parent().fadeOut(600,function(){
				
		localStorage.removeItem('listItems');

  });
  e.stopPropagation();
});

// add new task

$("input[type='text']").keydown(function(e){
  if(e.which === 13 && $(this).val() !== ''){
    var taskTxt = $(this).val();
    $(this).val('');
    $("ul").append('<li><span><i class="far fa-times-circle"></i></span> ' + taskTxt + '</li>'); 
		if(!existing){existing = []};

 		existing.push(taskTxt);
		localStorage.setItem('listItems', existing);
		
		console.log(window.localStorage, existing);
		
  }
});

console.log('local storage content', window.localStorage, existing)

$("h1 span").click(function(){
  $("input[type='text']").fadeToggle();
});