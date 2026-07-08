---
layout: post
modal-id: 29
title: "Scalability, The Blockchain's Bottleneck | مقیاس‌پذیری گلوگاهی در بلاکچین‌ها (S06E01)"
episode: S06E01
date: 2021-10-23
keywords: "شیر یا خط, Ethereum, Bitcoin, Layer 2, blob, Dencun, consensus, sharding, EIP-1559, DoS, SegWit, AWS, TPS, CPU, EIP, CCL"
duration: PT58M25S
img: img/episodes/S06E01.jpeg
alt: Scalability, The Blockchain's Bottleneck (S06E01)
permalink: /:year/:month/:title:output_ext
description: "در قسمت اول فصل ششم پادکست «شیر یا خط» با موضوع مقیاس‌پذیری (Scalability) در بلاکچین‌ها همراه مهدی و حمید بررسی می‌کنیم چرا شبکه‌هایی مانند بیت‌کوین و اتریوم در تعداد تراکنش بر ثانیه (TPS) محدودیت دارند و این گلوگاه از کجا می‌آید. سه محدودیت اصلی نودها یعنی محاسبات (Computation)، حجم ذخیره‌سازی (Storage) و پهنای باند (Bandwidth) را کالبدشکافی می‌کنیم، مثلث سه‌گانه‌ی بلاکچین یا Blockchain Trilemma (عدم تمرکز، امنیت و مقیاس‌پذیری) را که ویتالیک مطرح کرده توضیح می‌دهیم و نقش قرارداد هوشمند، استیت اتریوم، فست‌سینک و دیتا اویلیبیلیتی را روشن می‌کنیم. در ادامه دسته‌بندی راه‌حل‌های مقیاس‌پذیری شامل افزایش سایز بلاک، بهینه‌سازی و سگویت (SegWit)، شاردینگ (Sharding) و اشاره به زیرو نالج پروف، لایتنینگ، سولانا، کاردانو و پولکادات را مرور می‌کنیم."
youtube: https://youtu.be/HnrXh4ASQOg

soundcloud: https://soundcloud.com/shiryakhat/scalability-the-blockchains-bottleneck-s06e01

anchor: https://anchor.fm/shiryakhat/episodes/Scalability--The-Blockchains-Bottleneck-S06E01-e1973q7


apple_podcast: https://podcasts.apple.com/us/podcast/scalability-the-blockchains-bottleneck-s06e01/id1221206951?i=1000539491224

google_podcast: https://podcasts.google.com/feed/aHR0cDovL2ZlZWRzLnNvdW5kY2xvdWQuY29tL3VzZXJzL3NvdW5kY2xvdWQ6dXNlcnM6MjYyMzE4MTEzL3NvdW5kcy5yc3M/episode/YjIwZmU4NmQtZjgzMS00MDFlLWE1YWYtZWQ4ZGU4OWUwODBl?sa=X&ved=0CAUQkfYCahcKEwiQ5aORkeHzAhUAAAAAHQAAAAAQAQ

spotify: https://open.spotify.com/episode/7B8nfhMvUXtdjuujHuyDMK?si=FALA_DBTQnO0gamLtgFNvA

castbox: https://castbox.fm/episode/Scalability%2C-The-Blockchain's-Bottleneck-(S06E01)-id2539522-id435346186?utm_source=website&utm_medium=dlink&utm_campaign=web_share&utm_content=Scalability%2C%20The%20Blockchain's%20Bottleneck%20(S06E01)-CastBox_FM

---

