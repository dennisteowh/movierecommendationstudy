function delay(t) {
  setTimeout('initFadeIn()', t);
}

function initFadeIn() {
  $("body").css("visibility", "visible");
  $("body").fadeIn(300);
}

function make_slides(f) {
  var   slides = {};

  slides.i0 = slide({
     name : "i0",
     start: function() {
      exp.startT = Date.now();
     }
  });

  slides.instructions = slide({
    name : "instructions",
    readTimeI:0,
    readStartI:0,
    forwardI : function() {
      $('.slide').hide(); 
      $('#skyscraperSlide').show()
      movieI_watchstart = Date.now()
      pos = "C"
    },
    revealI: function() {
      document.getElementById("skyscraperText").innerHTML = "Skyscraper is a thrilling action movie starring Dwayne Johnson that can trigger your altophobia. It is done in the same style as movies like The Towering Inferno and Die Hard.";
      this.readStartI = Date.now();
    },
    unrevealI: function() {
      document.getElementById("skyscraperText").innerHTML = "";
      this.readTimeI = this.readTimeI + Date.now() - this.readStartI
    },
    button : function() {
      append(exp.data, 
        {
          movieI_readtime: this.readTimeI,
          movieI_watchtime: movieI_watchtime,
      }
      )
      exp.go(); //use exp.go() if and only if there is no "present" data.
    }
  });

  slides.recommendA1 = slide({
    name:"recommendA1",
    readTimeL:0,
    readTimeC:0,
    readTimeR:0,
    readStartL:0,
    readStartC:0,
    readStartR:0,
    forwardL : function() {
      $('.slide').hide(); 
      $('#greenlandSlide').show()
      movieA1_watchstart = Date.now()
      pos = "L"
    },
    forwardC : function() {
      $('.slide').hide(); 
      $('#theoutpostSlide').show()
      movieA2_watchstart = Date.now()
      pos = "C"
    },
    forwardR : function() {
      $('.slide').hide(); 
      $('#runallnightSlide').show()
      movieA3_watchstart = Date.now()
      pos = "R"
    },
    revealL: function() {
      document.getElementById("greenlandText").innerHTML = "How tense it was, how gripping it was...what makes an apocalyptic movie great is proper tension, pacing and characters. This has all of that in spades!";
      this.readStartL = Date.now();
    },
    revealC: function() {
      document.getElementById("theoutpostText").innerHTML = "A very tragic moment in war, very well displayed on screen. The action scenes give a real good tension that creates a perfect excitement throughout the movie.";
      this.readStartC = Date.now();
    },
    revealR: function() {
      document.getElementById("runallnightText").innerHTML = "One man versus bad guys and I am all about it. This one does a little bit of a better job and fleshing out the main character and what he's fighting for.";
      this.readStartR = Date.now();
    },
    unrevealL: function() {
      document.getElementById("greenlandText").innerHTML = "";
      this.readTimeL = this.readTimeL + Date.now() - this.readStartL
    },
    unrevealC: function() {
      document.getElementById("theoutpostText").innerHTML = "";
      this.readTimeC = this.readTimeC + Date.now() - this.readStartC
    },
    unrevealR: function() {
      document.getElementById("runallnightText").innerHTML = "";
      this.readTimeR = this.readTimeR + Date.now() - this.readStartR
    },
    button : function() {
      append(exp.data, 
        {
          movieA1_readtime: this.readTimeL,
          movieA2_readtime: this.readTimeC,
          movieA3_readtime: this.readTimeR,
          movieA1_watchtime: movieA1_watchtime,
          movieA2_watchtime: movieA2_watchtime,
          movieA3_watchtime: movieA3_watchtime
      }
      )
      exp.go(); //use exp.go() if and only if there is no "present" data.
    }
  })

  slides.recommendA2 = slide({
    name:"recommendA2",
    readTimeL:0,
    readTimeC:0,
    readTimeR:0,
    readStartL:0,
    readStartC:0,
    readStartR:0,
    forwardL : function() {
      $('.slide').hide(); 
      $('#nobodySlide').show()
      movieA4_watchstart = Date.now()
      pos = "L"
    },
    forwardC : function() {
      $('.slide').hide(); 
      $('#bosslevelSlide').show()
      movieA5_watchstart = Date.now()
      pos = "C"
    },
    forwardR : function() {
      $('.slide').hide(); 
      $('#thehardertheyfallSlide').show()
      movieA6_watchstart = Date.now()
      pos = "R"
    },
    revealL: function() {
      document.getElementById("nobodyText").innerHTML = "Some shoot-em-up movies try to break the mold and do too much... don't worry... Nobody isn't one of them. The arc of the protagonist was just original enough to make it engaging.";
      this.readStartL = Date.now();
    },
    revealC: function() {
      document.getElementById("bosslevelText").innerHTML = "A compelling story about love and redemption. Everyone on-screen is clearly having a blast, and their enthusiasm is contagious, making this film just plain fun to watch.";
      this.readStartC = Date.now();
    },
    revealR: function() {
      document.getElementById("thehardertheyfallText").innerHTML = "It's just...cool. There's no other word for it. Amazing cast, great action, unbelievable music. The story is extremely entertaining and managed to hook me.";
      this.readStartR = Date.now();
    },
    unrevealL: function() {
      document.getElementById("nobodyText").innerHTML = "";
      this.readTimeL = this.readTimeL + Date.now() - this.readStartL
    },
    unrevealC: function() {
      document.getElementById("bosslevelText").innerHTML = "";
      this.readTimeC = this.readTimeC + Date.now() - this.readStartC
    },
    unrevealR: function() {
      document.getElementById("thehardertheyfallText").innerHTML = "";
      this.readTimeR = this.readTimeR + Date.now() - this.readStartR
    },
    button : function() {
      append(exp.data, 
        {
          movieA4_readtime: this.readTimeL,
          movieA5_readtime: this.readTimeC,
          movieA6_readtime: this.readTimeR,
          movieA4_watchtime: movieA4_watchtime,
          movieA5_watchtime: movieA5_watchtime,
          movieA6_watchtime: movieA6_watchtime
      }
      )
      exp.go(); //use exp.go() if and only if there is no "present" data.
    }
  })

  slides.recommendD1 = slide({
    name:"recommendD1",
    readTimeL:0,
    readTimeC:0,
    readTimeR:0,
    readStartL:0,
    readStartC:0,
    readStartR:0,
    forwardL : function() {
      $('.slide').hide(); 
      $('#sanandreasSlide2').show()
      movieD1_watchstart = Date.now()
      pos = "L"
    },
    forwardC : function() {
      $('.slide').hide(); 
      $('#midwaySlide2').show()
      movieD2_watchstart = Date.now()
      pos = "C"
    },
    forwardR : function() {
      $('.slide').hide(); 
      $('#jasonbourneSlide2').show()
      movieD3_watchstart = Date.now()
      pos = "R"
    },
    revealL: function() {
      document.getElementById("sanandreasText2").innerHTML = "SAN ANDREAS is an intense, wild, and chaotic disaster movie that keeps you on the edge of your seat, and it doesn't stop without even breaking a sweat.";
      this.readStartL = Date.now();
    },
    revealC: function() {
      document.getElementById("midwayText2").innerHTML = "The story is complex and well rendered. We see both sides of the action. A true story that makes obvious what it took to win for the US.";
      this.readStartC = Date.now();
    },
    revealR: function() {
      document.getElementById("jasonbourneText2").innerHTML = "Absolutely the BEST if you love suspense and thriller. Matt Damon (Jason Bourne) and the rest of cast was amazing. I expect to see this series on and on again.";
      this.readStartR = Date.now();
    },
    unrevealL: function() {
      document.getElementById("sanandreasText2").innerHTML = "";
      this.readTimeL = this.readTimeL + Date.now() - this.readStartL
    },
    unrevealC: function() {
      document.getElementById("midwayText2").innerHTML = "";
      this.readTimeC = this.readTimeC + Date.now() - this.readStartC
    },
    unrevealR: function() {
      document.getElementById("jasonbourneText2").innerHTML = "";
      this.readTimeR = this.readTimeR + Date.now() - this.readStartR
    },
    button : function() {
      append(exp.data, 
        {
          movieD1_readtime: this.readTimeL,
          movieD2_readtime: this.readTimeC,
          movieD3_readtime: this.readTimeR,
          movieD1_watchtime: movieD1_watchtime,
          movieD2_watchtime: movieD2_watchtime,
          movieD3_watchtime: movieD3_watchtime
      }
      )
      exp.go(); //use exp.go() if and only if there is no "present" data.
    }
  })

  slides.recommendD2 = slide({
    name:"recommendD2",
    readTimeL:0,
    readTimeC:0,
    readTimeR:0,
    readStartL:0,
    readStartC:0,
    readStartR:0,
    forwardL : function() {
      $('.slide').hide(); 
      $('#badboysforlifeSlide2').show()
      movieD4_watchstart = Date.now()
      pos = "L"
    },
    forwardC : function() {
      $('.slide').hide(); 
      $('#copshopSlide2').show()
      movieD5_watchstart = Date.now()
      pos = "C"
    },
    forwardR : function() {
      $('.slide').hide(); 
      $('#thosewhowishmedeadSlide2').show()
      movieD6_watchstart = Date.now()
      pos = "R"
    },
    revealL: function() {
      document.getElementById("badboysforlifeText2").innerHTML = "Nice and funny film that with a formula already seen many times manages to surprise and entertain. The film is well acted and well shot, each scene is fun and very beautiful.";
      this.readStartL = Date.now();
    },
    revealC: function() {
      document.getElementById("copshopText2").innerHTML = "Wonderfully fun action flick. It's a condensed Die-Hard kind of thriller, jam-packed with interesting character actors, in the midst of snarky comedy and brutal action. I loved it.";
      this.readStartC = Date.now();
    },
    revealR: function() {
      document.getElementById("thosewhowishmedeadText2").innerHTML = "Angelina Jolie is back to form as an action star! The movie itself is a classic 90's style thriller which I found to be a nice break from all the CGI fest we get these days.";
      this.readStartR = Date.now();
    },
    unrevealL: function() {
      document.getElementById("badboysforlifeText2").innerHTML = "";
      this.readTimeL = this.readTimeL + Date.now() - this.readStartL
    },
    unrevealC: function() {
      document.getElementById("copshopText2").innerHTML = "";
      this.readTimeC = this.readTimeC + Date.now() - this.readStartC
    },
    unrevealR: function() {
      document.getElementById("thosewhowishmedeadText2").innerHTML = "";
      this.readTimeR = this.readTimeR + Date.now() - this.readStartR
    },
    button : function() {
      append(exp.data, 
        {
          movieD4_readtime: this.readTimeL,
          movieD5_readtime: this.readTimeC,
          movieD6_readtime: this.readTimeR,
          movieD4_watchtime: movieD4_watchtime,
          movieD5_watchtime: movieD5_watchtime,
          movieD6_watchtime: movieD6_watchtime
      }
      )
      exp.go(); //use exp.go() if and only if there is no "present" data.
    }
  })

  slides.recommendB1 = slide({
    name:"recommendB1",
    readTimeC:0,
    readStartC:0,
    forwardC : function() {
      $('.slide').hide(); 
      $('#sanandreasSlide').show()
      movieB1_watchstart = Date.now()
      pos = "C"
    },
    revealC: function() {
      document.getElementById("sanandreasText").innerHTML = "SAN ANDREAS is an intense, wild, and chaotic disaster movie that keeps you on the edge of your seat, and it doesn't stop without even breaking a sweat.";
      this.readStartC = Date.now();
    },
    unrevealC: function() {
      document.getElementById("sanandreasText").innerHTML = "";
      this.readTimeC = this.readTimeC + Date.now() - this.readStartC
    },
    button : function() {
      append(exp.data, 
        {
          movieB1_readtime: this.readTimeC,
          movieB1_watchtime: movieB1_watchtime,
      }
      )
      exp.go(); //use exp.go() if and only if there is no "present" data.
    }
  })

  slides.recommendB2 = slide({
    name:"recommendB2",
    readTimeC:0,
    readStartC:0,
    forwardC : function() {
      $('.slide').hide(); 
      $('#midwaySlide').show()
      movieB2_watchstart = Date.now()
      pos = "C"
    },
    revealC: function() {
      document.getElementById("midwayText").innerHTML = "The story is complex and well rendered. We see both sides of the action. A true story that makes obvious what it took to win for the US.";
      this.readStartC = Date.now();
    },
    unrevealC: function() {
      document.getElementById("midwayText").innerHTML = "";
      this.readTimeC = this.readTimeC + Date.now() - this.readStartC
    },
    button : function() {
      append(exp.data, 
        {
          movieB2_readtime: this.readTimeC,
          movieB2_watchtime: movieB2_watchtime,
      }
      )
      exp.go(); //use exp.go() if and only if there is no "present" data.
    }
  })

  slides.recommendB3 = slide({
    name:"recommendB3",
    readTimeC:0,
    readStartC:0,
    forwardC : function() {
      $('.slide').hide(); 
      $('#jasonbourneSlide').show()
      movieB3_watchstart = Date.now()
      pos = "C"
    },
    revealC: function() {
      document.getElementById("jasonbourneText").innerHTML = "Absolutely the BEST if you love suspense and thriller. Matt Damon (Jason Bourne) and the rest of cast was amazing. I expect to see this series on and on again.";
      this.readStartC = Date.now();
    },
    unrevealC: function() {
      document.getElementById("jasonbourneText").innerHTML = "";
      this.readTimeC = this.readTimeC + Date.now() - this.readStartC
    },
    button : function() {
      append(exp.data, 
        {
          movieB3_readtime: this.readTimeC,
          movieB3_watchtime: movieB3_watchtime,
      }
      )
      exp.go(); //use exp.go() if and only if there is no "present" data.
    }
  })

  slides.recommendB4 = slide({
    name:"recommendB4",
    readTimeC:0,
    readStartC:0,
    forwardC : function() {
      $('.slide').hide(); 
      $('#badboysforlifeSlide').show()
      movieB4_watchstart = Date.now()
      pos = "C"
    },
    revealC: function() {
      document.getElementById("badboysforlifeText").innerHTML = "Nice and funny film that with a formula already seen many times manages to surprise and entertain. The film is well acted and well shot, each scene is fun and very beautiful.";
      this.readStartC = Date.now();
    },
    unrevealC: function() {
      document.getElementById("badboysforlifeText").innerHTML = "";
      this.readTimeC = this.readTimeC + Date.now() - this.readStartC
    },
    button : function() {
      append(exp.data, 
        {
          movieB4_readtime: this.readTimeC,
          movieB4_watchtime: movieB4_watchtime,
      }
      )
      exp.go(); //use exp.go() if and only if there is no "present" data.
    }
  })

  slides.recommendB5 = slide({
    name:"recommendB5",
    readTimeC:0,
    readStartC:0,
    forwardC : function() {
      $('.slide').hide(); 
      $('#copshopSlide').show()
      movieB5_watchstart = Date.now()
      pos = "C"
    },
    revealC: function() {
      document.getElementById("copshopText").innerHTML = "Wonderfully fun action flick. It's a condensed Die-Hard kind of thriller, jam-packed with interesting character actors, in the midst of snarky comedy and brutal action. I loved it.";
      this.readStartC = Date.now();
    },
    unrevealC: function() {
      document.getElementById("copshopText").innerHTML = "";
      this.readTimeC = this.readTimeC + Date.now() - this.readStartC
    },
    button : function() {
      append(exp.data, 
        {
          movieB5_readtime: this.readTimeC,
          movieB5_watchtime: movieB5_watchtime,
      }
      )
      exp.go(); //use exp.go() if and only if there is no "present" data.
    }
  })

  slides.recommendB6 = slide({
    name:"recommendB6",
    readTimeC:0,
    readStartC:0,
    forwardC : function() {
      $('.slide').hide(); 
      $('#thosewhowishmedeadSlide').show()
      movieB6_watchstart = Date.now()
      pos = "C"
    },
    revealC: function() {
      document.getElementById("thosewhowishmedeadText").innerHTML = "Angelina Jolie is back to form as an action star! The movie itself is a classic 90's style thriller which I found to be a nice break from all the CGI fest we get these days.";
      this.readStartC = Date.now();
    },
    unrevealC: function() {
      document.getElementById("thosewhowishmedeadText").innerHTML = "";
      this.readTimeC = this.readTimeC + Date.now() - this.readStartC
    },
    button : function() {
      append(exp.data, 
        {
          movieB6_readtime: this.readTimeC,
          movieB6_watchtime: movieB6_watchtime,
      }
      )
      exp.go(); //use exp.go() if and only if there is no "present" data.
    }
  })

  slides.recommendC1 = slide({
    name:"recommendC1",
    readTimeC:0,
    readStartC:0,
    forwardC : function() {
      $('.slide').hide(); 
      $('#greenlandSlide2').show()
      movieC1_watchstart = Date.now()
      pos = "C"
    },
    revealC: function() {
      document.getElementById("greenlandText2").innerHTML = "How tense it was, how gripping it was...what makes an apocalyptic movie great is proper tension, pacing and characters. This has all of that in spades!";
      this.readStartC = Date.now();
    },
    unrevealC: function() {
      document.getElementById("greenlandText2").innerHTML = "";
      this.readTimeC = this.readTimeC + Date.now() - this.readStartC
    },
    button : function() {
      append(exp.data, 
        {
          movieC1_readtime: this.readTimeC,
          movieC1_watchtime: movieC1_watchtime,
      }
      )
      exp.go(); //use exp.go() if and only if there is no "present" data.
    }
  })

  slides.recommendC2 = slide({
    name:"recommendC2",
    readTimeC:0,
    readStartC:0,
    forwardC : function() {
      $('.slide').hide(); 
      $('#theoutpostSlide2').show()
      movieC2_watchstart = Date.now()
      pos = "C"
    },
    revealC: function() {
      document.getElementById("theoutpostText2").innerHTML = "A very tragic moment in war, very well displayed on screen. The action scenes give a real good tension that creates a perfect excitement throughout the movie.";
      this.readStartC = Date.now();
    },
    unrevealC: function() {
      document.getElementById("theoutpostText2").innerHTML = "";
      this.readTimeC = this.readTimeC + Date.now() - this.readStartC
    },
    button : function() {
      append(exp.data, 
        {
          movieC2_readtime: this.readTimeC,
          movieC2_watchtime: movieC2_watchtime,
      }
      )
      exp.go(); //use exp.go() if and only if there is no "present" data.
    }
  })

  slides.recommendC3 = slide({
    name:"recommendC3",
    readTimeC:0,
    readStartC:0,
    forwardC : function() {
      $('.slide').hide(); 
      $('#runallnightSlide2').show()
      movieC3_watchstart = Date.now()
      pos = "C"
    },
    revealC: function() {
      document.getElementById("runallnightText2").innerHTML = "One man versus bad guys and I am all about it. This one does a little bit of a better job and fleshing out the main character and what he's fighting for.";
      this.readStartC = Date.now();
    },
    unrevealC: function() {
      document.getElementById("runallnightText2").innerHTML = "";
      this.readTimeC = this.readTimeC + Date.now() - this.readStartC
    },
    button : function() {
      append(exp.data, 
        {
          movieC3_readtime: this.readTimeC,
          movieC3_watchtime: movieC3_watchtime,
      }
      )
      exp.go(); //use exp.go() if and only if there is no "present" data.
    }
  })

  slides.recommendC4 = slide({
    name:"recommendC4",
    readTimeC:0,
    readStartC:0,
    forwardC : function() {
      $('.slide').hide(); 
      $('#nobodySlide2').show()
      movieC4_watchstart = Date.now()
      pos = "C"
    },
    revealC: function() {
      document.getElementById("nobodyText2").innerHTML = "Some shoot-em-up movies try to break the mold and do too much... don't worry... Nobody isn't one of them. The arc of the protagonist was just original enough to make it engaging.";
      this.readStartC = Date.now();
    },
    unrevealC: function() {
      document.getElementById("nobodyText2").innerHTML = "";
      this.readTimeC = this.readTimeC + Date.now() - this.readStartC
    },
    button : function() {
      append(exp.data, 
        {
          movieC4_readtime: this.readTimeC,
          movieC4_watchtime: movieC4_watchtime,
      }
      )
      exp.go(); //use exp.go() if and only if there is no "present" data.
    }
  })

  slides.recommendC5 = slide({
    name:"recommendC5",
    readTimeC:0,
    readStartC:0,
    forwardC : function() {
      $('.slide').hide(); 
      $('#bosslevelSlide2').show()
      movieC5_watchstart = Date.now()
      pos = "C"
    },
    revealC: function() {
      document.getElementById("bosslevelText2").innerHTML = "A compelling story about love and redemption. Everyone on-screen is clearly having a blast, and their enthusiasm is contagious, making this film just plain fun to watch.";
      this.readStartC = Date.now();
    },
    unrevealC: function() {
      document.getElementById("bosslevelText2").innerHTML = "";
      this.readTimeC = this.readTimeC + Date.now() - this.readStartC
    },
    button : function() {
      append(exp.data, 
        {
          movieC5_readtime: this.readTimeC,
          movieC5_watchtime: movieC5_watchtime,
      }
      )
      exp.go(); //use exp.go() if and only if there is no "present" data.
    }
  })

  slides.recommendC6 = slide({
    name:"recommendC6",
    readTimeC:0,
    readStartC:0,
    forwardC : function() {
      $('.slide').hide(); 
      $('#thehardertheyfallSlide2').show()
      movieC6_watchstart = Date.now()
      pos = "C"
    },
    revealC: function() {
      document.getElementById("thehardertheyfallText2").innerHTML = "It's just...cool. There's no other word for it. Amazing cast, great action, unbelievable music. The story is extremely entertaining and managed to hook me.";
      this.readStartC = Date.now();
    },
    unrevealC: function() {
      document.getElementById("thehardertheyfallText2").innerHTML = "";
      this.readTimeC = this.readTimeC + Date.now() - this.readStartC
    },
    button : function() {
      append(exp.data, 
        {
          movieC6_readtime: this.readTimeC,
          movieC6_watchtime: movieC6_watchtime,
      }
      )
      exp.go(); //use exp.go() if and only if there is no "present" data.
    }
  })

  slides.skyscraperSlide = slide({
    name:"skyscraperSlide"
  })

  slides.greenlandSlide = slide({
    name:"greenlandSlide"
  })

  slides.theoutpostSlide = slide({
    name:"theoutpostSlide"
  })

  slides.runallnightSlide = slide({
    name:"runallnightSlide"
  })

  slides.nobodySlide = slide({
    name:"nobodySlide"
  })

  slides.bosslevelSlide = slide({
    name:"bosslevelSlide"
  })

  slides.thehardertheyfallSlide = slide({
    name:"thehardertheyfallSlide"
  })

  slides.greenlandSlide2 = slide({
    name:"greenlandSlide2"
  })

  slides.theoutpostSlide2 = slide({
    name:"theoutpostSlide2"
  })

  slides.runallnightSlide2 = slide({
    name:"runallnightSlide2"
  })

  slides.nobodySlide2 = slide({
    name:"nobodySlide2"
  })

  slides.bosslevelSlide2 = slide({
    name:"bosslevelSlide2"
  })

  slides.thehardertheyfallSlide2 = slide({
    name:"thehardertheyfallSlide2"
  })

  slides.sanandreasSlide = slide({
    name:"sanandreasSlide"
  })

  slides.midwaySlide = slide({
    name:"midwaySlide"
  })

  slides.jasonbourneSlide = slide({
    name:"jasonbourneSlide"
  })

  slides.badboysforlifeSlide = slide({
    name:"badboysforlifeSlide"
  })

  slides.copshopSlide = slide({
    name:"copshopSlide"
  })

  slides.thosewhowishmedeadSlide = slide({
    name:"thosewhowishmedeadSlide"
  })

  slides.sanandreasSlide2 = slide({
    name:"sanandreasSlide2"
  })

  slides.midwaySlide2 = slide({
    name:"midwaySlide2"
  })

  slides.jasonbourneSlide2 = slide({
    name:"jasonbourneSlide2"
  })

  slides.badboysforlifeSlide2 = slide({
    name:"badboysforlifeSlide2"
  })

  slides.copshopSlide2 = slide({
    name:"copshopSlide2"
  })

  slides.thosewhowishmedeadSlide2 = slide({
    name:"thosewhowishmedeadSlide2"
  })

  var randomSort = function(arr){ 
    range = []
    output = []
  
    for(i = 0; i < arr.length; i++) {
      range = range.concat(i)
    }
  
    var getRandomFromBucket = function(bucket) {
      var randomIndex = Math.floor(Math.random()*bucket.length);
      return bucket.splice(randomIndex, 1)[0];
    }
  
    for (i = 0; i < arr.length; i++) { 
      randomIndex = getRandomFromBucket(range)
      output = output.concat(arr[randomIndex])
    }
    return output
  }


  slides.movieMatrix =  slide({ //check this!!!
    name : "movieMatrix",
  
    //this gets run only at the beginning of the block
    start: function() {
      $(".err").hide();
      this.startTime = Date.now();
  
    },
    button : function(){
  
      this.RT = (Date.now() - this.startTime) / 1000; // record time spent on trial
      this.log_responses()
      exp.go();
    },
  
    log_responses : function() {
      append(exp.data,
        {
          "priorRT": this.RT,
          "A1prior" : $('input[name="A1prior"]:checked').val(),
          "A2prior" : $('input[name="A2prior"]:checked').val(),
          "A3prior" : $('input[name="A3prior"]:checked').val(),
          "A4prior" : $('input[name="A4prior"]:checked').val(),
          "A5prior" : $('input[name="A5prior"]:checked').val(),
          "A6prior" : $('input[name="A6prior"]:checked').val(),
          "B1prior" : $('input[name="B1prior"]:checked').val(),
          "B2prior" : $('input[name="B2prior"]:checked').val(),
          "B3prior" : $('input[name="B3prior"]:checked').val(),
          "B4prior" : $('input[name="B4prior"]:checked').val(),
          "B5prior" : $('input[name="B5prior"]:checked').val(),
          "B6prior" : $('input[name="B6prior"]:checked').val()
        }
        )
  
    }
  });

slides.subj_info =  slide({
  name : "subj_info",
  start: function() {
    $(".err").hide();

  },
  submit : function(e){
    //if (e.preventDefault) e.preventDefault(); // I don't know what this means.
    append(exp.data, 
      {
      url : window.location.href,
      id : getID(window.location.href),
      age : $("#age").val(),
      gender : $("#gender").val(),
      citizenship : $("#citizenship").val(),
      ethnicity: $("#ethnicity").val(),
      education: $("#education").val(),
      comments : $("#comments").val(),
      condition : exp.condition,
      totalRT : (Date.now() - exp.startT)/60000,
      browser : exp.system["Browser"],
      os : exp.system["OS"],
      screenH: exp.system["screenH"],
      screenUH: exp.system["screenUH"],
      screenW: exp.system["screenW"],
      screenUW: exp.system["screenUW"]
    }
    )

    if(!Number.isNaN(parseInt($("#age").val())) || $("#age").val() == "") { //age should be a number

      exp.go(); //use exp.go() if and only if there is no "present" data.
    } else {

      $(".err").show();
    }
    
  }
});


  //////////////////////////////


  slides.thanks = slide({
    name : "thanks",
    start : function() {

      setTimeout(function() {sendDataToServer(exp.data);
      }, 1000);
      
    }
  });

  // simple language comprehension check to include at beginning of experiment
  slides.botcaptcha = slide({
     name : "botcaptcha",
     bot_trials : 0,
     start: function() {
       $("#error").hide();
       $("#error_incorrect").hide();
       $("#error_2more").hide();
       $("#error_1more").hide();
       // list of speaker names to be sampled from
       speaker = _.sample(["James", "John", "Robert", "Michael", "William", "David", "Richard", "Joseph", "Thomas", "Charles"]);
       // list of listener names to be sampled from
       listener = _.sample(["Mary", "Patricia", "Jennifer", "Linda", "Elizabeth", "Barbara", "Susan", "Jessica", "Sarah", "Margaret"]);
       // create the utterance
       this.bot_utterance = speaker + " says to " + listener + ": It's a beautiful day, isn't it?"
       // creat ethe question
       this.bot_question = "Who is " + speaker + " talking to?"
       // append the utterance and the question to the view
       var bot_sentence = document.createElement("p");
       var bot_question = document.createElement("p");
       var content = document.createTextNode(this.bot_utterance);
       var q_content = document.createTextNode(this.bot_question);
       bot_sentence.name = "bot_sentence";
       bot_question.name = "bot_question";
       bot_sentence.appendChild(content);
       bot_question.appendChild(q_content);
       document.getElementById('bot_context').appendChild(bot_sentence);
       document.getElementById('bot_context').appendChild(document.createElement("br"));
       document.getElementById('bot_context').appendChild(bot_question);
       document.getElementById('bot_context').appendChild(document.createElement("br"));

     },
     button: function() {
       // get the participants' input
       bot_response = $("#botresponse").val();
       // append data if response correct
       if (bot_response.toLowerCase() == listener.toLowerCase()) {
         append(exp.data,
          {
            nFails: this.bot_trials,
            botSentence: this.bot_utterance,
            botQuestion: this.bot_question
          }
          )

         exp.go();
         // gives participant two more trials if the response was incorrect
       } else {
         this.bot_trials++;
         $("#error_incorrect").show();
         if (this.bot_trials == 1) {
             $("#error_2more").show();
         } else if (this.bot_trials == 2) {
             $("#error_2more").hide();
             $("#error_1more").show();
         } else {
           // if participant fails, they cannot proceed
             $("#error_incorrect").hide();
             $("#error_1more").hide();
             $("#bot_button").hide();
             $('#botresponse').prop("disabled", true);
             $("#error").show();
         };
       }
     }
  });


  return slides;
}

