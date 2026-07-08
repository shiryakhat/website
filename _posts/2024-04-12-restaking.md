---
layout: post
modal-id: 35
title: "Ethereum Restaking & EigenLayer | اثبات سهام بازگشتی و آیگن‌لیر (S07E02)"
episode: S07E02
date: 2024-04-12
keywords: "شیر یا خط, Ethereum, zk-SNARK, DeFi, DAO, Proof of Stake, Proof of Work, validator, staking, restaking, Dencun, Uniswap, AMM, MEV, consensus, EIP-7251"
duration: PT1H25M44S
img: img/episodes/S07E02.jpg
alt: Ethereum Restaking (S07E02)
permalink: /:year/:month/:title:output_ext
description: "در این قسمت از پادکست «شیر یا خط» به بررسی عمیق مفهوم ری‌استیکینگ (Restaking) در اتریوم و پروتکل ایگن‌لیر (EigenLayer) می‌پردازیم؛ از تاریخچه ماینینگ و مرج ماینینگ در دنیای Proof of Work گرفته تا اثبات سهام (Proof of Stake)، الگوریتم RANDAO، انواع ریوارد ولیدیتورها، لیکویید استیکینگ و ریسک عرضی‌سازی مجدد (Rehypothecation) مشابه بحران مالی ۲۰۰۸. سپس معماری ایگن‌لیر در لایه پروتکل، نقش AVSها، اوپریتورها، ایگن‌پاد، قرارداد هوشمند اسلشر و مدل امنیت اقتصادی و پول سکیوریتی را تشریح می‌کنیم و در پایان به مقایسه Native Restaking و Liquid Restaking و مروری بر پروتکل پافر (Puffer) می‌رسیم. مفاهیم کلیدی: بلاکچین، قرارداد هوشمند، اتریوم، ولیدیتور، امنیت اقتصادی، دیسنترالایزد سکوئنسر و دیتا اویلبیلیتی."
youtube: https://youtu.be/wTCGLVT4nmI

soundcloud: https://soundcloud.com/shiryakhat/shir-ya-khat-ethereum-restaking-eigenlayer-s07e02?si=36e48b5987d34c98a8db33f7cb63b4ea&utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing

# anchor: Anchor was bought by Spotify and is no longer available

apple_podcast: https://podcasts.apple.com/us/podcast/ethereum-restaking-eigenlayer-s07e02-%D8%A7%D8%AB%D8%A8%D8%A7%D8%AA-%D8%B3%D9%87%D8%A7%D9%85-%D8%A8%D8%A7%D8%B2%DA%AF%D8%B4%D8%AA%DB%8C/id1221206951?i=1000652369147

google_podcast: https://podcasts.google.com/feed/aHR0cDovL2ZlZWRzLnNvdW5kY2xvdWQuY29tL3VzZXJzL3NvdW5kY2xvdWQ6dXNlcnM6MjYyMzE4MTEzL3NvdW5kcy5yc3M/episode/ODczNmJhMGItMDdmNi00ZGRhLWJmNmQtY2MyYTkyY2I4YzM2?sa=X&ved=0CAUQkfYCahcKEwiQn5n04MCFAxUAAAAAHQAAAAAQAQ

spotify: https://open.spotify.com/episode/483E1hmVvprGcFoH1FpFJJ

castbox: https://castbox.fm/episode/Ethereum-Restaking-%26-EigenLayer-%7C-(S07E02)-%7C-%D8%A7%D8%AB%D8%A8%D8%A7%D8%AA-%D8%B3%D9%87%D8%A7%D9%85-%D8%A8%D8%A7%D8%B2%DA%AF%D8%B4%D8%AA%DB%8C-%D9%88-%D8%A2%DB%8C%DA%AF%D9%86%E2%80%8C%D9%84%DB%8C%D8%B1-id2539522-id692338625?country=us

---

