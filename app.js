let data = [
    ['St Nr', 'First Name', 'Last Name', 'Location', 'Path'],
    ['C2345', 'Jane', 'Doe', 'London', 'Data-Science'],
    ['C2346', 'Mary','Ann', 'Paris', 'AWS-Devops'],
    ['C2347',  'Adam','Smith', 'Texas', 'AWS-Devops'],
    ['C2555',' William','Cash', 'Manchester', 'Data-Science'],
    ['C2444', 'Michael', 'Great', 'Arizona', 'Full-Stack'],
    ['C2455' ,'Patrick' , 'Jane', 'Madrid', 'Full-Stack']];
  
  function getCells(data, type) {
    return data.map(cell => `<${type}>${cell}</${type}>`).join('');
  }
  
  function createBody(data) {
    return data.map(row => `<tr>${getCells(row, 'td')}</tr>`).join('');
  }
  
  function createTable(data) {
    const [headings, ...rows] = data;

    return `
      <table>
        <thead>${getCells(headings, 'th')}</thead>
        <tbody>${createBody(rows)}</tbody>
      </table>
    `;
  };
  document.body.insertAdjacentHTML('beforeend', createTable(data));