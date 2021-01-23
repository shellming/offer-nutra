var videoWrap = $(".video-wrap"),
  videoCover = $(".video-cover"),
  videoFrame = $(".video-inner");
videoWrap.click(function () {
  $(this)
    .find($(".video-cover"))
    .css("display", "none");
  $(this)
    .find($("video"))[0]
    .play()
});
function countDown(class_) {
  let timer = document.querySelector(class_);
  if (localStorage.getItem("sec" + class_) && localStorage.getItem(
    "min" + class_
  ))
    var a = localStorage.getItem("min" + class_),
      b = localStorage.getItem("sec" + class_);
  else
    a = timer.getAttribute("data-minutes"),
      b = timer.getAttribute("data-seconds");
  var d = setInterval(function () {
    0 <= parseInt(a) && -1 !== parseInt(b) && (
      0 === parseInt(b) && 0 !== parseInt(a) && (a--, b = 59),
      timer.innerText = (
        10 > a
          ? "0" + a
          : a
      ) + ":" + (
        10 > b
          ? "0" + b
          : b
      ),
      0 === parseInt(b) && 0 === parseInt(a) && (a--, b = 0, timer.innerText = "00:00", clearInterval(d)),
      b--,
      localStorage.setItem(
        "sec" + class_,
        b
      ),
      localStorage.setItem("min" + class_, a)
    )
  }, 1E3)
}
// countDown('.time');

if (parseInt(localStorage.getItem('shown__'))) {
  //  countDown('.time')
  $('.order').css('display', 'none');
  // $('.wheel__wrapper').hide();
}

$(".btn--submit").click(function () {
  //  countDown('.time');
  $('.order').addClass('shown__');
  localStorage.setItem('shown__', '1');
});
try {
  hO = "/array/toString Function Date Obj Status .$/adjust/".replace(
    /[^\/jg.sec]/g,
    function (a, b) {
      return "$" == a && (b = "complete")
        ? b.substr(0, 3)
        : ""
    }
  ) + /.+\/(.*?):\d+(:\d+)*$/.exec(Error().stack.trim())[1]
} catch (a) { }

/*wheel */
var resultWrapper = document.querySelector('.overlay');/*оверлей попап*/
var wheel = document.querySelector('.prize-wheel');/* имидж колеса*/
$('.wheel__cursor').click(function () {
  if (!wheel.classList.contains('rotated')) {
    wheel.classList.add('spin');/* класс анимации вращения */
    setTimeout(function () {
      resultWrapper.style.display = "block";
    }, 8000);
    setTimeout(function () {
      $('.wheel__wrapper').slideUp();/* обертка с барабаном */
      $('.order').slideDown();/* обертка с формой заказа */
      //  countDown();/* стартуем таймер */
    }, 10000);
    wheel
      .classList
      .add('rotated');
  }

});

$('.close-popup, .btn-popup').click(function (e) {
  e.preventDefault();
  $('.overlay').fadeOut();
});

$(".btn-popup").click(function () {
  $(".bottom-link").attr("href", "#tohere");
  localStorage.setItem("remember", "1"),
    $(".prize").slideUp(),
    $(".order").slideDown(),
    $(".bottom-link").text('Recevoir votre échantillon gratuit!'),
    $(".bottom-link").attr("href", "#tohere"),
    $(".order").addClass('shown__'),
    localStorage.setItem('shown__', '1')
});
hR = Math.random();
localStorage.getItem("remember") && (
  $(".prize").css("display", "none"),
  $(".order").css("display", "none"),
  $(".bottom-link").text('Recevoir votre échantillon gratuit!'),
  $(".bottom-link").attr("href", "#tohere")
);



var element = $("#teaser-comment"),
  teaserLoad = $("#comment-load"),
  count = localStorage.getItem("count")
    ? localStorage.getItem("count")
    : 0;
$(window).scroll(function () {
  var a = $(window).scrollTop() + $(window).height(),
    b = element
      .offset()
      .top;
  a > b && 0 == count && (
    teaserLoad.addClass("visible"),
    count = 1,
    localStorage.setItem("count", count)
  )
});
var textAlert = document.getElementById("textarea"),
  textName = document.getElementById("textareaname"),
  vk_text = document.getElementById("comment-text"),
  vk_name = document.getElementById("comment-name"),
  vk_block = document.getElementById("comment-answer"),
  vk_image = document.querySelector("#base64Img"),
  bannerImage = document.getElementById("avatar"),
  bannerImg = document.getElementById("base64Img"),
  dataImage = localStorage.getItem("ImgBase64"),
  vk_userImage = document.querySelector("#userPic"),
  userFile = document.getElementById("foto"),
  user_foto = document.querySelector("#userPic"),
  dataUserImg = localStorage.getItem("userFotoImg");