**شیر یا خط**
**[فصل هفتم - قسمت دو](https://shiryakhat.net/2024/04/restaking.html)**

**بررسی مفهوم Restaking در اتریوم و پروتکل Eignlayer**

-------------------------------------------------------

ری‌استیکینگ این روزها یکی از داغ‌ترین بحث‌های فضای کریپتو و توییتر است؛ ایده‌ای که به قول یکی از دوستان مثل کشف نفت است، همه می‌دانند چیز باارزشی پیدا شده اما هنوز کسی دقیقاً نمی‌داند با آن چه می‌شود کرد. در این اپیزود که کمی متفاوت از قسمت‌های قبلی است، از تاریخچه شروع می‌کنیم، به وضعیت امروز می‌رسیم و در نهایت به شکل یک گفت‌وگو و تبادل نظر درباره آینده این فناوری با هم صحبت می‌کنیم.


<details markdown="1">
<summary>🇬🇧 English Summary</summary>

This episode of the Shir Ya Khat podcast explores restaking and EigenLayer, framed as arguably the most revolutionary idea in Ethereum since the Merge. The hosts trace the historical arc from Proof of Work mining and mining pools (including merge mining, the Stratum and Stratum V2 protocols, and 51% centralization concerns) to Ethereum's Proof of Stake, explaining 32-ETH validators, the consensus and execution layers, RANDAO validator selection, and reward models spanning block proposals, attestations, sync committees, priority fees, MEV, slashing, and whistleblower rewards. They then cover liquid staking derivatives (LSDs) via Lido and Rocket Pool, smoothing pools, EIP-7251, and the rehypothecation risk that over-leveraging staked ETH can undermine Layer 1 security. The core discussion dives deep into EigenLayer's mechanics—restaking through the deposit contract and withdrawal credentials, EigenPods and the factory pattern, opt-in AVSs (Actively Validated Services) like decentralized sequencers, bridges, oracles, and data availability (EigenDA, Celestia), plus operators, delegation, slasher contracts, and zk-proof verification of consensus-layer state via protocols like Telepathy. The hosts also examine pooled security, the concept of renting Ethereum's economic security for modular blockchains and trusted execution environments (TEEs), edge-case applications like attacking a Bitcoin user-activated soft fork, and note that EigenLayer's mainnet launch (on Holesky after Goerli's deprecation) will initially ship without slashing. Finally, one host discloses his role as Head of Security at Puffer Finance, detailing its pufETH liquid restaking token, native versus liquid restaking, a self-imposed 22% cap to preserve network diversity, and its "vampire attack" strategy against Lido's growing 34% stake dominance.

</details>
<!--en-summary-->

## توضیحات اپیزود

این قسمت با یک مرور تاریخی آغاز می‌شود تا ببینیم چه شد که به اینجا رسیدیم. ابتدا به دنیای [Proof of Work و ماینینگ](https://shiryakhat.net/2017/03/mining-pow-etf.html) سری می‌زنیم؛ اینکه چرا ماینینگ پول‌ها به وجود آمدند تا افراد بتوانند قدرت محاسباتی و درآمدشان را با هم به اشتراک بگذارند، و مفهوم مرج ماینینگ که در آن یک چین ضعیف‌تر از امنیت چین بزرگ‌تر (مثل بیت‌کوین) استفاده می‌کند. در ادامه مشکل تمرکزگرایی ماینینگ پول‌ها، پروتکل استراتوم و نسخه دوم آن (که از مدل پایین‌به‌بالا استفاده می‌کند و به ماینر اجازه می‌دهد راحت‌تر بلاک بسازد و پول را سوییچ کند) بررسی می‌شود.

سپس وارد دنیای [Proof of Stake اتریوم](https://shiryakhat.net/2017/02/ethereum.html) می‌شویم؛ اینکه برای ولیدیتور شدن باید ۳۲ اتریوم به قرارداد هوشمند سپرده شود و یک نود اجرا و همیشه آنلاین بماند. الگوریتم RANDAO و این نکته کلیدی توضیح داده می‌شود که این الگوریتم به میزان اتریوم استیک‌شده روی یک سرور اهمیت نمی‌دهد و صرفاً «انتیتی ولیدیتور» برایش مهم است؛ به همین دلیل شرکت‌هایی مثل کوین‌بیس مجبورند زیرساخت بزرگ و پیچیده‌ای برای اجرای هزاران نود جداگانه بالا نگه دارند. انواع ریوارد ولیدیتورها هم مرور می‌شود: ریوارد لایه اجماع، پرایوریتی فی لایه اجرا، پاداش اتستیشن، سینک کامیتی (با ریوارد بسیار بالاتر) و حتی ریوارد ویسل‌بلوئر برای گزارش اسلشینگ.

بخش اصلی اپیزود به لیکویید استیکینگ، ری‌استیکینگ و ایگن‌لیر اختصاص دارد. توضیح داده می‌شود که چرا سرمایه قفل‌شده باید نقدشونده و قابل استفاده باشد و پروژه‌هایی مثل لایدو چگونه با دادن توکن استیک‌شده این نیاز را حل می‌کنند، اما همین موضوع ریسک عرضی‌سازی مجدد (Rehypothecation) و شباهت به بحران مالی ۲۰۰۸ را به همراه دارد. سپس معماری ایگن‌لیر در لایه پروتکل، از دیپازیت کانترکت و ویدرال کردنشیال گرفته تا ایگن‌پاد، قرارداد هوشمند اسلشر، نقش اوپریتورها، مدل امنیت اقتصادی برای AVSها و مفهوم پول سکیوریتی به‌طور مفصل باز می‌شود و در نهایت به مرور پروتکل پافر و مقایسه Native Restaking با Liquid Restaking می‌رسیم.

## نکات اصلی بحث‌شده

### ماینینگ و دنیای Proof of Work

* ماینینگ پول‌ها برای اشتراک قدرت محاسباتی و درآمد بین ماینرها ساخته شدند تا افراد بتوانند با کل شبکه رقابت کنند.
* مرج ماینینگ: یک چین کوچک‌تر و ضعیف‌تر با یک هش‌لاک از امنیت چین بزرگ‌تر (چین پرنت مثل بیت‌کوین) استفاده می‌کند.
* مشکل تمرکزگرایی: ماینینگ پول‌ها به‌عنوان یک نهاد مرکزی می‌توانستند تراکنش‌ها را سانسور یا فیلتر کنند.
* پروتکل استراتوم نهاد مرکزی بود که بلاک را می‌ساخت و پخش می‌کرد؛ نسخه دوم (Stratum V2) با مدل پایین‌به‌بالا اجازه می‌دهد هر ماینر خودش بلاک بسازد و راحت‌تر پول را عوض کند.

### اثبات سهام و محدودیت ولیدیتورها

* برای ولیدیتور شدن باید ۳۲ اتریوم به قرارداد هوشمند سپرده شود و نود همیشه آنلاین و به‌روز بماند.
* الگوریتم RANDAO به میزان اتریوم روی یک سرور اهمیت نمی‌دهد؛ شانس انتخاب شدن ۳۲ و ۶۴ اتریوم تقریباً یکسان است، پس داشتن پول بیشتر یعنی مجبور شدن به اجرای نودهای ولیدیتور بیشتر.
* [EIP-7251](https://shiryakhat.net/2021/07/eip-updates-on-ethereum.html) مطرح شده تا سقف ۳۲ اتریوم برداشته شود و بتوان بیشتر روی یک نود گذاشت، هرچند نگرانی تمرکزگرایی دارد.

### انواع ریوارد ولیدیتورها

* ریوارد لایه اجماع (consensus layer) به آدرس ویدرال کردنشیال می‌رسد.
* پرایوریتی فی لایه اجرا (execution layer) به آدرس قابل‌تغییر ست‌شده روی سرور می‌رسد و می‌تواند شامل MEV باشد.
* پاداش پروپوز بلاک (حدود هر دو ماه یک‌بار، میانگین حدود ۰.۰۱ اتریوم)، پاداش اتستیشن (هر شش دقیقه، مقدار کم)، و سینک کامیتی با ریوارد حدود هفت‌برابر یک بلاک.
* اسموتینگ پول‌هایی مثل smoothly.money برای نرم‌کردن توزیع ریوارد بین اعضا.
* ریوارد ویسل‌بلوئر برای کسی که یک ولیدیتور خاطی را برای اسلشینگ گزارش می‌کند.

### لیکویید استیکینگ و ریسک‌های آن

* سرمایه قفل‌شده در استیکینگ باید نقدشونده باشد؛ لایدو با گرفتن اتریوم و دادن توکن استیک‌شده این کار را انجام می‌دهد.
* این توکن مثل [LP توکن یونی‌سواپ](https://shiryakhat.net/2020/10/defi-uniswap-amm-balancer.html) قابل جابه‌جایی، وثیقه‌گذاری و [استفاده در دیفای](https://shiryakhat.net/2020/07/defi-is-here-to-stay.html) است و اجازه می‌دهد کسانی که کمتر از ۳۲ اتریوم دارند هم در ریوارد شبکه سهیم شوند.
* ریسک اصلی: عرضی‌سازی مجدد (Rehypothecation) مشابه بحران مالی ۲۰۰۸؛ اگر سود استفاده‌های ثانویه از سود لایه اصلی بیشتر شود، امنیت شبکه به خطر می‌افتد.

### معماری ایگن‌لیر در لایه پروتکل

* ایده اصلی: اجاره‌دادن امنیت اقتصادی اتریوم برای سرویس‌های دیگر؛ ایگن‌لیر خود را «بازارگاه اعتماد غیرمتمرکز» معرفی می‌کند.
* ولیدیتور با تنظیم ویدرال کردنشیال روی یکی از آدرس‌های ایگن‌لیر (که با فکتوری پترن برای هر ولیدیتور منحصربه‌فرد است) وارد بازی می‌شود.
* AVSها (Active Validation Service) سرویس‌هایی مثل بریج، [دیسنترالایزد سکوئنسر و دیتا اویلبیلیتی](https://shiryakhat.net/2021/11/scalability-blockchain-bottleneck-2.html) هستند که ولیدیتورها می‌توانند نودشان را اجرا کنند و ریوارد بگیرند.
* قرارداد هوشمند اسلشر: اگر ولیدیتوری در یک AVS خطا کند، هر کسی می‌تواند آن را گزارش کند و ولیدیتور اسلش می‌شود (حتی تا سطح اتریوم استیک‌شده).
* چون قرارداد ایگن‌لیر روی لایه اجرا است و از اتفاقات لایه اجماع خبر ندارد، پروتکلی مثل تلپسی با استفاده از zk-SNARK پروف درست می‌کند تا صحت داده‌ها اثبات شود.
* برداشت اتر از بیکن‌چین مثل self-destruct به‌صورت force deposit مستقیم به اکانت واریز می‌شود و کاربر باید با ارائه پروف به ایگن‌پاد فرایند claim را طی کند.
* اوپریتورها: شرکت‌هایی که نود AVSها را اجرا می‌کنند؛ ولیدیتور می‌تواند به‌جای اجرای خودش، نودهایش را به اوپریتور دلیگیت کند، هرچند ریسک اسلش شدن به دلیل خطای اوپریتور وجود دارد.

### مدل امنیت اقتصادی و پول سکیوریتی

* مفهوم پول سکیوریتی: یک ولیدیتور می‌تواند با opt-in کردن اسلشینگ روی چند AVS، امنیت استیک خود را چندبرابر عرضه کند و از چند سرویس هم‌زمان درآمد بگیرد.
* برنامه ایگن‌لیر برای رفتن به مین‌نت طی هفته‌های آینده و نبود اسلشینگ در حدود یک سال اول به دلیل نگرانی از باگ‌های کانفیگوریشن.
* ایگن‌لیر همچنان در حال توسعه است؛ نگارنده اشاره می‌کند نوشتن قرارداد اسلشر و پیدا کردن داکیومنت مناسب برای بالا آوردن یک AVS در عمل بسیار سخت است و تقریباً تنها نمونه فعال، EigenDA است.

### پافر و مقایسه Native و Liquid Restaking

* پافر فایننس روی ایگن‌لیر ساخته می‌شود و ظاهراً شبیه یک لیکویید استیکینگ توکن است، اما اوپریتورها می‌توانند با یک یا دو اتریوم نود اجرا کنند و دارندگان توکن پافر با رأی‌دادن مشخص می‌کنند کدام AVSها ساپورت شوند.
* Native Restaking یعنی خود اتریوم استیک‌شده وارد بازی می‌شود؛ Liquid Restaking یعنی توکن‌های لیکویید استیکینگ (مثل توکن لایدو) دلیگیت و ری‌استیک می‌شوند. پافر روی مدل Native تمرکز دارد تا از انباشت ریسک جلوگیری کند.
* پافر نوعی «ومپایر اتک» به لایدو محسوب می‌شود، چون لایدو حدود ۳۴٪ شبکه را در اختیار دارد و تمرکز آن برای کل شبکه ریسک ایجاد می‌کند؛ پافر در خود پروتکل سقف ۲۲٪ شبکه را برای حفظ تنوع لحاظ کرده است.

### نتیجه‌گیری

ایگن‌لیر عملاً یک لایه جدید به استک اضافه می‌کند؛ به‌جای اینکه اپلیکیشن روی اتریوم یا آوالانچ به‌صورت جداگانه اجرا شود، می‌توان با اجاره‌کردن امنیت اقتصادی اتریوم اپلیکیشن‌ها و سرویس‌های متنوعی ساخت و نوعی اتصال بین چین‌های مختلف ایجاد کرد. این فناوری بسیار زودهنگام و در حال توسعه است و کاربردهایش هنوز کاملاً مشخص نیست؛ اما با پرمیشنلس بودن اکثر کارها، فرصت‌های جالبی پیش روی توسعه‌دهندگان قرار می‌دهد و باید دید در آینده به کجا می‌رسد.

**لینک های این اپیزود:**


* دوره کوین‌ایران آکادمی - ۱۴۰۲ جلسه سوم - مقدمات و تاریخچه اتریوم و اثبات سهام (Proof of Stake) [https://www.youtube.com/watch?v=oBrCtuhmOlM](https://www.youtube.com/watch?v=oBrCtuhmOlM&list=PLDwI1rIhknpN-4ZnbcQfqDgM5dVY73ruS&index=3&pp=gAQBiAQB)
* دروازه ورود ولیدیتور ها به لایه اجماع اتریوم: [https://coinmetrics.substack.com/p/state-of-the-network-issue-244](https://coinmetrics.substack.com/p/state-of-the-network-issue-244)
* دیاگرام ساده شده پروتکل ایگن‌لیر: [https://forum.eigenlayer.xyz/t/high-level-diagram-for-native-restaking/13093](https://forum.eigenlayer.xyz/t/high-level-diagram-for-native-restaking/13093)
* You Could've Invented EigenLayer: [https://www.blog.eigenlayer.xyz/ycie/](https://www.blog.eigenlayer.xyz/ycie/)
* EigenLayer Whitepaper: [https://docs.eigenlayer.xyz/eigenlayer/overview/whitepaper](https://docs.eigenlayer.xyz/eigenlayer/overview/whitepaper)
* Puffer Overview: [https://docs.puffer.fi/protocol/overview](https://docs.puffer.fi/protocol/overview)

### قسمت‌های مرتبط

- [ارتقای دنکون اتریوم](https://shiryakhat.net/2024/02/ethereum-dencun-upgrade.html) — اپیزود قبلی همین فصل که در آن راجع به بلاب‌ها و ذخیره موقت دیتا (data availability) صحبت شد؛ در این قسمت مستقیماً به «جلسه قبلی» ارجاع داده می‌شود.
- [فرایند به‌روزرسانی و EIPها](https://shiryakhat.net/2021/07/eip-updates-on-ethereum.html) — بحث EIP-7251 و EIPهایی که سرعت ورود به استیکینگ را کم می‌کنند و نقش آیگن‌لیر در آن‌ها مطرح می‌شود؛ درک فرایند EIP پیش‌نیاز است.
- [مقیاس‌پذیری و لایه دوم](https://shiryakhat.net/2021/11/scalability-blockchain-bottleneck-2.html) — در قسمت به سکوئنسر، رول‌آپ‌ها (آربیتروم/اپتیمیزم)، دیتا اولیبیلیتی و دیسنترالایز کردن لایه‌دو اشاره می‌شود که موضوع اصلی این اپیزود است.
- [ماینینگ و اثبات کار](https://shiryakhat.net/2017/03/mining-pow-etf.html) — در تاریخچه‌ی ابتدای اپیزود مستقیماً به اپیزودهای قدیمی ماینینگ و ماینینگ‌پول ارجاع داده می‌شود تا مسیر گذار به اثبات سهام روشن شود.
- [بازارسازهای خودکار و توکن LP](https://shiryakhat.net/2020/10/defi-uniswap-amm-balancer.html) — مفهوم لیکوید استیکینگ با مثال توکن‌های LP یونی‌سواپ و استفاده از آن‌ها به‌عنوان وثیقه در دیفای توضیح داده می‌شود.
- [اقتصاد غیرمتمرکز DeFi](https://shiryakhat.net/2020/07/defi-is-here-to-stay.html) — بحث ری‌هایپوتیکیشن، وثیقه‌گذاری استیک و استفاده‌های مالی چندلایه از دارایی قفل‌شده ریشه در مفاهیم دیفای دارد.

### زمان‌بندی فصل‌ها

- 00:00 مقدمه و معرفی
- 02:17 مرج ماینینگ در دنیا Proof of Work
- 08:10 خلاصه ای از Proof of Stake و محدودیت شراکت افراد به عنوان یک Verifier
- 12:30 الگوریتم RANDAO و تاثیر آن در Proof of Stake اتریوم
- 15:25 انواع Reward های متفاوت برای Validatorها در Proof of Stake اتریوم
- 19:27 بررسی Liquid Staking و چرایی نیاز به آنها
- 23:56 ریسک های Liquid Staking و شباهت آن به مشکل مالی امریکا در ۲۰۰۸ (rehypothecation)
- 25:50 تاریخچه Restaking
- 33:52 کاربرد های Restaking
- 38:33 چگونگی کار کردن EignLayer در لایه پروتکل
- 01:13:24 مدل امنیت اقتصادی در EignLayer برای AVS ها
- 01:14:55 خلاصه بر Puffer Protocol
- 01:18:32 مقایسه Native Restaking با Liquid Restaking
- 01:21:48 جمع بندی
