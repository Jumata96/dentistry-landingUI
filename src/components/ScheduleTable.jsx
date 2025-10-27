import React from "react";

export default function ScheduleTable({ data }) {
  return (
    <div className="overflow-auto rounded-xl border bg-white">
      <table className="w-full border-separate border-spacing-0 text-sm" role="table">
        <thead className="bg-soft">
          <tr>
            <th scope="col" className="px-4 py-3 text-left font-semibold">Día</th>
            <th scope="col" className="px-4 py-3 text-left font-semibold">Horario</th>
          </tr>
        </thead>
        <tbody>
          {data.map((row) => (
            <tr key={row.day} className="border-t">
              <th scope="row" className="whitespace-nowrap px-4 py-3 text-left">{row.day}</th>
              <td className="px-4 py-3">{row.hours}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