var movieI_watchtime = 0
var movieI_watchstart = 0

var movieA1_watchtime = 0
var movieA2_watchtime = 0
var movieA3_watchtime = 0
var movieA4_watchtime = 0
var movieA5_watchtime = 0
var movieA6_watchtime = 0

var movieA1_watchstart = 0
var movieA2_watchstart = 0
var movieA3_watchstart = 0
var movieA4_watchstart = 0
var movieA5_watchstart = 0
var movieA6_watchstart = 0

var movieB1_watchtime = 0
var movieB2_watchtime = 0
var movieB3_watchtime = 0
var movieB4_watchtime = 0
var movieB5_watchtime = 0
var movieB6_watchtime = 0

var movieB1_watchstart = 0
var movieB2_watchstart = 0
var movieB3_watchstart = 0
var movieB4_watchstart = 0
var movieB5_watchstart = 0
var movieB6_watchstart = 0

var movieC1_watchtime = 0
var movieC2_watchtime = 0
var movieC3_watchtime = 0
var movieC4_watchtime = 0
var movieC5_watchtime = 0
var movieC6_watchtime = 0

var movieC1_watchstart = 0
var movieC2_watchstart = 0
var movieC3_watchstart = 0
var movieC4_watchstart = 0
var movieC5_watchstart = 0
var movieC6_watchstart = 0

