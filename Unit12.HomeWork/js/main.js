var index = 1;

$(function () {
	$('.next').on('click',function() {
		switch (index) {
			case 1:
				if (checkTab1()) {
					NextTab(1)
				}
				break;
			case 2:
				if (checkTab2()) {
					if ($('#age').val() > 18) {
						$('#ib2').css('display','none');
						NextTab(3)
					} else {
						NextTab(2)
					}
				}
				break;
		}
	})
	$('.previous').on('click',function() {
		switch (index) {
			case 1:
				break;
			case 2:
				PreviousTab(2);
				break; 
			case 3:
				PreviousTab(3);
				break;
			case 4:
				PreviousTab(3);
				$('#ib4').css('display','none');
				break;
		}
	})
	$('.finish').on('click',function() {
		if ($('#check').prop('checked')) {
			alert('Thành Công')
			$('#errCheckBox').html('')
		} else {
			$('#errCheckBox').html('Mời tích vào')
		}
	})
	$('#check').on('change',function() { 
		if ($('#check').prop('checked')) {
			$('#errCheckBox').html('')
		} else {
			$('#errCheckBox').html('Mời tích vào')
		}
	})

})
function checkTab1() {
	var name = $('#nameTab1').val().trim();
	var passWord = $('#passwordTab1').val().trim();
	var rePassWord = $('#rePasswordTab1').val().trim();
	var errName = false;
	var errPassWord = false;
	var errRePassWord = false;

	if (name == "") {
		$('#errorNameTab1').html('Mời nhập tên')
	}else {
		$('#errorNameTab1').html('')
		errName = true;
	}

	if (passWord == "") {
		$('#errorPasswordTab1').html('Mời nhập mật khẩu')
	} else {
		$('#errorPasswordTab1').html('')
	}

	if (rePassWord == "") {
		$('#errorRePasswordTab1').html('Mời nhập đúng nhận mật khẩu ở trên')
	} else {
		$('#errorRePasswordTab1').html('')
	}

	if ((passWord == rePassWord) && (rePassWord != "" ) && (passWord != "")) {
		$('#errorRePasswordTab1').html('')
		errPassWord = true;
		errRePassWord = true;
	} else{
		$('#errorRePasswordTab1').html('Mời nhập đúng mật khẩu ở trên')
		errPassWord = false;
		errRePassWord = false;
	}

	if (errPassWord == true && errRePassWord==true&&errName==true) {
		return true;
	} else {
		return false;
	}
}
function checkTab2() {
	var firstName = $('#firstNameTab2').val().trim();
	var lastName = $('#lastName').val().trim();
	var email = $('#email').val().trim();
	var age = $('#age').val().trim();
	var errFirstName = false;
	var errlastName = false;
	var erremail = false;
	var errage = false;

	if (firstName == "") {
		$('#errorfirst').html('Mời nhập tên đệm')
	} else {
		$('#errorfirst').html('')
		errFirstName = true;
	}

	if (lastName == "") {
		$('#errorlast').html('Mời nhập tên')
	} else {
		$('#errorlast').html('')
		errlastName = true;
	}

	if (email == "") {
		$('#errorEmail').html('Mời nhập email')
	} else if(!IsEmail(email)) {
		$('#errorEmail').html('Mời nhập đúng định dạng email')
	} else {
		$('#errorEmail').html('')
		erremail = true;
	}

	if (age == "") {
		$('#errorAge').html('Mời nhập tuổi')
	} else {
		$('#errorAge').html('')
		errage = true;
	}

	if (errFirstName == true && errlastName == true && erremail == true && errage == true) 
		return true;
	else 
		return false;
}

function NextTab(e) {
	$('#ib'+e).hide(1000);
	$('#ib'+(e+1)).show(1000)
	index = e+1
	
}

function PreviousTab(e) {
	$('#ib'+e).hide(1000);
	$('#ib'+(e-1)).show(1000)
	index = e-1;
}

 function IsEmail(email) {
  var regex = /^([a-zA-Z0-9_\.\-\+])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
  if(!regex.test(email)) {
    return false;
  }else{
    return true;
  }
}
