export const generateMatrix = (numRows, numCols) => {
  const row = Array(numCols).fill(false);
  const matrix = row.map(() => [...row]);
  return matrix;
};

const createTable = (id, size, coordinates) => ({
  id,
  size,
  coordinates,
});

export const generateTables = (inputMatrix) => {
  const matrix = inputMatrix.map(row => [...row]);

  const tables = [];
  let tableId = 0;

  for (let row = 0; row < matrix.length; row += 1) {
    for (let col = 0; col < matrix[0].length; col += 1) {
      const square = matrix[row][col];
      matrix[row][col] = 0;

      if (square) {
        let size = 2;
        const coordinates = [[row, col]];
        tableId += 1;

        // Add adjacent squares in row
        let squaresInRow = 1;
        let nextCol = col + 1;
        while (matrix[row][nextCol]) {
          size += 2;
          squaresInRow += 1;
          coordinates.push([row, nextCol]);
          matrix[row][nextCol] = false;
          nextCol += 1;
        }

        // Add adjacent squares in columns
        for (let i = 0; i < squaresInRow; i += 1) {
          let nextRow = row + 1;
          while (matrix[nextRow] && matrix[nextRow][col + i]) {
            size += 2;
            coordinates.push([nextRow, col + i]);
            matrix[nextRow][col + i] = false;
            nextRow += 1;
          }
        }

        const newTable = createTable(tableId, size, coordinates);

        tables.push(newTable);
      }
    }
  }
  console.log(inputMatrix);
  return tables;
};


export const getMatrixFromCoordinates = (tables) => {
  const matrix = generateMatrix(10, 10);
  tables.forEach((table) => {
    table.coordinates.forEach((coordinate) => {
      const [row, col] = coordinate;
      matrix[row][col] = 1;
    });
  });
  return matrix;
};

