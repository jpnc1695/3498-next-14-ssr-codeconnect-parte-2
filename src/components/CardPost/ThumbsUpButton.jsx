'use client'

import { ThumbsUp } from "../icons/ThumbsUp";
import { IconButton } from "../IconButton";
import { Spiner } from "../Spiner";
import { useFormStatus } from "react-dom";

export const ThumbsUpButton = () => {
  const { pending } = useFormStatus();
  return <IconButton>
            {pending ? <Spiner /> : <ThumbsUp />}
        </IconButton>;
};
