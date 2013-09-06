// vous.js
(function(){
  var firevous = new Firebase('https://firevous.firebaseIO.com/vous/nxhx-org');

	var html = '\
		<div id="splash"></div>\
		<div id="chat">\
		  <form id="chatform">\
		    Want to <span id="chatverb"></span> <b id="chattopic"></b> with others nearby?<br>\
		    Enter <input style="width:90px" id="vous_handle" placeholder="@your_twitter"> and \
		    <input id="vous_city" style="width: 60px" placeholder="city">\
		    <button>Post</button>\
		  </form>\
		  <div id="chat_entries"></div>\
		</div>';

  window.addEventListener('load', function() {
    document.body.insertAdjacentHTML('beforeend', html);

    firevous.on('child_added', function(snapshot) {
      var v = snapshot.val();
      chat_entries.innerHTML += "<div><a href='http://twitter.com/" + v.handle + "'>@" + v.handle + "</a> in <b>" + v.city + 
        "</b> would like to " + v.verb + " <b>" + v.topic + "</b>."
    })

    splash.onclick = function(){
      chat.style.display = splash.style.display = 'none';
    }
    chatform.onsubmit = function() {
      if (vous_handle.value[0]== '@') vous_handle.value = vous_handle.value.slice(1);
      firevous.push({
        topic: chattopic.innerText,
        city: vous_city.value,
        handle: vous_handle.value,
        verb: chatverb.innerText
      });
      chatform.style.display = 'none';
      return false;
    };

    var discuss = document.querySelectorAll('[vous]');
    for (var i = 0; i < discuss.length; ++i) {
      discuss[i].topic = discuss[i].parentNode.innerText;
      var topic = discuss[i].getAttribute('topic');
      if (topic) discuss[i].topic = topic;
      discuss[i].verb = discuss[i].getAttribute('vous');
      discuss[i].innerText = discuss[i].verb;
      discuss[i].onclick = function(ev) {
        chat.style.display = '-webkit-box';
        splash.style.display = 'block';
        chatform.style.display = '-webkit-box';
        ev.stopPropagation();
        document.getElementById('chatverb').innerText = ev.target.verb;
        document.getElementById('chattopic').innerText = ev.target.topic;
    }
  }

  });
})();



// <div id="splash"></div>
// <div id="chat">
//   <form id="chatform">
//     Want to <span id="chatverb"></span> <b id="chattopic"></b> with others nearby?<br>
//     Enter <input style="width:90px" id="vous_handle" placeholder="@your_twitter"> and 
//     <input id="vous_city" style="width: 60px" placeholder="city">
//     <button>Post</button>
//   </form>
//   <div id="chat_entries"></div>
// </div>


// <script type="text/javascript">

//   // inject splash and chatter

//   var firevous = new Firebase('https://firevous.firebaseIO.com/vous/nxhx-org');
//   firevous.on('child_added', function(snapshot) {
//     var v = snapshot.val();
//     chat_entries.innerHTML += "<div><a href='http://twitter.com/" + v.handle + "'>@" + v.handle + "</a> in <b>" + v.city + 
//       "</b> would like to " + v.verb + " <b>" + v.topic + "</b>."
//   })

//   splash.onclick = function(){
//     chat.style.display = splash.style.display = 'none';
//   }
//   chatform.onsubmit = function() {
//     if (vous_handle.value[0]== '@') vous_handle.value = vous_handle.value.slice(1);
//     firevous.push({
//       topic: chattopic.innerText,
//       city: vous_city.value,
//       handle: vous_handle.value,
//       verb: chatverb.innerText
//     });
//     chatform.style.display = 'none';
//     return false;
//   };

//   var discuss = document.querySelectorAll('[vous]');
//   for (var i = 0; i < discuss.length; ++i) {
//     discuss[i].topic = discuss[i].parentNode.innerText;
//     var topic = discuss[i].getAttribute('topic');
//     if (topic) discuss[i].topic = topic;
//     discuss[i].verb = discuss[i].getAttribute('vous');
//     discuss[i].innerText = discuss[i].verb;
//     discuss[i].onclick = function(ev) {
//       chat.style.display = '-webkit-box';
//       splash.style.display = 'block';
//       chatform.style.display = '-webkit-box';
//       ev.stopPropagation();
//       document.getElementById('chatverb').innerText = ev.target.verb;
//       document.getElementById('chattopic').innerText = ev.target.topic;
//     };
//   }
// </script>


function findDoables(){
  // gather anything with a [doable] attr
  // search for subject, quality, and metro in self/parents
  // search for title and description as child headers and paras  
  // check if guides in parent
}


function findGuides(){
  // gather anything with a [subject] that's not [doable]
}

