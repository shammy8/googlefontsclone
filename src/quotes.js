const quotes = [
  "The Way Get Started Is To Quit Talking And Begin Doing. – Walt Disney",
  "The Pessimist Sees Difficulty In Every Opportunity. The Optimist Sees Opportunity In Every Difficulty. – Winston Churchill",
  "Don’t Let Yesterday Take Up Too Much Of Today. – Will Rogers",
  "You Learn More From Failure Than From Success. Don’t Let It Stop You. Failure Builds Character. – Unknown",
  "It’s Not Whether You Get Knocked Down, It’s Whether You Get Up. – Vince Lombardi",
  "If You Are Working On Something That You Really Care About, You Don’t Have To Be Pushed. The Vision Pulls You. – Steve Jobs",
  "People Who Are Crazy Enough To Think They Can Change The World, Are The Ones Who Do. – Rob Siltanen",
  "Failure Will Never Overtake Me If My Determination To Succeed Is Strong Enough. – Og Mandino",
  "We May Encounter Many Defeats But We Must Not Be Defeated. – Maya Angelou",
  "Knowing Is Not Enough; We Must Apply. Wishing Is Not Enough; We Must Do. – Johann Wolfgang Von Goethe",
  "We Generate Fears While We Sit. We Overcome Them By Action. – Dr. Henry Link",
  "Whether You Think You Can Or Think You Can’t, You’re Right. – Henry Ford",
  "The Man Who Has Confidence In Himself Gains The Confidence Of Others. – Hasidic Proverb",
  "The Only Limit To Our Realization Of Tomorrow Will Be Our Doubts Of Today. – Franklin D. Roosevelt",
  "Creativity Is Intelligence Having Fun. – Albert Einstein",
  "What You Lack In Talent Can Be Made Up With Desire, Hustle And Giving 110% All The Time. – Don Zimmer",
  "You Are Never Too Old To Set Another Goal Or To Dream A New Dream. – C.S. Lewis",
  "To See What Is Right And Not Do It Is A Lack Of Courage. – Confucius",
  "Fake It Until You Make It! Act As If You Had All The Confidence You Require Until It Becomes Your Reality. – Brian Tracy",
  "The Future Belongs To The Competent. Get Good, Get Better, Be The Best! – Success Quote By Brian Tracy",
  "For Every Reason It’s Not Possible, There Are Hundreds Of People Who Have Faced The Same Circumstances And Succeeded. – Jack Canfield",
  "Things Work Out Best For Those Who Make The Best Of How Things Work Out. – John Wooden",
  "Today’s Accomplishments Were Yesterday’s Impossibilities. – Robert H. Schuller",
  "The Only Way To Do Great Work Is To Love What You Do. If You Haven’t Found It Yet, Keep Looking. Don’t Settle. – Steve Jobs",
  "There Are No Limits To What You Can Accomplish, Except The Limits You Place On Your Own Thinking. – Brian Tracy"
];

//shuffle the array (https://stackoverflow.com/questions/6274339/how-can-i-shuffle-an-array)
function shuffle(a) {
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}
const randomQuotes = shuffle(quotes);

export default randomQuotes;
