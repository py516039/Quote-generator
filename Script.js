const heading = document.querySelector("#heading");
const Quotes = document.querySelector("#quotes");
const generate = document.querySelector(".button");

const motivationalQuotes = [
    "The only way to do great work is to love what you do. – Steve Jobs",
    "Believe you can and you're halfway there. – Theodore Roosevelt",
    "Success is not the key to happiness. Happiness is the key to success. – Albert Schweitzer",
    "Don’t watch the clock; do what it does. Keep going. – Sam Levenson",
    "You miss 100% of the shots you don’t take. – Wayne Gretzky",
    "The harder you work for something, the greater you’ll feel when you achieve it.",
    "It’s not whether you get knocked down, it’s whether you get up. – Vince Lombardi",
    "Dream big and dare to fail. – Norman Vaughan",
    "The future belongs to those who believe in the beauty of their dreams. – Eleanor Roosevelt",
    "Success is the sum of small efforts, repeated day in and day out. – Robert Collier",
    "Don’t stop when you’re tired. Stop when you’re done.",
    "The only limit to our realization of tomorrow is our doubts of today. – Franklin D. Roosevelt",
    "Act as if what you do makes a difference. It does. – William James",
    "The key to success is to focus on goals, not obstacles.",
    "What you get by achieving your goals is not as important as what you become by achieving your goals. – Zig Ziglar",
    "You are never too old to set another goal or to dream a new dream. – C.S. Lewis",
    "It always seems impossible until it’s done. – Nelson Mandela",
    "Do not wait to strike till the iron is hot, but make it hot by striking. – William Butler Yeats",
    "Everything you’ve ever wanted is on the other side of fear. – George Addair",
    "If you want to achieve greatness, stop asking for permission.",
    "Your limitation—it’s only your imagination.",
    "Great things never come from comfort zones.",
    "Dream it. Wish it. Do it.",
    "Success doesn’t just find you. You have to go out and get it.",
    "The way to get started is to quit talking and begin doing. – Walt Disney",
    "Little by little, one travels far. – J.R.R. Tolkien",
    "Don’t limit your challenges. Challenge your limits.",
    "Success is not final, failure is not fatal: It is the courage to continue that counts. – Winston Churchill",
    "Hard work beats talent when talent doesn’t work hard. – Tim Notke",
    "Success usually comes to those who are too busy to be looking for it. – Henry David Thoreau",
    "Opportunities don’t happen, you create them. – Chris Grosser",
    "Do one thing every day that scares you. – Eleanor Roosevelt",
    "You don’t have to be great to start, but you have to start to be great.",
    "It’s going to be hard, but hard does not mean impossible.",
    "Don’t stop when you’re tired. Stop when you’re done.",
    "Everything you can imagine is real. – Pablo Picasso",
    "The best time to plant a tree was 20 years ago. The second best time is now. – Chinese Proverb",
    "Failure is not the opposite of success; it’s part of success.",
    "Keep your face always toward the sunshine—and shadows will fall behind you. – Walt Whitman",
    "Do not go where the path may lead, go instead where there is no path and leave a trail. – Ralph Waldo Emerson",
    "Success doesn’t come from what you do occasionally, it comes from what you do consistently.",
    "You are capable of more than you know. – Glinda the Good Witch",
    "Your future is created by what you do today, not tomorrow.",
    "Work hard in silence, let your success be your noise. – Frank Ocean",
    "The best way to predict the future is to create it. – Abraham Lincoln",
    "The difference between who you are and who you want to be is what you do.",
    "Never stop trying. Never stop believing. Never give up. Your day will come.",
    "The only way to achieve the impossible is to believe it is possible. – Charles Kingsleigh",
    "Success is not how high you have climbed, but how you make a positive difference to the world. – Roy T. Bennett",
    "You don’t have to be perfect to be amazing.",
    
  ];
  

const generator = ()=>{
    const index = Math.floor(Math.random()*motivationalQuotes.length);
    Quotes.innerHTML = motivationalQuotes[index];
}


heading.innerHTML = "Dynamic Quote Generator";


generate.addEventListener("click",generator)

generator();