var movieD1_watchtime = 0
var movieD2_watchtime = 0
var movieD3_watchtime = 0
var movieD4_watchtime = 0
var movieD5_watchtime = 0
var movieD6_watchtime = 0

var movieD1_watchstart = 0
var movieD2_watchstart = 0
var movieD3_watchstart = 0
var movieD4_watchstart = 0
var movieD5_watchstart = 0
var movieD6_watchstart = 0


var pos

let videoStopper = function(id) {
  let containerElement = document.getElementById(id);
  let iframe_tag = containerElement.querySelector( 'iframe');
  let video_tag = containerElement.querySelector( 'video' );
  if ( iframe_tag) {
      let iframeSrc = iframe_tag.src;
      iframe_tag.src = iframeSrc; 
  }
  if ( video_tag) {
      video_tag.pause();
  }
}

function backA1(pos) {
  $('.slide').hide(); 
  $('#recommendA1').show()
  if(pos == "L"){
    videoStopper("greenlandSlide")
    movieA1_watchtime = movieA1_watchtime + Date.now() - movieA1_watchstart
  }else if(pos =="C"){
    videoStopper("theoutpostSlide")
    movieA2_watchtime = movieA2_watchtime + Date.now() - movieA2_watchstart
  }else if(pos =="R"){
    videoStopper("runallnightSlide")
    movieA3_watchtime = movieA3_watchtime + Date.now() - movieA3_watchstart
  }
}

