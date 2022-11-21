var addDays = require("date-fns/addDays");

let result_date = (days) => {
  let date = addDays(new Date(2020, 07, 22), days);
  let year = date.getFullYear();
  let month = date.getMonth();
  let day = date.getDay();
  let final = `${year}-${month}-${day}`;
  return final;
};
module.exports = result_date;
console.log(result_date(10));
echo "# sample_doc" >> README.md

