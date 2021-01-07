//Check off tasks

$("ul").on("click", "li", function(){
  $(this).toggleClass("completed");
  console.log('clicked on li');
});

// click on X to del task

$("ul").on("click","span", function(e){
					
  $(this).parent().fadeOut(600,function(){
				
		console.log(this.textContent ,  'del SPAN TXT');
		console.log(window.localStorage, 'storage before del')
		window.localStorage.removeItem('task');
		console.log(window.localStorage, 'storage after del')
    $(this).remove();

  });
  e.stopPropagation();
});

// add new task

$("input[type='text']").keydown(function(e){
  if(e.which === 13 && $(this).val() !== ''){
    var taskTxt = $(this).val();
    $(this).val('');
    $("ul").append('<li><span><i class="far fa-times-circle"></i></span> ' + taskTxt + '</li>'); 
		
		window.localStorage.setItem('task', taskTxt);
		console.log(window.localStorage, 'added');
		
  }
});

console.log(window.localStorage, 'local storage content')

$("h1 span").click(function(){
  $("input[type='text']").fadeToggle();
});