function backA2(pos) {
  $('.slide').hide(); 
  $('#recommendA2').show()
  if(pos == "L"){
    videoStopper("nobodySlide")
    movieA4_watchtime = movieA4_watchtime + Date.now() - movieA4_watchstart
  }else if(pos =="C"){
    videoStopper("bosslevelSlide")
    movieA5_watchtime = movieA5_watchtime + Date.now() - movieA5_watchstart
  }else if(pos =="R"){
    videoStopper("thehardertheyfallSlide")
    movieA6_watchtime = movieA6_watchtime + Date.now() - movieA6_watchstart
  }
}

function backD1(pos) {
  $('.slide').hide(); 
  $('#recommendD1').show()
  if(pos == "L"){
    videoStopper("sanandreasSlide2")
    movieD1_watchtime = movieD1_watchtime + Date.now() - movieD1_watchstart
  }else if(pos =="C"){
    videoStopper("midwaySlide2")
    movieD2_watchtime = movieD2_watchtime + Date.now() - movieD2_watchstart
  }else if(pos =="R"){
    videoStopper("jasonbourneSlide2")
    movieD3_watchtime = movieD3_watchtime + Date.now() - movieD3_watchstart
  }
}

function backD2(pos) {
  $('.slide').hide(); 
  $('#recommendD2').show()
  if(pos == "L"){
    videoStopper("badboysforlifeSlide2")
    movieD4_watchtime = movieD4_watchtime + Date.now() - movieD4_watchstart
  }else if(pos =="C"){
    videoStopper("copshopSlide2")
    movieD5_watchtime = movieD5_watchtime + Date.now() - movieD5_watchstart
  }else if(pos =="R"){
    videoStopper("thosewhowishmedeadSlide2")
    movieD6_watchtime = movieD6_watchtime + Date.now() - movieD6_watchstart
  }
}