**شیر یا خط**
**[فصل ششم - قسمت اول](https://shiryakhat.net/2021/10/scalability-blockchain-bottleneck.html)**

**مقیاس‌پذیری٫ گلوگاهی در بلاکچین‌ها**

-------------------------------------------------------

فصل جدید «شیر یا خط» را با موضوعی کلیدی آغاز می‌کنیم: مقیاس‌پذیری یا همان اسکیلیبیلیتی در بلاکچین‌ها. مهدی و حمید در این قسمت که در ۱۱ اکتبر ۲۰۲۱ ضبط شده، پیش از ورود به برنامه‌های آینده‌ی اتریوم، پایه‌ای‌ترین پرسش را پاسخ می‌دهند: اصلاً مقیاس‌پذیری چیست، چرا برای بلاکچین‌ها یک چالش جدی است و چه راه‌حل‌هایی تا امروز برای آن ارائه شده است. این اپیزود نقطه‌ی شروع سفری است که در طول فصل، پله‌پله اتفاقات گذشته و آینده‌ی اسکیل کردن اتریوم را دنبال خواهد کرد.


<details class="en-summary" markdown="1">
<summary>🇬🇧 English Summary</summary>

Here is the summary paragraph: This season-opening episode of Shir ya Khat (Heads or Tails) introduces scalability as the fundamental bottleneck facing blockchains like Bitcoin and Ethereum, explaining why low transactions-per-second (TPS) limits how many people can use a decentralized network compared to centralized services like AWS. The hosts (Mehdi and Hamid) detail why blockchains must impose block-size and gas limits, tracing them to three node constraints—computation (verification, UTXOs, Ethereum's smart-contract state and Turing-complete EVM), storage (chainstate vs. state databases, Merkle trees), and bandwidth (gossip protocol propagation, block-size wars)—and stress the importance of keeping node syncing (including Ethereum's fast sync) feasible so new validators can join without centralizing the network or being vulnerable to DoS attacks. Central to the discussion is Vitalik Buterin's blockchain trilemma, the trade-off between decentralization, security, and scalability, illustrated with examples such as BNB Smart Chain and Solana sacrificing decentralization for higher TPS, and Lightning Network sacrificing data availability (and thus security) for off-chain scaling. The episode frames data availability, custodial risk, and self-custody (private keys and mnemonic seed phrases) as security concerns, and points to advances in cryptography—zero-knowledge proofs and the Mina Protocol's recursive proofs—as the only genuine way to push past the trilemma's limits. It then surveys Layer 1 scaling solutions, contrasting the flawed approach of increasing block size (referencing the Bitcoin block-size war) with optimization via SegWit (segregating signatures into a separate Merkle tree) and sharding (Ethereum 2.0's 64 shards plus a beacon chain, along with Cardano's CCL and Polkadot's parachains using XCMP cross-chain messaging). Setting up the season ahead, the hosts outline three broad categories of scaling—Layer 1 blockchain-logic changes, Layer 1 consensus changes, and Layer 2 solutions—while touching on account abstraction (EIP-3074), EIP-1559's elastic block size, and composability challenges to be explored in future episodes.

</details>
<!--en-summary-->

## توضیحات اپیزود

گفت‌وگو با یک تعریف کلی از مقیاس‌پذیری آغاز می‌شود؛ درست مانند استارتاپ‌ها که موفقیتشان به توانایی اسکیل کردن گره خورده است. اسکیل کردن یعنی بتوانیم همان کیفیت مطلوب سرویس را با حداقل تغییر به تعداد بسیار بزرگ‌تری از کاربران ارائه دهیم، بدون آنکه با اضافه شدن یک کاربر مجبور به تغییر کل سیستم یا تحمل هزینه‌ی گزاف شویم. در بلاکچین هم دقیقاً همین دغدغه وجود دارد: ما شبکه‌هایی می‌خواهیم که تعداد افراد بسیار زیادی بتوانند همزمان با آن‌ها کار کنند، حال آنکه بیت‌کوین و اتریوم در تعداد تراکنش بر ثانیه محدودند و به همین دلیل هنوز اسکیلیبل نیستند.

