# Later
#  - Utopian Interfaces (a web gallery on a mountaintop)
#  - Will and Intent Manifesto  (logotype?)
#  - Hindsight (from CRX store)
#  - ValuesDB (from /crx/)
#  - notecard parties (similar to wildcard... a set of cards)
#  - free critical discussion (from fb group)
#  - Sandbox (from fb group)
#
## Games
#
#* <a id="cardparties"></a> **Card Parties** are events where guests at a party are assigned precisely-timed tasks, distributed on little cards or via SMS.  Tasks interweave. Strangers find themselves in intimate encounters, quiet moments, facing challenges together, being theatrical, etc.  I have [an old FAQ](/misc/notecard-party-faq.html) for running one of your own and [some software and a mission database](http://github.com/jxe/Participatorium) that will help.
#
#* **Wish-fulfillment Card Parties** (2006,2007) -- At daylong events with 300 people, everyone was asked to make a wish for something that could realistically happen to them at the event that they would love.  A team of 30 people used a group editing and revision process to derive assignments for all 300 that, taken together, would make each person's wish come true.
#
#* **[SandboxSF](https://www.facebook.com/groups/496677353748745/)** -- I co-organize a monthly playtest for realworld games and a yearly festival ([Come Out and Play SF](http://comeoutandplaysf.org)) in SF.  Many of the games presented by others involve just-in-time teamwork, and often they are also about turning nonaffiliated strangers into affiliated groups in some public or semi-public-space venue.
#
#* **Worst Party Ever** -- Since 2011, I've been part of a crew that makes immersive experiences in public space.  Often simple.  Often beautiful.  Sometimes vaguely illegal.  These events are all multi-party markets in interaction and rapport.  They are physical markets, just like a farmer's market, and we have been making adjustments to optimize the emergence of the right audience-member / fulfilling experience transactions.
#
#I've made and tested over 200 group games and theatrical, participatory interventions.  Only a couple dozen are linked here, but I will be slowly filling in the portfolio.  You can also see very news ones on my [rulesets blog](http://jxe-games.tumblr.com/).
#
#* **Clandestine Film School** involves two decks of cards and a pack of hair clips, and is meant to be played in cafes where people work with their laptops and might like to work together instead.  One deck is a deck of "role cards" -- "director", "actor", "star", "interviewer", "cameraman".  The other has missions -- "a 6sec love story about mugs", "a 2min doco about lives of baristas", "a very subtle action adventure", etc.  Someone gives out cards and those who have roles and need to join mission team wear the hairclips.  Hashtags collect the media.  *Presented at SandboxSF in July '13 and played at Arbor in Oakland*.
#
#* **10 Challenges for New Friends** (2013) - Who else is tired of adding new friends on the internet without a good way to get to know them?  I made a challenged-based game for processing new interesting people and getting to know them.  Please feel free to make your own.  [Link](http://edelwax.tumblr.com/post/58978561014/10-challenges-for-new-friends)
#
#* **A Getting-to-know-you card game** (2012) - A simple game where cards dealt prompt successively riskier personal stories.  ([Rules](http://edelwax.tumblr.com/post/31384959456/a-getting-to-know-you-game-using-a-deck-of-cards-and-a))   <span vous="play" topic="GTKY Cards"></span>
#
#* **Various Theater Games and Warmups for Contact Improvisers** (2006) -- [A small booklet](/pdf/scorebook.pdf) for dancers.  <span vous="play" topic="Theater Games"></span>
#

#* **Numbers**.  This is a super-simple game you can play at any kind of event.  If you have twenty guests, pass out twenty slips of paper, numbered 1-20.  The goal is to end the evening with the number 1.  Announce that anyone can, if they find someone with a number lower than theirs, ask for a challenge.  The challenge should be possible and ideally, fun.  If they succeed, they get to trade for the lower number.  What happens is that people make more and more creative challenges for one another, and the challenges become lightweight designed experiences that are reproduced on their own merits.  *Played at COaPSF 2012 and many dinenr parties.*   <span vous="play" topic="Numbers"></span>


## Tech
#
#* <a id="groundcrew"></a>**Groundcrew** is a realtime teambuilding command console which was used by disaster relief agencies, city halls during snow storms, political and activist campaign coordinators, and field service and field medical companies. [screenshots](https://www.dropbox.com/s/7q0o8s921c8kzzi/2up-interagency.pdf) [a review](http://www.rebellionlab.com/2010/03/29/groundcrew-the-first-stage-of-location-based-services/) [video walkthrough](http://www.youtube.com/watch?v=9FPMGfAenZg)
#
#* I've created software for forming just-in-time opt-in teams with high opt-in rates and high performance.  These have been tested in environments ranging from art museum openings to disaster sites. **Cadre Events** is a mobile web- and sms-based interface for talking groups of people texting in at the same event and funneling them in chatrooms that coordinate group actitivies between strangers.   [screenshots](https://www.dropbox.com/sh/90olm7apkfbg374/d4SNqanDFn).  Deployed and refined at events at YBCA, CoAPSF 2011, and at several Occupy Wall Street sites!  Here are [some missions from CoAP](https://hackpad.com/Cadre-Events-missions-from-COAP2011-ZXCE1SjUZ4y)
#




window.research =

	"Writing":

    # "Measuring Teamwork in Healthy Communities":
    #   url: "https://www.dropbox.com/s/dlsyg7tu9tacz0j/metrics2.pdf"
    #   readtime: '30 min'
    #   desc: "a paper on community health metrics for the Knight Foundation in 2011."


html = []
for section_title, section of window.research
	section_link = section_title.toLowerCase().replace /\ /g, '-'
	html.push "<a id='#{section_link}'/><section class='screenful'><h3>#{section_title}</h3><div class='list'>"
	for project_title, project of section
		if project.url
				html.push "<a href='#{project.url}'>"
		html.push "<div class='researchItem'>"
		html.push "<div><div class='title'>#{project_title}"
		if project.readtime
			html.push "<span class='readtime'>#{project.readtime} read</span>"
		html.push "</div>"
		if project.desc
			html.push "<div class='desc'>#{project.desc}"
			if project.tags
				html.push "<span class='tag'>#{project.tags}</span>"
			html.push "</div>"
		html.push "</div>"
		if project.img
			html.push "<img src='../#{project.img}'>"
		html.push "</div>"
		if project.url
				html.push "</a>"
	html.push "</div></section>"
document.write html.join ''
