import { useState, useMemo } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Calendar from "../components/Calendar";
import "../css/iddat.css";

/* ---------------- IDDAH CALCULATIONS ---------------- */

function calculateWidowIddah(startDate) {
  const end = new Date(startDate);
  end.setMonth(end.getMonth() + 4);
  end.setDate(end.getDate() + 10);
  return end;
}

function calculateDivorceIddah(startDate) {
  const end = new Date(startDate);
  end.setDate(end.getDate() + 90); // simplified approximation
  return end;
}

function Iddat() {
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [type, setType] = useState("death");

  /* ---------------- DETERMINE END DATE ---------------- */

  const endDate = useMemo(() => {
    return type === "death"
      ? calculateWidowIddah(selectedDate)
      : calculateDivorceIddah(selectedDate);
  }, [selectedDate, type]);

  /* ---------------- DAYS REMAINING ---------------- */

  const daysRemaining = useMemo(() => {
    const today = new Date();
    const diff = endDate - today;
    return Math.max(
      0,
      Math.ceil(diff / (1000 * 60 * 60 * 24))
    );
  }, [endDate]);

  return (
    <>
      <Navbar />

      <section className="iddat-container">
        <h1 className="iddat-title">
          Iddat Period Calculator
        </h1>

        <div className="iddat-controls">
          <label htmlFor="iddat-type">
            Select Type of Iddat:
          </label>

          <select
            id="iddat-type"
            value={type}
            onChange={(e) =>
              setType(e.target.value)
            }
          >
            <option value="divorce">
              Divorce (Approx. 3 cycles)
            </option>
            <option value="death">
              Death of Husband (4 Months 10 Days)
            </option>
          </select>
        </div>

        <div className="calendar-section">
          <Calendar
            selectedDate={selectedDate}
            onDateChange={setSelectedDate}
            highlightRange={{
              start: selectedDate,
              end: endDate,
            }}
          />
        </div>

        <div className="iddat-results">
          <h3>Start Date:</h3>
          <p>
            {selectedDate.toDateString()}
          </p>

          <h3>End Date:</h3>
          <p>
            {endDate.toDateString()}
          </p>

          <h3>Days Remaining:</h3>
          <p>
            {daysRemaining > 0
              ? `${daysRemaining} days remaining`
              : "Iddat period completed"}
          </p>
        </div>
      </section>

      <Footer />
    </>
  );
}

export default Iddat;
