$(".submitted").hide();

var forms = document.getElementById('safari-form');
console.log(forms);

for (var i = 0; i < forms.length; i++) {
    forms[i].noValidate = true;
    console.log("got here");
        //Prevent submission if checkValidity on the form returns false.
}

$("form").on("submit", function(){
	if (!event.target.checkValidity()) {
        	console.log("got here");
        	alert("Please fill out form");
            event.preventDefault();	
            //Implement you own means of displaying error messages to the user here.
    }else{

			var email = $("input[name='email']").val();
			var firstname = $("input[name='first']").val();
			var lastname = $("input[name='first']").val();
			var school = $("#school").val();
			var grade = $("#grade").val();
			var art = $("input[name='art']:checked").val();
			var presenting = $("input[name='presenting']:checked").val();
			var html = $("input[name='html']:checked").val();
			var css = $("input[name='css']:checked").val();
			var programming = $("input[name='programming']:checked").val();
			var experience="No answer";

			if ($("textarea").val().length > 0) {
				experience = $("textarea").val();
			} 


			var excites = $("input[name='excites']").val();
			var allergies = $("input[name='allergies']").val();
			
			// console.log(experience.length);
			var form_url ="https://docs.google.com/forms/d/e/1FAIpQLSfB81GCPgZVh9Fa0TGUqiST_WSBG2tnemX3Ao2Gv5n6SIzj0g/formResponse?";
			var whole_url =form_url+"emailAddress="+encodeURIComponent(email)
				+"&entry.237733927="+encodeURIComponent(firstname)
				+"&entry.5893991="+encodeURIComponent(lastname)
				+"&entry.242590037="+school
				+"&entry.423828352="+grade
				+"&entry.1379881818="+art
				+"&entry.653550099="+presenting
				+"&entry.318330051="+html
				+"&entry.2052573965="+css
				+"&entry.2132472040="+programming
				+"&entry.687218358="+encodeURIComponent(experience)
				+"&entry.675507291="+encodeURIComponent(excites)
				+"&entry.276467424="+encodeURIComponent(allergies)
				+"&emailReceipt=true";
			$.ajax({
				type:"post", 
				url: whole_url
			}).done(function(response){
					$("form").hide();
					$(".submitted").show();
			});

			$("form").hide();
			$(".submitted").show();
	}
	return false
});


