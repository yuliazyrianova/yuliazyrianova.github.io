/* ==========================================================================
   ALL SITE TEXT LIVES HERE.
   Edit the words between the `backticks`. Keep using curly quotes ’ “ ”
   and the Oxford comma (“A, B, and C”).
   <strong>…</strong> makes text bold, <em>…</em> makes it italic.
   ========================================================================== */

window.SITE = {

  /* ---------- COVER ---------- */
  cover: {
    name: `Yulia Zyrianova`,
    word: `Portfolio`,            // the handwritten word on the label
    sub: `Marketing Content`,
    filedUnder: [`Content Lead`, `Content Marketing Manager`, `Senior Marketing Copywriter`],
    photoAlt: `Portrait of Yulia Zyrianova, printed as a black-and-white halftone`,
  },

  /* ---------- ABOUT ---------- */
  about: {
    hello: `Hey,`,
    intro: [
      `I’m a content marketing manager with 7+ years of experience, and I think I’m the one you’ve been looking for. Overconfident? Yes, a bit. But hear me out.`,
      `I started out in copywriting across all marketing channels, then grew into brand strategy and content leadership. Everything I do revolves around one focus:`,
    ],
    focus: `connecting product and marketing through content that actually makes sense.`,   // shown as a red sticker taped to the page
    howIWork: [
      { step: `Find the core idea`, text: `What is this product really for, and who needs it?` },
      { step: `Draw insights from data`, text: `User research, behavior and performance data, and how competitors communicate.` },
      { step: `Build the strategy`, text: `Positioning, key messages, tone, and the channel plan.` },
      { step: `Write and supervise`, text: `The words themselves, plus the guidelines that keep the whole team aligned.` },
    ],
    skills: [`Tone of voice & messaging`, `Brand positioning`, `Campaign concepts`, `CRM & lifecycle`, `UX writing`, `SEO`, `SMM`, `Editorial leadership`],
    location: `Belgrade, Serbia`,
    languages: [`English (proficient)`, `Russian (native)`, `French (basic)`],
  },

  /* ---------- CASES SHEET (red divider) ---------- */
  casesIntro: `from CRM and in-app content to marketing campaigns and content systems`,

  /* ---------- RESULTS (on the Case files sheet) ----------
     Each one reads as a sentence: [number] [label].
     “before” is shown crossed out above the number. */
  results: [
    { before: `45–60 min`, value: `5–10`, unit: `min`, label: `to publish urgent market updates using my modular messaging system with reusable localized templates` },
    { value: `+39.6%`, label: `increase in registration conversion from my A/B-tested onboarding push notification sequence` },
    { before: `2+ days`, value: `1 day`, label: `approval cycle for marketing copy after I introduced content guidelines` },
  ],

  /* ---------- CONTACT ---------- */
  contact: {
    lead: `If you think we’re a match, reach out to me`,
    email: `juliagilson27@gmail.com`,
    linkedin: `https://www.linkedin.com/in/yulia-zyrianova/`,
    telegram: `https://t.me/julie_dreams`,
    cv: `assets/Yulia-Zyrianova-CV.pdf`,
    signoff: `Cheers!`,
  },

  /* ---------- CASES ----------
     status: `live` (page is ready) or `draft` (still moving in from Notion)
     preview image: assets/previews/<slug>.jpg
     ending.kind: `result` · `outcome` · `howIWrote` · `status`
     Texts inside “work” sleeves are quoted from the original documents.
  ------------------------------ */
  cases: [
    {
      slug: `happy-new-trade`, status: `live`,
      title: `Happy New Trade promo campaign`,
      summary: `A global promo to re-engage existing users and attract new ones.`,
      labels: [`Campaign concept`, `Positioning`, `Content supervision`],
      headline: `Turning the weakest month of the year into one of the strongest`,
      meta: `FBS, global fintech broker · Editor-in-Chief · December 2024`,
      glance: [
        { value: `100M+`, label: `users reached via Meta, DV360, and Google Ads` },
        { value: `8.1`, unit: `/10`, label: `participants’ CSAT (Customer Satisfaction Score)` },
        { value: `6.1×`, label: `record-high December InOut uplift (+$8.8M) vs. December 2023` },
      ],
      brief: [
        `Each December is traditionally a low-activity month for trading brokers. Our goal was to maintain user engagement ahead of the holidays and turn one of the financially weakest months into one of the strongest.`,
      ],
      did: {
        items: [
          { title: `Process`, text: `The campaign was built around a seasonal insight about our audience in our top-tier markets: Indonesia, Thailand, and Brazil. Most of them consider the New Year a time to set new goals and seek change.<br><br>So we focused on aligning emotional motivation with gamified promo mechanics to make it entertaining: a level-based progression system with guaranteed prizes and raffle participation.` },
          { title: `Final promo concept`, text: `The Happy New Trade campaign positioned trading as a way to turn New Year’s resolutions into real results. Our concept combined the idea of fresh starts with active participation. It balanced aspiration and logic, encouraging users to start the year strong and stay active throughout the campaign.` },
          { title: `My input`, text: `<ul>
            <li>Developed the campaign’s name, positioning, and key messages.</li>
            <li>Prepared a promo guide for copywriters and the localization team.</li>
            <li>Wrote the promo webpage and the advertising landing page.</li>
            <li>Worked closely with a UX designer on page structure, flow, blocks, and states.</li>
            <li>Supervised content execution across campaign materials: emails, SMM, ads, press releases, and news.</li>
          </ul>` },
        ],
      },
      work: [
        {
          title: `Key messages`,
          parts: [
            { kind: `quote`, html: `Make 2025 your trading year with FBS.` },
            { kind: `quote`, html: `Turn your New Year’s resolutions into returns with FBS.` },
            { kind: `quote`, html: `New Year. New trading goals. Greater achievements with FBS.` },
          ],
          notes: [],
        },
        {
          title: `Advertising landing page`,
          parts: [
            { kind: `scroll`, height: 620, alt: `Happy New Trade advertising landing page`, srcs: [`assets/cases/happy-new-trade/landing-1.jpg`, `assets/cases/happy-new-trade/landing-2.jpg`, `assets/cases/happy-new-trade/landing-3.jpg`], caption: `Scroll inside the frame to see the full page` },
          ],
          notes: [],
        },
        {
          title: `Supervised content`,
          parts: [
            { kind: `gallery`, items: [
              { src: `assets/cases/happy-new-trade/ads-1.jpg`, alt: `Happy New Trade ads`, caption: `Ads` },
              { src: `assets/cases/happy-new-trade/ads-2.jpg`, alt: `More Happy New Trade ads`, caption: `Ads` },
              { src: `assets/cases/happy-new-trade/email.jpg`, alt: `Happy New Trade email`, caption: `Emails` },
              { src: `assets/cases/happy-new-trade/smm.jpg`, alt: `Happy New Trade social media posts`, caption: `SMM` },
              { src: `assets/cases/happy-new-trade/influencers.jpg`, alt: `Happy New Trade influencer content`, caption: `Influencers` },
              { src: `assets/cases/happy-new-trade/press.jpg`, alt: `Happy New Trade press release`, caption: `Press releases` },
            ] },
          ],
          notes: [],
        },
      ],
      ending: {
        kind: `result`,
        items: [
          `<strong>Campaign reach via Meta, DV360, and Google Ads:</strong> 100M+ users`,
          `<strong>Participants’ CSAT (Customer Satisfaction Score):</strong> 8.1/10`,
          `<strong>Record-high December InOut uplift:</strong> 6.1× (+$8.8M) compared with December 2023.`,
          `<strong>Flow improvement:</strong> reduced content review time by 50% by introducing promo guidelines. See <a href="#case-content-systems">Case 02, Content systems</a>.`,
        ],
      },
    },

    {
      slug: `content-systems`, status: `live`,
      title: `Content systems`,
      summary: `Tone of Voice, style guide, and campaign guidelines for a brand that speaks 9 languages.`,
      labels: [`Tone of Voice`, `Style guide`, `Campaign guidelines`, `Editorial governance`],
      headline: `One voice for a brand that speaks nine languages`,
      meta: `FBS, global fintech broker · Editor-in-Chief · 2025–2026`,
      glance: [
        { before: `2+ days`, value: `1 day`, label: `approval cycle for marketing copy` },
        { before: `7.0`, value: `8.5`, unit: `/10`, label: `internal stakeholder satisfaction with content (CSI)` },
        { value: `9`, unit: `languages`, label: `and 150+ markets on one voice` },
      ],
      brief: [
        `The brand had just launched a new platform, but it didn’t sound like one brand. Emails said one thing, social media another, the app a third. Copy went through rounds of subjective edits (“I just don’t like it”), and every new campaign started with the same questions from writers, marketers, and localization teams.`,
        `My task was to build one voice that works across channels, formats, and audiences, and to make it usable in everyday work, not an abstract document nobody opens.`,
      ],
      did: {
        intro: `I built the system in three layers. Each one answers a different question a writer has.`,
        items: [
          { title: `Tone of Voice: how do we sound?`, text: `I started with research: interviews with marketing leads, a review of user personas and in-product behavior, and an audit of how competitors talk in emails, social media, and other public channels. I developed several iterations of voice pillars and refined them with the CMO and the brand marketing team. The final guideline gives the brand the voice of a <em>seasoned mentor</em>, shows how tone shifts by channel and audience, and sets dos and don’ts for every pillar.` },
          { title: `Style guide: how do we write it?`, text: `A single set of standards for writing, formatting, and word choice in English, from active vs. passive voice to quotation marks and date formats. Small stylistic errors stopped multiplying across teams and languages.` },
          { title: `Campaign guidelines: what do we say this time?`, text: `For major campaigns, a practical guide covering positioning, key messages, campaign tone, promo mechanics, vocabulary, and legal restrictions. Copywriters, marketers, and localization teams could produce on-brand copy without waiting for answers.` },
          { title: `Governance: making it stick`, text: `After the company-wide rollout, I took ownership of editorial governance. I reviewed content against the guidelines and used the Tone of Voice as the final quality layer. Feedback changed from “I don’t like it” to “this breaks rule X.”` },
        ],
      },
      work: [
        {
          title: `Tone of Voice`,
          parts: [
            { kind: `heading`, html: `Brand voice` },
            { kind: `text`, html: `<em>Professional+conversational, inspirational, confident+supportive, direct</em>` },
            { kind: `text`, html: `A brand’s voice is its overall character and should be consistent across all communications.` },
            { kind: `quote`, html: `Our voice is that of a <strong>seasoned mentor</strong>, guiding its audience through all the complexities of trading, from novice to expert level.` },
            { kind: `heading`, html: `Professional and conversational` },
            { kind: `text`, html: `We discuss complex topics in a language that traders at any level can understand, reducing the gap between expert content and accessible communication.` },
            { kind: `subheading`, html: `Key points` },
            { kind: `list`, items: [
              `Use clear, jargon-free language that simplifies complex concepts. Be mindful of natural grammar, word choice, and sentence structure.`,
              `Approachable and inclusive language — simplified concepts to make our content understandable to all experience levels.`,
              `Keep the balance between the respectful and casual images of our brand. We don’t flirt with our clients or treat them as buddies, yet we don’t overload them with formalities.`,
            ] },
          ],
          notes: [],
        },
        {
          title: `Style guide`,
          parts: [
            { kind: `text`, html: `This style guide is a set of standards for writing, formatting, and word choice at FBS. It serves as the foundation for all FBS communications <strong>in English</strong>.` },
            { kind: `heading`, html: `Active voice` },
            { kind: `text`, html: `We write in an active voice. This is a standard of English writing, and it aligns with our brand voice, making your texts more direct, readable, and easier to understand.` },
            { kind: `list`, items: [
              `Active voice uses fewer words. This is especially important for banners, push notifications, and UX elements.`,
              `Active voice shows who is doing the action and makes the message more personal.`,
              `Active voice shows who is doing the action and creates a more confident tone.`,
            ] },
            { kind: `table`, rows: [[`The company has released a new app.`, `The new app has been released by the company.`]] },
            { kind: `heading`, html: `Passive voice` },
            { kind: `text`, html: `The main reason to use passive voice is to <strong>conceal</strong> the party performing an action — this is useful when <strong>that party is unknown</strong> or when it <strong>doesn’t matter</strong> who performed the action.` },
            { kind: `example`, html: `Bitcoin was invented in 2009.` },
            { kind: `text`, html: `Another context where passive voice may be appropriate is when it might help soften the tone of transactional and support communications.` },
            { kind: `table`, rows: [[`Your request has been denied.`, `We have denied your request.`]] },
          ],
          notes: [],
        },
        {
          title: `Campaign guideline: FBS Birthday Quest promo`,
          parts: [
            { kind: `heading`, html: `Promo’s tone` },
            { kind: `text`, html: `Don’t overuse metaphors, exclamation points, and calls to action. Maintain the adventurous theme without being too playful and remain in compliance with FBS’s brand voice <u>FBS ToV</u>.` },
            { kind: `text`, html: `Draw inspiration from board games or computer games.` },
            { kind: `heading`, html: `Vocabulary` },
            { kind: `defs`, items: [
              [`Quest`, `our promo is a quest full of different tasks: core, daily, and experience. Don’t use the word “quest” when you mean a single task. Our quest is an exciting way to try and explore new things in trading with FBS.`],
              [`Task`, `core, daily, experience.`],
              [`Core task`, `a one-time task.`],
              [`Daily task`, `a task you can complete every day.`],
              [`Experience task`, `one recurring task`],
              [`Gem`, `a promo point for completing tasks.`],
              [`Reward`, `we use <strong>rewards</strong> instead of gifts.`],
            ] },
            { kind: `heading`, html: `Dos and don’ts` },
            { kind: `text`, html: `Let’s use <em>rewards</em> instead of <em>gifts</em> for this promo. Reward is a thing given in recognition of service, effort, or achievement. In FBS Birthday Quest, you need to complete tasks. Plus, it fits the adventure theme.` },
            { kind: `table`, rows: [[`Complete tasks, collect gems, and unlock rewards.`, `Join the promo, trade, and win gifts!`]] },
            { kind: `text`, html: `Remember our brand voice and don’t be too playful in your communications. Try to keep it adventurous, but don’t overuse exclamation points and calls to action.` },
            { kind: `table`, rows: [[`Participate in the FBS Birthday Quest promo and earn exciting rewards.`, `Remember the prizes! Your next reward is at your fingertips! Hurry up!`]] },
          ],
          notes: [],
        },
      ],
      ending: {
        kind: `result`,
        items: [
          `<strong>Approval cycle cut from 2+ business days to 1.</strong> Answers to the usual questions were already in the guidelines, so reviews stopped stalling.`,
          `<strong>Internal stakeholder satisfaction with content grew from 7.0 to 8.5 out of 10.</strong>`,
          `<strong>Fewer subjective edits and faster brand reviews</strong>, with messaging that scaled across 9 languages and 150+ markets.`,
          `<strong>Campaign guides became the template for later campaigns.</strong> See <a href="#case-skip-the-market-noise">Case 03, Skip the Market Noise</a>.`,
        ],
      },
    },

    {
      slug: `skip-the-market-noise`, status: `live`,
      title: `Skip the Market Noise campaign`,
      summary: `A cross-channel campaign that reframed the app as a place of focus and clarity.`,
      labels: [`Campaign concept`, `Campaign guide`, `Content supervision`],
      headline: `Reframing a trading app as a place of focus and clarity`,
      meta: `FBS, global fintech broker · Editor-in-Chief · 2025`,
      brief: [
        `A cross-channel marketing campaign targeted at new and dormant users of the FBS app.`,
        `Market data, constant price swings, and countless expert opinions often lead to confusion. This campaign helped us reframe the FBS app as a place of focus and clarity, supported by the following features:`,
        `<ul><li>FBS AI Assistant</li><li>Economic Calendar</li><li>one-click trading</li><li>price alerts</li></ul>`,
      ],
      did: {
        items: [
          { title: `Brief, inputs, analysis`, text: `<ul>
            <li>Defined the campaign goal and target audience segment.</li>
            <li>Explored the selected app features in detail with product owners and UX writers.</li>
            <li>Reviewed research insights on trader behavior.</li>
            <li>Researched recent trends among direct and indirect competitors.</li>
          </ul>` },
          { title: `Creative process`, text: `<ul>
            <li>Worked closely with the Art Director to define visual references aligned with the campaign’s goal and stakeholders’ brief.</li>
            <li>Explored tonal options: energetic vs. calm, confident vs. confidence-building.</li>
            <li>Proposed several creative concepts, including tone options, slogans, and examples. Two concepts were tested with real users.</li>
          </ul>The winning concept was Skip the Market Noise.` },
          { title: `Final concept`, text: `After research, brainstorming sessions, and several rounds of review, I connected the familiar trading term “market noise” with traders’ emotional state, which is anxiety and constant doubt caused by information overload, lack of knowledge, and uncertainty.<br><br>The FBS app brings everything you need into one space, so you can block out the market noise and focus on trading.` },
        ],
      },
      work: [
        {
          title: `Tone, name, and key messages`,
          parts: [
            { kind: `heading`, html: `Set the tone` },
            { kind: `text`, html: `Focused, confident, calm. No hype, no panic.` },
            { kind: `heading`, html: `Name and key messages` },
            { kind: `quote`, html: `Skip the market noise. You see the trade. FBS clears the path.` },
          ],
          notes: [],
        },
        {
          title: `Communication guide`,
          parts: [
            { kind: `text`, html: `This comprehensive guide helped copywriters and marketers produce channel-specific content with minimal edits, reduced repetitive questions, and cut the approval process from 2 days to 1.` },
            { kind: `subheading`, html: `This guide includes` },
            { kind: `list`, items: [
              `concept overview`,
              `feature explainers: technical details, use cases, user benefits, screenshots, and screencasts.`,
              `name, key messages`,
              `language recommendations`,
              `dos and don’ts`,
              `examples of how the campaign’s idea unfolds in each feature`,
              `legal restrictions and disclaimers`,
              `linguistic cases: standardized naming conventions for features (capitalization, article use, wording consistency)`,
            ] },
            { kind: `heading`, html: `Language recommendations` },
            { kind: `text`, html: `To achieve focused, confident, and calm tones:` },
            { kind: `list`, items: [
              `Use clear language, e.g., short and simple sentences. Avoid overloading with too many ideas and emotions.`,
              `Avoid “hurry,” “rush,” and “don’t miss out” FOMO wording.`,
              `Emphasize that FBS clears the path and keeps things under control.`,
              `Speak with quiet confidence. Make statements without overpromising.`,
              `Show that confidence comes from clarity.`,
            ] },
            { kind: `heading`, html: `Dos and don’ts` },
            { kind: `table`, rows: [
              [`Skip the market noise. Focus on trading with FBS.<small>Keep the idea calm and simple.</small>`, `Uncover your ultimate trading power to conquer the never-ending unpredictability of markets.<small>This example is getting complicated and causing anxiety and FOMO when reading.</small>`],
              [`Your strategy stays clear.<small>Again, let’s be calm and confident.</small>`, `Act now before it’s too late!<small>Please, no FOMO.</small>`],
              [`Trading can feel crowded with opinions. FBS keeps it simple.<small>Acknowledge the difficulty. Suggest a solution.</small>`, `Markets are brutal and unpredictable. Only the strongest survive. Conquer the chaos of financial markets with maximum power.<small>Avoid unnecessary dramatizing.</small>`],
            ] },
          ],
          notes: [],
        },
        {
          title: `Campaign visuals`,
          parts: [
            { kind: `gallery`, items: [
              { src: `assets/cases/skip-the-market-noise/banner.jpg`, alt: `Skip the market noise with FBS banner`, caption: `Banner` },
              { src: `assets/cases/skip-the-market-noise/visual-2.jpg`, alt: `You see the trade. The FBS app clears your path.`, caption: `Key message visual` },
            ] },
          ],
          notes: [],
        },
      ],
      ending: {
        kind: `outcome`,
        items: [
          `<strong>The approval process dropped from 2 days to 1</strong>, with minimal edits and fewer repetitive questions.`,
          `<strong>The campaign guide became the template for later campaigns.</strong> It’s part of my guideline system. See <a href="#case-content-systems">Case 02, Content systems</a>.`,
        ],
      },
    },
    {
      slug: `onboarding-push`, status: `live`,
      title: `Onboarding push notifications`,
      summary: `Post-install push sequences built on behavioral triggers, A/B-tested, and scaled globally.`,
      labels: [`CRM`, `Push`, `A/B testing`],
      headline: `Welcome pushes that turned downloads into registrations`,
      meta: `FBS, global fintech broker · Senior Marketing Copywriter · 2024`,
      glance: [
        { value: `+39.6%`, label: `conversion to registration` },
      ],
      brief: [
        `<strong>Issue.</strong> Users download the app, don’t register, and then delete it.`,
        `<strong>Solution.</strong> To decrease the bounce rate and increase conversion to registration, we decided to launch a series of welcome push notifications.`,
      ],
      did: {
        items: [
          { title: `My role`, text: `<ul>
            <li>Wrote copy for each segment’s push notifications, in line with the technical requirements.</li>
            <li>Collaborated with CRM marketers to identify specific user segments and launch the push sequence.</li>
          </ul>` },
        ],
      },
      work: [
        {
          title: `Push sequence`,
          parts: [
            { kind: `image`, src: `assets/cases/onboarding-push/pushes.jpg`, alt: `Three onboarding push notifications with their segments and results: Are you ready to start? Deposit to begin. What’s next?` },
          ],
          notes: [],
        },
      ],
      ending: {
        kind: `result`,
        items: [
          `After the first push raised the registration conversion rate by <strong>39.6%</strong>, we rolled it out to all users.`,
        ],
      },
    },
    {
      slug: `trading-performance-email`, status: `live`,
      title: `Personal trading performance email`,
      summary: `A report with each active user’s own trading stats that people shared on their own channels.`,
      labels: [`CRM`, `Email`, `Personalization`],
      headline: `A monthly trading report people wanted to share`,
      meta: `FBS, global fintech broker · Senior Marketing Copywriter · 2024`,
      brief: [
        `The idea was to encourage active users to interact more with the product.`,
        `Personalized statistics were a long-requested feature. Users can now analyze their trading performance for the past month.`,
      ],
      did: {
        items: [
          { title: `From experiment to monthly report`, text: `After an experimental launch on a designated segment, we received positive feedback from clients and decided to roll it out to a wider segment. To streamline the monthly production process, I created templates for each month, developed the logic for variables, and established two statements: profitable and non-profitable performance.` },
          { title: `My role`, text: `<ul>
            <li>Developed the campaign idea.</li>
            <li>Created the template for designers.</li>
            <li>Wrote content.</li>
            <li>Collaborated with<ul>
              <li>the tech support team to upload the segment.</li>
              <li>CRM marketers to develop variables.</li>
              <li>designers to create a compelling email design.</li>
              <li>localization team to translate content into 6 languages.</li>
              <li>markup developers to build adaptive HTML.</li>
              <li>data analysts to analyze users’ performance.</li>
            </ul></li>
          </ul>` },
        ],
      },
      work: [
        {
          title: `The email`,
          parts: [
            { kind: `defs`, items: [
              [`Subject`, `Check your results for October`],
              [`Preheader`, `Your statistics for the month are fresh and ready.`],
            ] },
            { kind: `scroll`, height: 640, alt: `Personal trading performance email for October`, srcs: [`assets/cases/trading-performance-email/email.jpg`], caption: `Scroll inside the frame to read the full email` },
          ],
          notes: [
            `Two statements: profitable and non-profitable performance.`,
            `Templates for each month and logic for variables keep production fast.`,
            `Translated into 6 languages.`,
          ],
        },
      ],
      ending: {
        kind: `outcome`,
        items: [
          `<strong>Fun fact!</strong> After we added WhatsApp as a new channel for this report, users started sharing their results on social media (Instagram, WhatsApp groups). The shorter format boosted their motivation to share their performance.`,
        ],
      },
    },
    {
      slug: `product-digest-email`, status: `live`,
      title: `Product digest email`,
      summary: `A content experiment to bring dormant users back.`,
      labels: [`CRM`, `Email`, `Reactivation`],
      headline: `Three months of product updates in one email`,
      meta: `FBS, global fintech broker · Senior Marketing Copywriter · 2024`,
      glance: [
        { value: `+14%`, label: `conversion rate for user engagement with the app` },
      ],
      brief: [
        `An experimental email highlighting product features released over the past three months. The goal was to re-engage users who hadn’t interacted with the app for 90+ days.`,
      ],
      did: {
        items: [
          { title: `My role`, text: `<ul>
            <li>Developed the campaign concept.</li>
            <li>Created the template for designers.</li>
            <li>Wrote content.</li>
            <li>Collaborated with<ul>
              <li>product owners to gather all new features.</li>
              <li>designers to create a compelling email design.</li>
              <li>localization team to translate content into 6 languages.</li>
              <li>markup developers to build adaptive HTML.</li>
              <li>data analysts to assess users’ performance.</li>
            </ul></li>
          </ul>` },
        ],
      },
      work: [
        {
          title: `The email`,
          parts: [
            { kind: `defs`, items: [
              [`Subject`, `What’s fresh with FBS?`],
              [`Preheader`, `Personal performance, lower spreads, and more.`],
            ] },
            { kind: `scroll`, height: 640, alt: `Product digest email: What’s fresh with FBS?`, srcs: [`assets/cases/product-digest-email/email.jpg`], caption: `Scroll inside the frame to read the full email` },
          ],
          notes: [
            `Audience: users who hadn’t opened the app for 90+ days.`,
            `Features from the past three months, gathered with product owners.`,
          ],
        },
      ],
      ending: {
        kind: `result`,
        items: [
          `This experiment increased the conversion rate for user engagement with the app by <strong>14%</strong>.`,
        ],
      },
    },
    {
      slug: `giftbox-articles`, status: `live`,
      title: `App-optimized GiftBox articles`,
      summary: `Articles in a bonus package for users who made a qualifying deposit.`,
      labels: [`Articles`, `In-app content`],
      headline: `Educational articles that encourage responsible trading`,
      meta: `FBS, global fintech broker · Editor-in-Chief · 2025`,
      brief: [
        `I contributed to an in-app GiftBox bonus campaign by creating app-optimized educational articles to support users participating in the campaign. The main idea of this bonus is to provide content that supports better decision-making and encourages responsible trading rather than short-term risk-taking.`,
      ],
      did: {
        items: [
          { title: `Emotional trading article`, text: `This article was based on research into the psychological aspects of emotional trading and common behavioral patterns among traders. I identified insights and translated them into clear, practical tips to help users stay disciplined, manage risk, and avoid emotional decisions when trading.` },
          { title: `Trader’s routine article`, text: `In this article, I explored a typical trader’s daily routine. Based on user insights, I found that traders actively look for relatable examples, real-life scenarios, and lessons learned from mistakes. I created a realistic trader profile, someone experienced but imperfect, and used their journey to highlight common errors and practical takeaways other traders could apply to their own trading.` },
        ],
      },
      work: [
        {
          title: `The articles, as they appear in the app`,
          parts: [
            { kind: `phones`, items: [
              { src: `assets/cases/giftbox-articles/emotional-trading.jpg`, alt: `Emotional trading article in the app`, caption: `Emotional trading`,
                article: `
                  <h4>How to control your emotions when trading</h4>
                  <p>Analyzing charts, preparing a strategy, and following the news are undoubtedly important in trading. But just as important are your emotions. Let’s learn how to take control of them.</p>
                  <h5>Acknowledge emotions</h5>
                  <p>Your emotional state directly affects your trading decisions. When you’re calm, you’re more likely to stick to your plan. But under stress after a loss, during market volatility, or when something unexpected happens, emotions can take the lead.</p>
                  <p>So, you may lose control, make irrational decisions, and face unpredictable results, from missed opportunities to potential losses. Naming your emotions is the first step to regaining control.</p>
                  <p class="art-box"><b>What do I feel?</b> I’m angry right now. I’m afraid. I feel excited.</p>
                  <p><b>Fear</b> may cause you to avoid opportunities or exit trades too early.</p>
                  <p><b>Greed</b> can lead you to overtrading, excessive risk-taking, or holding profitable trades too long until they reverse.</p>
                  <p><b>Excitement and overconfidence</b> may push you to take risks beyond your plan.</p>
                  <p><b>Frustration and anger</b> after a loss may trigger revenge trading, when you trade just to win back what was lost.</p>
                  <h5>Be aware of the reasons</h5>
                  <p class="art-box"><b>Why do I feel this way?</b></p>
                  <p>After acknowledging what you feel, step back and ask yourself: What triggered this emotion? Was it a sudden price move, a losing trade, or simply something that happened outside trading?</p>
                  <p>It helps to keep a journal where you write down what happened right before you felt the emotion. The act of writing often makes you realize things you wouldn’t have noticed just thinking about it, and it leaves you with a record you can look back at to study your reactions and emotional patterns.</p>
                  <p>Once you’re aware of the cause, you’re less likely to justify your impulsive moves.</p>
                  <h5>Take action (or don’t)</h5>
                  <p class="art-box"><b>Should I make this decision now?</b></p>
                  <p>Not every emotional impulse requires action. Awareness gives you space to decide whether to act on emotions or let them pass: Is this move part of my trading plan, or am I just trying to fix how I feel?</p>
                  <p>If the logic holds and the emotion passes, go ahead and take action. If not, it might be wiser to wait.</p>
                  <blockquote>Knowing when not to trade is just as powerful as knowing when to trade.<cite>A tip</cite></blockquote>
                  <h5>Checklist for managing emotions</h5>
                  <h6>Set risk management tools</h6>
                  <p>Use take-profit and stop-loss orders to reduce emotional impact and avoid constantly checking charts and triggering yourself to make decisions that aren’t part of your plan.</p>
                  <h6>Keep a trading journal</h6>
                  <p>Log every trade not only with the instrument’s name, position size, execution date, and net result, but also with your emotional state and the reasons behind it. This helps you find patterns in mistakes and emotional triggers.</p>
                  <h6>Take occasional breaks</h6>
                  <p>A 15-minute break, an hour away, or even a day off without trading can help you clear your mind, reset your focus, and regain emotional balance.</p>
                  <h6>Stay emotional but in control</h6>
                  <p>We’re human beings, and our goal isn’t to shut off emotions, but to understand and control them. That’s the skill that will lead you to confident decisions and better results.</p>` },
              { src: `assets/cases/giftbox-articles/traders-routine.jpg`, alt: `Trader’s routine article in the app`, caption: `Trader’s routine`,
                article: `
                  <h4>Building a trading routine that actually works</h4>
                  <p>Everyone trades differently. If you feel stuck and unsure how to improve your trading routine, look to a real trader for practical inspiration.</p>
                  <div class="art-box"><b>Portrait</b><ul>
                    <li>Part-time trader</li>
                    <li>Occupation: freelance graphic designer</li>
                    <li>Trading experience: 5 years</li>
                    <li>Favorite instrument: XAUUSD, USDJPY</li>
                    <li>Trading device: desktop, mobile</li>
                  </ul></div>
                  <h5>My trading routine</h5>
                  <p>Hey, I’m Rakim. I’ve been trading since 2020. When the pandemic hit and everyone around me was getting into it, I tried it, too. I found the process of beginning to trade very chaotic.</p>
                  <p><b>How to trade? When to enter? What is a strategy? What is going on?</b></p>
                  <p>Over time, I realized that the only antidote to the chaos was discipline. So I built a trading routine that fits my life and helps me trade effectively.</p>
                  <h6>Morning</h6>
                  <p><b>9:00–10:00</b><br>Before work, I check my group chats for what’s happening in the markets. If I have more time, I read news websites.</p>
                  <div class="art-box"><b>Tips</b><ul>
                    <li>Use the Economic Calendar in the app to track key economic events.</li>
                    <li>Check market and political news to understand the overall sentiment.</li>
                    <li>Follow the FBS Analytics Telegram channel for expert insights.</li>
                  </ul></div>
                  <p><b>10:00–13:00</b><br>I focus on my work projects and forget about trading.</p>
                  <h6>Afternoon</h6>
                  <p><b>13:00–14:00</b><br>I usually trade during the London session, which starts at 15:00 my time. I use this hour to analyze charts and get my strategy ready.</p>
                  <div class="art-box"><b>Tips</b><p>Choose a session that fits your life and trading style:</p><ul>
                    <li>Asian session (00:00–10:00 UTC): less volatile, affects JPY.</li>
                    <li>European session (7:00–17:00 UTC): includes the London session, more active, affects EUR and GBP pairs.</li>
                    <li>North American session: (13:00–22:00 UTC): includes the New York session, great for USD-based trades.</li>
                    <li>Pacific session (22:00–7:00 UTC): lower activity, mostly AUD and NZD affected.</li>
                  </ul><p>The most liquid period is when the London and New York sessions overlap.</p></div>
                  <h6>Evening</h6>
                  <p><b>After 15:00</b><br>I look for opportunities and rely on my strategy. I place my trades, and get back to my tasks. This is how I avoid trading anxiety.</p>
                  <p><b>Before 21:00</b><br>I finish trading and analyze the day’s performance.</p>
                  <h5>My setup</h5>
                  <h6>Preparation</h6>
                  <p>Check the day’s events and the political context.</p>
                  <h6>Indicators</h6>
                  <p>Moving Averages, RSI, Bollinger Bands.</p>
                  <h6>Timeframes</h6>
                  <ul><li>Daily to spot trends</li><li>4H to plan my strategy and validate it</li><li>1H to be 100% sure before opening a trade</li></ul>
                  <h6>Trade setup</h6>
                  <ul><li>Calculate position size</li><li>Follow the 1:3 risk/reward ratio</li><li>Set stop-loss and take-profit orders</li></ul>
                  <h6>Execution</h6>
                  <p>I trade from my laptop and check trades in the mobile app.</p>
                  <h6>Performance review</h6>
                  <p>I log every trade in my trading journal, a simple spreadsheet with the columns:</p>
                  <ul><li>Date and time</li><li>Instrument</li><li>Buy/sell</li><li>Lot size</li><li>Entry price</li><li>Exit price</li><li>Results in points</li><li>Notes on what could go wrong</li></ul>
                  <div class="art-box"><b>Tips</b><p>With time and experience, you’ll know what indicators and timeframes suit you best. Keep adjusting your routine and trust the process.</p></div>
                  <h5>Summary</h5>
                  <p>The biggest change for me was matching my trading routine with my life. It may not be the same for you, but however you manage your trading, one thing’s for sure in both trading and life itself: discipline defeats chaos.</p>` },
            ] },
          ],
          notes: [
            `Written for a phone screen: scroll inside each one, or open the full text below.`,
          ],
        },
      ],
    },
  ],
};
