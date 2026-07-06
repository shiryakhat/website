---
layout: post
modal-id: 27
title: "EIP (Ethereum Improvement Proposals) & Updating the Chain | فرایند به‌روز‌رسانی پروتکل اتریوم (S05E01)"
episode: S05E01
date: 2021-07-17
img: img/episodes/S05E01.jpeg
alt: EIP (Ethereum Improvement Proposals) & Updating the Chain (S05E01)
permalink: /:year/:month/:title:output_ext
description: "در قسمت اول فصل پنجم پادکست «شیر یا خط» به سراغ فرایند به‌روزرسانی پروتکل اتریوم می‌رویم و بررسی می‌کنیم که چگونه تغییرات در یک نرم‌افزار غیرمتمرکز و متن‌باز مانند بلاکچین اتریوم شکل می‌گیرد؛ از تاریخچه‌ی استانداردسازی در IETF و RFC گرفته تا PEP پایتون و BIP بیت‌کوین که به پیدایش EIP (Ethereum Improvement Proposal) و EIP-1 انجامید. در این اپیزود انواع EIP (Standard Track شامل Core و Networking و Interface و ERC، Meta و Informational)، استاندارد توکن ERC20، نقش EIP Champion و ویرایشگران و توسعه‌دهندگان هسته، ملاحظات امنیتی یا Security Consideration، جلسات All Core Devs، گروه Cat Herders، کلاینت‌های اتریوم مانند Geth و Nethermind، محیط تست Dev Net و پروسه‌ی هاردفورک‌های اتریوم را توضیح می‌دهیم و درباره‌ی تمرکز و اجماع در تصمیم‌گیری قرارداد هوشمند و شبکه‌ی اتریوم بحث می‌کنیم."
youtube: https://youtu.be/FooJ87bP1y8

soundcloud: https://soundcloud.com/shiryakhat/eip-ethereum-improvement-proposals-updating-the-chain-s05e01

anchor: https://anchor.fm/shiryakhat/episodes/EIP-Ethereum-Improvement-Proposals--Updating-the-Chain-S05E01-e14u29q

apple_podcast: https://podcasts.apple.com/us/podcast/eip-ethereum-improvement-proposals-updating-chain-s05e01/id1221206951?i=1000529866565

google_podcast: https://podcasts.google.com/feed/aHR0cDovL2ZlZWRzLnNvdW5kY2xvdWQuY29tL3VzZXJzL3NvdW5kY2xvdWQ6dXNlcnM6MjYyMzE4MTEzL3NvdW5kcy5yc3M/episode/NTgyMzYyY2QtNmFlZS00MThhLWE3ZjUtMjBiMTJjNjI2NGE1?sa=X&ved=0CAUQkfYCahcKEwiwl9O8yvrxAhUAAAAAHQAAAAAQAQ

spotify: https://open.spotify.com/episode/0L94mTfsOjKlyHJvAl5Woe?si=VSt2xxZGTgeBXr2viDNsjQ&dl_branch=1

castbox: https://castbox.fm/episode/EIP-(Ethereum-Improvement-Proposals)-%26-Updating-the-Chain-(S05E01)-id2539522-id407436081?utm_source=website&utm_medium=dlink&utm_campaign=web_share&utm_content=EIP%20(Ethereum%20Improvement%20Proposals)%20%26%20Updating%20the%20Chain%20(S05E01)-CastBox_FM

---

**شیر یا خط**
**فصل پنجم - قسمت اول**

**فرایند به‌روز‌رسانی پروتکل اتریوم**

فصل پنجم پادکست «شیر یا خط» را در جولای ۲۰۲۱ و پس از حدود یک سال وقفه دوباره آغاز کردیم و این فصل را به‌طور کامل روی اتریوم متمرکز می‌کنیم؛ نه صرفاً به‌خاطر کوین اتریوم، بلکه به‌خاطر فرایندها و پروسه‌هایی که پیرامون آن شکل گرفته و این‌که بیشترین تعداد توسعه‌دهنده روی این تکنولوژی کار می‌کنند. در این قسمت اول سراغ یک پرسش پایه‌ای می‌رویم: اصلاً تغییرات روی اتریوم چگونه انجام می‌شود و چطور می‌توان در یک نرم‌افزار غیرمتمرکز، تغییری را به منصفانه‌ترین شکل ممکن از ایده تا اجرا رساند؟

