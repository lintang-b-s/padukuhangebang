"use client";
import { Skeleton } from "@/components/ui/skeleton";
import { fetchEvents } from "@/lib/api";
import { CalendarEvent, EventSaptosari } from "@/type/type";
import moment from "moment";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import {
  Calendar,
  momentLocalizer,
  Views,
  ToolbarProps,
} from "react-big-calendar";
import { FaArrowRight } from "react-icons/fa";
import "react-big-calendar/lib/css/react-big-calendar.css";
import "moment/locale/id";

moment.locale("id");
const mLocalizer = momentLocalizer(moment);

function Events() {
  const [currentEvents, setCurrentEvents] = React.useState<EventSaptosari[]>(
    []
  );

  const [startDate, setStartDate] = useState<Date>(new Date());

  const [calendarEvents, setCalendarEvents] = useState<CalendarEvent[]>([]);
  const [endDateView, setEndDateView] = useState<Date>(new Date());

  useEffect(() => {
    fetchEvents().then((data) => {
      const now = new Date();
      const futureEvents = data.filter((event) => event.startDate > now);
      const pastEvents = data.filter((event) => event.startDate <= now);

      let sortedEvents: EventSaptosari[] = [];
      if (futureEvents.length > 0) {
        let sortedFutureEvents = futureEvents.sort(
          (a, b) => a.startDate.getTime() - b.startDate.getTime()
        );
        sortedEvents.push(...sortedFutureEvents);
      }

      let sortedPastEvents = pastEvents.sort(
        (a, b) => b.startDate.getTime() - a.startDate.getTime()
      );
      sortedEvents.push(...sortedPastEvents);

      setCurrentEvents(sortedEvents);
      let dataStartDate = sortedEvents[0].startDate;

      setStartDate(dataStartDate);
      setEndDateView(sortedEvents[sortedEvents.length - 1].endDate);

      const calEvents = data.map((e) => ({
        title: e?.name!,
        start: e?.startDate!,
        end: e?.endDate!,
      }));
      setCalendarEvents(calEvents);
    });
  }, []);

  return (
    <div className="flex flex-col gap-y-4 pl-1 pr-6 pt-4 container  ">
      <h2 className="hyphens-auto font-bold">Kegiatan Desa</h2>
      <a
        className="group cursor-pointer flex items-center  gap-x-2"
        href={`/events`}
      >
        <span className="!text-[#F3C725] hover:text-[#dfc979] text-lg">
          Show all
        </span>
        <FaArrowRight
          color="#F3C725"
          className="group-hover:animate-seemore-next"
        />
      </a>

      <div className="flex flex-col gap-y-2 sm:grid sm:grid-cols-2 md:grid-cols-3 ">
        {currentEvents.length > 0
          ? currentEvents.slice(0, 9).map((event, index) => {
              const shortMonth = event.startDate.toLocaleString("en-US", {
                month: "short",
              });

              return (
                <a
                  key={index}
                  className="grid grid-cols-2 sm:grid-cols-1 gap-1 items-center justify-center group"
                  href={`/events/${event.name}`}
                >
                  <div
                    className="relative w-40 h-34 sm:w-52 sm:h-38 md:w-62 md:h-48 lg:w-90 lg:h-70
              group-hover:scale-[98%] group-active:scale-[98%] rounded-lg transition-all duration-400 ease-in-out overflow-hidden"
                  >
                    <Image
                      src={event.thumbnail!}
                      alt={event.name}
                      fill
                      className="rounded-lg object-cover group-hover:scale-110 group-active:scale-110
                   transform ease-in-out duration-400 transition-transform"
                    />

                    <div
                      className="absolute bottom-1 left-1 flex flex-row gap-1 items-start justify-between
                 bg-white shadow-md rounded-xl p-4"
                    >
                      <span className="text-[8px] md:text-[16px] font-bold">
                        From
                      </span>
                      <div className="flex flex-col  ">
                        <span className=" font-bold md:text-3xl">
                          {event.startDate.getDate()}{" "}
                        </span>
                        <span className="text-sm font-bold  md:text-xl">
                          {shortMonth}{" "}
                        </span>
                      </div>
                    </div>
                  </div>

                  <div className="flex flex-col gap-y-1 sm:gap-y-0 sm:mt-2">
                    <span className="text-lg font-bold md:text-2xl">
                      {event.name}
                    </span>
                    <span className="mt-3 !text-[#686867]">
                      {event.kelurahan},{" "}
                      {moment(event.startDate).format("D MMMM YYYY")} -{" "}
                      {moment(event.endDate).format("D MMMM YYYY")}
                    </span>
                  </div>
                </a>
              );
            })
          : Array.from({ length: 9 }).map((_, index) => (
              <Skeleton
                key={index}
                className="group relative w-full h-full sm:max-w-[250px] sm:max-h-[195px]  lg:max-w-[350px] lg:max-h-[260px] aspect-square 
                 flex-shrink-0 cursor-pointer  hover:scale-[98%] active:scale-[98%]
                             transition-all duration-400 ease-in-out overflow-hidden"
              />
            ))}
      </div>

      <div className="w-[95%] h-[70vh] mt-3 mx-auto">
        {currentEvents.length > 0 ? (
          <Calendar
            toolbar={true}
            components={{
              toolbar: CustomToolbar,

              eventWrapper: ({ event }: { event: CalendarEvent }) => (
                <div className="bg-[#F3C725] p-[1px] text-sm pl-1 text-white rounded-tl-lg rounded-tr-lg">
                  {event.title}
                </div>
              ),
            }}
            formats={{
              agendaHeaderFormat: ({ start, end }) =>
                `${moment(start).format("DD MMMM YYYY")} - ${moment(end).format(
                  "DD MMMM YYYY"
                )}`,
            }}
            date={startDate}
            events={calendarEvents}
            localizer={mLocalizer}
            max={endDateView}
            onNavigate={(newDate) => setStartDate(newDate)}
            showMultiDayTimes
            step={60}
            defaultView={Views.AGENDA}
            views={Object.keys(Views).map(
              (k) => Views[k as keyof typeof Views]
            )}
          />
        ) : (
          <Skeleton className="w-full h-full" />
        )}
      </div>
    </div>
  );
}

function CustomToolbar({
  label,
  onNavigate,
  onView,
  view,
  views,
}: ToolbarProps<CalendarEvent, object>) {
  console.log("label: ", label);
  return (
    <div className="flex items-center justify-between mb-2">
      <button
        className="flex items-center justify-center p-2 border-1 border-[#e2e0d6] rounded-lg hover:bg-[#e2e0d6]
        hover:text-black transition-colors duration-300"
        onClick={() => onNavigate("PREV")}
      >
        Prev
      </button>
      <span className="font-bold">{label}</span>
      <button
        className="flex items-center justify-center p-2 border-1 border-[#e2e0d6] rounded-lg hover:bg-[#e2e0d6]
        hover:text-black transition-colors duration-300"
        onClick={() => onNavigate("NEXT")}
      >
        Next
      </button>
    </div>
  );
}

export default Events;
