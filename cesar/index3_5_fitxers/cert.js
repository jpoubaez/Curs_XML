var rmsSkinSize = 1000;
pnetInitSkin = function(format) {

  if (typeof resizeSkin === "function") {
    resizeSkin(rmsSkinSize);
  }

  raiCntCSSObj = document.createElement("link");
  raiCntCSSObj.rel = "stylesheet";
  raiCntCSSObj.type = "text/css";
  raiCntCSSObj.href = raiCntCSS;
  document.body.appendChild(raiCntCSSObj);

  if (typeof pnetHeightCab !== "undefined") {
    raiAlturaSkin = pnetHeightCab
  } else if (document.body.style.paddingTop != "") {
    raiAlturaSkin = parseInt(document.body.style.paddingTop)
  } else {
    raiAlturaSkin = 250
  }

  function raiPosHeader() {
    var raiAltura = 0;
    //var raiVertical = 0;
    if (document.querySelector('header') != null) {
      raiAltura = document.querySelector('header').offsetHeight;
    }

    document.body.style.setProperty("background-position-y", raiAltura + "px", "important");
    document.body.style.paddingTop = (raiAlturaSkin + raiAltura) + "px";
    if (document.getElementById('rms_oop_skin_options') != null) {
      document.getElementById('rms_oop_skin_options').style.top = raiAltura + "px";
    }
    if (document.getElementById('rms_oop_skin_options_left') != null) {
      document.getElementById('rms_oop_skin_options_left').style.top = raiAltura + "px";
    }
    if (document.getElementById('pbnetVideo') != null) {
      document.getElementById('pbnetVideo').style.top = raiAltura + "px";
    }
    if (document.getElementById('pbnetVideo2') != null) {
      document.getElementById('pbnetVideo2').style.top = raiAltura + "px";
    }
    if (document.querySelector('body > #pnetMask') != null) {
      document.querySelector('body > #pnetMask').style.top = raiAltura + "px";
    }
    if (document.getElementById('pnetContVid') != null) {
      document.getElementById('pnetContVid').style.top = raiAltura + "px";
    }
    if (document.getElementById('pbnetTrama') != null) {
      document.getElementById('pbnetTrama').style.top = raiAltura + "px";
    }
    if (document.getElementById('rmsGame') != null) {
      document.getElementById('rmsGame').style.top = raiAltura + "px";
    }
    if (document.getElementById('rmsContentScrollLeft') != null) {
      document.getElementById('rmsContentScrollLeft').style.top = raiAltura + "px";
    }
    if (document.getElementById('rmsContentScrollRight') != null) {
      document.getElementById('rmsContentScrollRight').style.top = raiAltura + "px";
    }
    if (document.getElementById('rmsWrapperParallax') != null) {
      document.getElementById('rmsWrapperParallax').style.top = raiAltura + "px";
    }
    if (typeof rmsSiteHeader != "undefined") {
      rmsSiteHeader(raiAltura)
    }
  }

  switch (raiEnvDevice) {

    case "desktop":
      //scrollTo(0,0);
      setTimeout(function() {
        window.dispatchEvent(new Event('resize'));
      }, 300);
      document.body.classList.add('raiDesktop');
      document.body.classList.add("raiModal");

      raiPosHeader();
      window.addEventListener("scroll", function() {
        raiPosHeader();
      });


      pnetSpecialFunction = function() {
        if (expandedSPD) {
          document.body.classList.add("raiTop");
          document.body.classList.remove("raiModal");
          document.getElementsByTagName("html")[0].style.setProperty("overflow-y", "hidden", "important");
          document.body.style.setProperty("background-position-y", "0px", "important");
        } else {
          document.body.classList.remove("raiTop");
          document.body.classList.add("raiModal");
          raiPosHeader();
          document.getElementsByTagName("html")[0].style.setProperty("overflow-y", "scroll", "important");
        }
      }

      pnetSpecialFunctionFVS = function() {
        if (expandedFVS) {
          document.body.classList.add("raiTop");
          document.body.classList.remove("raiModal");
          document.getElementsByTagName("html")[0].style.setProperty("overflow-y", "hidden", "important");
          document.body.style.setProperty("background-position-y", "0px", "important");
        } else {
          document.body.classList.remove("raiTop");
          document.body.classList.add("raiModal");
          raiPosHeader();
          document.getElementsByTagName("html")[0].style.setProperty("overflow-y", "scroll", "important");
        }
      }
      /*
            pbnetSpecialClick = function(tg) {
              console.log(tg.className + " << CLASS --- ID >> " + tg.id);
              if (tg.className.includes("PIN_")) {
                return false;
              } else {
                return true;
              }
            }*/

      break;

    case "tablet":

      if (pnetDeviceOrientation == "portrait") {
        document.body.classList.add('raiTabletPortrait');
      } else {
        document.body.classList.add('raiTabletLandscape');
      }

      document.body.classList.add("raiTablet");
      window.addEventListener("scroll", function() {
        if (document.getElementById("pnetSkinTablet").classList.contains("fadeOut")) {
          document.body.classList.remove("raiTablet");
        } else {
          document.body.classList.add("raiTablet");
        }
      });

      break;

    case "mobile":

      if (pnetDeviceOrientation == "portrait") {
        document.body.classList.add('raiMobilePortrait');
      } else {
        document.body.classList.add('raiMobileLandscape');
      }

      document.body.classList.add("raiMobile");
      window.addEventListener("scroll", function() {
        if (document.getElementById("pnetSkinPhone").classList.contains("fadeOut")) {
          document.body.classList.remove("raiMobile");
        } else {
          document.body.classList.add("raiMobile");
        }
      });

      break;
  }

}