function backI(pos) {
  $('.slide').hide(); 
  $('#instructions').show()
  videoStopper("skyscraperSlide")
  movieI_watchtime = movieI_watchtime + Date.now() - movieI_watchstart
}


function backB1(pos) {
  $('.slide').hide(); 
  $('#recommendB1').show()
  videoStopper("sanandreasSlide")
  movieB1_watchtime = movieB1_watchtime + Date.now() - movieB1_watchstart
}

function backB2(pos) {
  $('.slide').hide(); 
  $('#recommendB2').show()
  videoStopper("midwaySlide")
  movieB2_watchtime = movieB2_watchtime + Date.now() - movieB2_watchstart
}

function backB3(pos) {
  $('.slide').hide(); 
  $('#recommendB3').show()
  videoStopper("jasonbourneSlide")
  movieB3_watchtime = movieB3_watchtime + Date.now() - movieB3_watchstart
}

function backB4(pos) {
  $('.slide').hide(); 
  $('#recommendB4').show()
  videoStopper("badboysforlifeSlide")
  movieB4_watchtime = movieB4_watchtime + Date.now() - movieB4_watchstart
}

function backB5(pos) {
  $('.slide').hide(); 
  $('#recommendB5').show()
  videoStopper("copshopSlide")
  movieB5_watchtime = movieB5_watchtime + Date.now() - movieB5_watchstart
}

