function contact() {
  return(
  <>
  <div className="contact"> 
    <h1>contact form</h1>
    <form action="/submit" method="post">
      <label for="name">Name:</label>
      <input type="text" id="name" name="name" required />
    
        <label for="email">Email:</label>
        <input type="email" id="email" name="email" required />

        <label for="address">Adress:</label>
        <input type="text" id="address" name="address" required />

        <label for="phone">Phone Number:</label>
        <input type="tel" id="phone" name="phone" required />

        <label for="message">Message</label>
        <textarea id="message" name="message" rows="6" required></textarea>

        <button type="submit">Submit</button>
    </form>
    

  
  
  
    
   </div>
</>
) ;
}
export default contact;
