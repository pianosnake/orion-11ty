(() => {
  const template = document.createElement('template');
  template.innerHTML = `
    <style>
      * {
        box-sizing: border-box;
        line-height: normal;
      }

      .concert-calendar {
        display: flex;
        flex-direction: column;
        align-items: center;
        width: 300px;
        margin-left: auto;
        margin-right: auto;
      }
    
      .dates{
        display: flex;
      }

      .date-card {
        width: 80px;
        padding: 5px;
        margin: 10px;
        border: 1px solid #ccc;
        text-align: center;
        background-color: white;
        color: black;
      }
    
      .upper {
        font-size: 14px;
        text-transform: uppercase;
      }
    
      .date {
        font-size: 25px;
        font-weight: bold;
      }
    
      .title {
        font-size: 1.2rem;
        font-weight: 500;
        margin-top: 5px;
      }
      
    </style>
    <div class="concert-calendar">
      <div class="title"></div>
      <div class="dates"></div>
    </div>
  `;

  function parseDate(dateAndTime) {
    const date = dateAndTime.substring(0, dateAndTime.indexOf(' ')) || dateAndTime;
    const time = dateAndTime.substring(dateAndTime.indexOf(' ') + 1);
    const [month, day, year] = date.split('-').map(Number);
    return {
      date: new Date(year, month - 1, day),
      time: (time !== date) ? time : null
    }
  }

  class ConcertCalendar extends HTMLElement {
    constructor() {
      super();
      this.attachShadow({ mode: 'open' });
      this.shadowRoot.appendChild(template.content.cloneNode(true));
    }

    connectedCallback() {
      const title = this.getAttribute('title');
      const { date: date1, time: time1 } = parseDate(this.getAttribute('date1'));
      const { date: date2, time: time2 } = parseDate(this.getAttribute('date2'));
      const { date: date3, time: time3 } = parseDate(this.getAttribute('date3'));
      const dateContainer = this.shadowRoot.querySelector('.dates');
      const titleElement = this.shadowRoot.querySelector('.title');
      titleElement.textContent = title;

      const dates = [date1, date2, date3];
      const times = [time1, time2, time3]

      for (var i = 0; i < dates.length; i++) {
        const date = dates[i];
        const time = times[i];

        const dateCard = document.createElement('div');
        dateCard.classList.add('date-card');

        const monthElement = document.createElement('div');
        monthElement.classList.add('upper');
        monthElement.textContent = date.toLocaleString('en-US', { month: 'short' });

        const dateElement = document.createElement('div');
        dateElement.classList.add('date');
        dateElement.textContent = date.getDate();

        const dayElement = document.createElement('div');
        dayElement.classList.add('upper');
        dayElement.textContent = date.toLocaleString('en-US', { weekday: 'short' }).toUpperCase();

        const timeElement = document.createElement('div');
        timeElement.classList.add('upper');
        timeElement.textContent = time;

        dateCard.appendChild(monthElement);
        dateCard.appendChild(dateElement);
        dateCard.appendChild(dayElement);
        if(time) dateCard.appendChild(timeElement);
        dateContainer.appendChild(dateCard);
      }
    }
  }

  customElements.define('concert-calendar', ConcertCalendar);

  return ConcertCalendar;
})();
