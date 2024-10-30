// useCreateUser.ts
"use client";

import { useMutation } from "@tanstack/react-query";
import { createUser } from "@/actions/createUser"; // This should be a client-side accessible function

const useCreateUser = () => {
  const { mutate } = useMutation({
    mutationKey: ["createUser"],
    mutationFn: createUser,
    onSuccess: (data) => {
      console.log(data);
    },
    onError: (error) => {
      console.log(error);
    },
  });

  return { mutate };
};

export default useCreateUser;