## توضیحات اپیزود

بحث را از این نقطه شروع می‌کنیم که «تغییر» مفهومی است که در دنیای بیرون از بلاکچین هم زیاد با آن سروکار داریم. در یک شرکت عادی صاحبان سهام (شیرهولدرها) و بورد مدیریتی تصمیم‌گیرنده‌اند و چون مالکیت مشخص است، روند تغییر استریکت‌تر و روشن‌تر است؛ اما با جنبش متن‌باز (open source) با کانسپت تازه‌ای روبه‌رو شدیم: تکه‌کدهایی که صاحب مشخصی ندارند ولی قرار است در طول زمان تغییر کنند. برای همین به راهی نیاز بود که این تغییرات به سورس اصلی برگردد. در این اپیزود این تاریخچه را دنبال می‌کنیم: از IETF که در حدود سال ۱۹۸۶ شکل گرفت و مدل RFC یا Request for Comment را به‌عنوان روش استانداردسازی پروتکل‌های اینترنت مطرح کرد، تا PEP یا Python Enhancement Proposal که همین روند را برای زبان پایتون پیاده کرد، و سپس BIP یا Bitcoin Improvement Proposal که در واقع کپی‌ای از مدل پایتون بود.

سپس به خود اتریوم می‌رسیم و توضیح می‌دهیم که EIP یا Ethereum Improvement Proposal (و ERC یا Ethereum Request for Comment) چیست و چرا لازم است؛ چون هر نرم‌افزاری نیاز به تغییر و آپدیت دارد و اتریوم از روز اول یک رودمپ برای فورک‌ها و آپدیت‌های دوره‌ای تعریف کرد. درباره‌ی EIP-1 صحبت می‌کنیم که خودش یک EIP از نوع Meta و در حالت Living است و مانند یک چارچوب یا «انجیل» برای بقیه‌ی EIPها عمل می‌کند؛ این‌که چه کسانی آن را نوشتند، یک EIP برای پذیرش اولیه باید چه مینیمم‌هایی داشته باشد، و چگونه ملاحظات امنیتی (Security Consideration) که در بیت‌کوین و ابتدای اتریوم وجود نداشت، پس از حدود دو سال تلاش و ارائه‌ها به EIP-1 اضافه شد.

در ادامه انواع EIP، روند حرکت یک EIP از ایده تا Final، بازیگران اصلی این فرایند، جلسات توسعه‌دهندگان هسته یا All Core Devs، کلاینت‌های مختلف اتریوم، گروه Cat Herders و در نهایت پروسه‌ی پیچیده و سنگین هاردفورک‌های اتریوم را بررسی می‌کنیم و این پرسش را می‌کاویم که آیا تصمیم‌گیری در اتریوم متمرکز است و چرا این مدل برای پروتکلی که نیاز به تغییرات سریع دارد لازم است.

## نکات اصلی بحث‌شده

### چرا به روند تغییرات نیاز داریم و ریشه‌های آن

* در شرکت‌های عادی صاحبان سهام و بورد مدیریتی تصمیم می‌گیرند، اما پروژه‌های متن‌باز صاحب مشخصی ندارند و برای بازگرداندن تغییرات به سورس اصلی به یک روند نیاز دارند.
* IETF حدود سال ۱۹۸۶ شکل گرفت تا مهندسان و قانون‌گذاران درباره‌ی نحوه‌ی پیاده‌سازی پروتکل‌های اینترنت مانند TCP/IP و DNS تصمیم بگیرند؛ روش کار آن‌ها RFC یا Request for Comment بود.
* PEP (Python Enhancement Proposal) همین روند را برای زبان پایتون پیاده کرد و BIP (Bitcoin Improvement Proposal) کپی‌ای از مدل پایتون بود؛ در همین انتقال بخش Security Consideration که پایتون داشت حذف شد.

### EIP-1 و ساختار یک EIP

