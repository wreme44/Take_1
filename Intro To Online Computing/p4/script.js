$(document).ready(function() {
    const gameBoard = $('#gameBoard');
    const message = $('#message');
    let currentPlayer = 'user';
    let gameActive = true;

    // Initialize the game board
    function initializeGame() {
        gameBoard.empty();
        for (let i = 0; i < 9; i++) {
            gameBoard.append('<div></div>');
        }
        currentPlayer = 'user';
        gameActive = true;
        message.text('');
    }

    initializeGame();

    // Handle cell click
    gameBoard.on('click', 'div', function() {
        if ($(this).text() === '' && currentPlayer === 'user' && gameActive) {
            $(this).text('X').addClass('user');
            if (!checkForWinner()) {
                currentPlayer = 'computer';
                setTimeout(computerMove, 300);
            }
        }
    });

    function computerMove() {
        if (!gameActive) return;

        let emptyCells = gameBoard.find('div').filter(function() {
            return $(this).text() === '';
        });

        if (emptyCells.length > 0) {
            let randomCell = Math.floor(Math.random() * emptyCells.length);
            $(emptyCells[randomCell]).text('COMP').addClass('computer');
            currentPlayer = 'user';
            checkForWinner();
        }
    }

    function checkForWinner() {
        const winPatterns = [
            [0, 1, 2], [3, 4, 5], [6, 7, 8], // Rows
            [0, 3, 6], [1, 4, 7], [2, 5, 8], // Columns
            [0, 4, 8], [2, 4, 6]             // Diagonals
        ];

        let board = [];
        $('#gameBoard div').each(function() {
            board.push($(this).text());
        });

        for (let i = 0; i < winPatterns.length; i++) {
            const [a, b, c] = winPatterns[i];
            if (board[a] && board[a] === board[b] && board[a] === board[c]) {
                gameActive = false;
                message.text(`Player ${board[a]} wins!`);
                return true;
            }
        }

        if (!board.includes('')) {
            gameActive = false;
            message.text("It's a tie!");
            return true;
        }

        return false;
    }

    $('#restartButton').click(function() {
        initializeGame();
    });
});
