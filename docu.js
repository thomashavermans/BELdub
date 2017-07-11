let castarray = [
  {
    'name': 'CHALICE <br> SOUNDSYSTEM',
    'class': 'chalice',
    'imgtag': 'CHALICE%20SOUNDSYSTEM%202.png',
  },
  {
    'name': 'CHANNEL ONE SOUNDSYSTEM',
    'class': 'channelOne',
    'imgtag': 'CHANNEL%20ONE%20SOUNDSYSTEM.png',
  },
  {
    'name': 'CONGO ASHANTI ROY',
    'class': 'congo',
    'imgtag': 'CONGO%20ASHANTI%20ROY.png',
  },
  {
    'name': 'CRUCIAL ALPHONSO',
    'class': 'crucialA',
    'imgtag': 'CRUCIAL%20ALPHONSO.png',
  },
  {
    'name': 'CRUCIAL P',
    'class': 'crucialP',
    'imgtag': 'CRUCIAL%20P.png',
  },
  {
    'name': 'DOCTOR DOG',
    'class': 'drDog',
    'imgtag': 'DOCTOR%20DOG.png',
  },
  {
    'name': 'DON WACKIE',
    'class': 'donW',
    'imgtag': 'DON%20WACKIE.png',
  },
  {
    'name': 'FATMAN',
    'class': 'fatman',
    'imgtag': 'FATMAN.png',
  },
  {
    'name': 'JAH VOICE SOUNDSYSTEM',
    'class': 'jahV',
    'imgtag': 'JAH%20VOICE%20SOUNDSYSTEM.png',
  },
  {
    'name': 'JAHMBASSADOR',
    'class': 'jahmB',
    'imgtag': 'JAHMBASSADOR.png',
  },
  {
    'name': 'KAREL MICHIELS',
    'class': 'KarelM',
    'imgtag': 'KAREL%20MICHIELS.png',
  },
  {
    'name': 'KIANGANA',
    'class': 'kiangana',
    'imgtag': 'KIANGANA.png',
  },
  {
    'name': 'KING FLASHMAN',
    'class': 'kingF',
    'imgtag': 'KING%20FLASHMAN.png',
  },
  {
    'name': 'LLOYD COXSONE',
    'class': 'coxsone',
    'imgtag': 'LLOYD%20COXSONE.png',
  },
  {
    'name': 'LYRICAL BENJIE',
    'class': 'benjie',
    'imgtag': 'LYRICAL%20BENJIE.png',
  },
  {
    'name': 'MISSING LINK',
    'class': 'missingL',
    'imgtag': 'MISSING%20LINK.png',
  },
  {
    'name': 'NOMADIX',
    'class': 'nomadix',
    'imgtag': 'NOMADIX.png',
  },
  {
    'name': 'PANACHE CULTURE',
    'class': 'panache',
    'imgtag': 'PANACHE%20CULTURE.png',
  },
  {
    'name': 'PROFESSOR CAT',
    'class': 'profCat',
    'imgtag': 'PROFESSOR%20CAT.png',
  },
  {
    'name': 'PURAMAN',
    'class': 'puraman',
    'imgtag': 'PURAMAN.png',
  },
  {
    'name': 'RADICS',
    'class': 'radics',
    'imgtag': 'RADICS.png',
  },
  {
    'name': 'RAS MUFFET',
    'class': 'rasM',
    'imgtag': 'RAS%20MUFFET.png',
  },
  {
    'name': 'RIGO VERWIMP',
    'class': 'rigoV',
    'imgtag': 'RIGO%20VERWIMP.png',
  },
  {
    'name': 'RUSS D',
    'class': 'russD',
    'imgtag': 'RUSS%20D.png',
  }
]

let cast_div = document.getElementById('castGrid');
let cast_text = document.getElementsByClassName('hoverText');
let modaldoc = document.getElementsByClassName('modaldocu')[0];
let tellerdoc = 0;

for (var i = 0; i < castarray.length; i++) {
  let cast = document.createElement('div');
  cast.className = 'col-lg-2 col-md-3 col-sm-4 col-xs-6 thumb ' + castarray[i].class + '';
  cast_div.appendChild(cast);


  let overlay = document.createElement('div');
  overlay.className = 'overlay gridImages';
  cast.appendChild(overlay);


  let cast_link = document.createElement('div');
  cast_link.className = 'hoverText';
  cast_link.id = castarray[i].name;
  cast_link.innerHTML = castarray[i].name;
  let hover_text = document.getElementsByClassName('hoverText');
  for (var i = 0; i < hover_text.length; i++) {
    hover_text[i].setAttribute('imgalt', 'Assets/img/CAST/' + castarray[i].imgtag, )
  }
  overlay.appendChild(cast_link);


  // for (var i = 0; i < cast_text.length; i++) {
  //   cast_text[i].onclick = function() {
  //     if (tellerdoc == 1) {
  //       tellerdoc = 0;
  //     }
  //
  //     else {
  //       console.log(this.getAttribute('data-test'));
  //       modaldoc.style.opacity = 1;
  //       modaldoc.style.visibility = 'visible';
  //       document.getElementsByClassName('docu-foto')[0].src = this.getAttribute('imgalt');
  //       tellerdoc++
  //     }
  //   }
  // }
}

window.onclick = function(event) {
    if (event.target == modaldoc) {
      tellerdoc = 0;
      modaldoc.style.opacity = 0;
      modaldoc.style.visibility = 'hidden'
    }
}
