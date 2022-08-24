import { Input } from "../../components/Input";
import { Button, Form, FormContainer } from "./styles";

export function UserForm() {
  return (
    <FormContainer>
      <h1>User Form</h1>

      <Form>
        <Input
          id="username"
          type="text"
          label="Username"
          placeholder="Enter your username"
          required
        />

        <Input
          id="email"
          type="text"
          label="Email"
          placeholder="Enter your email"
          required
        />

        <Input
          id="phone-number"
          type="text"
          label="Phone Number"
          placeholder="Enter your phone"
          required
        />

        <Button>Submit</Button>
      </Form>
    </FormContainer>
  );
}
