document.addEventListener("DOMContentLoaded", function(){
	$('.preloader-background').delay(1700).fadeOut('slow');
	
	$('.preloader-wrapper')
		.delay(1700)
		.fadeOut();
});

function hospitalToggle() {
document.getElementById('Patient').style.display = "none";
document.getElementById('doctorManage').style.display = "none";
document.getElementById('manageAcc').style.display = "none";
document.getElementById('dashCards').style.display = "none";
document.getElementById('manageExists').style.display = "none";
document.getElementById('createNew').style.display = "none";
document.getElementById('patientView').style.display = "none";
document.getElementById('patientManage').style.display = "none";
document.getElementById('recordMedical').style.display = "none";
document.getElementById('Hospital').style.display = "block";
}
function patientToggle() {
document.getElementById('Hospital').style.display = "none";
document.getElementById('doctorManage').style.display = "none";
document.getElementById('manageAcc').style.display = "none";
document.getElementById('manageExists').style.display = "none";
document.getElementById('dashCards').style.display = "none";
document.getElementById('createNew').style.display = "none";
document.getElementById('patientView').style.display = "none";
document.getElementById('patientManage').style.display = "none";
document.getElementById('recordMedical').style.display = "none";
document.getElementById('Patient').style.display = "block";

}


function createNewToggle() {
document.getElementById('manageExists').style.display = "none";
document.getElementById('manageAcc').style.display = "none";
document.getElementById('doctorManage').style.display = "none";
document.getElementById('createNew').style.display = "block";
}

function manageExistToggle() {
document.getElementById('createNew').style.display = "none";
document.getElementById('doctorManage').style.display = "none";
document.getElementById('manageAcc').style.display = "none";
document.getElementById('manageExists').style.display = "block";

}

function instAccToggle() {
document.getElementById('createNew').style.display = "none";
document.getElementById('doctorManage').style.display = "none";
document.getElementById('manageExists').style.display = "none";
document.getElementById('manageAcc').style.display = "block";
}

function doctorToggle() {
document.getElementById('createNew').style.display = "none";
document.getElementById('manageExists').style.display = "none";
document.getElementById('manageExists').style.display = "none";
document.getElementById('manageAcc').style.display = "none";
document.getElementById('doctorManage').style.display = "block";
	
}
function viewPatientToggle() {
document.getElementById('patientManage').style.display = "none";
document.getElementById('recordMedical').style.display = "none";
document.getElementById('patientView').style.display = "block";
}

function managePatientToggle() {
document.getElementById('patientView').style.display = "none";
document.getElementById('recordMedical').style.display = "none";
document.getElementById('patientManage').style.display = "block";
}

function manageMedicalToggle() {
	document.getElementById('patientView').style.display = "none";
	document.getElementById('patientManage').style.display = "none";
	document.getElementById('recordMedical').style.display = "block";
	}

function formReset(){
	document.getElementById("inst_name").value = "";
	document.getElementById("head_name").value = "";
	document.getElementById("contact_mail").value = "";
	document.getElementById("contact_phno").value = "";
	document.getElementById("inst_addressBldgNo").value = "";
	document.getElementById("inst_addressStrtNo").value = "";
	document.getElementById("inst_addressLclty").value = "";
	document.getElementById("inst_addressCity").value = "";
	document.getElementById("inst_addressPnCd").value = "";
	M.toast({html: 'Form reset' , classes: 'rounded'});
}

function formCancle(){
	window.location.replace("dashboard.html");
}

