// Project (3)
// by Alex Lujan


// selcting the #-ID name input element and placing .focus()
 $('#name').focus();

 // add other option to the job role and using .hide() 

$('#other-title').hide();

$('#title').on('change', function(){   
    // this = $('#title')
  
    // this will show the option of other if event change to other
    if($('#title').val() === 'other'){   
    $('#other-title').show();
   
} else {
    // if "other is not picked then it hides"
       $('#other-title').hide();
    }
});

/////////////////////////////////////////////////////////////
/////////////////////// T-shirt section /////////////////////
/////////////////////////////////////////////////////////////

 // is hiding the color after the design is selected.
 $('#colors-js-puns').hide();

 // Change function to display associated T-Shirt colors per designs

 // we are using the return method in a true or false Return: true/false for form validation
 var shirtSelect = false;
 $('#design').change(function(){
     
    if ($('#design option:selected').val() === "js puns") {
         $('#colors-js-puns').show();
         $('#color').html('<option value="cornflowerblue">Cornflower Blue (JS Puns shirt only)</option><option value="darkslategrey">Dark Slate Grey (JS Puns shirt only)</option><option value="gold">Gold (JS Puns shirt only)</option>');
         shirtSelect = true;
         return shirtSelect;
     
        } else if ($('#design option:selected').val() === "heart js") {
         $('#colors-js-puns').show();
         $('#color').html('<option value="tomato">Tomato (I &#9829; JS shirt only)</option><option value="steelblue">Steel Blue (I &#9829; JS shirt only)</option><option value="dimgrey">Dim Grey (I &#9829; JS shirt only)</option>');
         shirtSelect = true;
         return shirtSelect;
     
        } else {
         $('#colors-js-puns').hide();
         shirtSelect = false;
         return shirtSelect;
     }
 });

/////////////////// Activities Section //////////////////
///////////////////            ////////////////////

// Section is a bit longer that I would like. Would be great to refactor, by assigning each activity to an object literal that has key:value pairs for cost and time of day. This way we can use a jQuery .each() function to loop over the activities and add/remove classes & append/remove the unavailable methods as well as update the total cost.

    // Set global variables for different section activities.
    var Frameworks = $("input[name='js-frameworks'");
    var Libraries = $("input[name='js-libs']");
    var express = $("input[name='express']");
    var node = $("input[name='node']");

//   Add total cost of total activities 
    var totalCost = 0;  // it starts at "0" and adds up the other option 
    $('.activities').append('<div id="total"></div>');  //.activies is append to the div

    var updateCost = function (cost) {
        totalCost += cost;
       document.getElementById("total").innerHTML = "Total: $" + totalCost;
    };  

    $("input[name='all']").change(function () {
                if ($(this).prop("checked")) {
            updateCost(200);                 //if "main conference is picked then add" if take away
        } else {
            updateCost(-200);
        }
    });

    Frameworks.change(function () {
        if ($(this).prop("checked")) {
           express.prop("disabled", true);
            express.parent().addClass("disabled");
            express.parent().append('<span class="unavailable">&nbsp;&nbsp;&nbsp;&nbsp;Unavailable</span>');
            updateCost(100);
        } else {                                            // if framework is selected then add 100 if not take away
            express.prop("disabled", false);
            express.parent().removeClass("disabled");
            express.parent().find('.unavailable').remove();
            updateCost(-100);
       }
    });

    Libraries.change(function () {
        if ($(this).prop("checked")) {
            node.prop("disabled", true);
            node.parent().addClass("disabled");
            node.parent().append('<span class="unavailable">&nbsp;&nbsp;&nbsp;&nbsp;Unavailable</span>');
           updateCost(100);
        } else {                                      // if liberies is selected add 100 if not take away 100
            node.prop("disabled", false);
           node.parent().removeClass("disabled");
           node.parent().find('.unavailable').remove();
            updateCost(-100);
       }
    });

   express.change(function () {
        if ($(this).prop("checked")) {
           Frameworks.prop("disabled", true);
            Frameworks.parent().addClass("disabled");
            Frameworks.parent().append('<span class="unavailable">&nbsp;&nbsp;&nbsp;&nbsp;Unavailable</span>');
            updateCost(100);
        } else {                                                // if express is selected add 100 if not take away 100
            Frameworks.prop("disabled", false);
           Frameworks.parent().removeClass("disabled");
            Frameworks.parent().find('.unavailable').remove();
            updateCost(-100);
        }
    });

    node.change(function () {
       if ($(this).prop("checked")) {
           Libraries.prop("disabled", true);
            Libraries.parent().addClass("disabled");
           Libraries.parent().append('<span class="unavailable">&nbsp;&nbsp;&nbsp;&nbsp;Unavailable</span>');
            updateCost(100);
       } else {                                                // if node i picked add 100 or if not selected take away 100
            Libraries.prop("disabled", false);
            Libraries.parent().removeClass("disabled");
            Libraries.parent().find('.unavailable').remove();
            updateCost(-100);
        }
    });

    $("input[name='build-tools']").change(function () {
        if ($(this).prop("checked")) {
            updateCost(100);
        } else {
            updateCost(-100);
        }
    });                                        // if "build tools is selected or "npm" add 100 if not take away 200

    $("input[name='npm']").change(function () {
        if ($(this).prop("checked")) {
            updateCost(100);
        } else {
            updateCost(-100);
        }
   });


