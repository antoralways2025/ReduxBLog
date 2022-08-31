let INITIAL_STATE = [
	{
		author: 'vovatb',
		categories: ['article', 'cat'],
		title: 'Facts About Our Favorite Little Overlords  - Cats (20 GIFS)',
		description: 'Facts About Our Favorite Little Overlords  - Cats  (20 GIFS)',
		img: 'https://img.izismile.com/img/img14/20220820/640/facts_about_our_favorite_little_overlords_cats_640_21.jpg',
		publishedAt: '2022-08-20T16:07:46Z',
		content:
			'In 2013, a cat ran for a mayor in Mexico. If you die in your apartment alone, your cat will probably try to eat you. According to a Cornell University study, between 65 to 85 percent of white cats … [+1636 chars]',
	},
	{
		author: 'irishman',
		categories: ['covid19'],
		title: 'China just ran into something that could be even more devastating for its supply chains than COVID-19 lockdowns: A record heat wave',
		description:
			'China has been coping with its worst heat wave in 60 years this month. The country is facing another major threat—and this one could be even worse for the economy. The heat wave is expected to... #automanufacturers #sichuan #foxconn #manufacturingpowerhouse #…',
		img: 'https://cdn.biztoc.com/og/irtsapup.jpg',
		publishedAt: '2022-08-20T15:53:41Z',
		content:
			'China has been coping with its worst heat wave in 60 years this month. The country is facing another major threatand this one could be even worse for the economy. The heat wave is expected to last un… [+1332 chars]',
	},
	{
		author: 'Max Gottlich',
		categories: ['finance', 'article'],
		title: 'Hedge funds, financial markets recover in July after challenging first half - report',
		description:
			'After a tough first half of 2022, hedge funds and financial markets rebounded in July signaling that investors&amp;#39; risk appetite has widened, according to a monthly report by...',
		img: 'https://static.seekingalpha.com/cdn/s3/uploads/getty_images/1333810802/image_1333810802.jpg?io=getty-c-w750',
		publishedAt: '2022-08-20T15:39:00Z',
		content:
			"Galeanu Mihai After a tough first half of 2022, hedge funds and financial markets rebounded in July signaling that investors' risk appetite has widened, according to a monthly report by PivotalPath,… [+1504 chars]",
	},
	{
		author: 'vovatb',
		categories: ['technology', 'programming'],
		title: "Tesla's in-house supercomputer is something special - but the next will be even better",
		description: 'Tesla has added 1,600 GPUs to its flagship supercomputer.',
		img: 'https://cdn.mos.cms.futurecdn.net/XBZBxbuMHoHZsPHfA6NZtU-1200-80.jpg',
		publishedAt: '2022-08-20T15:17:26Z',
		content:
			"Tesla's in-house supercomputer has received an additional 1,600 GPUs, a 28% increase on the figure quoted a year ago. Tesla Engineering Manager Tim Zaman claims this would place the machine 7th in t… [+1689 chars]",
	},
	{
		author: 'irishman',
		categories: ['covid19', 'technology'],
		title: 'Squashed like a bug”: Distressed-bond manager makes a multibillion-dollar options bet against Tesla',
		description:
			'Scott Burg, the chief investment officer of Deer Park Road Management Co, bought put options on almost 4.8 million Tesla shares during the second quarter. The shares covered by the puts had a face... #barron #deerpark #shanghaideerpark #marketrout #scottburg …',
		img: 'https://cdn.biztoc.com/og/jq79kcp8.jpg',
		publishedAt: '2022-08-20T15:07:36Z',
		content:
			'Scott Burg, the chief investment officer of Deer Park Road Management Co, bought put options on almost 4.8 million Tesla shares during the second quarter. The shares covered by the puts had a face va… [+1327 chars]',
	},
	{
		author: 'Guest Contributor',
		categories: ['technology', 'programming'],
		title: 'Buzz Builds Over Rivian Truck Giveaway. Fans of R1T Hunt Limited Tickets. Proceeds Support Climate Work!',
		description:
			'Fewer than 1500 tickets left, says nonprofit. Raffle winner can choose Rivian or Tesla Model S Plaid. Incredible odds!',
		img: 'https://cleantechnica.com/files/2022/08/CCAN-AF-Headline-Image_Sponsored-8.20_JOEDIT1.png',
		publishedAt: '2022-08-20T13:00:39Z',
		content:
			'Buzz continues to grow among Rivian truck fans as a first-of-its-kind raffle winds down in less than three weeks. The Rivian R1T Launch Edition truck is one of the most sought after and hard-to-find … [+5786 chars]',
	},
	{
		author: 'Lws',
		categories: ['finance', 'article'],
		title: 'There Are More Public Charging Stations Than Ever, But That’s Still Not Enough, Study Finds',
		description: 'Charging stations are too unreliable, too few, and too far between, according to J.D. Power.',
		img: 'https://www.carscoops.com/wp-content/uploads/2022/08/Electrify-America-.jpg',
		publishedAt: '2022-08-20T12:19:39Z',
		content:
			'Despite the fact that there are more public charging stations than ever around the U.S., a recent boom in electric vehicle sales means that’s still not enough. That’s according to J.D. Power’s newly … [+2767 chars]',
	},
	{
		author: 'MarketWatch',
		categories: ['covid19'],
		title: 'These money and investing tips can help you stay cool as stocks wilt in the August heat',
		description: 'Money and investing stories popular with MarketWatch readers over the past week.',
		img: 'https://images.mktw.net/im-313557/social',
		publishedAt: '2022-08-20T12:18:00Z',
		content:
			'Sign up here to get MarketWatchs best mutual funds and ETF stories emailed to you weekly!Learn how to shake up your financial routine at MarketWatchs Best New Ideas in Money Festival on Sept. 21 and … [+3979 chars]',
	},
	{
		author: 'Lws',
		categories: ['finance', 'programming'],
		title: "Column: We're in a climate crisis and I want to buy a fully electric car. It shouldn't be this hard",
		description: "My Kia is partly electric, but half measures aren't good enough in this climate emergency.",
		img: 'https://ca-times.brightspotcdn.com/dims4/default/7a6f725/2147483647/strip/true/crop/3864x2029+0+434/resize/1200x630!/quality/90/?url=https%3A%2F%2Fcalifornia-times-brightspot.s3.amazonaws.com%2F17%2F20%2F8f6f43dc4057a7ae6fac5b25000c%2Fla-me-lpez-plug-in-vehicles.JPG',
		publishedAt: '2022-08-20T12:00:42Z',
		content:
			'A year and a half ago, my conscience got to me, so I went shopping for an electric car. Id written about why Los Angeles now has more humidity and mosquitoes, why Joshua trees are dying, why juvenil… [+6813 chars]',
	},
	{
		author: 'Brian Cooley',
		categories: ['car', 'article'],
		title: "New DeLorean Unveiled and Here's Our First Look - CNET",
		description:
			'The Delorean Alpha5 is electric, curvaceous and up against a tidal wave of new electric luxury cars.',
		img: 'https://www.cnet.com/a/img/resize/9e7c322031a17342df919703235eb1a548e6179c/2022/08/20/2cac788c-8161-4b8e-9795-1725b6027a6e/dlo7.jpg?auto=webp&fit=crop&height=630&width=1200',
		publishedAt: '2022-08-20T12:00:41Z',
		content:
			"The DeLorean is back from the future but also from the past in the brand's first true relaunch since its heady, infamous days in the early 80s. After getting a close look at a prototype of the new Al… [+5113 chars]",
	},
	{
		author: 'MarketWatch',
		categories: ['technology', 'programming'],
		title: 'XLY: Consumer Discretionary Dashboard For August',
		description:
			'The durables and apparel subsector is undervalued by about 20% relative to 11-year averages. Auto and components are the less attractive subsector regarding valuation and quality metrics.',
		img: 'https://static.seekingalpha.com/cdn/s3/uploads/getty_images/1049592142/image_1049592142.jpg?io=getty-c-w750',
		publishedAt: '2022-08-20T12:00:00Z',
		content:
			'Julien Viry/iStock Editorial via Getty Images This monthly article series shows a dashboard with aggregate subsector metrics in Consumer Discretionary. It is also a top-down analysis of sector excha… [+10246 chars]',
	},
	{
		author: 'Lws',
		categories: ['covid19', 'programming'],
		title: 'Wall Street Breakfast: What Moved Markets',
		description:
			'Listen on the go! A daily podcast of Wall Street Breakfast will be available this morning on Seeking Alpha, iTunes, Stitcher and Spotify.',
		img: 'https://static.seekingalpha.com/assets/og_image_1200-29b2bfe1a595477db6826bd2126c63ac2091efb7ec76347a8e7f81ba17e3de6c.png',
		publishedAt: '2022-08-20T11:40:37Z',
		content:
			"Listen on the go! A daily podcast of Wall Street Breakfast will be available this morning on Seeking Alpha, iTunes, Stitcher and Spotify. The stock market's four-week winning streak came to an end, … [+12395 chars]",
	},
	{
		author: 'irishman',
		categories: ['technology', 'computer'],
		title: '‘$300,000 In Six Years’—Donald Trump’s Former Comms Director Reveals The Ethereum Rival He’s Backing And A Bold Bitcoin Price Prediction',
		description:
			'Anthony Scaramucci has predicted the bitcoin price could hit $300,000 in just six years and revealed the ethereum challenger he has "a very large position" in...',
		img: 'https://imageio.forbes.com/specials-images/imageserve/63009fe39bde6226825f25e8/0x0.jpg?format=jpg&width=1200',
		publishedAt: '2022-08-20T11:15:17Z',
		content:
			"BitcoinBTC , ethereum and other cryptocurrencies are struggling to break out of a slump that's tanked markets and sparked serious collapse warnings.  The bitcoin price has dropped more than 10% thi… [+4538 chars]",
	},
	{
		author: 'Paula Beaton',
		categories: ['technology', 'car'],
		title: 'The Weekly Authority:  Pixels pick up stable Android 13',
		description:
			"Stable Android 13 drops for Pixels, Samsung's worries, Dead Island 2 news, the mystery of Roanoke, and more top tech news.",
		img: 'https://www.androidauthority.com/wp-content/uploads/2022/06/Android-13-Easter-Egg.jpg',
		publishedAt: '2022-08-20T11:12:59Z',
		content:
			'Welcome to The Weekly Authority, the Android Authority newsletter that breaks down the top Android and tech news from the week. The 208th edition here, with the arrival of Android 13 for Pixels, Dead… [+9533 chars]',
	},
	{
		author: 'Michael Wayland',
		categories: ['technology', 'computer'],
		title: 'Motor City meets a new test in the EV transition: Keeping gearheads behind the wheel',
		description:
			'The Detroit automakers are going to have to balance traditional muscle car performance with electrification to maintain their most loyal buyers and fans.',
		img: 'https://image.cnbcfm.com/api/v1/image/107106695-1660929724718-Dodge_couple.jpg?v=1660934642&w=1920&h=1080',
		publishedAt: '2022-08-20T11:00:01Z',
		content:
			"Dodge CEO Tim Kuniskis unveils the Charger Daytona SRT electric muscle car concept on Aug. 17, 2022 in Pontiac, Mich.   PONTIAC, Mich. At an event featuring headbanging '80s music and $2 beers this … [+7308 chars]",
	},
	{
		author: 'Will Daniel',
		categories: ['car', 'programming'],
		title: 'China just ran into something that could be even more devastating for its supply chains than COVID-19 lockdowns: A record heat wave',
		description:
			'“These shutdowns have the potential to be equally if not more impactful on supply chains than recent Covid lockdowns,” said Mirko Woitzik, the global director of intelligence solutions for Everstream Analytics, a supply chain insights and risk analytics compa…',
		img: 'https://content.fortune.com/wp-content/uploads/2022/08/China-Heatwave-Disruption.webp?resize=1200,600',
		publishedAt: '2022-08-20T11:00:00Z',
		content:
			'COVID-19 lockdowns in China threw a wrench into global supply chains earlier this year, causing shipping and production delays worldwide, and hindering economic growth.Now, the country is facing anot… [+6305 chars]',
	},
];



 export default INITIAL_STATE