function backB6(pos) {
  $('.slide').hide(); 
  $('#recommendB6').show()
  videoStopper("thosewhowishmedeadSlide")
  movieB6_watchtime = movieB6_watchtime + Date.now() - movieB6_watchstart
}

function backC1(pos) {
  $('.slide').hide(); 
  $('#recommendC1').show()
  videoStopper("greenlandSlide2")
  movieC1_watchtime = movieC1_watchtime + Date.now() - movieC1_watchstart
}

function backC2(pos) {
  $('.slide').hide(); 
  $('#recommendC2').show()
  videoStopper("theoutpostSlide2")
  movieC2_watchtime = movieC2_watchtime + Date.now() - movieC2_watchstart
}

function backC3(pos) {
  $('.slide').hide(); 
  $('#recommendC3').show()
  videoStopper("runallnightSlide2")
  movieC3_watchtime = movieC3_watchtime + Date.now() - movieC3_watchstart
}

function backC4(pos) {
  $('.slide').hide(); 
  $('#recommendC4').show()
  videoStopper("nobodySlide2")
  movieC4_watchtime = movieC4_watchtime + Date.now() - movieC4_watchstart
}

function backC5(pos) {
  $('.slide').hide(); 
  $('#recommendC5').show()
  videoStopper("bosslevelSlide2")
  movieC5_watchtime = movieC5_watchtime + Date.now() - movieC5_watchstart
}