//**************************** FORM VALIDATION FUNCTIONS AND EVENTS *****************************//


// all hiding erros are hidding unitl selected or a error is made by the user , this will advice them to complete the form correctly
// .before is used to attached  anything from the right to the left 
// all errors are hiding.


$('label[for="name"]').before('<label class="error" id="name-error"><font color="white">Please Enter Your Name. This field can not be Empty.</font></label>');
$('label[for="mail"]').before('<label class="error" id="email-error"><font color="white">Please enter a VALID email address.</font></label>');
$('.activities legend').before('<label class="error" id="activity-error"><font color="white">You MUST select at least one activity.</font></label>');
$('#credit-card').before('<label class="error" id="cc-empty-error"><font color="white">Credit Card Information Needed!</font></label>');
$('#credit-card').before('<label class="error" id="cc-number-error"><font color="white">Please enter a valid credit card number between 13-16 digits</font></label>');
$('#credit-card').before('<label class="error" id="cc-zip-error"><font color="white">Please enter a 5 digit ZIP code</font></label>');
$('#credit-card').before('<label class="error" id="cc-cvv-error"><font color="white">Please enter a 3 digit CVV number</font></label>');
$('.error').hide();

// Name validation function 

const validName = (name) => {
    let valid = /^\S/.test(name);        //regex for name                             
    if (valid) {
        $('#name-error').hide();    // if true then hide error , if not show error                                     
        return true;
    } else {
        $('#name-error').show();                                   
        return false;
    }
}

// Real-time name validation

$('#name').on('input', (e) => {                                        
    if ($('#name').val() == '') {                                        
        validName($('#name').val());                       
    } else {
        $('#name-error').hide();                                      
    }
});

// Email validation function.

const validEmail = (email) => {
    let valid = /^[^@]+@[^@.]+\.[a-z]+$/i.test(email);  
    if (valid) {
        $('#email-error').hide();                        
        return true;
    } else {
        $('#email-error').show();                    
        return false;
    }
}

// Real-time validation of email 

$('#mail').on('input', () => {                             
    if ($('#mail').val() !== '') {                           
        validEmail($('#mail').val());                        
    } else {
        $('#email-error').hide();                         
    }
});

// Activities validation function to
// hide and or show activities that are "checked".

const validActivities = () => {

    if ($('.activities input:checked').length > 0) {              
        $('#activity-error').hide();                               
        return true;
    } else {
        $('#activity-error').show();                           
        return false;
    }
}

//Real-time validation of activities is 
//listening for input of chosen activities.

$('.activities').on('input', () => {                     
    validActivities();                                    
})

// Will hide errors associated with credit card. 

$('#payment').on('change', function () {
    if ($('#payment').val() === 'paypal' || $('#payment').val() === 'bitcoin') {
        $('#cc-cvv-error').hide();
        $('#cc-zip-error').hide();
        $('#cc-number-error').hide();
        $('#cc-empty-error').hide();
    }
});

// Credit Card validation  is selected then it will TEST the the formula of the let valid 
// Will produce an error message if field is left empty or or wrong input.

