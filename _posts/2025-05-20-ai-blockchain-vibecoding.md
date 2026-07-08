---
layout: post
modal-id: 39
title: "AI & Blockchain: When Code Writes Back | هوش مصنوعی و بلاکچین: همگرایی فناوری‌ها (S07E06)"
episode: S07E06
date: 2025-05-20
keywords: "شیر یا خط, Ethereum, DeFi, DAO, staking, restaking, Pectra, Arbitrum, LangChain, LangGraph, smolAgent, ElizaOS, EthGlobal, GitHub, AiVS, PocketFlow"
duration: PT2H21M5S
img: img/episodes/S07E06.jpg
alt: "AI & Blockchain: When Code Writes Back (S07E06)"
permalink: /:year/:month/:title:output_ext
description: "در قسمت ششم فصل هفتم پادکست شیر یا خط با موضوع «هوش مصنوعی و بلاکچین» به هم‌افزایی AI و کریپتو می‌پردازیم؛ از تفاوت هوش مصنوعی و یادگیری ماشین و ظهور مدل‌های زبانی بزرگ (LLM) و عامل‌های هوشمند (AI Agents) تا وایب کدینگ زنده‌ی وبسایت شیر یا خط، ابزارهایی مانند n8n و پروتکل MCP، امنیت با Trusted Execution Environment و رمزنگاری هومومورفیک، فریم‌ورک ElizaOS و عامل‌های مچ‌میکینگ و تریدینگ در کریپتو، و نقش نالج‌گراف و وکتور دیتابیس و RAG در حافظه‌ی ایجنت‌ها. گفتگویی عمیق درباره‌ی قراردادهای هوشمند، مدیریت خزانه و عملیات DAO، اتوماسیون مالی و آینده‌ی همگرایی بلاکچین و هوش مصنوعی برای توسعه‌دهندگان و فعالان اتریوم و کریپتو."
youtube: https://youtu.be/deD4LUyKPk8

soundcloud: 

# anchor: Anchor was bought by Spotify and is no longer available

apple_podcast: https://podcasts.apple.com/us/podcast/ai-blockchain-when-code-writes-back-s07e06-%D9%87%D9%88%D8%B4-%D9%85%D8%B5%D9%86%D9%88%D8%B9%DB%8C/id1221206951?i=1000709375090

# google_podcast: discontinued , TODO figure out how to do Youtube Music

# amazonmusic: apparently doesn't support video podcasts conversion 

spotify: https://open.spotify.com/episode/7x8svacQGEZDdS8iu2LFcT?si=SYPv5npVRqaI3qtW-Nm1_w

castbox: https://castbox.fm/vi/810689460

---

**شیر یا خط**

