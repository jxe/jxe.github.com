 Fnetd                                                                        | 20070703235247 | <pre>
% whatis fnetd
fnetd(8)                   - a social networking kernel
</pre>

== Goals ==
* To create a fast kernel ('fnetd') that can do trust metric and tag-based search stuff across multiple communities with geolocation data.  CouchSurfing can migrate to this kernel when it grows too big for the current mysql implementation and the current semi-manually maintained reference system.
* To generate a lot of interest among geeks with the '[[fnet]]' command line client, so as to find people to help us build the [[Random Action]] (formerly "streetsurfing") site.  
* To provide a representation/display-independent piece of infrastructure for the [[adventure economy]].
: initial implementations of '[[fnet]]' and 'fnetd', together, should be less than 500 lines of code.

== Distributed Design ==
* 'fnetd' servers will be a distributed and hierarchical, like DNS.  
* A given server will claim ownership of certain geographical regions or certain tags. 
* [[fnetd/fnetd.sql]]

== Trust Metric ==
In addition to aggregating trust metrics from other sites when people "fnet claim" their advogato or couchsurfing or jyte profiles, I would like the fnetd to calculate its own trust metric based on who does an "fnet friend" to whom.  I would like to do something network-flow like, similar to advogato, but with an additional step of transitive retribution, something like "fnet hurt" below.

Above all this has to be fast, efficient, and easy to understand.  At most O(log V) per "fnet friend" or "fnet hurt" amortized, and in some kind of easy to understand persistent data structure.

== See also ==

===Trust Metrics===

* http://en.wikipedia.org/wiki/Trust_metric
* http://moloko.itc.it/trustmetricswiki/moin.cgi/TrustMetricsEvaluationProject

Advogato Trust Metric

* http://www.kuro5hin.org/story/2006/4/12/93756/9085 Can The Advogato Trust Metric Save Kuro5hin?
* http://www.advogato.org/trust-metric.html
* http://www.advogato.org/article/261.html
* http://en.wikipedia.org/wiki/Advogato
* http://www.advogato.org/person/robogato/diary.html

Appleseed

* http://citeseer.ist.psu.edu/ziegler04spreading.html
* http://www.citeulike.org/user/phauly/article/457
* http://www.springerlink.com/content/f3p2685201472622/
* 

Trust Rank

* http://dbpubs.stanford.edu:8090/pub/2004-17

Local trust metrics

* http://moloko.itc.it/trustmetricswiki/moin.cgi/LocalTrustMetric
* http://moloko.itc.it/paoloblog/archives/2005/04/30/paper_accepted_at_aaai05_controversial_users_demand_local_trust_metrics_an_experimental_study_on_epinionscom_community.html

Relevant Graph Theory

* http://en.wikibooks.org/wiki/Algorithm_implementation/Graphs/Maximum_flow/Edmonds-Karp
* http://en.wikipedia.org/wiki/Strongly_connected_component
* http://citeseer.ist.psu.edu/pearce03online.html  Online Algorithms for Topological Order and Strongly Connected Components (2003)
* http://en.wikipedia.org/wiki/Glossary_of_graph_theory

==== OpenPrivacy ====

Non updated initiative since 2001/2002 but still with a lot of fantastic insights.

http://openprivacy.org/ The OpenPrivacy initiative is an Open Source collection of software frameworks, protocols and services providing a cryptographically secure and distributed platform for creating, maintaining, and selectively sharing user profile information.

http://sierra.openprivacy.org/ An OpenPrivacy Reputation Management Framework

http://www.openprivacy.org/papers/200103-white.html Enhancing the Internet with Reputations An OpenPrivacy white paper Date: 	March 2001 by Fen Labalme <fen@openprivacy.org> Kevin Burton <burton@openprivacy.org> 

http://www.openprivacy.org/reputations/  Reputations and Reputation Management Concepts - Every agent within the OpenPrivacy system is based on the Reputation Management Framework (RMF) which provides the basis for secure, pseudonymous and distributed communities and other applications. 

http://www.openprivacy.org/opr.shtml OpenPrivacy Requirements

http://www.openprivacy.org/platform.shtml OpenPrivacy platform

==== different possible values for trust statements ====

http://www.trustcomp.org/Trustcomp-trust-values.html

==== Augmented social network ====

The Augmented Social Network (ASN) was proposed in a June 2003 paper presented at the PlaNetwork Conference by Ken Jordan, Jan Hauser, and Steven Foster. The paper makes the case for a civil society vision of digital identity that treats Internet users as citizens rather than consumers. The ASN is described as an Internet-wide system that enables users to find others who have relevant interests or expertise, in a context that engenders trust, so that they can form a social network more effectively. At its core is a form of digital identity that supports appropriate introductions between people who share affinities through the recommendations of trusted third parties. It also supports the distribution of media using the same Internet-wide recommendation system.

Objectives
The authors describe the ASN as having three objectives:
# To create an Internet-wide system that enables more efficient and effective knowledge sharing between people across institutional, geographic, and social boundaries.
# To establish a form of persistent online identity that supports the public commons and the values of civil society.
# To enhance the ability of citizens to form relationships and self-organize around shared interests in communities of practice to better engage in the process of democratic governance.
To achieve these objectives, the paper sketches a rough technical architecture that would "enhance the power of social networks by using interactive digital media to exploit the transitive nature of trust through the principle of six degrees of connection."

* http://en.wikipedia.org/wiki/Augmented_Social_Network
* http://asn.planetwork.net/

==== Social whitelisting with OpenID ====
* http://simonwillison.net/2007/Jan/22/whitelisting/
* http://www.plasticbag.org/archives/2007/01/social_whitelisting_w/
* http://www.firstmonday.org/issues/issue8_8/jordan/

===Corroborating Identification===

[[MicroID]]
* http://www.windley.com/archives/2006/03/microid_a_micro.shtml
* http://microid.org/

[[OpenID]]
* http://openid.org/
* http://claimid.com/

Trust Ontology
* http://www.w3.org/2001/sw/Europe/reports/trust/11.2/d11.2_trust_vocabularies.html


[[Category:Fnet]] | -|
