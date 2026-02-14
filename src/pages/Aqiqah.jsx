import { useState, useMemo } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Calendar from "../components/Calendar";
import "../css/Aqiqah.css";

/* ---------------- CALCULATION LOGIC ---------------- */

/*
  Aqiqah is performed on:
  - 7th day (preferred)
  - If missed: 14th or 21st day (we can extend later)

  Day of birth = Day 1
  So we add 6 days to reach 7th day
*/

function calculateAqiqahDate(birthDate) {
  const date = new Date(birthDate);
  date.setDate(date.getDate() + 6);
  return date;
}

function Aqiqah() {
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [gender, setGender] = useState("boy");

  /* ---------------- COMPUTE AQIQAH DATE ---------------- */

  const aqiqahDate = useMemo(() => {
    return calculateAqiqahDate(selectedDate);
  }, [selectedDate]);

  /* ---------------- ANIMAL INFO ---------------- */

  const animalInfo =
    gender === "boy"
      ? "Two goats are recommended for a boy."
      : "One goat is recommended for a girl.";

  return (
    <>
      <Navbar />

      <section className="aqiqah-container">
        <h1 className="aqiqah-title">
          Aqiqah Date Calculator
        </h1>

        <div className="aqiqah-controls">
          <div className="control-group">
            <label>
              Select Child's Gender:
            </label>

            <select
              value={gender}
              onChange={(e) =>
                setGender(e.target.value)
              }
            >
              <option value="boy">Boy</option>
              <option value="girl">Girl</option>
            </select>
          </div>

          <div className="info-box">
            <p>{animalInfo}</p>
          </div>
        </div>

        <div className="calendar-section">
          <Calendar
            selectedDate={selectedDate}
            onDateChange={setSelectedDate}
            highlightDates={[aqiqahDate]}
          />
        </div>

        <div className="aqiqah-results">
          <h3>Birth Date:</h3>
          <p>
            {selectedDate.toDateString()}
          </p>

          <h3>Recommended Aqiqah Date (7th Day):</h3>
          <p>
            {aqiqahDate.toDateString()}
          </p>
        </div>
      </section>

      <Footer />
    </>
  );
}

export default Aqiqah;
