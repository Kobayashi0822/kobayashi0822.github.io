$('.container').ripples({
    // resolution: 400
    resolution: 512,
	dropRadius: 20,
	perturbance: 0.04,
});


// bubbly({
//     blur:15,
//     colorStart: '#194167',
//     colorStop: '#112144',
//     radiusFunc:() => 5 + Math.random() * 15,
//     angleFunc:() => -Math.PI / 2,
//     velocityFunc:() => Math.random() * 7.5,
//     bubbleFunc:() => `hsla(${200 + Math.random() * 50}, 100%, 65%, .1)`,
//     bubbles:350
//   });

  var el = document.getElementById("logo")
dynamics.animate(el, {
  translateX: 350,
  scale: 2,
  opacity: 0.5
}, {
  type: dynamics.spring,
  frequency: 200,
  friction: 200,
  duration: 1500
})