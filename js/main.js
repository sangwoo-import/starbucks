const badgeEL=document.querySelector('header .badges');
const toTopEl= document.querySelector('#to-top');

window.addEventListener('scroll', _.throttle(function(){
  console.log(window.scrollY);
  if (window.scrollY > 500) {
     //배지 숨기기 위치 :500 이상이면
     // gsap.to(요소,지속시간,옵션);
    gsap.to(badgeEL,.6,{
      opacity:0,
      display:'none'
    });
    //버튼 보이기 !
    gsap.to(toTopEl,.2 ,{
      x: 0
    });
  }  
  else {
    //배지보이기
    gsap.to(badgeEL,.6,{
      opacity:1,
      display:'block'
    
  });
  //버튼 숨기기!
  gsap.to(toTopEl ,.2 ,{
    x: 100
  });
}
},300));
// _.throttle(함수,시간)

//클릭 이벤트 추가하기 누르면 상단 0px 지점 으로 0.7초만에 이동!!
toTopEl.addEventListener('click', function(){
  gsap.to(window, .7 , {
    scrollTo: 0  // plugIn 이라는 라이브러리가 있어야함 이속성을 쓸려면
  });
});

const fadeELS=document.querySelectorAll('.visual .fade-in');
fadeELS.forEach(
  function(fadeEL,index){
  // gsap.to(요소,지속시간,옵션);
    gsap.to(fadeEL,1,{
      delay: (index+1)*.7, //0.7초 , 1.4.초 ,2.1초 ,2.7초
      opacity:1
      
    });
  }
);
// new Swiper(선택자,옵션), 새로운 생성자(클래스) 생성
new Swiper('.notice-line .swiper-container',{
  direction:'vertical',
  autoplay:true,
  loop:true
});

new Swiper('.promotion .swiper-container',{
  slidesPerView: 3,  // 한번에 보여줄 슬라이드 개수
  spaceBetween: 10,  // 슬라이드 사이 여백 
  centeredSlides: true,  // 1번 슬라이드가 가운데 보이기
  loop:true,
  autoplay:{
    delay : 3000
  },
  pagination:{
    el:'.promotion .swiper-pagination', //페이지 번호 요소 선택자
    clickable:true //사용자의 페이지 번호 요소 제어
  },
  navigation:{
    prevEl:'.promotion .swiper-prev', //이전 요소를 볼수있는 선택자
    nextEl:'.promotion .swiper-next'   //다음 요소를 볼수있는 선택자
  }
});
new Swiper('.awards .swiper-container', {
  autoplay:true,
  loop:true,
  spaceBetween:30,
  slidesPerView:5,
  navigation: {
    prevEl:'.awards .swiper-prev',
    nextEl:'.awards .swiper-next'
  }
});

const promotionEl= document.querySelector('.promotion');
const promotionToggleBtn= document.querySelector('.toggle-promotion');
let isHidePromotion =false;
promotionToggleBtn.addEventListener('click',function(){
  isHidePromotion=!isHidePromotion //반대값
  if(isHidePromotion){
    //숨김처리 true 값
    promotionEl.classList.add('hide');
  }
  else{
    //보임처리!! false값
    promotionEl.classList.remove('hide');

  }
});

// 범위 랜덤 함수(소수점 2자리까지)
function random(min, max) {
  // `.toFixed()`를 통해 반환된 문자 데이터를,
  // `parseFloat()`을 통해 소수점을 가지는 숫자 데이터로 변환
  return parseFloat((Math.random() * (max - min) + min).toFixed(2))
}


function floatingObject(selector , delay ,size) {
  //gsap.to(요소, 시간 , 옵션);
  gsap.to(selector, random(1.5, 2.5),{
    y:size, 
    repeat: -1,  // 무한 반복 
    yoyo: true,  //yoyo라는 함수 내려가면 올라감
    ease: Power1.easeInout,
    delay: random(0, delay)
  });
}
floatingObject('.floating1', 1 ,15);
floatingObject('.floating2', .5 ,15);
floatingObject('.floating3', 1.5 ,20);

const spyEls = document.querySelectorAll('section.scroll-spy');
spyEls.forEach(function(spyEl){
  new ScrollMagic
    .Scene({
      triggerElement:spyEl, // 보여짐 여부를 감시할 요소를
      triggerHook: .8 
    })
    .setClassToggle(spyEl, 'show')
    .addTo(new ScrollMagic.Controller());
});