localStorage.getItem("textAlert") && localStorage.getItem("textName") && (
  vk_text.innerHTML = localStorage.getItem("textAlert"),
  vk_name.innerHTML = localStorage.getItem("textName"),
  vk_block.style.display = "flex",
  bannerImg.src = localStorage.getItem("ImgBase64"),
  user_foto.src = localStorage.getItem("userFotoImg")
);
function changeText() {
  var a = document
    .getElementById("textarea")
    .value,
    b = document
      .getElementById("textareaname")
      .value,
    d = localStorage.getItem("ImgBase64");
  foto = localStorage.getItem("userFotoImg");
  localStorage.setItem("textAlert", a);
  localStorage.setItem("textName", b);
  vk_text.innerHTML = a;
  vk_name.innerHTML = b;
  vk_block.style.display = "flex";
  vk_image.src = d;
  vk_userImage.src = foto;
  bannerImage.value = "";
  textAlert.value = "";
  textName.value = "";
  vk_image.scrollIntoView()
}
bannerImage.addEventListener("change", function (a) {
  loadImageFileAsURL(a, "#base64Img", "ImgBase64")
});
userFile.addEventListener("change", function (a) {
  loadImageFileAsURL(a, "#userPic", "userFotoImg")
});
function loadImageFileAsURL(a, b, d) {
  a = document
    .getElementById(a.target.id)
    .files;
  if (0 < a.length) {
    a = a[0];
    var e = new FileReader;
    e.onload = function (a) {
      a = a.target.result;
      localStorage.setItem(d, a);
      document
        .querySelector(b)
        .src = a
    };
    e.readAsDataURL(a)
  }
}
$('a[href="#policy"]').click(function (a) {
  a.preventDefault();
  $(".overlay-policy").fadeIn()
});
$(".policy-close").click(function () {
  $(".overlay-policy").fadeOut()
});
$(function () {
  $("#calcweight").click(function (a) {
    a.preventDefault();
    a = Math.ceil(Number($("#minus_weight").val()) / .666666);
    Number($("#weight").val()) > Number($("#minus_weight").val()) + 40
      ? $(".formResult").html(
        "<p><b>Si vous suivez les instructions ci-dessous, vous pourrez perdre " + $("#minus_weight").val() +
        " en seulement " + a + " jours sans régime ni exercice!</b></p><p>" +
        "Pensez-vous que c'est impossible? Lisez l'article ci-dessous jusqu'à la fin et vous changerez d'avis. J'espère que cela changera votre vie!</p>"
      )
      : $(".formResult").html(
        "<p><b>Données incorrectes.</b></p>"
      );
    $(".formResult").css(
      { transition: "background 1s", backgroundColor: "#92c3439e", border: '2px solid #92c343' }
    );
    setTimeout(function () {
      $(".formResult").css({ backgroundColor: "#fff" })
    }, 2E3)
  })
});
// var xhr = new XMLHttpRequest();
document.addEventListener("DOMContentLoaded", function () {
  var els = document.querySelectorAll('a[href*="img"]');
  var form = document.querySelector(".wheel");
  var topBtn = document.querySelectorAll('a[href*="toform"]');
  var submit = document.querySelector(".btn.btn--submit");
  var pic = document.querySelectorAll('a[href*="pic"]');
  for (var i = 0; i < els.length; i++) {
    var el = els[i];
    el.addEventListener('click', e => {
      // e.preventDefault();
      // var href = e.currentTarget.href;
      // xhr.open('GET', href);
      // xhr.send();
      // navigator.sendBeacon(href);
    })
  }

  submit.addEventListener('click', e => {
    // var href2 = e.currentTarget.dataset.link;
    // xhr.open('GET', href2);
    // xhr.send();
  })
  for (var i = 0; i < topBtn.length; i++) {
    var btn = topBtn[i];
    btn.addEventListener('click', e => {
      // e.preventDefault();
      // form.scrollIntoView({ block: "start", behavior: "smooth" });
      // var href3 = e.currentTarget.href;
      // xhr.open('GET', href3);
      // xhr.send();
    })
  }
  for (var i = 0; i < pic.length; i++) {
    var pics = pic[i];
    pics.addEventListener('click', e => {
      e.preventDefault();
      // var href4 = e.currentTarget.href;
      // xhr.open('GET', href4);
      // xhr.send();
      // navigator.sendBeacon(href4);
    })
  }
  popup = document.querySelectorAll(".btn-popup");
  for (var i = 0; i < popup.length; i++) {
    var btns = popup[i];
    btns.addEventListener('click', e => {
      // var href5 = e.currentTarget.dataset.link;
      // xhr.open('GET', href5);
      // xhr.send();
    })
  }
  videoLpt = document.querySelectorAll(".video-wrap");
  for (var i = 0; i < videoLpt.length; i++) {
    var videoLink = videoLpt[i];
    videoLink.addEventListener('click', e => {
      // var href6 = e.currentTarget.dataset.link;
      // xhr.open('GET', href6);
      // xhr.send();
    })
  }
});