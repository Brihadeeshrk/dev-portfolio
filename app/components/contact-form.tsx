"use client";

import React from "react";
import { Input } from "./input";
import { Textarea } from "./textarea";
import { Button } from "./button";

export default function ContactForm() {
  const [details, setDetails] = React.useState({ email: "", message: "" });

  function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
  }

  return (
    <>
      <p>contact me</p>
      <form className="flex flex-col space-y-3" onSubmit={onSubmit}>
        <div className="flex flex-col">
          <label htmlFor="email">email</label>
          <Input
            id="email"
            name="email"
            placeholder="type your email here."
            onChange={(e) => setDetails({ ...details, email: e.target.value })}
            value={details.email}
          />
        </div>

        <div className="flex flex-col">
          <label htmlFor="message">message</label>
          <Textarea
            id="message"
            name="message"
            value={details.message}
            onChange={(e) =>
              setDetails({ ...details, message: e.target.value })
            }
            placeholder="type your message here."
          />
        </div>

        <Button type="submit" className="w-fit">
          Submit
        </Button>
      </form>
    </>
  );
}
