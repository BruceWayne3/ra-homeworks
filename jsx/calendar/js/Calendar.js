const daysTitles = [
    'Воскресенье',
    'Понедельник',
    'Вторник',
    'Среда',
    'Четверг',
    'Пятница',
    'Суббота'
];
const monthsTitles = [
    {name: 'Январь', genitive: 'января'},
    {name: 'Февраль', genitive: 'февраля'},
    {name: 'Март', genitive: 'марта'},
    {name: 'Апрель', genitive: 'апреля'},
    {name: 'Май', genitive: 'мая'},
    {name: 'Июнь', genitive: 'июня'},
    {name: 'Июль', genitive: 'июля'},
    {name: 'Август', genitive: 'августа'},
    {name: 'Сентябрь', genitive: 'сентября'},
    {name: 'Октябрь', genitive: 'октября'},
    {name: 'Ноябрь', genitive: 'ноября'},
    {name: 'Декабрь', genitive: 'декабря'}
];

const Calendar = function({date}) {
let previosMonthLastDay = (new Date(date.getFullYear(), date.getMonth(), 0)).getDate();
let currentMonthFirstCalendarDay = (new Date(date.getFullYear(), date.getMonth(), 1)).getDay();
if (currentMonthFirstCalendarDay === 0) {
  currentMonthFirstCalendarDay = 7;
}
let firstCalendarDay = previosMonthLastDay - currentMonthFirstCalendarDay + 2;
let currentMonthDays = (new Date(date.getFullYear(), date.getMonth() + 1, 0)).getDate();
let day = 1;
let nextMonthDay = 1;

function weeks() {
  let days = [];
  for(let i = 0; i < 5; i++) {
  days[i] = [];
  for(let j = 0; j < 7; j++) {
    if(day === currentMonthDays + 1) {
      days[i][j] = <td className='ui-datepicker-other-month'>{nextMonthDay++}</td>;
      } else if (firstCalendarDay === previosMonthLastDay + 1 || currentMonthFirstCalendarDay === 1) {
        if (day === date.getDate()) {
          days[i][j] = <td className='ui-datepicker-today'>{day++}</td>;
        } else {
          days[i][j] = <td>{day++}</td>;
        }
      } else {
        days[i][j] = <td className='ui-datepicker-other-month'>{firstCalendarDay++}</td>;
      }
  }
}
return days;
}

  return (
    <div className='ui-datepicker'>
  <div className='ui-datepicker-material-header'>
    <div className='ui-datepicker-material-day'>{daysTitles[date.getDay()]}</div>
    <div className='ui-datepicker-material-date'>
      <div className='ui-datepicker-material-day-num'>{date.getDate()}</div>
      <div className='ui-datepicker-material-month'>{monthsTitles[date.getMonth()].genitive}</div>
      <div className='ui-datepicker-material-year'>{date.getFullYear()}</div>
    </div>
  </div>
  <div className='ui-datepicker-header'>
    <div className='ui-datepicker-title'>
      <span className='ui-datepicker-month'>{monthsTitles[date.getMonth()].name}</span>&nbsp;<span className='ui-datepicker-year'>{date.getFullYear()}</span>
    </div>
  </div>
  <table className='ui-datepicker-calendar'>
    <colgroup>
      <col/>
      <col/>
      <col/>
      <col/>
      <col/>
      <col className='ui-datepicker-week-end'/>
      <col className='ui-datepicker-week-end'/>
    </colgroup>
    <thead>
      <tr>
        <th scope='col' title='Понедельник'>Пн</th>
        <th scope='col' title='Вторник'>Вт</th>
        <th scope='col' title='Среда'>Ср</th>
        <th scope='col' title='Четверг'>Чт</th>
        <th scope='col' title='Пятница'>Пт</th>
        <th scope='col' title='Суббота'>Сб</th>
        <th scope='col' title='Воскресенье'>Вс</th>
      </tr>
    </thead>
    <tbody>
        {weeks().map(function(week) {
  return <tr>{week}</tr>
})}
    </tbody>
  </table>
</div>)
}
