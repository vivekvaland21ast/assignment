
$(document).ready(function () {
    $("#q1").css({ "background-color": "yellow", "font-size": "20px", "font-family": "Courier New" });
    $(".q2").css({ "background-color": "red", "font-size": "20px", "font-family": "Courier New" });
    $("#q4").click(function () {
        $("#msg").toggle()
    });
    $(".q5").click(function () {
        $(".q5").toggleClass("yellow");
    });
    $("#q6_style").click(function () {
        $("#q6").css("color", "red")
    });
    $("#q8_button").click(function () {
        var textBoxData = $("#q8_input").val();
        console.log(textBoxData);
        $("#q8_msg").text(textBoxData);
    });
    $(document).ready(function () {
        $("#q9_msg").append('<div id = "newElement"></div>');
        $("#newElement").text("Welcome user");
    });
    $(document).ready(function () {
        $("#q10_msg").append('<div id = "newElement1"></div><br><div id = "newElement2"></div>')
        $("#newElement1").css("background-color", "yellow");
        $("#newElement1").text("Welcome message 1");
        $("#newElement2").css("background-color", "yellow");
        $("#newElement2").text("Welcome message 2");
    })
    $("#show_msg").click(function () {
        $("#q11_msg").show();
    })
    $("#hide_msg").click(function () {
        $("#q11_msg").hide();
    })
    $("#q12_Togglemsg").click(function () {
        $("#q12_msg").toggle();
    });
    $("#q13_msg").click(function () {
        $("#q13").text("vivek");
    });
    $("#getLength").click(function () {
        var textLength = $("#txtLength").val().length;
        //console.log(textLength);
        $("#length").text("Text lenght is : " + textLength);
    })
    $(document).ready(function () {
        $("#txtLength15").on("input", function () {
            var textLength1 = $("#txtLength15").val().length;
            $("#length15").text("Text lenght is : " + textLength1);
        });
    });
    $("#textInputPro").on("input", function () {

        var text = $(this).val();
        var textLength = text.length;
        var percentage = (textLength / 100) * 100;
        $("#q16length").text("Text length is : " + textLength);
        $("#textLengthProgress").attr("value", percentage);
    });
    $(document).ready(function () {
        $("#txtBox").focusout(function () {
            if ($(this).val().length > 10) {
                $(this).addClass("error");
            } else {
                $(this).removeClass("error");
            }
        });
    });
    $(document).ready(function () {
        $('#num1, #num2').on('input', function () {
            if ($('#num1').val() != '' && $('#num2').val() != '') {
                $('#addBtn').prop('disabled', false);
                $('#subtractBtn').prop('disabled', false);
                $('#multiplyBtn').prop('disabled', false);
                $('#divideBtn').prop('disabled', false);
            } else {
                $('#addBtn').prop('disabled', true);
                $('#subtractBtn').prop('disabled', true);
                $('#multiplyBtn').prop('disabled', true);
                $('#divideBtn').prop('disabled', true);
            }
        });

        $('#addBtn').click(function () {
            var result = parseFloat($('#num1').val()) + parseFloat($('#num2').val());
            $('#result').text("Result: " + result);
        });

        $('#subtractBtn').click(function () {
            var result = parseFloat($('#num1').val()) - parseFloat($('#num2').val());
            $('#result').text("Result: " + result);
        });

        $('#multiplyBtn').click(function () {
            var result = parseFloat($('#num1').val()) * parseFloat($('#num2').val());
            $('#result').text("Result: " + result);
        });

        $('#divideBtn').click(function () {
            var result = parseFloat($('#num1').val()) / parseFloat($('#num2').val());
            $('#result').text("Result: " + result);
        });

        $(document).ready(function () {
            $(window).scroll(function () {
                if ($(this).scrollTop() > 0) {
                    $('#backToTopBtn').fadeIn();
                } else {
                    $('#backToTopBtn').fadeOut();
                }
            });
            $('#backToTopBtn').click(function () {
                $('html, body').animate({ scrollTop: 0 }, 800);
                return false;
            });
        });

        $("#q22_size").click(function () {
            $("#q22_size").css("font-size", "20px");
        });
        $("#login").click(function () {
            var name = "vivek";
            var pass = "1234";
            var inputName = $("#name").val(); 
            var inputPass = $("#password").val(); 
            
            if (inputName === name && inputPass === pass) { 
                $("#name").hide();
                $("#password").hide();
                $("#q20_msg").text("Welcome user to your profile");
            } else {
                $("#name").hide();
                $("#password").hide();
                $("#q20_msg").text("Invalid username and password!! Plzzz try again");
            }
        });
        
    });
})