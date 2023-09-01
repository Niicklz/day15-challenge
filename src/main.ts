const counters = document.querySelectorAll(
  "[data-counter]"
) as NodeListOf<HTMLHeadingElement>;


const incrementFollowers: () => void = () => {
  const followers:Array<{name:string,maxFollowers:number}> = [
    { name: "twitter", maxFollowers: 12000 },
    { name: "youtube", maxFollowers: 5000 },
    { name: "facebook", maxFollowers: 7500 },
  ];
counters.forEach((counterEl,index) => {
  let counterFollows = 0
 const counterInterval = setInterval(()=> {
counterEl.textContent  = counterFollows.toString()
counterFollows += 100
if(counterFollows > followers[index].maxFollowers) clearInterval(counterInterval)
  },0.3)
  
})
};
incrementFollowers()
