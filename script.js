const channels = [
  "https://www.youtube.com/@VjSiddhuVlog",
  "https://www.youtube.com/@manisharan9446",
  "https://www.youtube.com/@strglitz",
  "https://www.youtube.com/@jrlocalgaming2739",
  "https://www.youtube.com/@AnimalHT2721"
];

const quotes = [
  "Small breaks make big dreams possible 🌱",
  "One laugh = less stress 😄",
  "You are stronger than this syllabus 💪",
  "Future IAS loading… ⏳",
  "Pressure makes diamonds 💎"
];

function openChannel(index){
  window.open(channels[index], "_blank");
  changeQuote();
}

function changeQuote(){
  const q = quotes[Math.floor(Math.random()*quotes.length)];
  document.getElementById("quote").innerText = q;
}
