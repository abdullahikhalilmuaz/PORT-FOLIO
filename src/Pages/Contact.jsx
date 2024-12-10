import "../Styles/contact.css";
export default function Contact() {
  return (
    <div className="contact-container" id="contact">
      <h3>Contact Me</h3>
      <form className="form">
        <label className="label1">
          <input type="text" />
          <input type="text" />
        </label>

        <label className="label2">
          <input type="text" />
          <input type="text" />
        </label>
        <label className="label3">
          <input type="text" />
        </label>

        <label className="label4">
          <textarea
            name=""
            id=""
            rows={11}
            cols={40}
            placeholder="Enter your message"
          ></textarea>
        </label>

        <label>
          <input type="submit" value="Submit" />
        </label>
      </form>
    </div>
  );
}
