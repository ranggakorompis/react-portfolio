export default function Contact() {
  return (
    <section className="contact">
      <h2 className="subtitle">Contact</h2>
      <form action>
        <label htmlFor="name">Name</label>
        <input type="text" name="name" id="name" />
        <label htmlFor="email">Email</label>
        <input type="email" name="email" id="email" />
        <label htmlFor="massage">Massage</label>
        <textarea
          name="massage"
          id="massage"
          cols={30}
          rows={5}
          defaultValue={""}
        />
        <button type="submit">Submit</button>
      </form>
    </section>
  );
}
