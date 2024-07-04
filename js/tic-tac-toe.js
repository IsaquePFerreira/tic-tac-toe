const ticTacToe = {
	board: ['', '', '', '', '', '', '', '', ''],
	symbols: {
		options: ['X', 'O'],
		turnIndex: 0,
		change: function() {
			this.turnIndex = (this.turnIndex === 0 ? 1 : 0)
		}
	},
	containerElement: null,
	gameover: false,
	winningSequences: [
		[0, 1, 2],
		[3, 4, 5],
		[6, 7, 8],
		[0, 3, 6],
		[1, 4, 7],
		[2, 5, 8],
		[0, 4, 8],
		[2, 4, 6],
	],

	init: function(container) {
		this.containerElement = container
	},

	makePlay: function(position) {
		if(this.gameover) return false;
		if(this.board[position] === '') {
			this.board[position] = this.symbols.options[this.symbols.turnIndex]
			this.draw()
			let winningSequencesIndex = this.checkWiningSequences(this.symbols.options[this.symbols.turnIndex])
			if(winningSequencesIndex >= 0) {
				this.gameIsOver()	
			} else {
				this.symbols.change()
			}
			return true
		} else {
			return false
		}
	},

	gameIsOver: function() {
		this.gameover = true
		console.log('GAME OVER!')
	},

	checkWiningSequences: function(symbol) {
		for(i in this.winningSequences) {
			if(
				this.board[this.winningSequences[i][0]] == symbol &&
				this.board[this.winningSequences[i][1]] == symbol &&
				this.board[this.winningSequences[i][2]] == symbol
			) {
				console.log('[winner sequense]', i)
				return i
			}
		}
	},

	draw: function() {
		let content = ''

		for(i in this.board) {
			content += '<div onclick="ticTacToe.makePlay(' + i + ')">' + this.board[i] + '</div>'	
		}

		this.containerElement.innerHTML = content
	},

	start: function() {
		this.board.fill('')	
		this.draw()
		this.gameover = false
	}

}
