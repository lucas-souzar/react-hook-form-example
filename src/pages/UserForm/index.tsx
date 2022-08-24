import { useForm } from "react-hook-form";

import { Button, Form, FormContainer, FormGroup, ErrorMessage } from "./styles";
import Input from "../../components/Input";

interface IUser {
  name: string;
  email: string;
  phoneNumber: string;
  age: number;
}

export function UserForm() {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm<IUser>();

  function onSubmit(data: IUser) {
    console.log("data form: ", data);
  }

  return (
    <FormContainer onSubmit={handleSubmit(onSubmit)}>
      <h1>User Form</h1>

      <Form>
        <FormGroup>
          <Input
            id="name"
            type="text"
            label="Name"
            placeholder="Enter your name"
            error={!!errors.name?.message}
            {...register("name", {
              required: { value: true, message: "Name is required" },
              pattern: {
                value: /^[A-z]+$/i,
                message: "Name with only letters",
              },
            })}
          />

          <ErrorMessage>{errors.name?.message}</ErrorMessage>
        </FormGroup>

        <FormGroup>
          <Input
            id="email"
            type="text"
            label="Email"
            placeholder="Enter your email"
            error={!!errors.email?.message}
            {...register("email", {
              required: { value: true, message: "Name is required" },
            })}
          />

          <ErrorMessage>
            {errors.email?.type === "required" && "Email is required"}
          </ErrorMessage>
        </FormGroup>

        <FormGroup>
          <Input
            id="phone-number"
            type="text"
            label="Phone Number"
            placeholder="Enter your phone"
            error={!!errors.phoneNumber?.message}
            {...register("phoneNumber", {
              required: { value: true, message: "Phone is required" },
            })}
          />

          <ErrorMessage>{errors.phoneNumber?.message}</ErrorMessage>
        </FormGroup>

        <FormGroup>
          <Input
            id="age"
            type="number"
            label="Age"
            placeholder="Enter your age"
            error={!!errors.age?.message}
            {...register("age", {
              required: { value: true, message: "Name is required" },
              min: { value: 18, message: "Age min 18" },
              max: { value: 99, message: "Age max 99" },
            })}
          />

          <ErrorMessage>{errors.age?.message}</ErrorMessage>
        </FormGroup>

        <Button>Submit</Button>
      </Form>
    </FormContainer>
  );
}
