function scuberGreetingForFeet(someValue){
  let result
  if (someValue <= 400){
    result = `This one is on me!`
  } else {
    result = `That will be twenty bucks.`
    if (someValue > 2000){
      result = `I will gladly take your thirty bucks.`
    }
    if (someValue > 2500){
      result = `No can do.`
    }
  }
  return result
}

function ternaryCheckCity(city){
let response = city == `NYC` ? `Ok, sounds good.` : 'No go.'
return response
}

function switchOnCharmFromTip(tipAmount){
switch(tipAmount){
  case `generous`:
    return(`Thank you so much.`)
  case `not as generous`:
    return(`Thank you.`)
  default:
    return(`Bye.`)
}
}