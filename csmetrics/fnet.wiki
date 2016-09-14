 Fnet                                                                         | 20070703232341 | '''fnet''' is a command-line tool for interacting with [[fnetd]] servers

== Usage ==

<pre>
% fnet help
fnet -- the *command-line* social network
usage: fnet <subcommand> [args ]
For additional information: http://fnetd.org

Available subcommands:
    claim STRING ...            - associates STRING with your identity
                                  (if STRING is a URL, does OpenID)
                              
    friend PERSON ...           - declare a relationship w. the identity associated
                                  with PERSON besides "friend", it can be "love",
                                  "met", "trust", etc

    hurt PERSON ...             - identify a spammer, decreasing their trust level
                                  and that of everyone who vouched for them

    showto WHO NAME=VALUE ...   - share some of your attributes with a select group
   
    status [ PERSON ]           - show the community designations that have been
                                  given to this person on account of their
                                  relationships, and any of their attributes
                                  make visible to you (defaults to SELF)
Arguments:
* PERSON can be any text string associated with an identity in the fnet system ( i.e., email addresses, profile URLs, picture URLs, full names)  
* WHO is a ferret-style boolean query involving tags and community designations.  For instance,
    fnet showto 'couchsurfing:posex5|advogato:journeyman wants_conversation' tel:+358-555-1234567
will show your telephone number to anyone with high ratings on either couchsurfing or advogato who declares "wants_to_talk".


% head -1 `which fnet`
#!/usr/bin/ruby
</pre>

[[Category:Fnet]] | -|
