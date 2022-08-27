const ATTACK_VALUE = 10;
const MONSTER_ATTACK_VALUE = 14;
const STRONG_ATTACK_VALUE = 17;
const HEAL_VALUE = 20;
const MODE_ATTACK = 'ATTACK';
const MODE_STRONG_ATTACK = 'STRONG_ATTACK';

const enteredValue = prompt('Maximum life for you and the monster.', '100');

let chosenMaxLife = parseInt(enteredValue);

if (isNaN(chosenMaxLife) || chosenMaxLife <= 0) {
	chosenMaxLife = 100;
}

let hasBonusLife = true;
let currentMonsterHealth = chosenMaxLife;
let currentPlayerHealth = chosenMaxLife;
let battleLog = [];
const LOG_EVENT_PLAYER_ATTACK = 'PLAYER _ATTACK';
const LOG_EVENT_PLAYER_STRONG_ATTACK = 'PLAYER_STRONG_ATTACK';
const LOG_EVENT_MONSTER_ATTACK = 'MONSTER_ATTACK';
const LOG_EVENT_PLAYER_HEAL = 'PLAYER_HEAL';
const LOG_EVENT_GAME_OVER = 'GAME_OVER';

adjustHealthBars(chosenMaxLife);

function writeToLog(ev, val, monsterHealth, playerHealth) {
	let logEntry = {
		event: ev,
		value: val,
		finalMonsterHealth: monsterHealth,
		finalPlayerHealth: playerHealth,
	};
	switch (ev) {
		case LOG_EVENT_PLAYER_ATTACK:
			logEntry.target = 'MONSTER';
			break;
		case LOG_EVENT_PLAYER_STRONG_ATTACK:
			logEntry.target = 'MONSTER';
			break;
		case LOG_EVENT_MONSTER_ATTACK:
			logEntry.target = 'PLAYER';
			break;
		case LOG_EVENT_PLAYER_HEAL:
			logEntry.target = 'PLAYER';
			break;
		default:
			logEntry = {};
	}
	battleLog.push(logEntry);
}

function reset() {
	currentMonsterHealth = chosenMaxLife;
	currentPlayerHealth = chosenMaxLife;
	resetGame(chosenMaxLife);
}

function endRound() {
	const initialPlayerLife = currentPlayerHealth;
	const playerDamage = dealPlayerDamage(MONSTER_ATTACK_VALUE);
	currentPlayerHealth -= playerDamage;
	writeToLog(LOG_EVENT_MONSTER_ATTACK, playerDamage, currentMonsterHealth, currentPlayerHealth);

	if (currentPlayerHealth <= 0 && hasBonusLife) {
		hasBonusLife = false;
		removeBonusLife();
		currentPlayerHealth = initialPlayerLife;
		setPlayerHealth(initialPlayerLife);
		alert('You would be dead but the bonus life saved you!');
	}

	if (currentMonsterHealth <= 0 && currentPlayerHealth > 0) {
		alert('You won');
		writeToLog(LOG_EVENT_GAME_OVER, 'PLAYER WON', currentMonsterHealth, currentPlayerHealth);
	} else if (currentPlayerHealth <= 0 && currentMonsterHealth > 0) {
		alert('You lost!');
		writeToLog(LOG_EVENT_GAME_OVER, 'MONSTER WON', currentMonsterHealth, currentPlayerHealth);
	} else if (currentPlayerHealth <= 0 && currentMonsterHealth <= 0) {
		alert('tie');
		writeToLog(LOG_EVENT_GAME_OVER, 'TIE', currentMonsterHealth, currentPlayerHealth);
	}

	if (currentMonsterHealth <= 0 || currentPlayerHealth <= 0) {
		reset();
	}
}

function attackMonster(mode) {
	const maxDamage = mode === MODE_ATTACK ? ATTACK_VALUE : STRONG_ATTACK_VALUE;
	const logEvent = mode === MODE_ATTACK ? LOG_EVENT_PLAYER_ATTACK : LOG_EVENT_PLAYER_STRONG_ATTACK;
	// if (mode === MODE_ATTACK) {
	// 	maxDamage = ATTACK_VALUE;
	// 	logEvent = LOG_EVENT_PLAYER_ATTACK;
	// } else if (mode === MODE_STRONG_ATTACK) {
	// 	maxDamage = STRONG_ATTACK_VALUE;
	// 	logEvent = LOG_EVENT_PLAYER_STRONG_ATTACK;
	// }
	const damage = dealMonsterDamage(maxDamage);
	currentMonsterHealth -= damage;
	writeToLog(logEvent, damage, currentMonsterHealth, currentPlayerHealth);
	endRound();
}

function attackHandler() {
	attackMonster(MODE_ATTACK);
}

function strongAttackHandler() {
	attackMonster(MODE_STRONG_ATTACK);
}

function healPlayerHandler() {
	let healValue;
	if (currentPlayerHealth >= chosenMaxLife - HEAL_VALUE) {
		alert("You can't heal more than your max initial health.");
		healValue = chosenMaxLife - currentPlayerHealth;
	} else {
		healValue = HEAL_VALUE;
	}
	increasePlayerHealth(HEAL_VALUE);
	currentPlayerHealth += HEAL_VALUE;
	writeToLog(LOG_EVENT_PLAYER_HEAL, healValue, currentMonsterHealth, currentPlayerHealth);
	endRound();
}

function printLogHandler() {
	for (let i = 0; i < 3; i++) {
		console.log('-------');
	}
	let j = 3;
	do {
		console.log(j);
		j++;
	} while (j < 3);
	// for (let i = 10; i > 0; i--) {
	// 	console.log(i);
	// }
	//!for (let i = 10; i > 0;) {
	//!	i--; // this is initialized i before we do something with it
	//! 	console.log(i);
	//! }
	// for (let i = 0; i < battleLog.length; i++) {
	// 	console.log(battleLog[i]);
	// }
	let i = 0;
	for (const logEntry of battleLog) {
		console.log(`#${i}`);
		for (const key in logEntry) {
			console.log(`${key} => ${logEntry[key]}`);
		}
		i++;
	}
	console.log(battleLog);
}

attackBtn.addEventListener('click', attackHandler);
strongAttackBtn.addEventListener('click', strongAttackHandler);
healBtn.addEventListener('click', healPlayerHandler);
logBtn.addEventListener('click', printLogHandler);