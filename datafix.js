export { fixDataSet as default };

export function fixDataSet(data) {
  const graphData = {
    xyear: [],
    ydata: [],
    ydata2: []
  };

  const rowData = [];
  const dataArray = [];
  const letterSplit = data.split(" ");

  data.split(/\n/).forEach(row => {
    rowData.push(row);
  });

  letterSplit.forEach(letter => {
    if (letter != "") {
      dataArray.push(letter);
    }
  });

  graphData.xyear = dataArray
    .map(el => {
      if (el.length > 3) {
        return el;
      }
    })
    .filter(el => el != undefined);

  const tempOnly = dataArray.filter(el => el.length < 4);

  graphData.ydata = tempOnly
    .map((el, index) => {
      if (index % 2 === 0) return el;
    })
    .filter(el => el != undefined);

  graphData.ydata2 = tempOnly
    .map((el, index) => {
      if (index % 2 != 0) {
        return el;
      }
    })
    .filter(el => el != undefined)
    .map(el => el.slice(0,2));

  return graphData;
}
