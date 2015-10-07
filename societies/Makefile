index.html: societies.json rituals.json gen_index.jsx
	./node_modules/babel/bin/babel-node.js gen_index.jsx > $@

fetch:
	curl "https://api.airtable.com/v0/appjIKQ1eAEJ4BHta/societies?view=all" -H "Authorization: Bearer $(AIRTABLE_API_KEY)" > societies.json
	curl "https://api.airtable.com/v0/appjIKQ1eAEJ4BHta/rituals?view=all" -H "Authorization: Bearer $(AIRTABLE_API_KEY)" > rituals.json