const validCardNumber = (cc) => {
    if ($('#payment').val() === 'credit card') {                     
        let valid = /^\d{13,16}$/.test(cc);                           

        if (valid) {
            $('#cc-number-error').hide();
            $('#cc-empty-error').hide();                             
            return true;
        } else if (cc !== '') {                                   
            $('#cc-empty-error').hide();                        
            $('#cc-number-error').show();                       
        } else {
            $('#cc-number-error').hide();
            $('#cc-empty-error').show();                  
            return false;
        }
    }
}

// Real-time validation of credit card listening for cc number input by user.  Will show error message if field is left empty or input wrong.

$('#cc-num').on('input', () => {                          
    if ($('#cc-num').val() !== '') {                       
        validCardNumber($('#cc-num').val())                 
    } else if ($('#cc-num').val() == '') {               
        $('#cc-empty-error').show();                   
    } else {
        $('#cc-number-error').show();              
    }
});

// Zip code validation function will test for proper zip code sequence.  If improper will produce an error message

const validZip = (zip) => {
    if ($('#payment').val() === 'credit card') {                
        let valid = /^\d{5}$/.test(zip);                         

        if (valid) {                                           
            $('#cc-zip-error').hide();                          
            return true;
        } else {
            $('#cc-zip-error').show();                     
            return false;
        }
    }
}

// Real-time validation of zip code to listen for proper number input for zip code.  Error message produce if input invalid.

$('#zip').on('input', () => {                           
    if ($('#zip').val() !== '') {                        
        validZip($('#zip').val());                        
    } else {
        $('#cc-zip-error').hide();                    
    }
});

// Cvv validation function test for a valid three digit input for cvv code.  Error message will be produced if invalid.

const validCVV = (cvv) => {
    if ($('#payment').val() === 'credit card') {                   
        let valid = /^\d{3}$/.test(cvv);                           

        if (valid) {                                              
            $('#cc-cvv-error').hide();                              
            return true;
        } else {
            $('#cc-cvv-error').show();                         
            return false;
        }
    }
}

// Real-time validation of cvv - makes sure field is not empty and input properly.  Error produced if invalid.

$('#cvv').on('input', () => {                          
    if ($('#cvv').val() !== '') {                     
        validCVV($('#cvv').val());                    
    } else {
        $('#cc-cvv-error').hide();                  
    }
});

// Checks the validity of all fields at simultaneously. 
const isValid = () => {

    // Credit Card option: Valid if all fields are input properly.
    
    if ($('#payment').val() === 'credit card') {
        if (validName($('#name').val()) && validEmail($('#mail').val()) && validActivities() && validCardNumber($('#cc-num').val()) &&
            validZip($('#zip').val()) && validCVV($('#cvv').val())) {
            return true;                                                            
        } else {
            validName($('#name').val());
            validEmail($('#mail').val());
            validActivities();
            validCardNumber($('#cc-num').val());
            validZip($('#zip').val());
            validCVV($('#cvv').val());
            return false;                                                   
        }

    // Credit Card is not chosen: 
        
    } else {
        if (validName($('#name').val()) && validEmail($('#mail').val()) && validActivities()) {
            return true;                                                                             
        } else {
            validName($('#name').val());
            validEmail($('#mail').val());
            validActivities();
            return false;                                                                      
        }
    }
}

// Submit Button: This will prevents form being submitted if errors are present.

$('form').on('submit', (e) => {
    if (isValid() === true) {
        window.location.reload();                                                        

    } else {
        e.preventDefault();                                                            
    }
});


/////////////////// Payment Section ///////////////////


$('#paypal, #bitcoin').hide();

//Set credit card as default method
$('#payment').val("credit card");

$('#payment').change(function(){
    
    if ($('#payment option:selected').val() === "paypal") {
		$('#credit-card, #bitcoin').hide();
		$('#paypal').show();
    
    } else if ($('#payment option:selected').val() === "bitcoin") {
		$('#credit-card, #paypal').hide();
		$('#bitcoin').show();
    
    } else {
		$('#credit-card').show();
		$('#paypal, #bitcoin').hide();
	}
});

// Submit Button: This will prevents form being submitted if errors are present.

$('form').on('submit', (e) => {
    if (isValid() === true) {
        window.location.reload();                                                        

    } else {
        e.preventDefault();                                                            
    }
});
