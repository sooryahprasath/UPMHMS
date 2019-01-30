function hospitalToggle() {
document.getElementById('Patient').style.display = "none";
document.getElementById('manageExist1').style.display = "none";
document.getElementById('createNew').style.display = "none";
document.getElementById('patientView').style.display = "none";
document.getElementById('patientManage').style.display = "none";
document.getElementById('Hospital').style.display = "block";
}
function patientToggle() {
document.getElementById('Hospital').style.display = "none";
document.getElementById('manageExist1').style.display = "none";
document.getElementById('createNew').style.display = "none";
document.getElementById('patientView').style.display = "none";
document.getElementById('patientManage').style.display = "none";
document.getElementById('Patient').style.display = "block";
}


function createNewToggle() {
document.getElementById('manageExist1').style.display = "none";
document.getElementById('createNew').style.display = "block";
}

function manageExistToggle() {
document.getElementById('createNew').style.display = "none";
document.getElementById('manageExist1').style.display = "block";
}

function viewPatientToggle() {
document.getElementById('patientManage').style.display = "none";
document.getElementById('patientView').style.display = "block";
}

function managePatientToggle() {
document.getElementById('patientView').style.display = "none";
document.getElementById('patientManage').style.display = "block";
}
