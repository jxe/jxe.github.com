import { renderToString } from 'react-dom/server'
import { Me, Nav, Text, Work } from './src/react-components'

function Page() {
  return <>
    <meta name="viewport" content="width=device-width,initial-scale=1.0,maximum-scale=1.0,user-scalable=0" />
    <title>Joe Edelman</title>
    <link rel="stylesheet" href="/page.css" />

    <Me />

    <Nav active="current" />

    <Text>{`
I co-lead the [Meaning Alignment Institute](https://meaningalignment.org), where I work to align markets, democracies, and AIs with what's important to people. I'm a PI on the [AGI Institutions](https://agi-institutions.org) and [Full-Stack Alignment](https://arxiv.org/abs/2512.03399) research programs, which include a network of 50+ researchers at universities and industry labs. My focus is on new, values-explicit [democratic](https://meaningalignment.substack.com/p/the-first-moral-graph) and [post-market structures](https://meaningalignment.substack.com/p/market-intermediaries-a-post-agi).
    `}</Text>

    <Nav active="philosophy" />

    <Text>{`
My philosophy work descends pretty clearly from that of [Charles Taylor](https://en.wikipedia.org/wiki/Charles_Taylor_(philosopher)), [Ruth Chang](http://ruthchang.net), [Amartya Sen](https://en.wikipedia.org/wiki/Amartya_Sen), and [David Velleman](http://nyu.academia.edu/DavidVelleman).

It concerns the nature of values and norms, and how they play into the choices we make, and into our retrospective assessments. That is, I work mainly in the theories of choice, action, and practical reason.

One contribution is an operationalization for ["human values"](https://arxiv.org/abs/2404.10636) and meaningful choices precise enough that mechanisms, metrics, and ML models can be built on top. Perhaps this will also lead to explainable moral reasoning in AI, and offer a path past mechanisms that optimize against us.

My deepest motivation is not just to contribute to philosophy, but to answer pressing questions like:
- Why are some human needs sensed/addressed by markets and bureaucracies, but not others?
- Is there a metric it's safe to maximize?
- What drives the modern trend towards atomization and social isolation?

I believe these are ultimately questions about what in human life is worth honoring, and that the answers are found in the details of how people make choices, and how they assess them. E.g.: What do people mean when they say an experience was *meaningful* (as opposed to pleasurable, important, etc) or a choice was *wise* (as opposed to effective, clever, etc)?
    `}</Text>

    <Nav active="writing" />

    <article>

      <Work
        title="Co-Aligning AI and Institutions with Thick Models of Value"
        year={2025}
        link="https://arxiv.org/abs/2512.03399"
        otherAuthors="Tan Zhi-Xuan, Matija Franklin, Michiel Bakker, Jakob Foerster, Iason Gabriel, + many others"
        footer={<>ICML 2025 Workshop on Models of Human Feedback for AI Alignment (MoFA), Vancouver</>}
      >
        Even an AI system that is perfectly aligned to the intentions of its operating organization can lead to bad outcomes if the goals of that organization are misaligned with those of other institutions and individuals. For this reason, we need full-stack alignment, the concurrent alignment of AI systems and the institutions that shape them with what people value. This can be done without imposing a particular vision of individual or collective flourishing. We argue that current approaches for representing values, such as utility functions, preference orderings, or unstructured text, struggle to address these and other issues effectively. They struggle to distinguish values from other signals, to support principled normative reasoning, and to model collective goods. We propose thick models of value will be needed.
      </Work>


      <Work
        title="What are Human Values, and How Do We Align AI to them?"
        year={2024}
        link="https://arxiv.org/abs/2404.10636"
        otherAuthors="Oliver Klingefjord and Ryan Lowe"
      >
        There is an emerging consensus that we need to align AI systems with human values (Gabriel, 2020; Ji et al., 2024), but it remains unclear how to apply this to language models in practice. We split the problem of "aligning to human values" into three parts: first, eliciting values from people; second, reconciling those values into an alignment target for training ML models; and third, actually training the model. In this paper, we focus on the first two parts, and ask the question: what are "good" ways to synthesize diverse human inputs about values into a target for aligning language models?
      </Work>

      <Work
        title="Scale, Togetherness, and Meaning"
        year={2023}
        link="https://www.youtube.com/watch?v=hZpKdfbrd6o"
        footer={<a href="https://textbook.sfsd.io/overview">transcript</a>}
      >
        In Chapter 1 of this talk, I cover problems with meaning and the social fabric that emerge at large scales—such as with global social networks, operating systems, app stores, and markets, and give solutions.
      </Work>

      <Work
        title="Values, Preferences, Meaningful Choice"
        year={2022}
        link="https://github.com/jxe/vpm/blob/master/vpm.pdf"
      >
        I present a conception of values as attention policies resulting from constitutive judgements, and use it to build an alternative preference relation, Meaningful Choice, which retains many desirable features of revealed preference.
      </Work>

      <Work
        title="Values-Based Data-Science and Design"
        year={2021}
        link="https://textbook.sfsd.io"
      >
        A textbook on the design of meaningful social apps, focusing especially on methods for gathering sources of meaning, understanding why it's hard for people to live meaningfully, designing apps that help with these "hard steps", and monitoring the results.
      </Work>

      <Work
        title="Nothing to be Done"
        year={2017}
        link="https://medium.com/what-to-build/nothing-to-be-done-bfe2ce71a3a2"
      >
        Intellectual history of the west, from a designers' standpoint, as a succession of approaches to human systems.
      </Work>

      <Work
        title="Is Anything Worth Maximizing"
        year={2016}
        link="https://medium.com/what-to-build/is-anything-worth-maximizing-d11e648eb56f"
      >
        About how metrics affect the structure of organizations and societies, how they change the economy, how we’re doing them wrong, and how we could do them right.
      </Work>

      <Work
        title="Choicemaking and the Interface"
        year={2014}
        link="http://nxhx.org/Choicemaking/"
      >
        Theories of choice from economics and philosophy suggest information requirements for good choices. In view of these requirements, we can see why current menus lead toward regrettable and isolating choices.
      </Work>

    </article>

    <Nav active="prototypes" />

    <article>

      <Work
        title="Values Discovery GPT"
        year={2023}
        link="https://chat.openai.com/g/g-TItg5klMA-values-discovery"
      >
        A GPT which talks to you about what's important to you and makes values cards which capture your sources of meaning.
      </Work>

      <Work
        title="Moral Graph Elicitation"
        year={2023}
        link="https://meaningalignment.substack.com/p/the-first-moral-graph"
      >
        A democratic process for collecting values from a large, diverse group and building a "moral graph" that shows consensus about which values are wiser than which, and which can be used to create policy, tune LLMs, etc.
      </Work>

      <Work
        title="Building a Second Heart"
        year={2021}
        link="https://twitter.com/edelwax/status/1367881670389547010"
      >
        A research demo for a writing interface backed by a database of values.
      </Work>

      <Work
        title="Social Programming Considered as a Habitat for Groups"
        year={2019}
        link="/pdf/edelman-habitat.pdf"
      >
        A new way to code up social apps and information systems emerges from studying how people use ordinary speech to set up social roles and obligations.
      </Work>

    </article>

    <Nav active="games" />

    <article>
      <p>Find my games on <a href="https://meaning.supplies/supplies/list/qtyu4XHY">meaning.supplies</a></p>
    </article>

    <Nav active="background" />

    <Text>{`
My origins are in HCI and in game design.

In HCI, I was lucky to learn from people like [Alan Kay](https://en.wikipedia.org/wiki/Alan_Kay), [Terry Winograd](https://hci.stanford.edu/winograd/), and [Bill Verplank](https://en.wikipedia.org/wiki/Bill_Verplank) at [Interval Research](https://en.wikipedia.org/wiki/Interval_Research_Corporation), and from [Howie Shrobe](https://people.csail.mit.edu/hes/) and [Marvin Minksy](https://web.media.mit.edu/~minsky/) at MIT. And more recently through conversations with [Bret Victor](http://worrydream.com) and [Rob Ochshorn](http://rmozone.com/).

My tactic of running social experiments through games and performance emerged from study with [Christian Wolff](https://en.wikipedia.org/wiki/Christian_Wolff_(composer)) (partipatory music) and [Peter Parnell](https://en.wikipedia.org/wiki/Peter_Parnell) (playwriting) at Dartmouth, and then various improvisational scores with [Nancy Stark Smith](http://nancystarksmith.com), [Mike Vargas](http://www.mikevargas.net), [Ruth Zaporah](http://www.actiontheater.com/ruth.htm), and others. I had the great fortune to work alongside [Albert Kong](http://www.lethalbeef.com/) and [Catherine Herdlick](http://paradeofkites.com/) on the real world games festival [Come Out and Play](http://www.comeoutandplay.org/).

My concern with meaning and metrics has its origins working with [Casey Fenton](http://www.caseyfenton.com/) at CouchSurfing, where I developed the meaning-based organizational [metrics](/csmetrics/) which guided the company. I then co-founded the Center for Humane Technology with [Tristan Harris](http://www.tristanharris.com/), and coined the term “Time Well Spent” for a family of metrics adopted by teams at Facebook, Google, and Apple.

I then started [an online school](https://sfsd.io) and wrote [a textbook on Values-Based Design](https://textbook.sfsd.io), and finally launched [a nonprofit](https://meaningalignment.org) to bring about a future where wise AIs and humans collaborate to help people live well.

I continue to benefit from working alongside [Ellie Hain](https://twitter.com/ellie__hain), Oliver Klingefjord, and [Ryan Lowe](https://scholar.google.ca/citations?user=iRgYMuEAAAAJ&hl=en/), and from many conversations with Anne Selke.
    `}</Text>
    <div style={{ height: '160px' }} />
  </>
}