محور اصلی بحث این است که چرا ما اساساً مجبوریم بلاکچین را محدود کنیم؛ برخلاف سرویس‌هایی مانند AWS که چنین مشکلی ندارند. مهدی سه دلیل بنیادی برای این محدودیت‌ها را که همگی از جنس محدودیت‌های نودها هستند تشریح می‌کند: محاسبات (Computation)، ذخیره‌سازی (Storage) و پهنای باند (Bandwidth). چون تک‌تک نودها باید تراکنش‌ها را وریفای، محاسبه و ذخیره کنند و بلاک‌ها را در شبکه پروپاگیت کنند، اگر بار سیستم بیش از اندازه بالا برود، نودها از شبکه بیرون می‌افتند و به‌ویژه فرایند سینک شدن یک نود جدید ــ که باید بلاک‌های قبلی را بگیرد و وریفای کند ــ به شدت دشوار می‌شود. همین‌جا تفاوت طراحی بیت‌کوین (که محدودیتش از جنس بلاک سایز است) و اتریوم (که به‌خاطر [قراردادهای هوشمند](https://shiryakhat.net/2017/02/ethereum.html) و استیت، هم محاسبات و هم استوریج سنگین دارد) روشن می‌شود.

سپس به چارچوب فکری کلیدی این حوزه می‌رسیم: مثلث سه‌گانه‌ی بلاکچین یا Blockchain Trilemma که ویتالیک مطرح کرده و می‌گوید ما همیشه بین عدم تمرکز (Decentralization)، امنیت (Security) و مقیاس‌پذیری (Scalability) در حال ترید-آف هستیم. مجری‌ها تأکید می‌کنند که این مثلث را باید در کانتکست هر شبکه و با توجه به فانکشنالیتی آن سنجید و مثلاً نمی‌توان بیت‌کوین را با اتریوم مقایسه کرد. در پایان، دسته‌بندی سه‌گانه‌ی راه‌حل‌های مقیاس‌پذیری معرفی و اولین دسته به‌طور کامل باز می‌شود؛ ادامه‌ی راه‌حل‌ها به قسمت بعد موکول می‌شود.

## نکات اصلی بحث‌شده

### مقیاس‌پذیری چیست و چرا مهم است؟

* اسکیل کردن یعنی ارائه‌ی همان کیفیت مطلوب سرویس به تعداد بسیار بزرگ‌تری از کاربران، بدون تغییر کل سیستم یا هزینه‌ی گزاف با هر کاربر جدید.
* در بلاکچین‌ها معیار اصلی، تعداد تراکنش بر ثانیه (TPS) است و بیت‌کوین و اتریوم در این معیار محدودند.
* هدف، افزایش TPS در همان حجم ثابت و همان محدودیت‌هاست، بدون آنکه به مرکزی شدن (سنترال شدن) منجر شود.

### سه محدودیت اصلی نودها

* **محدودیت محاسباتی (Computation):** تک‌تک نودها باید تراکنش‌ها را وریفای و محاسبه کنند؛ در بیت‌کوین این بار سبک است (خرج شدن UTXOها)، اما در اتریوم به‌خاطر قراردادهای هوشمند بسیار سنگین است.
* **محدودیت حجم بلاکچین (Storage):** نودها باید تمام دیتا را ذخیره کنند؛ نباید بگذاریم حجم بلاکچین به‌صورت نمایی رشد کند وگرنه نودها از شبکه خارج می‌شوند.
* **محدودیت پهنای باند (Bandwidth):** بلاک‌ها و تراکنش‌ها باید به‌صورت پی‌تو‌پی در شبکه پخش (پروپاگیت) شوند؛ بلاک‌های بزرگ در بازه‌ی زمانی کوتاه در بسیاری از نقاط دنیا قابل جابه‌جایی نیستند.
* نکته‌ی مهم: نود در حالت عادی باید تنها حدود ۱۰ تا ۱۵ درصد CPU مصرف کند تا در زمان سینک شدن یا حمله‌ی DoS دچار اورلود نشود؛ در بلاکچین «ری‌استارت» وجود ندارد (نمونه‌اش ری‌استارت‌های سولانا که یعنی فدا کردن عدم تمرکز).

### تفاوت طراحی بیت‌کوین و اتریوم

* بیت‌کوین ترجیح داده یک سیستم آرام و بدون مشکل داشته باشد و لایه‌های بالاتر را ولو مرکزی روی آن بسازد.
* اتریوم از ابتدا کامپیوتیشن قراردادهای هوشمند را در لایه‌ی اصلی قرار داده و به همین دلیل مقداری از عدم تمرکز را فدا کرده تا لایه‌ی محاسبات را داشته باشد.
* در بیت‌کوین از مدل قدیمی (سقف یک مگابایت) به سگویت رسیدیم و امروز حجم بلاک تقریباً چهار مگابایت است؛ در اتریوم پس از [EIP-1559](https://shiryakhat.net/2021/08/eip-1559-let-it-burn.html) مدل الاستیک بلاک سایز اضافه شد (پیش‌تر سقف ۱۵ میلیون گس بود).
* فست‌سینک در اتریوم استیت را از نود دیگری می‌گیرد و هدرها را چک می‌کند؛ برخی بیت‌کوینرها به آن ایراد می‌گیرند، اما مانند اتفاق پس از سگویت، وریفیکیشن به شکل غیرمستقیم انجام می‌شود.

### مثلث سه‌گانه‌ی بلاکچین (Trilemma)

* سه رأس مثلث: عدم تمرکز (Decentralization)، امنیت (Security) و مقیاس‌پذیری (Scalability)؛ افزایش یکی معمولاً به فدا شدن یکی یا دو تای دیگر می‌انجامد.
* این مثلث درباره‌ی فیچر و فانکشنالیتی حرفی نمی‌زند؛ پس نباید بیت‌کوین (فانکشنالیتی محدود) را با اتریوم (زبان تقریباً تورینگ کامل) در آن مقایسه کرد ــ مثل مقایسه‌ی گلابی با سیب‌زمینی.
* مثال‌ها: سولانا عدم تمرکز و امنیت را برای مقیاس‌پذیری فدا می‌کند؛ فدا کردن دیتا اویلیبیلیتی (مثل نگه‌داری پول توسط خود فرد یا اکسچنج) معادل فدا کردن امنیت است و در بلندمدت به مرکزی شدن ختم می‌شود.
* تنها گیم‌چنجری که می‌تواند این مثلث را جابه‌جا کند، پیشرفت‌های بنیادی ریاضی و رمزنگاری است؛ مانند زیرو نالج پروف. به عنوان نمونه به مینا پروتکل (Mina) که با زیرو نالج پروف حجم دیتا را کم می‌کند و [به لایتنینگ اشاره شد](https://shiryakhat.net/2021/12/Lightning-Make-Bitcoin-Scalable-1.html).

### دسته‌بندی راه‌حل‌های مقیاس‌پذیری

* **راه‌حل‌های لایه‌ی اول در سطح منطق بلاکچین** — تغییر خود منطق بلاکچین برای اسکیلیبل‌تر شدن.
* **راه‌حل‌های لایه‌ی اول در سطح اجماع (Consensus)** — که در قسمت بعد بررسی می‌شود.
* **راه‌حل‌های لایه‌ی دوم (Layer 2).**

### افزایش سایز بلاک؛ چرا راه‌حل خوبی نیست

* ساده‌ترین ایده افزایش سایز بلاک (یا بلاک گس لیمیت در اتریوم) است، اما به مرکزی شدن منجر می‌شود.
* استوریج مورد نیاز به‌صورت نمایی گران می‌شود، کامپیوتیشن بالا می‌رود و سینک شدن نودهای جدید به شدت سخت می‌شود؛ ضمن اینکه پروپاگیت بلاک‌های بزرگ شبکه را ناپایدار و دچار فورک می‌کند.
* این راه‌حل واقعاً مقیاس‌پذیری نیست: با هر تعداد کاربر جدید باز باید بلاک را بزرگ‌تر کرد. تاریخچه‌ی این دعوا در [بلاک سایز وار و هارد فورک بیت‌کوین در ۲۰۱۷](https://shiryakhat.net/2017/04/bitcoin-fork-blocksize-debate.html) مفصل است.

### بهینه‌سازی و سگویت (SegWit)

* به‌جای بزرگ کردن بلاک، از محدودیت‌های موجود بهینه‌تر استفاده می‌کنیم؛ [سگویت سیگنیچرها را از تراکنش جدا کرد](https://shiryakhat.net/2017/07/segwit-august1st-bip148.html).
* سیگنیچرها با رابطه‌ی یک‌به‌یک با تراکنش‌ها چیده شده و مرکل روت آن‌ها داخل کوین‌بیس ترنزکشن قرار می‌گیرد؛ در نتیجه حجم تراکنش‌ها کمتر و تراکنش‌های بیشتری در همان محدودیت جا می‌شود.
* به همین دلیل استفاده از آدرس سگویت کارمزد (فی) کمتری دارد؛ نودهای پست‌سگویت تا حدود چهار مگابایت داده جا می‌دهند و این تغییر به شکل سافت‌فورک انجام شد.

### [شاردینگ](https://shiryakhat.net/2024/02/ethereum-dencun-upgrade.html) (Sharding)

* روش اصلی مقیاس‌پذیری در اتریوم ۲؛ مانند تقسیم یک بلاکچین به مثلاً ۶۴ بلاکچین کنار هم که یک بیکن چین بر آن‌ها مسلط است و آن‌ها را هماهنگ می‌کند.
* مشکل کلیدی، کامپوزیبلیتی (Composability) است؛ ارتباط بین شاردهای مختلف باید حل شود و اتریوم فاندیشن به‌شدت روی آن کار می‌کند.
* شاردینگ مقداری عدم تمرکز را فدا می‌کند؛ پرسش فلسفی این است که چند شارد داشته باشیم و تا کجا این ترید-آف را بپذیریم.
* نمونه‌های پیاده‌سازی همین کانسپت: کاردانو (لایه‌ی محاسباتی CCL) و پولکادات (پاراچین‌ها که با پروتکل‌های XMP با هم در ارتباط‌اند)؛ در اتریوم ۲ نیز انواع XMP در دست بررسی است.

### نتیجه‌گیری

ما مجبوریم بلاکچین را از سه جنس استوریج، کامپیوتیشن و پهنای باند محدود کنیم تا بلاکچین باقی بماند، و این محدودیت مستقیماً از مثلث سه‌گانه‌ی عدم تمرکز، امنیت و مقیاس‌پذیری ناشی می‌شود. بلاکچین‌های مختلف نقاط متفاوتی از این طیف را بر اساس فانکشنالیتی و نیازشان انتخاب می‌کنند و وجود این تنوع ــ به‌جای نگاه صفر و یکی به عدم تمرکز ــ برای آینده‌ی این حوزه ارزشمند است؛ اشتباه آنجاست که پروژه‌ها خود را غیرمتمرکزتر از آنچه هستند بازاریابی می‌کنند. سه دسته راه‌حل مقیاس‌پذیری معرفی شد و اولین دسته (لایه‌ی اول در منطق بلاکچین) با سه روش افزایش سایز بلاک، بهینه‌سازی و شاردینگ باز شد؛ راه‌حل‌های لایه‌ی اجماع و لایه‌ی دوم به قسمت‌های بعدی همین فصل موکول می‌شود.

**لینک های این اپیزود:**

* [کتاب درباره مسئله بلاک سایز در بیت‌کوین](https://bitcoind.me/blobs/books/tarikhcheye-uasf-bitcoind_me.pdf): https://bitcoind.me/blobs/books/tarikhcheye-uasf-bitcoind_me.pdf

* [رشته توییت حمید و مقاله مهدی درباره state اتریوم](https://twitter.com/newbateni2/status/1390552706906038275?s=20): https://twitter.com/newbateni2/status/1390552706906038275?s=20

* [حافظه‌ی (Storage) قرارداد های هوشمند اتریوم](https://smartcontract.coiniran.com/t/storage/194) : https://smartcontract.coiniran.com/t/storage/194

* سایت [ethresearch](http://ethresear.ch) : http://ethresear.ch

### قسمت‌های مرتبط

- [مقیاس‌پذیری - قسمت ۲](https://shiryakhat.net/2021/11/scalability-blockchain-bottleneck-2.html) — ادامه‌ی مستقیم همین بحث؛ راهکارهای لایه اجماع و لایه دوم که در پایان این اپیزود وعده داده شد.
- [EIP-1559 و ساختار فی](https://shiryakhat.net/2021/08/eip-1559-let-it-burn.html) — در اپیزود به‌صراحت به آن ارجاع می‌دهند؛ مبنای بحث گس‌لیمیت و محدودیت بلاک اتریوم.
- [سگویت و لایتنینگ](https://shiryakhat.net/2019/08/lightning-segwit.html) — سگویت به‌عنوان راهکار بهینه‌سازی و لایتنینگ به‌عنوان لایه دوم، هر دو در این اپیزود بررسی شدند.
- [فورک و بحث بلاک‌سایز](https://shiryakhat.net/2017/04/bitcoin-fork-blocksize-debate.html) — جنگ بلاک‌سایز و افزایش سایز بلاک به‌عنوان اولین راهکار مقیاس‌پذیری در همین اپیزود مطرح شد.
- [لایتنینگ راهکار مقیاس‌پذیری](https://shiryakhat.net/2021/12/Lightning-Make-Bitcoin-Scalable-1.html) — همان راهکار لایه دومی که در اپیزود به‌عنوان دسته سوم مقیاس‌پذیری معرفی شد.
- [سگویت و BIP148](https://shiryakhat.net/2017/07/segwit-august1st-bip148.html) — محدودیت حجم بلاک و سگویت که در بحث بهینه‌سازی و چهار مگابایت شدن بلاک بیت‌کوین اشاره شد.

### زمان‌بندی فصل‌ها

- 00:00 مقیاس‌پذیری چیست؟ چرا مقیاس‌پذیری مهم است؟
- 04:40 چرا در بلاکچین‌ها مشکل مقیاس‌پذیری داریم؟
- 23:40 مثلث سه‌گانه بلاکچین‌ها یا blockchain Trilemma
- 36:15 دسته‌بندی راه‌حل‌های مقیاس‌پذیری
- 38:30 افزایش سایز بلاک ساده‌ترین راه‌حل مقیاس پذیری
- 44:00 بهینه‌سازی در استفاده از محدودیت‌های تعریف شده در بلاکچین‌ها
- 49:17 شاردینگ و مشکلات آن