* اولین مسیر برای تغییرات اتریوم را مارتین بکس و سپس هادسون جیمسون با فورک از BIP-1 گذاشتند و EIP-1 را نوشتند.
* EIP-1 توضیح می‌دهد یک ایده چگونه پروپوز می‌شود، انواع EIP چیست، پروسه از کجا شروع و به کجا ختم می‌شود و یک EIP برای پذیرش اولیه چه مینیمم‌هایی (فرمت، تست کیس، Formal Specification، Implementation و Security Consideration) باید داشته باشد.
* ملاحظات امنیتی یا Security Consideration یعنی بررسی این‌که تغییرِ اضافه‌شده چه سناریوهای ناخواسته‌ای (مثل آندرفلو/آورفلو یا تأثیر روی ماینینگ و شبکه) می‌تواند ایجاد کند؛ این بخش پس از ارائه‌ها و تأییدهای پی‌درپی طی حدود دو سال و در جلسات All Core Devs به EIP-1 اضافه شد.

### انواع EIP

* **Standard Track**: تغییرات سنگین که به چهار دسته تقسیم می‌شوند: Core (تغییر لاجیک EVM و کدبیس، نیازمند اجماع/کانسنسس و چالشی‌ترین نوع)، Networking (سطح شبکه و ارتباط ماینرها)، Interface (مثل API/RPC کلاینت‌ها) و ERC (سطح اپلیکیشن).
* **Meta EIP**: تغییرات روندی که به خود اتریوم مربوط نیست، مثل خود EIP-1.
* **Informational EIP**: حالت اطلاع‌رسانی و کم‌اهمیت‌تر، مثل Smart Contract Weakness Classification که قابل ایگنور کردن است.
* در بیت‌کوین BIP-123 نیز تغییرات را به همین چهار دسته تقسیم کرده بود.

### ERC و استاندارد ERC20