function backC6(pos) {
  $('.slide').hide(); 
  $('#recommendC6').show()
  videoStopper("thehardertheyfallSlide2")
  movieC6_watchtime = movieC6_watchtime + Date.now() - movieC6_watchstart
}

/// init ///
function init() {

  //; support for uniqueturker
  // https://uniqueturker.myleott.com
  /*
  repeatWorker = false;
  (function(){
      var ut_id = "[INSERT uniqueTurkerID]";
      if (UTWorkerLimitReached(ut_id)) {
        $('.slide').empty();
        repeatWorker = true;
        alert("You have already completed the maximum number of HITs allowed by this requester. Please click 'Return HIT' to avoid any impact on your approval rating.");
      }
  })();
  */

  exp.data = {};
  exp.condition = _.sample(["AB", "BA", "CD", "DC"]); //can randomize between subject conditions here
  exp.system = {
      Browser : BrowserDetect.browser,
      OS : BrowserDetect.OS,
      screenH: screen.height,
      screenUH: exp.height,
      screenW: screen.width,
      screenUW: exp.width
    };

  //blocks of the experiment:
  if (exp.condition == "AB"){
    exp.structure=[
      "i0",
      "botcaptcha",
      "instructions",
      "recommendA1",
      "recommendA2",
      "recommendB1",
      "recommendB2",
      "recommendB3",
      "recommendB4",
      "recommendB5",
      "recommendB6",
      "movieMatrix",
      "subj_info",
      "thanks"
    ];

  }  else if(exp.condition == "BA") {
    exp.structure=[
      "i0",
      "botcaptcha",
      "instructions",
      "recommendB1",
      "recommendB2",
      "recommendB3",
      "recommendB4",
      "recommendB5",
      "recommendB6",
      "recommendA1",
      "recommendA2",
      "movieMatrix",
      "subj_info",
      "thanks"
    ];

  } else if(exp.condition == "CD") {
    exp.structure=[
      "i0",
      "botcaptcha",
      "instructions",
      "recommendC1",
      "recommendC2",
      "recommendC3",
      "recommendC4",
      "recommendC5",
      "recommendC6",
      "recommendD1",
      "recommendD2",
      "movieMatrix",
      "subj_info",
      "thanks"
    ];

  } else if(exp.condition == "DC") {
    exp.structure=[
      "i0",
      "botcaptcha",
      "instructions",
      "recommendD1",
      "recommendD2",
      "recommendC1",
      "recommendC2",
      "recommendC3",
      "recommendC4",
      "recommendC5",
      "recommendC6",
      "movieMatrix",
      "subj_info",
      "thanks"
    ];

  } 

  //make corresponding slides:
  exp.slides = make_slides(exp);

  exp.nQs = utils.get_exp_length(); //this does not work if there are stacks of stims (but does work for an experiment with this structure)
                    //relies on structure and slides being defined

  $('.slide').hide(); //hide everything

  //make sure turkers have accepted HIT (or you're not in mturk)
  $("#start_button").click(function() {
      $("#start_button").click(function() {$("#mustaccept").show();});
      exp.go();
    }
  );


  // Extra check for US IP addresses
  // TO DO: add support for Canadian IP addresses
  /*
  function USOnly() {
    var accessKey = 'b487843addca6e9ec32e6ae28aeaa022';
     $.ajax({
       url: 'https://geo.ipify.org/api/v1?apiKey=at_nuIzsEIQJAft6sr1WH67UTfFDeMIO',
       dataType: 'jsonp',
       success: function(json) {
       if (json.location.country != 'US') {
         var slides = document.getElementsByClassName('slide');
         for (i=0; i<slides.length; i++) {
          slides[i].style.display = 'none';
         }
          document.getElementsByClassName('progress')[0].style.display = 'none';
          document.getElementById('unique').innerText = "This HIT is only available to workers in the United States. Please click 'Return' to avoid any impact on your approval rating.";
        }
      }
     });
  }
  */

  exp.go(); //show first slide
  //USOnly(); // check US IP address

}

function sendDataToServer(data) {
	$.ajax({
    url: 'https://script.google.com/macros/s/AKfycbznOD1DWoP0vefC0SQ4E887tZ9Li29ze0E-7YD0Ij825AHcj19ExZKsfgiJzXxlKovzXQ/exec',
		type: 'post',
    data: data
	});
}
function append(dict1, dict2){
  var i
  var keys = Object.keys(dict2)
  for (i = 0; i < keys.length; i++){
    dict1[keys[i]] = dict2[keys[i]] 
  }
}

function getID(url){
  const start = "PROLIFIC_PID"
  var check = url.match(start)
  var reg = /PROLIFIC_PID=[a-z0-9]+&/
  if(check !== null){
    var extract = url.match(reg)
    return extract[0].slice(13,37)
  } else {
    return null
  }
  
}