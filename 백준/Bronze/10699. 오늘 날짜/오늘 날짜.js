const formatter = new Intl.DateTimeFormat('sv-SE', { 
  year: 'numeric',
  month: '2-digit',
  day: '2-digit',
  timeZone: 'Asia/Seoul'
});

console.log(formatter.format(new Date()));