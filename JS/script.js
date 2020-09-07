$(function () {
    ajaxLoad()
    $('#send').on('click', function (event) {
        xyr()
        if(checkY(y, r, x)){
            params = 'X=' + x + '&' + 'Y=' + y + '&' + 'R=' + r;
            ajaxPost(params)
        }
        event.preventDefault()
    })
    $('#clear').on('click', function (){
        ajaxClear()
    })
    $('.x-button').on('click', function (){
        xyr()
        checkY(y, r, x)
    })
    $('.yInput').on('input', function (){
        xyr()
        checkY(y, r, x)
    })
    $('.rInput').on('input', function (){
        xyr()
        checkY(y, r, x)
    })
})

function xyr(){
    y = $('.yInput').val()
    r = $('.rInput').val()
    $('.x-button').each(function() {
        if ($(this).hasClass('x-button-active')){
            x = $(this).find('span').text();
        }
    });
}

function checkY(y, r, x) {
    if (!y) {
        showError('<br>Вы не ввели Y')
        return false
    } else if (y < -3 || y > 5) {
        showError('<br>Y не принадлежит [-3:5]')
        return false
    } else if (isNaN(y)) {
        showError('<br>Y должен быть числом')
        return false
    } else {
        $('.error').html('')
        setPoint(y, x, r)
        return true

    }
}
function ajaxPost(params) {
    let request = new XMLHttpRequest()
    request.onreadystatechange = function () {
        if (request.readyState === 4 && request.status === 200) {
            $('.result').append(request.responseText);
        }
    }
    request.open('post', 'php/Request.php')
    request.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    request.send(params)
}

function showError(message) {
    $('.error').css({'color': 'white', 'font-size': 'medium'}).html(message)
}
function setPoint(y, x, r) {
    $('#point').attr("cx", (x * 100 / r + 150))
        .attr("cy", (y * -100 / r + 150));
}
function ajaxClear() {
    let request = new XMLHttpRequest()
    request.onreadystatechange = function () {
        if (request.readyState === 4 && request.status === 200) {
            $('.resultFromPhp').remove();
        }
    }
    request.open('post', 'php/Clear.php')
    request.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    request.send()
}
function ajaxLoad() {
    let request = new XMLHttpRequest()
    request.onreadystatechange = function () {
        if (request.readyState === 4 && request.status === 200) {
            $('.table').append(request.responseText);
        }
    }
    request.open('post', 'php/Load.php')
    request.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    request.send()
}