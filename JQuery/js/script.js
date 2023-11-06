$(document).ready(function(){
	$("body").keyup(function(e){
		if(e.keyCode==13)
		{
			eql();
		}
		else if(e.keyCode == 8)
		{
			del();
		}	
		else if(e.keyCode == 46)
		{
			clr();
		}	
	})
})
 	


function insert(num)
{
	$("#inputbox").val($("#inputbox").val() + num)
		
}

function clr()
{
	$("#inputbox").val("");
}

function del()
{
	let value = $("#inputbox").val();

	$("#inputbox").val(value.substring(0, value.length-1))

}

function eql()
{
	let result = eval($("#inputbox").val())
	$("#inputbox").val(result);
}