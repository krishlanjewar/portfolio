// useForm.js – contact form state helper (augments react-hook-form)
import { useState } from "react";
import { useForm as useRHF } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { sendEmail } from "../utils/emailService";

const schema = yup.object({
  name: yup
    .string()
    .min(2, "Name must be at least 2 characters")
    .required("Name is required"),
  email: yup
    .string()
    .email("Enter a valid email address")
    .required("Email is required"),
  message: yup
    .string()
    .min(10, "Message must be at least 10 characters")
    .required("Message is required"),
});

export function useContactForm() {
  const [status, setStatus] = useState("idle"); // idle | loading | success | error

  const form = useRHF({
    resolver: yupResolver(schema),
    defaultValues: { name: "", email: "", message: "" },
  });

  const onSubmit = async (data) => {
    setStatus("loading");
    try {
      await sendEmail(data);
      setStatus("success");
      form.reset();
    } catch {
      setStatus("error");
    }
  };

  return { form, status, onSubmit: form.handleSubmit(onSubmit) };
}
