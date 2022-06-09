import { useState } from "react"

export default function RatingSelect({ select }) {
  const [selected, setSelected] = useState(10);
  const handleChange = e => {
    setSelected(+e.currentTarget.value);
    select(+e.currentTarget.value);
  };

  return (
    <form className="rating">
      <label>
        <input
          type="radio"
          id="num1"
          name="stars"
          value="1"
          onChange={handleChange}
          checked={selected === 1}
        />
        <span className="icon">★</span>
      </label>
      <label>
        <input
          type="radio"
          id="num2"
          name="stars"
          value="2"
          onChange={handleChange}
          checked={selected === 2}
        />
        <span className="icon">★</span>
        <span className="icon">★</span>
      </label>
      <label>
        <input
          type="radio"
          id="num3"
          name="stars"
          value="3"
          onChange={handleChange}
          checked={selected === 3}
        />
        <span className="icon">★</span>
        <span className="icon">★</span>
        <span className="icon">★</span>
      </label>
      <label>
        <input
          type="radio"
          id="num4"
          name="stars"
          value="4"
          onChange={handleChange}
          checked={selected === 4}
        />
        <span className="icon">★</span>
        <span className="icon">★</span>
        <span className="icon">★</span>
        <span className="icon">★</span>
      </label>
      <label>
        <input
          type="radio"
          id="num5"
          name="rating"
          value="5"
          onChange={handleChange}
          checked={selected === 5}
        />
        <span className="icon">★</span>
        <span className="icon">★</span>
        <span className="icon">★</span>
        <span className="icon">★</span>
        <span className="icon">★</span>
      </label>
    </form>
  );
} 