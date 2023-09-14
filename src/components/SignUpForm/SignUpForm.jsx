function SignUpForm() {
  return (
    <form>
      <label>
        <input type="text" name="name" placeholder="Name" />
      </label>
      <label>
        <input type="email" name="email" placeholder="E-mail" />
      </label>
      <label>
        <input type="password" name="password" placeholder="Password" />
      </label>
      <button type="submit">Sign Up</button>
    </form>
  );
}

export default SignUpForm;
