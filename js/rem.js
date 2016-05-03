    // 无线端计算rem
    try {
        !function(e){function t(){var t=i.clientWidth;e.rem=t/10,/ZTE U930_TD/.test(navigator.userAgent)&&(e.rem=1.13*e.rem),r.innerHTML="html{font-size:"+e.rem+"px!important;}"}var n,i=document.documentElement,r=document.createElement("style"),n=e.devicePixelRatio||1;i.firstElementChild.appendChild(r),i.setAttribute("data-dpr",n),e.dpr=n,e.addEventListener("resize",function(){t()},!1),e.addEventListener("pageshow",function(e){e.persisted&&t()},!1),t()}(window);
    } catch (e) {}
