import "@testing-library/jest-dom/extend-expect"
import { render } from "@testing-library/react"
import { getDate, getDay } from "date-fns"
import React from "react"
import { Calendar } from "../Calendar"

test("should render CalendarDate component", () => {
  const initialMonth = new Date(2021, 4, 1)
  const locales = "default"

  render(
    <Calendar
      initialMonth={initialMonth}
      initialSelectedDates={[]}
      locales={locales}
    >
      <Calendar.Weekday>
        {({ date, day, long, short, narrow }) => {
          expect(day).toEqual(getDay(date))
          expect(long).toEqual(
            date.toLocaleString(locales, { weekday: "long" })
          )
          expect(short).toEqual(
            date.toLocaleString(locales, { weekday: "short" })
          )
          expect(narrow).toEqual(
            date.toLocaleString(locales, { weekday: "narrow" })
          )

          return <></>
        }}
      </Calendar.Weekday>

      <Calendar.Date>
        {({ date, dayOfMonth, weekday }) => {
          expect(dayOfMonth).toEqual(getDate(date.value))
          expect(weekday).toEqual(getDay(date.value))

          return <></>
        }}
      </Calendar.Date>
    </Calendar>
  )
})
