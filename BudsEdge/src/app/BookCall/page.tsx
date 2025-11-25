"use client";

import { useState } from "react";
import { Calendar, Clock, Globe } from "lucide-react";
import toast from "react-hot-toast";
import bg8 from "../components/assets/bg8.png";

export default function BookCall() {
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [timezone, setTimezone] = useState("");
  const [loading, setLoading] = useState(false);

  const timeSlots = [
    "09:00 AM", "10:00 AM", "11:00 AM",
    "02:00 PM", "03:00 PM", "04:00 PM", "05:00 PM",
  ];

  const timezones = Intl.supportedValuesOf("timeZone");

const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!date || !time || !timezone) {
      toast.error("Please select date, time, and timezone.");
      return;
    }

    setLoading(true);

    const res = await fetch("/api/contact", {
      method: "POST",
      body: JSON.stringify({ date, time, timezone }),
      headers: { "Content-Type": "application/json" },
    });

    setLoading(false);

    if (res.ok) {
      toast.success("Your call is booked! We will contact you soon.");
      setDate("");
      setTime("");
      setTimezone("");
    } else {
      toast.error("Failed to book the call. Try again.");
    }
  };

  return (
    <section
      className="min-h-screen py-20 px-6 text-white bg-cover bg-top relative"
      style={{ backgroundImage: `url(${bg8.src})` }}
    >
      <div className="absolute inset-0 bg-black/60"></div>

      <div className="relative z-10 max-w-lg mx-auto bg-[#0a1628cc] p-10 rounded-xl shadow-lg border border-[#1a2a3a] backdrop-blur-md">

        <h1 className="text-4xl font-bold text-center mb-6">Book a Call</h1>

        <p className="text-gray-300 text-center mb-10">
          Select a date, time, and timezone to schedule a discovery call.
        </p>

        <form onSubmit={handleSubmit} className="space-y-5">

          {/* DATE PICKER */}
          <div className="relative">
           
            <Calendar className="absolute left-3 top-3 text-[#00e0ff] w-5 h-5" />
            <input
              type="date"
              value={date}
              onChange={(e) => setDate(e.target.value)}
              className="w-full p-3 pl-10 rounded-lg bg-[#0f1e33] border border-gray-600 text-white outline-none focus:border-[#00e0ff]"
              required
            />
          </div>

          {/* TIME SLOT */}
          <div className="relative">
            <Clock className="form-icon absolute left-3 top-3 text-[#00e0ff] w-5 h-5" />
            <select
              value={time}
              onChange={(e) => setTime(e.target.value)}
              className="form-input select-input"
              required
            >
              <option value="">Select Time Slot</option>
              {timeSlots.map((slot) => (
                <option key={slot} value={slot}>{slot}</option>
              ))}
            </select>
          </div>

          {/* TIMEZONE */}
          <div className="relative">
            <Globe className="form-icon absolute left-3 top-3 text-[#00e0ff] w-5 h-5" />
            <select
              value={timezone}
              onChange={(e) => setTimezone(e.target.value)}
              className="form-input select-input"
              required
            >
              <option value="">Select Timezone</option>
              {timezones.map((zone) => (
                <option key={zone} value={zone}>{zone}</option>
              ))}
            </select>
          </div>

          {/* BUTTON */}
          <button
            type="submit"
            disabled={loading}
            className={`
              w-full py-3 rounded-lg text-white font-semibold text-lg tracking-wide
              bg-gradient-to-r from-[#007bff] to-[#00c8ff]
              shadow-lg shadow-[#00e0ff55]
              flex items-center justify-center gap-3 transition-all
              ${loading ? "opacity-70 cursor-not-allowed" : "hover:brightness-110"}
            `}
          >
            {loading ? (
              <>
                <span className="loader"></span> Booking...
              </>
            ) : (
              "Confirm Booking"
            )}
          </button>
        </form>
      </div>

      {/* STYLES */}
      <style jsx>{`
        .form-icon {
          position: absolute;
          left: 12px;
          top: 12px;
          width: 20px;
          height: 20px;
          color: #00e0ff;
        }

        .form-input {
          width: 100%;
          padding: 12px;
          padding-left: 42px;
          border-radius: 0.5rem;
          background: #0f1e33;
          border: 1px solid #4b5563;
          color: white;
          outline: none;
          transition: 0.3s ease;
        }

        .form-input:focus {
          border-color: #00e0ff;
        }

        /* Fix dropdown arrow spacing */
        .select-input {
          padding-right: 2.7rem;
        }

        .loader {
          width: 20px;
          height: 20px;
          border: 2px solid white;
          border-top-color: transparent;
          border-radius: 50%;
          display: inline-block;
          animation: spin 0.7s linear infinite;
        }

        @keyframes spin {
          to {
            transform: rotate(360deg);
          }
        }
      `}</style>
    </section>
  );
}
