window.onload = () => {

 	let iconsArray = [
 		{
 			name: "ahri",
 			img: "images/img-01.jpg"
 		},
 		{
 			name: "rammus",
 			img: "images/img-02.jpg"
 		},
 		{
 			name: "kindred",
 			img: "images/img-03.jpg"
 		},
 		{
 			name: "ekko",
 			img: "images/img-04.jpg"
 		},
 		{
 			name: "evelynn",
 			img: "images/img-05.jpg"
 		},
 		{
 			name: "annie",
 			img: "images/img-06.jpg"
 		},
 		{
 			name: "caitlyn",
 			img: "images/img-07.jpg"
 		},
 		{
 			name: "jinx",
 			img: "images/img-08.jpg"
 		},
 		{
 			name: "lux",
 			img: "images/img-09.jpg"
 		},
 		{
 			name: "yasuo",
 			img: "images/img-10.jpg"
 		},
 		{
 			name: "neeko",
 			img: "images/img-11.jpg"
 		},
 		{
 			name: "zoe",
 			img: "images/img-12.jpg"
 		},
 		{
 			name: "ashe",
 			img: "images/img-13.jpg"
 		},
 		{
 			name: "soraka",
 			img: "images/img-14.jpg"
 		},
 		{
 			name: "fiora",
 			img: "images/img-15.jpg"
 		},
 		{
 			name: "teemo",
 			img: "images/img-16.jpg"
 		},
 		{
 			name: "lillia",
 			img: "images/img-17.jpg"
 		},
 		{
 			name: "sett",
 			img: "images/img-18.jpg"
 		},
 		{
 			name: "ezreal",
 			img: "images/img-19.jpg"
 		},
 		{
 			name: "akali",
 			img: "images/img-20.jpg"
 		},
 		{
 			name: "leona",
 			img: "images/img-21.jpg"
 		},
 		{
 			name: "gnar",
 			img: "images/img-22.jpg"
 		},
 		{
 			name: "kaisa",
 			img: "images/img-23.jpg"
 		},
 		{
 			name: "leesin",
 			img: "images/img-24.jpg"
 		},
 		{
 			name: "amumu",
 			img: "images/img-25.jpg"
 		}
 	];

 	iconsArray = iconsArray.sort(() => 0.5 - Math.random());

 	let cardArray = [];
	
	for(let n = 0; n < 2; n++){

 		for(let k = 0; k < 18; k++) {

			cardArray.push(iconsArray[k]);
		}
	}

	cardArray = cardArray.sort(() => 0.5 - Math.random());

 	const grid = document.querySelector('.grid');
 	const resultDisplay = document.querySelector('#result');
 	var cardsChosen = [];
 	var cardsChosenId = [];
 	var cardsWon = [];

 	const jogarButton = document.querySelector('.start');

 	jogarButton.addEventListener('click', event => {

 		grid.innerHTML = 
 						`
						<div class="start" style="display: none">
							JOGAR
						</div>
						`;
 		
 		createBoard();
 	});

 	function createBoard() {

 		for(let i = 1; i <= 36; i++) {

 			var card = document.createElement('img');
 			card.setAttribute('src', 'images/blank.jpg');
 			card.setAttribute('data-id', i);
 			card.setAttribute('width', '100px');
 			card.setAttribute('height', '100px');
 			card.setAttribute('draggable', 'false');
 			card.addEventListener('click', flipCard);
 			grid.appendChild(card);
 		}

 		iconsArray = iconsArray.sort(() => 0.5 - Math.random());

 		cardArray = [];

 		for(let n = 0; n < 2; n++){

	 		for(let k = 0; k < 18; k++) {

				cardArray.push(iconsArray[k]);
			}
		}

		cardArray = cardArray.sort(() => 0.5 - Math.random());

		resultDisplay.textContent = '0';
 		cardsWon = [];
 	}

 	function checkForMatch() {

 		var cards = document.querySelectorAll('img');
 		const optionOneId = cardsChosenId[0];
 		const optionTwoId = cardsChosenId[1];
 		if(cardsChosen[0] === cardsChosen[1] && cardsChosenId[0] != cardsChosenId[1]) {

 			cardsWon.push(cardsChosen);
 			cards[optionOneId - 1].removeEventListener('click', flipCard);
 			cards[optionTwoId - 1].removeEventListener('click', flipCard);
 		}
 		else {

 			cards[optionOneId - 1].setAttribute('src', 'images/blank.jpg');
 			cards[optionTwoId - 1].setAttribute('src', 'images/blank.jpg');
 		}

 		cardsChosen = [];
 		cardsChosenId = [];
 		resultDisplay.textContent = cardsWon.length;

 		if (cardsWon.length === cardArray.length/2) {

 			resultDisplay.textContent = 'Vitória';
 			jogarButton.style.display = 'block';
 		}
 	}

 	function flipCard() {

 		if(cardsChosen.length < 2) {

 			var cardId = this.getAttribute('data-id');
	 		cardsChosen.push(cardArray[cardId - 1].name);
	 		cardsChosenId.push(cardId);
	 		this.setAttribute('src', cardArray[cardId - 1].img);

	 		if (cardsChosen.length === 2) {

	 			setTimeout(checkForMatch, 500);
	 		}
 		}
 	}

 	createBoard();





 }