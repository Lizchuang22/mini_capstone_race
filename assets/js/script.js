//player obj
let player ={
	character:$("#player"),
	playerPos: 0
}
console.log(player)

//ai obj
const ai ={
	character : $("#ai"),
	aiPos: 0 
}
console.log(ai)


let playerPosition = 0;
let aiPosition = 0;

//move the player function
player.character.click(function(){
	console.log($(this))

	$(this).animate({
		'left' : (playerPosition += 100)+ 'px'

	})
	// console.log('this is the current value of player postion: '  + playerPosition )
	player.playerPos = playerPosition

	console.log(player)
	result()
	})



//easy
	aiMove1 = () => {
		if(ai.aiPos < 1000){
			ai.character.animate({
			'left' : (aiPosition +=30) + "px"
		})
		}else{
			return true
		}
		console.log(ai.aiPos)
		ai.aiPos = aiPosition
		setTimeout(aiMove1, 200)
		result()
	}


//medium
	aiMove2 = () => {
		if(ai.aiPos < 1000){
			ai.character.animate({
			'left' : (aiPosition +=60) + "px"
		})
		}else{
			return true
		}
		console.log(ai.aiPos)
		ai.aiPos = aiPosition
		setTimeout(aiMove2, 300)
		result()
	}


//hard
	aiMove3 = () => {
		if(ai.aiPos < 1000){
			ai.character.animate({
			'left' : (aiPosition +=80) + "px"
		})
		}else{
			return true
		}
		console.log(ai.aiPos)
		ai.aiPos = aiPosition
		setTimeout(aiMove3, 350)
		result()
	}






//move the AI easy
$("#easy").click(function(){
	console.log($(this))
	aiMove1()
})

//move the AI medium
$("#medium").click(function(){
	console.log($(this))
	aiMove2()
})

// move the AI hard
$("#hard").click(function(){
	console.log($(this))
	aiMove3()
})














const result = () => {
	if(player.playerPos == 1000){
		alert('player won!')
		return true
	}

	if(ai.aiPos == 1000){
		alert("ai won!")
		return true
	}
}

// $("#btn").click(function(){
// 	console.log($(this).attr('id')=='easy')

// 	if($(this).attr('id')==1){
// 		aiMove(20)
// 	}

// 	if($(this).attr('id')=="medium"){
// 		aiMove(30)
// 	}

// 	if($(this).attr('id')== 'hard'){
// 		aiMove(80)
// 	}
// })
