## Macroeconomic indicators in an adventure economy

### ΔNOC (Net Orchestrated Conviviality)

* We estimate the number of hours users spent happily in real-life communion with someone they met due to CS. Then we subtract the number of hours they spent trying to use the website as negative conviviality. This, divided by the number of hours in a week, is the ΔNOC for that week.

### Gross Orchestrated Conviviality (G.O.C.) 

The CouchSurfing analogue to [[:wikipedia:GDP]].  A measure of the total amount of love and community and joy that we make possible each year.

* H = (hours of CS-induced conviviality)
* Q = (avg quality of experience)
* GOC = H*Q

We can get a lower bound on H by looking at the total number of CS-caused introductions and estimating a minimum or low-average time for each of them.  The best data we have on quality is the avg. overall experience (-2 to +2) and avg. trust (0-6) data on the qos.html page.


### Global Conviviality Potential & CouchCapacity

A measure of the total number of people globally who feel they can hang out, have a great time, and get their needs met--any time they want to.  In this view we see ourselves as providing possibilities, rather than ensuring a certain amount of conviviality.

* U = (set of all users)
* X(u) = (ease of reaching an available host or person to hang out with)
* Q(u) = (expected quality of interaction of reachable hosts)
* N(u) = (expected level at which needs will be met by reachable hosts)
* GCP = integral across all U of X(u) * Q(u) * N(u)

Another way to calculate it would be spacially, rather than by user:

* GCP = total percentage of earth's landmass couchable * degree of couchability

Finally, it easy to figure how many surfers we can host:

* select sum(max_surfers) from user where couch_available in ('Y', 'D')
* select sum(max_surfers) from user where couch_available in ('M');
* On one day in Dec 2007, our  capacity was 113k surfers

And the amount of capacity we currently use:

*  select sum(hosted_days) from user_connection where rcd between (unix_timestamp() - 6*7*24*60*60) and (unix_timestamp() - 14*24*60*60);
* Again, in Dec 2007, we saw 23703 surf-days over 4 weeks = 5,926 surf-days per week, i.e. 5% of capacity, assuming most sleep-spots would accomodate a surfer a week.

But this doesn't take into account the lack of capacity in major cities and the surplus in rural areas.


### Users' Return on Investment (uR.O.I.)

How much effort does it take on our users part to meet people and become included on couchsurfing?  A rough measure is logins per friends made, which is available on the Q.O.S. page as the "virtuality" percentage.  A better measure would take into account:

* M = median logins per week across all users
* T = total number of days spent together by newly connected people

It would also be nice to calculate the curve between X and Y:

* X = number of weeks a user has been actively using the site
* Y = the number of IRL friends they've met through CS

And to have a simple number available on qos.html:

* "avg time-to-friend rate is 18 hrs/friend"


### Cross-Culture Data

It would be great to figure out which of our connections are cross cultural. E.g.

 * total # cross cultural connections is 1800
 * cross cultural connections per hour: 3

But this is nontrivial given our current dataset.  Eventually we want to run [clique detection](http://en.wikipedia.org/wiki/Clique_(graph_theory)) and [clustering](http://en.wikipedia.org/wiki/Cluster_analysis) algorithms on our data.  Then we can identify cross-clique and cross-cluster friendships and hostings.

For now, we use a hardcoded mapping from country of origin to cultural distance.

