import { FormEvent, useState } from "react";
import { useCreateSubscriberMutation } from "../graphql/generated";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

interface ISubscribe {
  email?: string;
}

const schemaSubscribe = yup
  .object({
    email: yup.string().email().required(),
  })
  .required();
export function Newsletter() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schemaSubscribe) });
  const [createSubscriber, { loading }] = useCreateSubscriberMutation();

  async function handleSubscribe(data: ISubscribe) {
    if (data.email) {
      await createSubscriber({
        variables: {
          email: data.email,
        },
      });
    }
    reset();
  }
  return (
    <section
      className="w-full flex flex-col items-center bg-black md:bg-none sm:bg-none px-5 md:px-0"
      id="newsletter"
    >
      <div className="flex flex-col items-center gap-6 bg-black md:bg-none md:max-w-3xl lg:w-[1024px]  py-7">
        <div className="flex flex-col items-center">
          <h4 className="text-xl text-white font-bold">Newsletter</h4>
          <span className="text-white">
            Receba novidades em projetos, legislação e dicas.
          </span>
        </div>
        <form
          onSubmit={handleSubmit(handleSubscribe)}
          className="flex justify-center my-7"
        >
          <div className="bg-white px-2 py-2 flex justify-between gap-8">
            <input
              type="email"
              placeholder="Entre com seu melhor e-mail!"
              className="w-2/3 md:w-80 outline-none font-bold text-gray-500 placeholder:text-sm"
              {...register("email", { required: true })}
            />
            <button
              className="bg-black px-8 py-4 text-white font-bold"
              disabled={loading}
              type="submit"
            >
              Subscribe
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}