**[فصل هفتم - قسمت ششم](https://shiryakhat.net/2025/05/ai-blockchain-vibecoding.html)**

AI & Blockchain: When Code Writes Back (S07E06) هوش مصنوعی و بلاکچین: همگرایی فناوری‌ها 

-------------------------------------------------------

این اپیزود کمی متفاوت است؛ محور اصلی گفتگو هوش مصنوعی است اما همه‌چیز را به دنیای کریپتو و بلاکچین گره می‌زنیم و می‌بینیم که با این ابزارهای تازه چه کارهایی می‌شود کرد که تا دیروز شدنی نبود. در کنار بحث، به‌صورت زنده و در حین ضبط، با تکنیک «وایب کدینگ» (Vibe Coding) وبسایت شیر یا خط را از نو [ارتقاء](https://github.com/shiryakhat/website/pull/12) می‌دهیم و مخاطبان مرحله به مرحله شاهد بازسازی آن خواهند بود.


<details class="en-summary" markdown="1">
<summary>🇬🇧 English Summary</summary>

This episode of the Shir ya Khat podcast explores the convergence of AI and blockchain, with hosts and guests from AI engineering (DevOps, foundational models), hardware/chip design, and crypto backgrounds discussing how large language models (LLMs) have transformed programming from task-specific machine learning and if-else logic into flexible, reasoning-capable systems, enabling "vibe coding" where developers build tools by chatting with agents rather than writing code. The conversation surveys the practical tooling stack—Claude (including Claude Code, Sonnet 3.7), OpenAI Codex/GPT-4.1, Gemini Pro, Cursor with Cursor Rules, Copilot, LM Studio for local/Chinese models, plus agent frameworks like LangChain, LangFlow, Microsoft AutoGen, and n8n/Zapier-style automation—while stressing the enduring importance of software-engineering fundamentals such as git checkpoints, modular task decomposition, prompt engineering, and awareness of hallucinations, specification gaming, and reward hacking. On the crypto side, they dig into AI agents that hold wallets and private keys to perform on-chain transactions, DeFi "gymnastics," yield farming, and airdrop hunting, contrasting autonomous "player" agents (e.g., Eliza's Spartan trading agent, treasury/DAO management, Virtuals on Base, Solana-based frameworks) with delegated "companion" agents like the hosts' own conference matchmaking bots, and they explain the Model Context Protocol (MCP) as an emerging standard—alongside Google's agent-to-agent protocol and Coinbase's wallet MCP—for connecting LLMs to tools. A major segment covers trust and verifiability, invoking crypto's "don't trust, verify" ethos to address fake-autonomy concerns (Truth Terminal), walking through how Trusted Execution Environments (TEE) like Intel SGX, enclaves, and code attestation can prove an on-chain agent is genuinely autonomous by keeping admin private keys tamper-proof and verifying attestations at the smart-contract level. The episode also highlights AI-assisted smart-contract security auditing and code comprehension tools (GitCTX, DeepWiki, Balancer V2 review, catching an off-by-one bug), references the ETHGlobal AI Agent hackathon, EigenLayer AVS, the Pectra/Ethereum validator-yield example, Vitalik's writing on AI in crypto, and the experimental ChaosChain project where AI agents reach consensus on blocks.

</details>
<!--en-summary-->

## توضیحات اپیزود

در این گفتگو همراه با شایان، امین (مهندس DevOps در شرکت‌های AI که با فاندیشنال مدل‌ها کار می‌کند)، امیر (که از مهندسی سخت‌افزار وارد کریپتو و طراحی ایجنت شده) و حمید (که از ۲۰۱۷ در کریپتو فعال بوده و موج ورود AI به دیزاین پروتکل و نگرانی‌های امنیتی را روایت می‌کند) نگاهی جامع به تعامل هوش مصنوعی و بلاکچین داریم. ابتدا یک مقدمه و تاریخچه از AI می‌گوییم: اینکه چطور از دنیای «ایف‌ایلز» و یادگیری ماشینِ مخصوصِ تسک‌های خاص و تلاش‌های قدیمی مثل وب سمانتیک و گراف دیتابیس‌ها، به مدل‌های زبانی بزرگی رسیدیم که زبان انسان را می‌فهمند، کد می‌زنند و یک سیستم واحد می‌تواند طیف وسیعی از کارها را انجام دهد. بحث می‌شود که با ورود عنصر «ریزنینگ» در LLMها، منطق برنامه‌نویسی هم عوض شده و می‌توان به‌جای لاجیک خطی، یک فرآیند را با پرامپت و رول به زیرپروسه‌ها شکست و به هر بخش کیفیت بالاتری داد.

سپس وارد ابزارها و اتوماسیون می‌شویم: از پرامپت انجینیرینگ و تعریف کلاس «ایجنت»، تا دادن ابزار (API call، گوگل سرچ) به ایجنت‌ها و اجرا و دیباگ کد در ترمینال. ابزارهایی مثل n8n که با درگ‌اند‌دراپ فلوهای ایجنتی می‌سازد، لنگ‌چین، لنگ‌فلو، اتوجن مایکروسافت و مقایسه‌ی مدل‌ها (کلاد و به‌خصوص بهبود سونت، کودکس اوپن‌ای‌آی، جمینی پرو و GPT‌های تازه) بررسی می‌شوند؛ همراه با نکته‌های عملی مثل کامیت‌کردن هر ورژن در گیت به‌عنوان چک‌پوینت، خطر هالوسینیشن و مفاهیم reward hacking / specification gaming. در ادامه پروتکل MCP به‌عنوان استانداردی برای اتصال LLM به ابزارها و APIها توضیح داده می‌شود و کانتکست [هکاتون AI ایجنت ETHGlobal](https://shiryakhat.net/2025/01/hackathons.html) (فوریه) که تیم‌های ایرانی در آن شرکت داشتند مرور می‌گردد.

بخش بزرگی از اپیزود به هم‌افزایی AI و کریپتو اختصاص دارد: تفاوت ایجنت‌های اتونوموس (پلیر با والت و هدف مستقل) و ایجنت‌های دلگیت‌شده (کامپینین)، نمونه‌ی اسپارتان برای تریدینگ و تریژری منیجمنت، عامل‌های مچ‌میکینگ نتورکینگ و سوشال (مثل DataBarista)، شخصیت‌های دیجیتال و فورک‌کردن پرسونای توییتری. سپس امنیت با Trusted Execution Environment (اینتل SGX، کد اتستیشن و اینکلیو) و طراحی یک ایجنت اتونوموس واقعاً غیرقابل‌دخالت روی قرارداد هوشمند، و [رمزنگاری هومومورفیک کامل (Zama)](https://shiryakhat.net/2025/08/privacy-blockchain-right-or-crime-tool.html) بحث می‌شود. در پایان به حافظه‌ی ایجنت‌ها با RAG، وکتور دیتابیس و نالج‌گراف (OriginTrail)، مدیریت DAO و پروپوزال‌ها، اتوماسیون گزارش‌های مالی و آدیت قراردادها، و چشم‌اندازهای بلندپروازانه‌ی آینده‌ی همگرایی بلاکچین و هوش مصنوعی می‌رسیم؛ در حالی که وبسایت شیر یا خط در طول همین گفتگو کاملاً بازطراحی می‌شود.

## نکات اصلی بحث‌ شده:

### تاریخچه و مبانی هوش مصنوعی
* گذار از «ایف‌ایلز» و یادگیری ماشین مخصوص تسک‌های خاص به مدل‌های زبانی بزرگ (LLM) که زبان انسان را می‌فهمند
* از بین رفتن دردسرهای قدیمی مثل وب سمانتیک، ساخت دیتا استراکچر و گراف/تریپل دیتابیس‌ها برای پردازش متن
* اینترفیس تازه: تعامل با سیستم صرفاً از طریق زبان طبیعی و نوشتار، بدون نیاز به کدنویسی
* ورود عنصر «ریزنینگ» و تغییر بنیادی منطق برنامه‌نویسی نسبت به لاجیک خطی قدیم

### وایب کدینگ و ابزارهای توسعه
* مفهوم «وایب کدینگ» و بازسازی زنده‌ی وبسایت شیر یا خط با چند پرامپت ساده به کلاد
* اهمیت دادن کانتکست به مدل و رها کردن جزئیات دیزاین به خود سیستم
* ابزارها و مدل‌ها: کلاد کد، کودکس اوپن‌ای‌آی، کرسر، جمینی پرو و مقایسه‌ی رفتار آن‌ها روی باگ‌ها
* نالج مهندسی نرم‌افزار همچنان مهم است: کامیت هر ورژن در گیت به‌عنوان چک‌پوینت برای برگشت از هالوسینیشن
* یولو مود و کیاس کدینگ، و مفاهیم reward hacking و specification gaming

### اتوماسیون و عامل‌های هوشمند
* از پرامپت انجینیرینگ تا تعریف آبجکت «ایجنت» با رول و پرامپت مشخص
* دادن ابزار به ایجنت (API call، گوگل سرچ) و اجرا/دیباگ کد در ترمینال
* n8n برای ساخت فلوهای ایجنتی با درگ‌اند‌دراپ و اتوماسیون کارهای روزمره (ایمیل، تلگرام)
* ابزارها و فریم‌ورک‌ها مانند LangChain، LangFlow و Autogen مایکروسافت
* ضرورت ذهنیت ماجولار و مشخص‌کردن اسکوپ کار برای هر ایجنت

### MCP و اتصال AI به ابزارها
* پروتکل MCP به‌عنوان استاندارد اتصال LLM به تول‌ها و APIها و پذیرش سریع آن به‌واسطه‌ی کلاد
* مثال‌ها: MCP بلندر، MCP کوین‌بیس برای دسترسی ایجنت به کریپتو والت
* تشبیه به متود کال‌های [اکزیکیوشن/کانسنسس کلاینت در اتریوم](https://shiryakhat.net/2017/02/ethereum.html) و ریست API بین مایکروسرویس‌ها
* کرسر رولز و سیستم‌پرامپت‌ها و اینکه ایجنت‌ها لزوماً قوانین را کامل دنبال نمی‌کنند

### هم‌افزایی AI و کریپتو
* تفاوت ایجنت‌های اتونوموس (پلیر با والت و هدف مستقل) و ایجنت‌های دلگیت‌شده (کامپینین)
* اسپارتان در ElizaOS برای تریدینگ و تریژری منیجمنت با فی بسیار پایین
* عامل‌های مچ‌میکینگ برای نتورکینگ و سوشال در کنفرانس‌ها (DataBarista)
* شخصیت‌های دیجیتال و فورک پرسونای توییتری و مثال‌های character.ai
* ElizaOS به‌عنوان لایه‌ای که کریپتوی فرگمنتد را روی UX زبان طبیعی یونیفای می‌کند و اینترپروبیلیتی را بالا می‌برد

### امنیت و رمزنگاری
* مسئله‌ی اعتماد به ادعای «اتونوموس بودن» ایجنت‌ها و اصل don't trust, verify
* Trusted Execution Environment و اینتل SGX: کد اتستیشن و اینکلیو
* طراحی یک قرارداد هوشمند با ادمین‌کی درون اینکلیو و وریفای اتستیشن برای ساخت ایجنت واقعاً غیرقابل‌دخالت
* محدودیت‌ها: هزینه و مموری کم TEE و اعتماد به سازنده‌ی سخت‌افزار (اینتل/AMD)
* رمزنگاری هومومورفیک کامل (FHE) و پروژه‌ی Zama برای پردازش روی داده‌ی رمزشده

### حافظه‌ی ایجنت‌ها و مدیریت DAO
* Fine-tuning در برابر RAG و ورود امبدینگ و وکتور دیتابیس
* نالج‌گراف به‌عنوان نسل بعدی حافظه و ریزنینگ، به‌ویژه برای سوارم ایجنت‌ها
* OriginTrail و نالج‌گراف دیسنترالایز با پروف و NFT برای هر تریپلیت
* کاربرد در آدیت و ریپورت‌نویسی خودکار باگ‌ها و پارس گزارش‌های مالی
* عامل‌های هوشمند به‌عنوان ساینر مالتی‌سیگ و وریفایر ترنزکشن‌ها، و [کمک به رأی‌گیری پروپوزال‌های DAO](https://shiryakhat.net/2020/12/defi-yield-aggregators-governance.html)

### آینده و جمع‌بندی
* آیا بلاکچین می‌تواند حافظه و «قانون» AI باشد و نیاز به لایه‌ی رپر/ایندکسر برای پیوند دترمینیستیک و پروبابیلیستیک
* تصور ایجنت‌های اتونوموس با کوین و کپیتال مستقل و انتقال تصمیم تخصیص سرمایه از انسان به AI
* دستیار امنیتی شخصی برای ویریفای پر ترنزکشن و مسئله‌ی سیستم کردیت بدون اوور کولترالایز
* ساخت ابزارهای رایگان و مفید برای مردم با وایب کدینگ (مثال PadSnap) و بازگشت به اینترنتِ ابزارساز

### نتیجه‌گیری

این اپیزود نشان می‌دهد که ما در یک لحظه‌ی نادر تاریخی هستیم که هوش مصنوعی و بلاکچین در حال همگرایی‌اند و ابزارهایی مثل وایب کدینگ به هر کسی، حتی بدون پیش‌زمینه‌ی مهندسی نرم‌افزار، اجازه می‌دهند ایده‌هایش را بسازد؛ همان‌طور که وبسایت شیر یا خط طی همین گفتگو کاملاً از نو ساخته شد. کریپتو زیرساخت اعتماد و انتقال ارزش جهانی را فراهم می‌کند و AI لایه‌ی منطق و اینترفیس زبان طبیعی را؛ ترکیب این دو، از عامل‌های اتونوموس و مدیریت DAO تا امنیت با TEE و FHE، دری به کارهایی می‌گشاید که تا دیروز شدنی نبود. جمع‌بندی جمعی این بود که الان بهترین زمان برای ساختن است و در کنار این موج، باید حواسمان به تقویت رابطه‌ی انسان‌ها با یکدیگر هم باشد.

## **حاضران در این قسمت:**

* شایان اسکندری: [shayan.es](https://shayan.es)  
* حمید باطنی: [x.com/n3wbateni](https://x.com/n3wbateni)
* امین عباسلو: [linkedin.com//amin-abbasloo](https://www.linkedin.com/in/amin-abbasloo-3a2747121/)
* امیر مبهوت: [x.com/amirmabhout](https://x.com/amirmabhout)


## منابع و لینک‌های ذکرشده

- Shir Ya Khat Website: [shiryakhat.net](https://shiryakhat.net/)
- Shir Ya Khat GitHub: [github.com/shiryakhat](https://github.com/shiryakhat)
- Pull Request Website revamp to new version - Vibecoding live on Episode May 18, 2025 - AI x blockchain #12: [github.com/shiryakhat/website/pull/12](https://github.com/shiryakhat/website/pull/12)

#### ابزارها و فریم‌ورک‌ها:
- Awesome Vibe Coding: [github.com/filipecalegario/awesome-vibecoding](https://github.com/filipecalegario/awesome-vibe-coding)
- LangChain: [github.com/langchain-ai/langchain](https://github.com/langchain-ai/langchain)
- LangGraph: [github.com/langgraph](https://github.com/langgraph)
- smolAgent: [github.com/smol-ai/developer](https://github.com/smol-ai/developer)
- Cursor IDE: [cursor.sh](https://cursor.sh)
- Autogen by Microsoft: [github.com/microsoft/autogen](https://github.com/microsoft/autogen)
- Cursorrules: [github.com/cursorrules](https://github.com/cursorrules)
- Dify (LLMOps Platform): [github.com/langgenius/dify](https://github.com/langgenius/dify)
- Langflow: [github.com/langflow-ai/langflow](https://github.com/langflow-ai/langflow)

#### پروژه‌ها و نمونه‌های کاربردی:
- Chaoschain: [chaoschain.io](https://chaoschain.io)
- Virtuals: [virtuals.ai](https://virtuals.ai)
- ElizaOS: [github.com/ElizaOS](https://github.com/ElizaOS)
- ElizaOS Framework: [elizaos.ai](https://elizaos.ai)
- Spartan Agent Manager: [x.com/spartanversus](https://x.com/spartanversus)
- DataBarista AI Matchmaker: [databarista.ai](https://databarista.ai)
- OriginTrail (Decentralized Knowledge Graph): [origintrail.io](https://origintrail.io)
- EthGlobal AI Showcase (AiVS): [ethglobal.com/showcase/aivs-o2t7f](https://ethglobal.com/showcase/aivs-o2t7f)
- PocketFlow Tutorial Codebase: [github.com/The-Pocket/PocketFlow-Tutorial-Codebase-Knowledge](https://github.com/The-Pocket/PocketFlow-Tutorial-Codebase-Knowledge)
- Arbitrum (OffchainLabs): [gitctx.com/OffchainLabs/arbitrum](https://gitctx.com/OffchainLabs/arbitrum)

#### امنیت، رمزنگاری و سخت‌افزار:
- Intel SGX Overview: [intel.com/.../software-guard-extensions](https://www.intel.com/content/www/us/en/products/docs/accelerator-engines/software-guard-extensions.html)
- Fully Homomorphic Encryption: [en.wikipedia.org/wiki/Homomorphic_encryption](https://en.wikipedia.org/wiki/Homomorphic_encryption)
- Zama (FHE Tooling): [zama.ai](https://www.zama.ai/)

#### مدل‌های زبان و کدنویسی:
- Claude Code GitHub: [github.com/anthropics/claude-code](https://github.com/anthropics/claude-code)
- Claude Code Overview: [docs.anthropic.com/claude-code](https://docs.anthropic.com/en/docs/claude-code/overview)
- OpenAI Codex: [openai.com/index/introducing-codex](https://openai.com/index/introducing-codex/)

#### وایب‌کدینگ و ساخت اپلیکیشن‌ها:
- Reddit VibeCoding Community: [reddit.com/r/vibecoding](https://www.reddit.com/r/vibecoding/)
- Padsnap Launch Thread: [/r/AnalogCommunity/comments](https://www.reddit.com/r/AnalogCommunity/comments/1krqvw8/thanks_for_this_joyful_experience_padsnapapp_is/)
- PadSnap App: [padsnap.app](https://padsnap.app)

#### توییت‌ها و گفتگوهای مرتبط:
- AI + Blockchain Commentary: [x.com/sbetamc/status/1891950821618663588](https://x.com/sbetamc/status/1891950821618663588)


---

### قسمت‌های مرتبط

- [هاردفورک پکترا اتریوم (S07E05)](https://shiryakhat.net/2025/03/ethereum-pectra-upgrade.html) — در همین اپیزود مستقیماً به قسمت قبلی درباره پکترا و محاسبه سود ولیدیتور اشاره می‌شود و مثال وایب‌کودینگ حول همان موضوع ساخته می‌شود.
- [هکتان‌های وب۳ و بلاکچین (S07E03)](https://shiryakhat.net/2025/01/hackathons.html) — ایده‌های AI ایجنت این اپیزود از هکتان ETH Global (فوریه) آمده که در قسمت هکتان‌ها بحث شده و همان تیم توسعه‌دهندگان ایرانی حضور دارند.
- [اثبات سهام بازگشتی و آیگن‌لیر (S07E02)](https://shiryakhat.net/2024/04/restaking.html) — در اپیزود به استفاده از EigenLayer برای پروژه‌های AI ایجنت و استیکینگ اشاره می‌شود که پیش‌نیاز درک آن ایگن‌لیر است.
- [راهنمای ایونت‌های وب۳ و اتریوم (S07E04)](https://shiryakhat.net/2025/02/devcon7.html) — ایجنت‌های مچ‌میکینگ و نتورکینگ طراحی‌شده برای کنفرانس‌ها مستقیماً به تجربه کنفرانس‌رفتن و دورهمی‌های اتریوم مربوط می‌شود.
- [ییلد فارمینگ و حکمرانی (S04E06)](https://shiryakhat.net/2020/12/defi-yield-aggregators-governance.html) — ایجنت‌های کریپتویی این اپیزود دیفای جیمناستیک، ییلد فارمینگ و تریژری منیجمنت انجام می‌دهند که مفاهیم پایه‌ای آن اینجا توضیح داده شده.
- [اقتصاد غیرمتمرکز DeFi (S04E01)](https://shiryakhat.net/2020/07/defi-is-here-to-stay.html) — استیکینگ و تعامل ایجنت‌ها با پروتکل‌های دیفای، بر بستر مفاهیم پایه‌ای دیفای که در این قسمت معرفی شده استوار است.

### زمان‌بندی فصل‌ها

- 00:00 سلام و معرفی
- 03:50 مقدمه و تاریخچه‌ی هوش مصنوعی
- 05:00 تفاوت‌های هوش مصنوعی و یادگیری ماشین
- 17:10 آغاز وایب کدینگ برای سایت شیر یا خط
- 20:20 هوش مصنوعی و API calls و اجینت‌ها
- 24:00 معرفی ایزارها و استفاده از N8N
- 31:00 مدل‌ها و تفاوت آنها
- 35:00 ابزارها و اتوماسیون
- 50:00 در وایب کدینگ
- 55:00 ابزارهای ویژه توسعه‌دهندگان
- 01:05:00 به‌روزرسانی‌های زنده‌ی UI و انیمیشن سایت
- 01:10:00 بررسی عمیق MCP و کاربردهای آن
- 01:13:00 TEE و امنیت اجزایی کد
- 01:20:00 هم‌افزایی AI و بلاکچین
- 01:30:00 استفاده از AI در مدیریت DAO و عملیات مالی
- 01:35:00 امنیت و رمزنگاری در AI و Blockchain
- 01:38:22 knowledge graph و vector databases
- 01:45:00 شخصیت‌های دیجیتال و کاربردهای آن
- 01:55:00 ادامه و تکمیل وایب کدینگ سایت
- 02:05:00 آینده‌ی تکنولوژی AI و بلاکچین
- 02:15:00 جمع‌بندی و نمایش نتایج
