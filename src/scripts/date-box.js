(() => {
  function parseDate(dateTime) {
    const date = dateTime.split(' ')[0]
    const [month, day, year] = date.split('-').map(Number)
    return new Date(year, month - 1, day)
  }

  const template = document.createElement('template')
  template.innerHTML = `
    <style>
      * {
        box-sizing: border-box;
        line-height: normal;
      }

      .date-card {
        width: 80px;
        padding: 5px;
        border: 1px solid #ccc;
        text-align: center;
        background-color: white;
        color: black;
        display: inline-block;
      }

      .month {
        font-size: 14px;
        text-transform: uppercase;
      }

      .date {
        font-size: 25px;
        font-weight: bold;
      }

      .day {
        font-size: 14px;
        text-transform: uppercase;
      }
    </style>
    <div class="date-card">
      <div class="month"></div>
      <div class="date"></div>
      <div class="day"></div>
    </div>
  `

  class DateBox extends HTMLElement {
    constructor() {
      super()
      this.attachShadow({ mode: 'open' })
      this.shadowRoot.appendChild(template.content.cloneNode(true))
    }

    connectedCallback() {
      const date = parseDate(this.getAttribute('date-time'))

      const monthElement = this.shadowRoot.querySelector('.month')
      monthElement.textContent = date.toLocaleString('en-US', { month: 'short' })

      const dateElement = this.shadowRoot.querySelector('.date')
      dateElement.textContent = date.getDate()

      const dayElement = this.shadowRoot.querySelector('.day')
      dayElement.textContent = date.toLocaleString('en-US', { weekday: 'short' }).toUpperCase()
    }
  }

  customElements.define('date-box', DateBox)

  return DateBox
})()