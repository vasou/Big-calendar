"use client";
import { useState } from "react";
import { Calendar, Views, dateFnsLocalizer } from "react-big-calendar";
import format from "date-fns/format";
import parse from "date-fns/parse";
import startOfWeek from "date-fns/startOfWeek";
import getDay from "date-fns/getDay";
import enUS from "date-fns/locale/en-US";
import "react-big-calendar/lib/css/react-big-calendar.css";
import event from "@/app/data/events";

const locales = {
  "en-US": enUS,
};

const localizer = dateFnsLocalizer({
  format,
  parse,
  startOfWeek,
  getDay,
  locales,
});

const MyCalendar = (props: any) => {
  const [view, setView] = useState(Views.MONTH);
  const [date, setDate] = useState(new Date());
  return (
    <div style={{ height: "100vh" }}>
      <Calendar
        localizer={localizer}
        events={event}
        views={[Views.MONTH, Views.WEEK, Views.DAY]}
        defaultView={view}
        view={view} // Include the view prop
        date={date} // Include the date prop
        onView={(view) => setView(view)}
        onNavigate={(date) => {
          setDate(new Date(date));
        }}
        startAccessor="start"
        endAccessor="end"
      />
    </div>
  );
};

export default MyCalendar;
