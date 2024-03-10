let form = document.getElementById('container');
let submitSuccess = document.getElementById('submit-success');

function showForm(){
    form.style.display = "block";
    submitSuccess.style.display = "none";
    form.scrollIntoView({behavior:"smooth"});
}

function submit(){
    form.style.display = "none";
    submitSuccess.style.display = "block";
    alert(`You have Submitted the form Successfully`);
}