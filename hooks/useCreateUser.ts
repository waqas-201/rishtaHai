// useCreateUser.ts
"use client";

import { useMutation } from "@tanstack/react-query";
import { createUser } from "@/actions/createUser"; // This should be a client-side accessible function
import { toast } from "sonner";

const useCreateUser = () => {
  const { mutate, isPending, data } = useMutation({
    mutationKey: ["createUser"],
    mutationFn: createUser,
    onSuccess: (data) => {
      if (data.error) {
        toast.error(data.error.message);
      }
    },
    onError: (error) => {
       console.log(error);

       toast.error("failed to submit. try again");
    },
  });

  return { mutate, isPending, data };
};

export default useCreateUser;
