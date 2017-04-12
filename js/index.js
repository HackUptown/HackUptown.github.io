

$.ajax({
	type:"post", 
	url:"https://docs.google.com/forms/d/e/1FAIpQLSfB81GCPgZVh9Fa0TGUqiST_WSBG2tnemX3Ao2Gv5n6SIzj0g/formResponse?emailAddress=adr%40gmail.com&entry.237733927=firstname&entry.5893991=lastname&entry.242590037=Goudy&entry.423828352=7th&entry.1379881818=2&entry.653550099=1&entry.318330051=1&entry.2052573965=1&entry.2132472040=1&entry.675507291=money&emailReceipt=true"
}).done(function(response){
	console.log(response);
});

// var form_url ="https://docs.google.com/forms/d/e/1FAIpQLSfB81GCPgZVh9Fa0TGUqiST_WSBG2tnemX3Ao2Gv5n6SIzj0g/formResponse?"
// var email = "emailAddress=" + email
// &entry.237733927=firstname
// &entry.5893991=lastname
// &entry.242590037=Goudy
// &entry.423828352=7th
// &entry.1379881818=2
// &entry.653550099=1
// &entry.318330051=1
// &entry.2052573965=1
// &entry.2132472040=1
// &entry.675507291=money
// &emailReceipt=true



// var string = "as@gmail.com" + "hello entry";

// var uri = encodeURIComponent(string);

// console.log(uri);


// entry.237733927=Adriana&entry.5893991=C&entry.797610137=adri%40gmail.com&entry.242590037=Latin&entry.423828352=6th&entry.1379881818=1&entry.653550099=1&entry.318330051=1&entry.2052573965=1&entry.2132472040=1&entry.675507291=money&emailReceipt=true