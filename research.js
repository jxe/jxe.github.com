// Generated by CoffeeScript 1.9.1
(function() {
  var html, project, project_title, ref, section, section_link, section_title;

  window.research = {
    "Tech": {
      "Metrics @ Couchsurfing": {
        url: "https://github.com/jxe/jxe.github.com/tree/master/csmetrics",
        desc: "While at CouchSurfing, I developed these analytics to guide safety, search, and for internal and external dashboards."
      },
      "Groundcrew": {
        img: "img/groundcrew2.jpg",
        url: "#groundcrew",
        tags: 'app',
        desc: "My startup from 2008-2012 was a realtime teambuilding command console used for disaster relief, city halls, political and activist campaign coordinators, etc"
      },
      "CEML": {
        img: "img/ceml.png",
        desc: "a programming environment for describing &amp; coordinating group work. see <a href='https://github.com/citizenlogistics/ceml/blob/master/guide/guide.md'>the documentation</a> for sample code or <a href='http://github.com/citizenlogistics/ceml'>install it yourself</a>.",
        tags: 'language'
      },
      "Collective Experience Project": {
        img: "img/signpost.png",
        url: "http://willandintent.org/cxp/",
        desc: "open, structured data about what people try and how it works out for them",
        tags: 'data'
      }
    },
    "Group Games": {
      "Hyperactive Listening": {
        img: "img/hyperl.jpg",
        url: "https://quip.com/kc4jAKO83gUD",
        desc: "A game where people bring their hopes, fears, or plans, and a team of listeners does live, playful research and simulations."
      },
      "Free Critical Discussion": {
        img: "img/fcd.jpg",
        url: "https://m.facebook.com/profile.php?id=523439091118445",
        desc: "Just like free hugs, but different"
      },
      "Nut or Fish": {
        img: "img/nutfish.jpg",
        url: "http://jxe-games.tumblr.com/post/103312737380/nut-or-fish-a-micro-interaction-coaching-game",
        desc: "Contemplate a big life choice with a stranger, then make a commitment to one another and seal it by eating an almond or a sardine."
      },
      "Sandbox SF": {
        img: "img/sandbox.jpg",
        desc: "An open mic and testing ground for newly invented group activities and games.",
        url: "https://www.facebook.com/groups/496677353748745/"
      },
      "Analog Cupid": {
        img: "img/anac.jpg",
        url: "https://www.facebook.com/analogcupid",
        desc: "Local matchmaking, with polaroids and paper profiles"
      },
      "WPE": {
        img: "img/codered.jpg",
        url: "https://www.dropbox.com/sh/pt5k3bg48j33utr/SHoH1sOsWU",
        desc: "Immersive experiences in the unlikeliest places."
      },
      "Notecard parties": {
        url: "/misc/notecard-party-faq.html",
        desc: "events where guests at a party are assigned precisely-timed tasks, distributed on little cards or via SMS"
      },
      "Doubt Club": {
        url: "http://twitter.com/doubtclubsf",
        desc: "A monthly event giving SF tech leaders a safe space for philosophically thinking about their impact."
      }
    },
    "Writing": {
      "Human Values, Choicemaking, and Interface Design": {
        url: "http://nxhx.org/Choicemaking/",
        desc: "Why we're all wasting time on the internet, and what to do about it.",
        readtime: '2 hour'
      },
      "Two Kinds of Demand": {
        img: "img/slots.jpeg",
        url: "https://medium.com/@edelwax/two-kinds-of-demand-a36c54b97ee1",
        readtime: '2 min',
        desc: "Is our economy powered by activities (and pageviews) we later regret?"
      },
      "Winning the Platform Wars with Morality": {
        url: "https://medium.com/@edelwax/mobile-platforms-and-human-values-74e5380713eb",
        readtime: '2 min',
        desc: "Design is no longer enough for your customers; the next decade is about values-alignment"
      },
      "Every Screen Empowers Us or Weakens Us": {
        img: "img/walle.jpeg",
        url: "https://medium.com/@edelwax/every-screenful-of-every-app-either-empowers-us-or-weakens-us-2ef22a472b30",
        readtime: '4 min',
        desc: "We make a thousand choices a day, and the character of those choices is in the end who we become."
      },
      "Deep Optimism": {
        url: "https://medium.com/@edelwax/deep-optimism-ba527ef817bb",
        readtime: '1 min',
        desc: "Ask them how the world works, or what can be improved—deep optimists will not answer quickly."
      }
    }
  };

  html = [];

  ref = window.research;
  for (section_title in ref) {
    section = ref[section_title];
    section_link = section_title.toLowerCase().replace(/\ /g, '-');
    html.push("<a id='" + section_link + "'/><section class='screenful'><h3>" + section_title + "</h3><div class='list'>");
    for (project_title in section) {
      project = section[project_title];
      if (project.url) {
        html.push("<a href='" + project.url + "'>");
      }
      html.push("<div class='researchItem'>");
      html.push("<div><div class='title'>" + project_title);
      if (project.readtime) {
        html.push("<span class='readtime'>" + project.readtime + " read</span>");
      }
      html.push("</div>");
      if (project.desc) {
        html.push("<div class='desc'>" + project.desc);
        if (project.tags) {
          html.push("<span class='tag'>" + project.tags + "</span>");
        }
        html.push("</div>");
      }
      html.push("</div>");
      if (project.img) {
        html.push("<img src='" + project.img + "'>");
      }
      html.push("</div>");
      if (project.url) {
        html.push("</a>");
      }
    }
    html.push("</div></section>");
  }

  document.write(html.join(''));

}).call(this);
