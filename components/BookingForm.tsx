"use client";

import { motion } from "framer-motion";
import { Calendar, MapPin, Search } from "lucide-react";
import { useState } from "react";

export default function BookingForm() {
  const [source, setSource] = useState("");
  const [destination, setDestination] = useState("");
  const [date, setDate] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log({ source, destination, date });
    alert("Search functionality would be implemented here!");
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="bg-secondary/50 backdrop-blur-md p-8 rounded-2xl border border-white/10 shadow-2xl w-full max-w-4xl"
    >
      <form onSubmit={handleSubmit} className="flex flex-col md:flex-row gap-4 items-end">
        {/* Source Input */}
        <div className="flex-1 w-full space-y-2">
          <label className="text-sm text-gray-400 font-medium ml-1">From</label>
          <div className="relative group">
            <MapPin className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-500 group-focus-within:text-primary transition-colors" />
            <input
              type="text"
              placeholder="Enter Source"
              value={source}
              onChange={(e) => setSource(e.target.value)}
              className="w-full bg-black/40 border border-white/10 rounded-xl py-3 pl-10 pr-4 text-white focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/50 transition-all placeholder:text-gray-600"
              required
            />
          </div>
        </div>

        {/* Destination Input */}
        <div className="flex-1 w-full space-y-2">
          <label className="text-sm text-gray-400 font-medium ml-1">To</label>
          <div className="relative group">
            <MapPin className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-500 group-focus-within:text-primary transition-colors" />
            <input
              type="text"
              placeholder="Enter Destination"
              value={destination}
              onChange={(e) => setDestination(e.target.value)}
              className="w-full bg-black/40 border border-white/10 rounded-xl py-3 pl-10 pr-4 text-white focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/50 transition-all placeholder:text-gray-600"
              required
            />
          </div>
        </div>

        {/* Date Input */}
        <div className="flex-1 w-full space-y-2">
          <label className="text-sm text-gray-400 font-medium ml-1">Date</label>
          <div className="relative group">
            <Calendar className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-500 group-focus-within:text-primary transition-colors" />
            <input
              type="date"
              value={date}
              onChange={(e) => setDate(e.target.value)}
              className="w-full bg-black/40 border border-white/10 rounded-xl py-3 pl-10 pr-4 text-white focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/50 transition-all placeholder:text-gray-600 [color-scheme:dark]"
              required
            />
          </div>
        </div>

        {/* Submit Button */}
        <div className="w-full md:w-auto">
          <button
            type="submit"
            className="w-full bg-primary text-primary-foreground h-[50px] px-8 rounded-xl font-semibold hover:bg-yellow-500 transition-colors flex items-center justify-center gap-2"
          >
            <Search className="w-5 h-5" />
            Search
          </button>
        </div>
      </form>
    </motion.div>
  );
}
