
const politicians = [
    {
        name: "Alex Padilla",
        state: "California",
        url: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Alex_Padilla_117th_Congress_portrait.jpg/1280px-Alex_Padilla_117th_Congress_portrait.jpg"
    },
    {
        name: "Amy Klobuchar",
        state: "Minnesota",
        url: "https://upload.wikimedia.org/wikipedia/commons/3/3b/Amy_Klobuchar%2C_official_portrait%2C_113th_Congress_%28cropped%29.jpg"
    },
    {
        name: "Angus King",
        state: "Maine",
        url: "https://upload.wikimedia.org/wikipedia/commons/e/e9/Angus_King%2C_official_portrait%2C_113th_Congress_%28cropped%29.jpg"
    },
    {
        name: "Ben Cardin",
        state: "Maryland",
        url: "https://upload.wikimedia.org/wikipedia/commons/e/e5/Ben_Cardin_official_Senate_portrait_%28cropped%29.jpg"
    },
    {
        name: "Ben Ray Lujan",
        state: "New Mexico",
        url: "https://upload.wikimedia.org/wikipedia/commons/d/d5/Ben_Ray_Lujan%2C_117th_Congress_portrait_2_%28cropped%29.jpg"
    },
    {
        name: "Ben Sasse",
        state: "Nebraska",
        url: "https://upload.wikimedia.org/wikipedia/commons/d/d3/Ben_Sasse_Official_photo_%28cropped%29.jpg"
    },
    {
        name: "Bernie Sanders",
        state: "Vermont",
        url: "https://upload.wikimedia.org/wikipedia/commons/7/73/Bernie_Sanders_%28cropped%29.jpg"
    },
    {
        name: "Bill Cassidy",
        state: "Louisiana",
        url: "https://upload.wikimedia.org/wikipedia/commons/f/f6/Bill_Cassidy_official_Senate_photo_%28cropped%29.jpg"
    },
    {
        name: "Bill Hagerty",
        state: "Tennessee",
        url: "https://upload.wikimedia.org/wikipedia/commons/3/3a/Sen._Bill_Hagerty_official_Senate_portrait%2C_117th_Congress_%28cropped%29.jpg"
    },
    {
        name: "Bob Casey Jr",
        state: "Pennsylvania",
        url: "https://upload.wikimedia.org/wikipedia/commons/6/6d/Bob_Casey_Jr._official_photo_%28cropped%29.jpg"
    },
    {
        name: "Brian Schatz",
        state: "Hawaii",
        url: "https://upload.wikimedia.org/wikipedia/commons/4/4b/Brian_Schatz%2C_official_portrait%2C_113th_Congress_2_%28cropped%29.jpg"
    },
    {
        name: "Catherine Cortez Masto",
        state: "Nevada",
        url: "https://upload.wikimedia.org/wikipedia/commons/e/e7/Catherine_Cortez_Masto_official_portrait_%28cropped%29.jpg"
    },
    {
        name: "Chris Coons",
        state: "Delaware",
        url: "https://upload.wikimedia.org/wikipedia/commons/9/99/Chris_Coons%2C_official_portrait%2C_112th_Congress_%28cropped%29.jpg"
    },
    {
        name: "Chris Murphy",
        state: "Connecticut",
        url: "https://upload.wikimedia.org/wikipedia/commons/4/47/Chris_Murphy%2C_official_portrait%2C_113th_Congress_%28cropped%29.jpg"
    },
    {
        name: "Chris Van Hollen",
        state: "Maryland",
        url: "https://upload.wikimedia.org/wikipedia/commons/3/37/Chris_Van_Hollen_official_portrait_115th_Congress_%28cropped%29.jpg"
    },
    {
        name: "Chuck Grassley",
        state: "Iowa",
        url: "https://upload.wikimedia.org/wikipedia/commons/1/1c/Chuck_Grassley_official_photo_2017_%28cropped%29.jpg"
    },
    {
        name: "Chuck Schumer",
        state: "New York",
        url: "https://upload.wikimedia.org/wikipedia/commons/3/3b/Chuck_Schumer_official_photo_%28cropped%29.jpg"
    },
    {
        name: "Cindy Hyde Smith",
        state: "Mississippi",
        url: "https://upload.wikimedia.org/wikipedia/commons/5/52/Official_headshot_of_US_Senator_Cindy_Hyde-Smith.jpg"
    },
    {
        name: "Cory Booker",
        state: "New Jersey",
        url: "https://upload.wikimedia.org/wikipedia/commons/5/59/Cory_Booker%2C_official_portrait%2C_114th_Congress.jpg"
    },
    {
        name: "Cynthia Lummis",
        state: "Wyoming",
        url: "https://upload.wikimedia.org/wikipedia/commons/c/cb/Cynthia_Lummis_U.S._Senator_%28cropped%29.jpg"
    },
    {
        name: "Dan Sullivan",
        state: "Alaska",
        url: "https://upload.wikimedia.org/wikipedia/commons/0/0e/Senator_Dan_Sullivan_official_%28cropped%29.jpg"
    },
    {
        name: "Deb Fischer",
        state: "Nebraska",
        url: "https://upload.wikimedia.org/wikipedia/commons/0/0b/Deb_Fischer%2C_official_portrait%2C_115th_Congress_%28cropped%29.jpg",
    },
    {
        name: "Debbie Stabenow",
        state: "Michigan",
        url: "https://upload.wikimedia.org/wikipedia/commons/6/61/Debbie_Stabenow%2C_official_photo%2C_116th_Congress_%28cropped%29.jpg"
    },
    {
        name: "Dianne Feinstein",
        state: "California",
        url: "https://upload.wikimedia.org/wikipedia/commons/1/10/Dianne_Feinstein%2C_official_Senate_photo_2_%28cropped%29.jpg"
    },
    {
        name: "Dick Durbin",
        state: "Illinois",
        url: "https://upload.wikimedia.org/wikipedia/commons/3/39/Dick_Durbin_October_2017_%28cropped%29_1.jpg"
    },
    {
        name: "Edward Markey",
        state: "Massachusetts",
        url: "https://upload.wikimedia.org/wikipedia/commons/5/58/Edward_Markey%2C_official_portrait%2C_114th_Congress_%28cropped%29.jpg"
    },
    {
        name: "Elizabeth Warren",
        state: "Massachusetts",
        url: "https://upload.wikimedia.org/wikipedia/commons/7/74/Elizabeth_Warren--2016_Official_Portrait--%28cropped%29.jpg"
    },
    {
        name: "Gary Peters",
        state: "Michigan",
        url: "https://upload.wikimedia.org/wikipedia/commons/9/98/Gary_Peters_official_photo_115th_congress_%28cropped%29.jpg"
    },
    {
        name: "Jack Reed",
        state: "Rhode Island",
        url: "https://upload.wikimedia.org/wikipedia/commons/1/14/Senator_Jack_Reed_official_photo_%28cropped%29.jpg"
    },
    {
        name: "Jacky Rosen",
        state: "Nevada",
        url: "https://upload.wikimedia.org/wikipedia/commons/2/28/Jacky_Rosen%2C_official_portrait%2C_116th_congress_%28cropped-1%29.jpg"
    },
    {
        name: "James Lankford",
        state: "Oklahoma",
        url: "https://upload.wikimedia.org/wikipedia/commons/5/5f/James_Lankford_official_Senate_photo_%28cropped%29.jpg"
    },
    {
        name: "Jeanne Shaheen",
        state: "New Hampshire",
        url: "https://upload.wikimedia.org/wikipedia/commons/2/21/Jeanne_Shaheen%2C_official_Senate_photo_portrait%2C_2009_%28cropped%29.jpg"
    },
    {
        name: "Jeff Merkley",
        state: "Oregon",
        url: "https://upload.wikimedia.org/wikipedia/commons/e/ee/Jeff_Merkley%2C_115th_official_photo_%28cropped%29.jpg"
    },
    {
        name: "Jerry Moran",
        state: "Kansas",
        url: "https://upload.wikimedia.org/wikipedia/commons/d/d9/Jerry_Moran%2C_official_portrait%2C_112th_Congress_%28cropped%29.jpg"
    },
    {
        name: "Jim Inhofe",
        state: "Oklahoma",
        url: "https://upload.wikimedia.org/wikipedia/commons/4/48/Jim_Inhofe_official_portrait_%28cropped%29.jpg"
    },
    {
        name: "Jim Risch",
        state: "Idaho",
        url: "https://upload.wikimedia.org/wikipedia/commons/e/e5/Jim_Risch_official_portrait_%28cropped%29.jpg"
    },
    {
        name: "Joe Manchin",
        state: "West Virginia",
        url: "https://upload.wikimedia.org/wikipedia/commons/c/cc/Senator_Manchin_%28cropped%29.jpg"
    },
    {
        name: "John Barrasso",
        state: "Wyoming",
        url: "https://upload.wikimedia.org/wikipedia/commons/4/42/John_Barrasso_official_portrait_112th_Congress_%28cropped%29.jpg"
    },
    {
        name: "John Boozman",
        state: "Arkansas",
        url: "https://upload.wikimedia.org/wikipedia/commons/4/48/Senator_John_Boozman_Official_Portrait_%28115th_Congress%29_%28cropped%29.jpg"
    },
    {
        name: "John Cornyn",
        state: "Texas",
        url: "https://upload.wikimedia.org/wikipedia/commons/e/e4/John_Cornyn_%28cropped%29.jpg"
    },
    {
        name: "John Hickenlooper",
        state: "Colorado",
        url: "https://upload.wikimedia.org/wikipedia/commons/d/db/John_Hickenlooper%2C_official_portrait%2C_117th_Congress_%28cropped%29.jpeg"
    },
    {
        name: "John Hoeven",
        state: "North Dakota",
        url: "https://upload.wikimedia.org/wikipedia/commons/7/75/Hoeven_Official_Portrait_2014_%28cropped%29.JPG"
    },
    {
        name: "John Kennedy",
        state: "Louisiana",
        url: "https://upload.wikimedia.org/wikipedia/commons/8/81/John_Neely_Kennedy%2C_official_portrait%2C_115th_Congress_2.jpg"
    },
    {
        name: "John Thune",
        state: "South Dakota",
        url: "https://upload.wikimedia.org/wikipedia/commons/f/f6/John_Thune_117th_Congress_portrait_%28cropped%29.jpg"
    },
    {
        name: "Jon Ossoff",
        state: "Georgia",
        url: "https://upload.wikimedia.org/wikipedia/commons/1/1f/Jon_Ossoff_Senate_Portrait_2021_%28cropped%29.jpg"
    },
    {
        name: "Jon Tester",
        state: "Montana",
        url: "https://upload.wikimedia.org/wikipedia/commons/b/b9/JonTester_%28cropped%29.jpg"
    },
    {
        name: "Joni Ernst",
        state: "Iowa",
        url: "https://upload.wikimedia.org/wikipedia/commons/7/74/Joni_Ernst%2C_official_portrait%2C_116th_Congress_3.jpg"
    },
    {
        name: "Josh Hawley",
        state: "Missouri",
        url: "https://upload.wikimedia.org/wikipedia/commons/5/5b/Josh_Hawley%2C_official_portrait%2C_116th_congress_%28cropped%29.jpg"
    },
    {
        name: "Kevin Cramer",
        state: "North Dakota",
        url: "https://upload.wikimedia.org/wikipedia/commons/f/ff/Kevin_Cramer%2C_official_portrait%2C_116th_congress_%28cropped%29.jpg"
    },
    {
        name: "Kirsten Gillibrand",
        state: "New York",
        url: "https://upload.wikimedia.org/wikipedia/commons/1/14/Kirsten_Gillibrand%2C_official_photo%2C_116th_Congress_%28cropped%29.jpg"
    },
    {
        name: "Kyrsten Sinema",
        state: "Arizona",
        url: "https://upload.wikimedia.org/wikipedia/commons/c/c8/Kyrsten_Sinema_%28cropped%29.jpg"
    },
    {
        name: "Lindsey Graham",
        state: "South Carolina",
        url: "https://upload.wikimedia.org/wikipedia/commons/0/0e/U.S._Senator_Lindsey_Graham%2C_Official_Photo%2C_113th_Congress_%28cropped%29.jpg"
    },
    {
        name: "Lisa Murkowski",
        state: "Alaska",
        url: "https://upload.wikimedia.org/wikipedia/commons/4/4b/Lisa_Murkowski_official_photo_%28cropped%29.jpg"
    },
    {
        name: "Maggie Hassan",
        state: "New Hampshire",
        url: "https://upload.wikimedia.org/wikipedia/commons/a/ae/Maggie_Hassan%2C_official_portrait%2C_115th_Congress_%28cropped%29.jpg"
    },
    {
        name: "Marco Rubio",
        state: "Florida",
        url: "https://upload.wikimedia.org/wikipedia/commons/c/c4/Senator_Rubio_official_portrait_%28cropped%29.jpg"
    },
    {
        name: "Maria Cantwell",
        state: "Washington",
        url: "https://upload.wikimedia.org/wikipedia/commons/8/8f/Maria_Cantwell_%28cropped%29.jpg"
    },
    {
        name: "Mark Kelly",
        state: "Arizona",
        url: "https://upload.wikimedia.org/wikipedia/commons/1/18/SenatorKellyOfficialPhoto_%28cropped2%29.jpg"
    },
    {
        name: "Mark Warner",
        state: "Virginia",
        url: "https://upload.wikimedia.org/wikipedia/commons/5/5e/Mark_Warner_113th_Congress_photo_%28cropped%29.jpg"
    },
    {
        name: "Marsha Blackburn",
        state: "Tennessee",
        url: "https://upload.wikimedia.org/wikipedia/commons/0/05/Marsha_Blackburn%2C_official_photo%2C_116th_Congress_%28cropped%29.jpg"
    },
    {
        name: "Martin Heinrich",
        state: "New Mexico",
        url: "https://upload.wikimedia.org/wikipedia/commons/6/6f/Heinrich_Official_Headshot_2019_%28cropped%29.jpg"
    },
    {
        name: "Mazie Hirono",
        state: "Hawaii",
        url: "https://upload.wikimedia.org/wikipedia/commons/8/85/Mazie_Hirono%2C_official_portrait%2C_113th_Congress_%28cropped%29.jpg"
    },
    {
        name: "Michael Bennet",
        state: "Colorado",
        url: "https://upload.wikimedia.org/wikipedia/commons/4/4d/Michael_Bennet_Official_Photo_%28cropped%29.jpg"
    },
    {
        name: "Mike Braun",
        state: "Indiana",
        url: "https://upload.wikimedia.org/wikipedia/commons/7/70/Mike_Braun%2C_Official_Portrait%2C_116th_Congress_%28cropped%29.jpg"
    },
    {
        name: "Mike Crapo",
        state: "Idaho",
        url: "https://upload.wikimedia.org/wikipedia/commons/3/33/Mike_Crapo_2019_%28cropped%29.jpg"
    },
    {
        name: "Mike Lee",
        state: "Utah",
        url: "https://upload.wikimedia.org/wikipedia/commons/4/46/Mike_Lee%2C_official_portrait_%28cropped%29.jpg"
    },
    {
        name: "Mike Rounds",
        state: "South Dakota",
        url: "https://upload.wikimedia.org/wikipedia/commons/4/41/Mike_Rounds_official_Senate_portrait_%28cropped%29.jpg"
    },
    {
        name: "Mitch McConnell",
        state: "Kentucky",
        url: "https://upload.wikimedia.org/wikipedia/commons/b/bb/Mitch_McConnell_portrait_2016.jpg"
    },
    {
        name: "Mitt Romney",
        state: "Utah",
        url: "https://upload.wikimedia.org/wikipedia/commons/f/f8/Mitt_Romney_official_US_Senate_portrait_%28cropped%29.jpg"
    },
    {
        name: "Pat Toomey",
        state: "Pennsylvania",
        url: "https://upload.wikimedia.org/wikipedia/commons/5/5d/Pat_Toomey_official_photo_%28cropped%29.jpg"
    },
    {
        name: "Patrick Leahy",
        state: "Vermont",
        url: "https://upload.wikimedia.org/wikipedia/commons/4/46/Patrick_Leahy_official_photo_%28cropped%29.jpg"
    },
    {
        name: "Patty Murray",
        state: "Washington",
        url: "https://upload.wikimedia.org/wikipedia/commons/9/9d/Patty_Murray%2C_official_portrait%2C_113th_Congress_%28cropped%29.jpg"
    },
    {
        name: "Rand Paul",
        state: "Kentucky",
        url: "https://upload.wikimedia.org/wikipedia/commons/0/01/Rand_Paul%2C_official_portrait%2C_112th_Congress_alternate_%28cropped%29.jpg"
    },
    {
        name: "Raphael Warnock",
        state: "Georgia",
        url: "https://upload.wikimedia.org/wikipedia/commons/1/15/Raphael_Warnock_official_photo_%28cropped%29.jpg"
    },
    {
        name: "Richard Blumenthal",
        state: "Connecticut",
        url: "https://upload.wikimedia.org/wikipedia/commons/3/36/Richard_Blumenthal_Official_Portrait_%28cropped%29.jpg"
    },
    {
        name: "Richard Burr",
        state: "North Carolina",
        url: "https://upload.wikimedia.org/wikipedia/commons/b/b1/Richard_Burr_official_portrait_%28cropped%29.jpg"
    },
    {
        name: "Richard Shelby",
        state: "Alabama",
        url: "https://upload.wikimedia.org/wikipedia/commons/c/c5/Richard_Shelby%2C_official_portrait%2C_112th_Congress_%28cropped%29.jpg"
    },
    {
        name: "Rick Scott",
        state: "Florida",
        url: "https://upload.wikimedia.org/wikipedia/commons/d/d7/Official_Portrait_of_Senator_Rick_Scott_%28cropped%29.jpg"
    },
    {
        name: "Rob Portman",
        state: "Ohio",
        url: "https://upload.wikimedia.org/wikipedia/commons/6/63/Rob_Portman_official_portrait_%28cropped%29.jpg"
    },
    {
        name: "Robert Menendez",
        state: "New Jersey",
        url: "https://upload.wikimedia.org/wikipedia/commons/b/bb/Robert_Menendez_official_Senate_portrait_%28cropped%29.jpg"
    },
    {
        name: "Roger Marshall",
        state: "Kansas",
        url: "https://upload.wikimedia.org/wikipedia/commons/1/1c/Roger_Marshall_117th_Congress_portrait_%28cropped%29.jpg"
    },
    {
        name: "Roger Wicker",
        state: "Mississippi",
        url: "https://upload.wikimedia.org/wikipedia/commons/f/f9/Roger_F._Wicker_crop.jpg"
    },
    {
        name: "Ron Johnson",
        state: "Wisconsin",
        url: "https://upload.wikimedia.org/wikipedia/commons/0/0c/Ron_Johnson_portrait_117th_Congress_%28cropped%29.jpg"
    },
    {
        name: "Ron Wyden",
        state: "Oregon",
        url: "https://upload.wikimedia.org/wikipedia/commons/0/06/Ron_Wyden_117th_Congress_%28cropped%29.jpeg"
    },
    {
        name: "Roy Blunt",
        state: "Missouri",
        url: "https://upload.wikimedia.org/wikipedia/commons/7/74/Roy_Blunt%2C_Official_Portrait%2C_112th_Congress_%28cropped%29.jpg"
    },
    {
        name: "Sheldon Whitehouse",
        state: "Rhode Island",
        url: "https://upload.wikimedia.org/wikipedia/commons/b/bb/Sheldon_Whitehouse%2C_official_portrait%2C_116th_congress_%28cropped%29.jpg"
    },
    {
        name: "Shelley Moore Capito",
        state: "West Virginia",
        url: "https://upload.wikimedia.org/wikipedia/commons/3/37/Shelley_Moore_Capito_official_Senate_photo_%28cropped_2%29.jpg"
    },
    {
        name: "Sherrod Brown",
        state: "Ohio",
        url: "https://upload.wikimedia.org/wikipedia/commons/f/f6/Sherrod_Brown_official_photo_2009_2_%28cropped%29.jpg"
    },
    {
        name: "Steve Daines",
        state: "Montana",
        url: "https://upload.wikimedia.org/wikipedia/commons/b/b8/Steve_Daines%2C_Official_Portrait%2C_116th_Congress_%28cropped%29.jpg"
    },
    {
        name: "Susan Collins",
        state: "Maine",
        url: "https://upload.wikimedia.org/wikipedia/commons/a/aa/Susan_Collins_official_Senate_photo_%28cropped%29.jpg"
    },
    {
        name: "Tammy Baldwin",
        state: "Wisconsin",
        url: "https://upload.wikimedia.org/wikipedia/commons/7/7d/Tammy_Baldwin%2C_official_portrait%2C_113th_Congress_%28cropped%29.jpg"
    },
    {
        name: "Tammy Duckworth",
        state: "Illinois",
        url: "https://upload.wikimedia.org/wikipedia/commons/c/cc/Tammy_Duckworth_115th_official_portrait_%28cropped%29.jpg"
    },
    {
        name: "Ted Cruz",
        state: "Texas",
        url: "https://upload.wikimedia.org/wikipedia/commons/9/94/Ted_Cruz_official_116th_portrait_%28cropped%29.jpg"
    },
    {
        name: "Thom Tillis",
        state: "North Carolina",
        url: "https://upload.wikimedia.org/wikipedia/commons/9/94/Thom_Tillis_Official_Photo_%28cropped%29.jpg"
    },
    {
        name: "Tim Kaine",
        state: "Virginia",
        url: "https://upload.wikimedia.org/wikipedia/commons/7/76/Tim_Kaine_116th_official_portrait_%28cropped%29.jpg"
    },
    {
        name: "Tina Smith",
        state: "Minnesota",
        url: "https://upload.wikimedia.org/wikipedia/commons/f/f8/Tina_Smith%2C_official_portrait%2C_116th_congress_%28cropped%29.jpg"
    },
    {
        name: "Tim Scott",
        state: "South Carolina",
        url: "https://upload.wikimedia.org/wikipedia/commons/b/ba/Tim_Scott%2C_official_portrait%2C_113th_Congress_%28cropped_2%29.jpg"
    },
    {
        name: "Todd Young",
        state: "Indiana",
        url: "https://upload.wikimedia.org/wikipedia/commons/e/e1/Sen._Todd_Young_official_photo.jpg"
    },
    {
        name: "Tom Carper",
        state: "Delaware",
        url: "https://upload.wikimedia.org/wikipedia/commons/8/8e/Tom_Carper%2C_official_portrait%2C_112th_Congress_%28cropped%29.jpg"
    },
    {
        name: "Tom Cotton",
        state: "Arkansas",
        url: "https://upload.wikimedia.org/wikipedia/commons/6/66/Tom_Cotton_official_Senate_photo_%28cropped%29.jpg"
    },
    {
        name: "Tommy Tuberville",
        state: "Alabama",
        url: "https://upload.wikimedia.org/wikipedia/commons/7/7a/Tommy_Tuberville_117th_Congress_Portrait.jpg"
    }
];

export const getRandomPolitician = () => politicians[Math.floor(Math.random()*politicians.length)];
