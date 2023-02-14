
const politicians = [
    {
        name: "Alex Padilla",
        location: "California",
        url: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Alex_Padilla_117th_Congress_portrait.jpg/1280px-Alex_Padilla_117th_Congress_portrait.jpg"
    },
    {
        name: "Amy Klobuchar",
        location: "Minnesota",
        url: "https://upload.wikimedia.org/wikipedia/commons/3/3b/Amy_Klobuchar%2C_official_portrait%2C_113th_Congress_%28cropped%29.jpg"
    },
    {
        name: "Angus King",
        location: "Maine",
        url: "https://upload.wikimedia.org/wikipedia/commons/e/e9/Angus_King%2C_official_portrait%2C_113th_Congress_%28cropped%29.jpg"
    },
    {
        name: "Ben Cardin",
        location: "Maryland",
        url: "https://upload.wikimedia.org/wikipedia/commons/e/e5/Ben_Cardin_official_Senate_portrait_%28cropped%29.jpg"
    },
    {
        name: "Ben Ray Lujan",
        location: "New Mexico",
        url: "https://upload.wikimedia.org/wikipedia/commons/d/d5/Ben_Ray_Lujan%2C_117th_Congress_portrait_2_%28cropped%29.jpg"
    },
    {
        name: "Pete Ricketts",
        location: "Nebraska",
        url: "https://upload.wikimedia.org/wikipedia/commons/6/64/Pete_Ricketts_by_Gage_Skidmore_%28cropped_2%29.jpg"
    },
    {
        name: "Bernie Sanders",
        location: "Vermont",
        url: "https://upload.wikimedia.org/wikipedia/commons/7/73/Bernie_Sanders_%28cropped%29.jpg"
    },
    {
        name: "Bill Cassidy",
        location: "Louisiana",
        url: "https://upload.wikimedia.org/wikipedia/commons/f/f6/Bill_Cassidy_official_Senate_photo_%28cropped%29.jpg"
    },
    {
        name: "Bill Hagerty",
        location: "Tennessee",
        url: "https://upload.wikimedia.org/wikipedia/commons/3/3a/Sen._Bill_Hagerty_official_Senate_portrait%2C_117th_Congress_%28cropped%29.jpg"
    },
    {
        name: "Bob Casey Jr",
        location: "Pennsylvania",
        url: "https://upload.wikimedia.org/wikipedia/commons/6/6d/Bob_Casey_Jr._official_photo_%28cropped%29.jpg"
    },
    {
        name: "Brian Schatz",
        location: "Hawaii",
        url: "https://upload.wikimedia.org/wikipedia/commons/4/4b/Brian_Schatz%2C_official_portrait%2C_113th_Congress_2_%28cropped%29.jpg"
    },
    {
        name: "Catherine Cortez Masto",
        location: "Nevada",
        url: "https://upload.wikimedia.org/wikipedia/commons/e/e7/Catherine_Cortez_Masto_official_portrait_%28cropped%29.jpg"
    },
    {
        name: "Chris Coons",
        location: "Delaware",
        url: "https://upload.wikimedia.org/wikipedia/commons/9/99/Chris_Coons%2C_official_portrait%2C_112th_Congress_%28cropped%29.jpg"
    },
    {
        name: "Chris Murphy",
        location: "Connecticut",
        url: "https://upload.wikimedia.org/wikipedia/commons/4/47/Chris_Murphy%2C_official_portrait%2C_113th_Congress_%28cropped%29.jpg"
    },
    {
        name: "Chris Van Hollen",
        location: "Maryland",
        url: "https://upload.wikimedia.org/wikipedia/commons/3/37/Chris_Van_Hollen_official_portrait_115th_Congress_%28cropped%29.jpg"
    },
    {
        name: "Chuck Grassley",
        location: "Iowa",
        url: "https://upload.wikimedia.org/wikipedia/commons/1/1c/Chuck_Grassley_official_photo_2017_%28cropped%29.jpg"
    },
    {
        name: "Chuck Schumer",
        location: "New York",
        url: "https://upload.wikimedia.org/wikipedia/commons/3/3b/Chuck_Schumer_official_photo_%28cropped%29.jpg"
    },
    {
        name: "Cindy Hyde Smith",
        location: "Mississippi",
        url: "https://upload.wikimedia.org/wikipedia/commons/5/52/Official_headshot_of_US_Senator_Cindy_Hyde-Smith.jpg"
    },
    {
        name: "Cory Booker",
        location: "New Jersey",
        url: "https://upload.wikimedia.org/wikipedia/commons/5/59/Cory_Booker%2C_official_portrait%2C_114th_Congress.jpg"
    },
    {
        name: "Cynthia Lummis",
        location: "Wyoming",
        url: "https://upload.wikimedia.org/wikipedia/commons/c/cb/Cynthia_Lummis_U.S._Senator_%28cropped%29.jpg"
    },
    {
        name: "Dan Sullivan",
        location: "Alaska",
        url: "https://upload.wikimedia.org/wikipedia/commons/0/0e/Senator_Dan_Sullivan_official_%28cropped%29.jpg"
    },
    {
        name: "Deb Fischer",
        location: "Nebraska",
        url: "https://upload.wikimedia.org/wikipedia/commons/0/0b/Deb_Fischer%2C_official_portrait%2C_115th_Congress_%28cropped%29.jpg",
    },
    {
        name: "Debbie Stabenow",
        location: "Michigan",
        url: "https://upload.wikimedia.org/wikipedia/commons/6/61/Debbie_Stabenow%2C_official_photo%2C_116th_Congress_%28cropped%29.jpg"
    },
    {
        name: "Dianne Feinstein",
        location: "California",
        url: "https://upload.wikimedia.org/wikipedia/commons/1/10/Dianne_Feinstein%2C_official_Senate_photo_2_%28cropped%29.jpg"
    },
    {
        name: "Dick Durbin",
        location: "Illinois",
        url: "https://upload.wikimedia.org/wikipedia/commons/3/39/Dick_Durbin_October_2017_%28cropped%29_1.jpg"
    },
    {
        name: "Edward Markey",
        location: "Massachusetts",
        url: "https://upload.wikimedia.org/wikipedia/commons/5/58/Edward_Markey%2C_official_portrait%2C_114th_Congress_%28cropped%29.jpg"
    },
    {
        name: "Elizabeth Warren",
        location: "Massachusetts",
        url: "https://upload.wikimedia.org/wikipedia/commons/7/74/Elizabeth_Warren--2016_Official_Portrait--%28cropped%29.jpg"
    },
    {
        name: "Gary Peters",
        location: "Michigan",
        url: "https://upload.wikimedia.org/wikipedia/commons/9/98/Gary_Peters_official_photo_115th_congress_%28cropped%29.jpg"
    },
    {
        name: "Jack Reed",
        location: "Rhode Island",
        url: "https://upload.wikimedia.org/wikipedia/commons/1/14/Senator_Jack_Reed_official_photo_%28cropped%29.jpg"
    },
    {
        name: "Jacky Rosen",
        location: "Nevada",
        url: "https://upload.wikimedia.org/wikipedia/commons/2/28/Jacky_Rosen%2C_official_portrait%2C_116th_congress_%28cropped-1%29.jpg"
    },
    {
        name: "James Lankford",
        location: "Oklahoma",
        url: "https://upload.wikimedia.org/wikipedia/commons/5/5f/James_Lankford_official_Senate_photo_%28cropped%29.jpg"
    },
    {
        name: "Jeanne Shaheen",
        location: "New Hampshire",
        url: "https://upload.wikimedia.org/wikipedia/commons/2/21/Jeanne_Shaheen%2C_official_Senate_photo_portrait%2C_2009_%28cropped%29.jpg"
    },
    {
        name: "Jeff Merkley",
        location: "Oregon",
        url: "https://upload.wikimedia.org/wikipedia/commons/e/ee/Jeff_Merkley%2C_115th_official_photo_%28cropped%29.jpg"
    },
    {
        name: "Jerry Moran",
        location: "Kansas",
        url: "https://upload.wikimedia.org/wikipedia/commons/d/d9/Jerry_Moran%2C_official_portrait%2C_112th_Congress_%28cropped%29.jpg"
    },
    {
        name: "Markwayne Mullin",
        location: "Oklahoma",
        url: "https://upload.wikimedia.org/wikipedia/commons/b/b0/Markwayne_Mullin_official_Senate_photo_%28cropped%29.jpg"
    },
    {
        name: "Jim Risch",
        location: "Idaho",
        url: "https://upload.wikimedia.org/wikipedia/commons/e/e5/Jim_Risch_official_portrait_%28cropped%29.jpg"
    },
    {
        name: "Joe Manchin",
        location: "West Virginia",
        url: "https://upload.wikimedia.org/wikipedia/commons/c/cc/Senator_Manchin_%28cropped%29.jpg"
    },
    {
        name: "John Barrasso",
        location: "Wyoming",
        url: "https://upload.wikimedia.org/wikipedia/commons/4/42/John_Barrasso_official_portrait_112th_Congress_%28cropped%29.jpg"
    },
    {
        name: "John Boozman",
        location: "Arkansas",
        url: "https://upload.wikimedia.org/wikipedia/commons/4/48/Senator_John_Boozman_Official_Portrait_%28115th_Congress%29_%28cropped%29.jpg"
    },
    {
        name: "John Cornyn",
        location: "Texas",
        url: "https://upload.wikimedia.org/wikipedia/commons/e/e4/John_Cornyn_%28cropped%29.jpg"
    },
    {
        name: "John Hickenlooper",
        location: "Colorado",
        url: "https://upload.wikimedia.org/wikipedia/commons/d/db/John_Hickenlooper%2C_official_portrait%2C_117th_Congress_%28cropped%29.jpeg"
    },
    {
        name: "John Hoeven",
        location: "North Dakota",
        url: "https://upload.wikimedia.org/wikipedia/commons/7/75/Hoeven_Official_Portrait_2014_%28cropped%29.JPG"
    },
    {
        name: "John Kennedy",
        location: "Louisiana",
        url: "https://upload.wikimedia.org/wikipedia/commons/8/81/John_Neely_Kennedy%2C_official_portrait%2C_115th_Congress_2.jpg"
    },
    {
        name: "John Thune",
        location: "South Dakota",
        url: "https://upload.wikimedia.org/wikipedia/commons/f/f6/John_Thune_117th_Congress_portrait_%28cropped%29.jpg"
    },
    {
        name: "Jon Ossoff",
        location: "Georgia",
        url: "https://upload.wikimedia.org/wikipedia/commons/1/1f/Jon_Ossoff_Senate_Portrait_2021_%28cropped%29.jpg"
    },
    {
        name: "Jon Tester",
        location: "Montana",
        url: "https://upload.wikimedia.org/wikipedia/commons/b/b9/JonTester_%28cropped%29.jpg"
    },
    {
        name: "Joni Ernst",
        location: "Iowa",
        url: "https://upload.wikimedia.org/wikipedia/commons/7/74/Joni_Ernst%2C_official_portrait%2C_116th_Congress_3.jpg"
    },
    {
        name: "Josh Hawley",
        location: "Missouri",
        url: "https://upload.wikimedia.org/wikipedia/commons/5/5b/Josh_Hawley%2C_official_portrait%2C_116th_congress_%28cropped%29.jpg"
    },
    {
        name: "Kevin Cramer",
        location: "North Dakota",
        url: "https://upload.wikimedia.org/wikipedia/commons/f/ff/Kevin_Cramer%2C_official_portrait%2C_116th_congress_%28cropped%29.jpg"
    },
    {
        name: "Kirsten Gillibrand",
        location: "New York",
        url: "https://upload.wikimedia.org/wikipedia/commons/1/14/Kirsten_Gillibrand%2C_official_photo%2C_116th_Congress_%28cropped%29.jpg"
    },
    {
        name: "Kyrsten Sinema",
        location: "Arizona",
        url: "https://upload.wikimedia.org/wikipedia/commons/c/c8/Kyrsten_Sinema_%28cropped%29.jpg"
    },
    {
        name: "Lindsey Graham",
        location: "South Carolina",
        url: "https://upload.wikimedia.org/wikipedia/commons/0/0e/U.S._Senator_Lindsey_Graham%2C_Official_Photo%2C_113th_Congress_%28cropped%29.jpg"
    },
    {
        name: "Lisa Murkowski",
        location: "Alaska",
        url: "https://upload.wikimedia.org/wikipedia/commons/4/4b/Lisa_Murkowski_official_photo_%28cropped%29.jpg"
    },
    {
        name: "Maggie Hassan",
        location: "New Hampshire",
        url: "https://upload.wikimedia.org/wikipedia/commons/a/ae/Maggie_Hassan%2C_official_portrait%2C_115th_Congress_%28cropped%29.jpg"
    },
    {
        name: "Marco Rubio",
        location: "Florida",
        url: "https://upload.wikimedia.org/wikipedia/commons/c/c4/Senator_Rubio_official_portrait_%28cropped%29.jpg"
    },
    {
        name: "Maria Cantwell",
        location: "Washington",
        url: "https://upload.wikimedia.org/wikipedia/commons/8/8f/Maria_Cantwell_%28cropped%29.jpg"
    },
    {
        name: "Mark Kelly",
        location: "Arizona",
        url: "https://upload.wikimedia.org/wikipedia/commons/1/18/SenatorKellyOfficialPhoto_%28cropped2%29.jpg"
    },
    {
        name: "Mark Warner",
        location: "Virginia",
        url: "https://upload.wikimedia.org/wikipedia/commons/5/5e/Mark_Warner_113th_Congress_photo_%28cropped%29.jpg"
    },
    {
        name: "Marsha Blackburn",
        location: "Tennessee",
        url: "https://upload.wikimedia.org/wikipedia/commons/0/05/Marsha_Blackburn%2C_official_photo%2C_116th_Congress_%28cropped%29.jpg"
    },
    {
        name: "Martin Heinrich",
        location: "New Mexico",
        url: "https://upload.wikimedia.org/wikipedia/commons/6/6f/Heinrich_Official_Headshot_2019_%28cropped%29.jpg"
    },
    {
        name: "Mazie Hirono",
        location: "Hawaii",
        url: "https://upload.wikimedia.org/wikipedia/commons/8/85/Mazie_Hirono%2C_official_portrait%2C_113th_Congress_%28cropped%29.jpg"
    },
    {
        name: "Michael Bennet",
        location: "Colorado",
        url: "https://upload.wikimedia.org/wikipedia/commons/4/4d/Michael_Bennet_Official_Photo_%28cropped%29.jpg"
    },
    {
        name: "Mike Braun",
        location: "Indiana",
        url: "https://upload.wikimedia.org/wikipedia/commons/7/70/Mike_Braun%2C_Official_Portrait%2C_116th_Congress_%28cropped%29.jpg"
    },
    {
        name: "Mike Crapo",
        location: "Idaho",
        url: "https://upload.wikimedia.org/wikipedia/commons/3/33/Mike_Crapo_2019_%28cropped%29.jpg"
    },
    {
        name: "Mike Lee",
        location: "Utah",
        url: "https://upload.wikimedia.org/wikipedia/commons/4/46/Mike_Lee%2C_official_portrait_%28cropped%29.jpg"
    },
    {
        name: "Mike Rounds",
        location: "South Dakota",
        url: "https://upload.wikimedia.org/wikipedia/commons/4/41/Mike_Rounds_official_Senate_portrait_%28cropped%29.jpg"
    },
    {
        name: "Mitch McConnell",
        location: "Kentucky",
        url: "https://upload.wikimedia.org/wikipedia/commons/b/bb/Mitch_McConnell_portrait_2016.jpg"
    },
    {
        name: "Mitt Romney",
        location: "Utah",
        url: "https://upload.wikimedia.org/wikipedia/commons/f/f8/Mitt_Romney_official_US_Senate_portrait_%28cropped%29.jpg"
    },
    {
        name: "John Fetterman",
        location: "Pennsylvania",
        url: "https://upload.wikimedia.org/wikipedia/commons/3/31/John_Fetterman_official_portrait_%283x4%29.jpg"
    },
    {
        name: "Peter Welch",
        location: "Vermont",
        url: "https://upload.wikimedia.org/wikipedia/commons/c/c0/Peter_Welch_official_Senate_photo_%28cropped%29.jpg"
    },
    {
        name: "Patty Murray",
        location: "Washington",
        url: "https://upload.wikimedia.org/wikipedia/commons/9/9d/Patty_Murray%2C_official_portrait%2C_113th_Congress_%28cropped%29.jpg"
    },
    {
        name: "Rand Paul",
        location: "Kentucky",
        url: "https://upload.wikimedia.org/wikipedia/commons/0/01/Rand_Paul%2C_official_portrait%2C_112th_Congress_alternate_%28cropped%29.jpg"
    },
    {
        name: "Raphael Warnock",
        location: "Georgia",
        url: "https://upload.wikimedia.org/wikipedia/commons/1/15/Raphael_Warnock_official_photo_%28cropped%29.jpg"
    },
    {
        name: "Richard Blumenthal",
        location: "Connecticut",
        url: "https://upload.wikimedia.org/wikipedia/commons/3/36/Richard_Blumenthal_Official_Portrait_%28cropped%29.jpg"
    },
    {
        name: "Ted Budd",
        location: "North Carolina",
        url: "https://upload.wikimedia.org/wikipedia/commons/4/4a/Senator_Ted_Budd_official_portrait_%28cropped_2%29.jpg"
    },
    {
        name: "Katie Boyd Britt",
        location: "Alabama",
        url: "https://upload.wikimedia.org/wikipedia/commons/4/43/Katie_Boyd_Britt_official_Senate_photo_%28Cropped%29.jpg"
    },
    {
        name: "Rick Scott",
        location: "Florida",
        url: "https://upload.wikimedia.org/wikipedia/commons/d/d7/Official_Portrait_of_Senator_Rick_Scott_%28cropped%29.jpg"
    },
    {
        name: "J.D. Vance",
        location: "Ohio",
        url: "https://upload.wikimedia.org/wikipedia/commons/7/71/Senator_Vance_official_portrait._118th_Congress_%28cropped%29.jpg"
    },
    {
        name: "Robert Menendez",
        location: "New Jersey",
        url: "https://upload.wikimedia.org/wikipedia/commons/b/bb/Robert_Menendez_official_Senate_portrait_%28cropped%29.jpg"
    },
    {
        name: "Roger Marshall",
        location: "Kansas",
        url: "https://upload.wikimedia.org/wikipedia/commons/1/1c/Roger_Marshall_117th_Congress_portrait_%28cropped%29.jpg"
    },
    {
        name: "Roger Wicker",
        location: "Mississippi",
        url: "https://upload.wikimedia.org/wikipedia/commons/f/f9/Roger_F._Wicker_crop.jpg"
    },
    {
        name: "Ron Johnson",
        location: "Wisconsin",
        url: "https://upload.wikimedia.org/wikipedia/commons/0/0c/Ron_Johnson_portrait_117th_Congress_%28cropped%29.jpg"
    },
    {
        name: "Ron Wyden",
        location: "Oregon",
        url: "https://upload.wikimedia.org/wikipedia/commons/0/06/Ron_Wyden_117th_Congress_%28cropped%29.jpeg"
    },
    {
        name: "Eric Schmitt",
        location: "Missouri",
        url: "https://upload.wikimedia.org/wikipedia/commons/7/75/Eric_Schmitt_official_photo_%28cropped%29.jpg"
    },
    {
        name: "Sheldon Whitehouse",
        location: "Rhode Island",
        url: "https://upload.wikimedia.org/wikipedia/commons/b/bb/Sheldon_Whitehouse%2C_official_portrait%2C_116th_congress_%28cropped%29.jpg"
    },
    {
        name: "Shelley Moore Capito",
        location: "West Virginia",
        url: "https://upload.wikimedia.org/wikipedia/commons/3/37/Shelley_Moore_Capito_official_Senate_photo_%28cropped_2%29.jpg"
    },
    {
        name: "Sherrod Brown",
        location: "Ohio",
        url: "https://upload.wikimedia.org/wikipedia/commons/f/f6/Sherrod_Brown_official_photo_2009_2_%28cropped%29.jpg"
    },
    {
        name: "Steve Daines",
        location: "Montana",
        url: "https://upload.wikimedia.org/wikipedia/commons/b/b8/Steve_Daines%2C_Official_Portrait%2C_116th_Congress_%28cropped%29.jpg"
    },
    {
        name: "Susan Collins",
        location: "Maine",
        url: "https://upload.wikimedia.org/wikipedia/commons/a/aa/Susan_Collins_official_Senate_photo_%28cropped%29.jpg"
    },
    {
        name: "Tammy Baldwin",
        location: "Wisconsin",
        url: "https://upload.wikimedia.org/wikipedia/commons/7/7d/Tammy_Baldwin%2C_official_portrait%2C_113th_Congress_%28cropped%29.jpg"
    },
    {
        name: "Tammy Duckworth",
        location: "Illinois",
        url: "https://upload.wikimedia.org/wikipedia/commons/c/cc/Tammy_Duckworth_115th_official_portrait_%28cropped%29.jpg"
    },
    {
        name: "Ted Cruz",
        location: "Texas",
        url: "https://upload.wikimedia.org/wikipedia/commons/9/94/Ted_Cruz_official_116th_portrait_%28cropped%29.jpg"
    },
    {
        name: "Thom Tillis",
        location: "North Carolina",
        url: "https://upload.wikimedia.org/wikipedia/commons/9/94/Thom_Tillis_Official_Photo_%28cropped%29.jpg"
    },
    {
        name: "Tim Kaine",
        location: "Virginia",
        url: "https://upload.wikimedia.org/wikipedia/commons/7/76/Tim_Kaine_116th_official_portrait_%28cropped%29.jpg"
    },
    {
        name: "Tina Smith",
        location: "Minnesota",
        url: "https://upload.wikimedia.org/wikipedia/commons/f/f8/Tina_Smith%2C_official_portrait%2C_116th_congress_%28cropped%29.jpg"
    },
    {
        name: "Tim Scott",
        location: "South Carolina",
        url: "https://upload.wikimedia.org/wikipedia/commons/b/ba/Tim_Scott%2C_official_portrait%2C_113th_Congress_%28cropped_2%29.jpg"
    },
    {
        name: "Todd Young",
        location: "Indiana",
        url: "https://upload.wikimedia.org/wikipedia/commons/e/e1/Sen._Todd_Young_official_photo.jpg"
    },
    {
        name: "Tom Carper",
        location: "Delaware",
        url: "https://upload.wikimedia.org/wikipedia/commons/8/8e/Tom_Carper%2C_official_portrait%2C_112th_Congress_%28cropped%29.jpg"
    },
    {
        name: "Tom Cotton",
        location: "Arkansas",
        url: "https://upload.wikimedia.org/wikipedia/commons/6/66/Tom_Cotton_official_Senate_photo_%28cropped%29.jpg"
    },
    {
        name: "Tommy Tuberville",
        location: "Alabama",
        url: "https://upload.wikimedia.org/wikipedia/commons/7/7a/Tommy_Tuberville_117th_Congress_Portrait.jpg"
    }
];

export const getRandomPolitician = () => politicians[Math.floor(Math.random()*politicians.length)];
