import "./BookTable.css";

const BookTable = () => {
  return (
    <section className="book-table-section">
      <div className="book-table-header">
        <h1>Book A Table</h1>
        <p>
          We consider all the drivers of change gives you the components
          <br />
          you need to change to create a truly happens.
        </p>
      </div>

      <div className="booking-card">
        <form className="booking-form">
          <div className="form-row">
            <div className="form-group">
              <label>Date</label>
              <input type="date" />
            </div>

            <div className="form-group">
              <label>Time</label>
              <select>
                <option>06:30 PM</option>
                <option>07:00 PM</option>
                <option>07:30 PM</option>
                <option>08:00 PM</option>
              </select>
            </div>
          </div>

          <div className="form-row">
            <div className="form-group">
              <label>Name</label>
              <input type="text" placeholder="Enter your name" />
            </div>

            <div className="form-group">
              <label>Phone</label>
              <input type="tel" placeholder="x-xxx-xxx-xxxx" />
            </div>
          </div>

          <div className="form-group">
            <label>Total Person</label>
            <select>
              <option>1 Person</option>
              <option>2 Person</option>
              <option>3 Person</option>
              <option>4 Person</option>
              <option>5+ Person</option>
            </select>
          </div>

          <button type="submit" className="book-btn">
            Book A Table
          </button>
        </form>
      </div>
    </section>
  );
};

export default BookTable;