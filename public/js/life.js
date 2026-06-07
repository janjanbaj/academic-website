(function() {
    function getRandomHexColorConcise() {
        return "#" + Math.floor(Math.random() * 16777215).toString(16).padStart(6, '0');
    }


    const canvas = document.getElementById('game-of-life-canvas');
    const ctx = canvas.getContext('2d');
    const colors = [getRandomHexColorConcise(), getRandomHexColorConcise(), getRandomHexColorConcise()]

    // Configurationn
    const cellSize = 10; // Size of the squares
    const cellColor = '#1e90ff'; // Google-like blue
    const updateInterval = 100; // Speed in ms (lower is faster)
    const density = 0.1; // 10% of screen initially alive

    let grid = [];
    let cols, rows;
    let animationId;
    let lastTime = 0;

    function resize() {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
        cols = Math.ceil(canvas.width / cellSize);
        rows = Math.ceil(canvas.height / cellSize);
        initGridSpirals();
    }

    function initGrid() {
        grid = new Array(cols).fill(null)
            .map(() => new Array(rows).fill(0)
                .map(() => Math.random() < density ? 1 : 0));
    }

    function initGridSpirals() {
        grid = new Array(cols).fill(null)
            .map(() => new Array(rows).fill(0)
                .map(() => Math.floor(Math.random() * colors.length)));
    }

    function draw() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);

        for (let i = 0; i < cols; i++) {
            for (let j = 0; j < rows; j++) {
                if (grid[i][j]) {
                    ctx.fillStyle = colors[grid[i][j]];
                    ctx.beginPath();
                    // Draw cell slightly smaller than grid to create "grid line" effect
                    ctx.rect(i * cellSize, j * cellSize, cellSize - 2, cellSize - 2);
                    ctx.fill();
                }
            }
        }
    }

    //    function draw() {
    //        ctx.clearRect(0, 0, canvas.width, canvas.height);
    //        ctx.fillStyle = cellColor;
    //        
    //        for (let i = 0; i < cols; i++) {
    //            for (let j = 0; j < rows; j++) {
    //                if (grid[i][j]) {
    //                    ctx.beginPath();
    //                    // Draw cell slightly smaller than grid to create "grid line" effect
    //                    ctx.rect(i * cellSize, j * cellSize, cellSize - 2, cellSize - 2);
    //                    ctx.fill();
    //                }
    //            }
    //        }
    //    }
    //
    function update_spirals() {
        let nextGrid = grid.map(arr => [...arr]);

        for (let i = 0; i < cols; i++) {
            for (let j = 0; j < rows; j++) {
                const state = (grid[i][j] + 1) % colors.length;

                let neighbors = 0;
                for (let x = -1; x < 2; x++) {
                    for (let y = -1; y < 2; y++) {
                        if (x === 0 && y === 0) continue;

                        const col = (i + x + cols) % cols;
                        const row = (j + y + rows) % rows;
                        if (grid[col][row] == state) {
                            neighbors += 1;
                        };

                    }
                    if (neighbors > 2) {
                        nextGrid[i][j] = state;
                        break;
                    }
                }

            }
        }
        grid = nextGrid;
    }

    function update() {
        let nextGrid = grid.map(arr => [...arr]);

        for (let i = 0; i < cols; i++) {
            for (let j = 0; j < rows; j++) {
                const state = grid[i][j];

                // Count live neighbors
                let neighbors = 0;
                for (let x = -1; x < 2; x++) {
                    for (let y = -1; y < 2; y++) {
                        if (x === 0 && y === 0) continue;

                        const col = (i + x + cols) % cols;
                        const row = (j + y + rows) % rows;
                        neighbors += grid[col][row];
                    }
                }

                // Conway's Rules
                if (state === 0 && neighbors === 3) {
                    nextGrid[i][j] = 1; // Reproduction
                } else if (state === 1 && (neighbors < 2 || neighbors > 3)) {
                    nextGrid[i][j] = 0; // Under/Over population
                }
            }
        }
        grid = nextGrid;
    }

    function loop(timestamp) {
        if (timestamp - lastTime > updateInterval) {
            update_spirals();
            draw();
            lastTime = timestamp;
        }
        animationId = requestAnimationFrame(loop);
    }

    // Initialize
    window.addEventListener('resize', resize);
    resize(); // Sets size and inits grid
    requestAnimationFrame(loop);

})();