Bun.write('index.html', renderToString(<Page />))

// Build cv.html from cv.md
import { marked } from 'marked'
const cvMd = await Bun.file('cv.md').text()
const cvHtml = `<!DOCTYPE html>
<meta name="viewport" content="width=device-width,initial-scale=1.0,maximum-scale=1.0,user-scalable=0"/>
<title>Joe Edelman — CV</title>
<style>
  body { font-family: 'SF Mono', 'Menlo', 'Consolas', monospace; font-size: 14px; line-height: 1.6; color: #333; max-width: 72ch; margin: 40px auto; padding: 0 20px; word-wrap: break-word; }
  h1 { font-size: 16px; font-weight: bold; margin: 0 0 0.5em; }
  h2 { font-size: 14px; font-weight: bold; text-transform: uppercase; letter-spacing: 0.05em; color: #666; margin: 2em 0 0.5em; border-bottom: 1px solid #ddd; padding-bottom: 0.25em; }
  p { margin: 0.5em 0; }
  a { color: #06c; }
  ul { padding-left: 1.5em; margin: 0.5em 0; }
  li { margin: 0.25em 0; }
  strong { font-weight: bold; }
  em { font-style: italic; color: #666; }
  hr { border: none; border-top: 1px solid #ddd; margin: 1.5em 0; }
</style>
${marked(cvMd, { async: false })}`
Bun.write('cv.html', cvHtml)