* ERCها در سطح اپلیکیشن هستند و به لاجیک اتریوم کاری ندارند؛ استانداردهایی برای نوشتن قرارداد هوشمند تعیین می‌کنند.
* ERC20 (یا EIP20) استاندارد توکن است و مشخص می‌کند یک توکن چه آپشن‌هایی مثل نام، سیمبول، تعداد ارقام اعشار، بالانس و ترنسفر باید داشته باشد تا ولت‌ها و قراردادهای دیگر بتوانند با آن کار کنند؛ ویتالیک یکی از نویسندگان آن بود و همین استاندارد راه را برای [ICOها و توکن‌سازی](https://shiryakhat.net/2017/05/blockchain-altcoins-tokens-ico.html) باز کرد.

### روند و بازیگران یک EIP (به‌جز Core)

* سه بازیگر اصلی: EIP Champion (صاحب و مسئول جلو بردن ایده)، ویرایشگران یا EIP Editors و متخصصان فنی یا Core Developers.
* ایده ابتدا در جاهایی مثل Ethereum Magicians، سابردیت اتریوم، ethresear.ch یا issueهای گیت‌هاب مطرح و بحث می‌شود، پیش از آن‌که به EIP تبدیل شود.
* EIP Editorها حق قضاوت (Judge) ندارند؛ فقط منطقی بودن و مطابقت فرمت را چک می‌کنند و یک EIP Number اختصاص می‌دهند و پول‌ریکوئست را مرج می‌کنند.
* مراحل: Idea ← Draft ← Last Call (یک تایم‌ویندوی معمولاً چهارده‌روزه) ← Final. حالت‌های دیگر: Stagnant (شش ماه بدون پیشرفت)، Withdrawn (ریجکت) و Living (همیشه قابل تغییر، مثل EIP-1). فقط EIPهای Final در فولدر ریپوی گیت‌هاب قرار می‌گیرند.
* گروه EIPIP یا EIP Improvement Process هر دو هفته یک‌بار جلسه دارد و فقط درباره‌ی بهبود خودِ روند EIPها بحث می‌کند.

### جلسات هسته و کلاینت‌ها

* جلسات All Core Devs (ACD) هر دو هفته یک‌بار برگزار و به‌صورت پابلیک در یوتیوب پخش می‌شود؛ توسعه‌دهندگان اصلی، اعضای اتریوم فاوندیشن، ریسرچرها و کامیونیتی حضور دارند و هر کلاینت اصلی باید حداقل یک نماینده داشته باشد چون رأی‌گیری اصلی روی کلاینت‌ها انجام می‌شود.
* پنج کلاینت اصلی اتریوم: Geth (با زبان Go و پرکاربردترین)، OpenEthereum (سابقاً Parity)، Nethermind، Besu و Erigon؛ برنامه‌ریزی جلسات در ریپوی ethereum/pm انجام می‌شود.

### پروسه‌ی Core EIP و هاردفورک

* گروه Cat Herders را هادسون جیمسون اوایل ۲۰۱۹ راه‌اندازی کرد تا هماهنگی و مدیریت هاردفورک‌ها و ارتباط با زیرساخت‌ها (اکسچنج‌ها، ولت‌ها، ماینرها و سرویس‌هایی مثل اینفورا و آلکمی) را برعهده بگیرد؛ اکنون تیم بیکو آن را منیج می‌کند.
* پروسه‌ی یک Core EIP: بحث و Draft ← اکسپت اولیه در یک ACD Call ← Implementation اولیه برای راضی کردن کلاینت‌ها ← نوشتن Test Case و Security Review (که گاهی مثل EIP-3074 و [EIP-1559](https://shiryakhat.net/2021/08/eip-1559-let-it-burn.html) آوت‌سورس می‌شود) ← تست روی Dev Net (اولین آن YOLO بود؛ شبکه‌ای با تعداد کمی نود که برای دیپلوی نیست) ← تست روی تست‌نت‌ها مثل Ropsten و Rinkeby با بلاک‌نامبر مشخص ← در نهایت تعیین بلاک‌نامبر روی مین‌نت.
* شرط اصلی برای قبول شدن یک Core EIP و انجام هاردفورک این است که حداقل سه کلاینت مختلف اتریوم آن تغییر را پیاده‌سازی کنند؛ در غیر این‌صورت ریجکت می‌شود.
* تاریخچه: در ۲۰۱۵ و اوایل ۲۰۱۶ تعداد کمی توسعه‌دهنده (و در اصل ویتالیک و گوین وود) تصمیم می‌گرفتند؛ سپس با ایده‌ی هاردفورک هر شش ماه یک‌بار در ۲۰۱۹ و بعد مدل EIP-Centric Hard Fork، روند تکامل یافت.

### دیفیکالتی بامب و تمرکز در تصمیم‌گیری

* اتریوم آن‌چین گاورننس ندارد و سیگنالینگ آف‌چین است؛ تصمیم اصلی جایی است که کلاینت‌ها ایمپلیمنت را می‌پذیرند و بعد ماینرها آپدیت می‌کنند، و در هر مرحله امکان فورک وجود دارد که پروسه‌ای سنگین است.
* Difficulty Bomb با هدف عقب انداختن ماینینگ و سوئیچ از Proof of Work به Proof of Stake در هر آپدیت عقب انداخته می‌شود؛ ایده‌ی «تصمیم‌گیری با عدم عمل» (deciding by no action) نودها را مجبور می‌کند تصمیم بگیرند و آپدیت کنند.
* استدلال می‌شود چون اتریوم نیاز به تغییرات سریع و زیاد (مثل مسیر [اتریوم ۲](https://shiryakhat.net/2019/12/devcon5-eth2-censorship.html)) دارد و نمی‌تواند [مثل بیت‌کوین سال‌ها منتظر بماند](https://shiryakhat.net/2017/04/bitcoin-fork-blocksize-debate.html)، نمی‌تواند کاملاً غیرمتمرکز باشد؛ ویتالیک تصمیم‌گیری را به تیمی از متخصصان واگذار کرد تا یک دوران گذار به سیستم غیرمتمرکزتر طی شود.
* فشار روی ماینرها فقط از سمت کامیونیتی نیست: چون کاربران و دپ‌ها (مثلاً تتر که فقط یک زنجیره را ساپورت می‌کند) انتخاب می‌کنند تراکنش‌ها را کجا بفرستند، ماینر به‌تنهایی نمی‌تواند تصمیم بگیرد؛ نمونه‌ی ProgPoW فورکی بود که تا مرحله‌ی آخر آمد ولی ماینرها قبولش نکردند.

### نتیجه‌گیری

فرایند به‌روزرسانی اتریوم ترکیبی از میراث RFC و PEP و BIP است که در قالب EIP و EIP-1 نهادینه شده و از ایده تا Final و در نمونه‌ی سنگین Core EIP تا هاردفورک، لایه‌های متعددی از بحث، تست، ملاحظات امنیتی و اجماع کلاینت‌ها را طی می‌کند. این مدل نه کاملاً متمرکز است و نه کاملاً غیرمتمرکز؛ انتخابی آگاهانه است بین سرعت تغییر و غیرمتمرکز بودن، تا شبکه‌ای که ارزش و پروژه‌های زیادی به آن وابسته‌اند بتواند با اطمینان و در عین حال با مشارکت گسترده تکامل پیدا کند. در اپیزودهای بعدی به‌طور خاص سراغ EIPهای مهم مانند EIP-1559 خواهیم رفت.

**لینک های این اپیزود:**

* EIP20: [https://eips.ethereum.org/EIPS/eip-20](https://eips.ethereum.org/EIPS/eip-20)
* لیست همه‌ی EIP ها به همراه وضعیت فعلی آنها: [https://eips.ethereum.org/all](https://eips.ethereum.org/all)
* فولدر EIP در گیت هاب اتریوم: [https://github.com/ethereum/EIPs](https://github.com/ethereum/EIPs)
* اسلایدهای شایان اسکندری در IETF: [https://datatracker.ietf.org/meeting/105/materials/slides-105-hotrfc-11-democratic-improvement-proposals-for-decentralization-projects-01](https://datatracker.ietf.org/meeting/105/materials/slides-105-hotrfc-11-democratic-improvement-proposals-for-decentralization-projects-01)
* ارائه‌ی اسلاید ها در IETF: [https://www.youtube.com/watch?v=4pcXftIM_KY&ab_channel=ConsenSysDiligence]( https://www.youtube.com/watch?v=4pcXftIM_KY&ab_channel=ConsenSysDiligence)
* محل های بحث و گفتگوی اولیه در مورد ایده ها:
    * [https://ethresear.ch/](https://ethresear.ch/)
    * [https://ethereum-magicians.org/](https://ethereum-magicians.org/)
    * [https://github.com/ethereum/EIPs/issues](https://github.com/ethereum/EIPs/issues)
    * EIP1 : [https://eips.ethereum.org/EIPS/eip-1](https://eips.ethereum.org/EIPS/eip-1)
    * وبسایت Cat Herders: [https://ethereumcatherders.com/](https://ethereumcatherders.com/)
    * رپو مدیریتی برای برگزاری ACD call ها: [https://github.com/ethereum/pm](https://github.com/ethereum/pm)

### قسمت‌های مرتبط

- [EIP-1559 و فورک لندن](https://shiryakhat.net/2021/08/eip-1559-let-it-burn.html) — ادامه مستقیم همین قسمت؛ در متن بارها به EIP-1559 و فورک لندن به‌عنوان نمونه‌ی کور EIP اشاره شد.
- [هاردفورک دنکون](https://shiryakhat.net/2024/02/ethereum-dencun-upgrade.html) — نمونه‌ی عملی همان فرایند کور EIP و هاردفورک اتریوم که اینجا توضیح داده شد.
- [هاردفورک پکترا](https://shiryakhat.net/2025/03/ethereum-pectra-upgrade.html) — کاربرد واقعی روند EIP و هاردفورک محور در به‌روزرسانی پروتکل اتریوم.
- [فورک بیت‌کوین و سگویت/BIP148](https://shiryakhat.net/2017/10/blockchain-usecases-social-pathology.html) — بحث BIP و گاورننس آفچین و یوزر-اکتیویتد سافت‌فورک که در این قسمت با روند اتریوم مقایسه شد.
- [چه فورکی، انشعابات بیت‌کوین](https://shiryakhat.net/2017/11/what-the-fork-part-1.html) — ریشه‌ی فورک در دنیای اوپن‌سورس و مدل BIP بیت‌کوین که مبنای EIP اتریوم است.
- [اتریوم](https://shiryakhat.net/2017/02/ethereum.html) — معرفی پایه‌ی اتریوم و EVM که پیش‌نیاز درک تغییرات کور EIP روی این پروتکل است.
