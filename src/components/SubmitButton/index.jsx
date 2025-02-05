'use client';

import { useFormStatus } from 'react-dom'
import { Spiner } from "../Spiner";
import { ArrowFoward } from "../icons/ArrowFoward";
import { Button } from "../Button";

export const SubmitButton = ({children}) => {
    const { pending } = useFormStatus();
    return (
        <Button aria-disabled={pending} type="submit">
             {pending ? <Spiner /> : <>{children} <ArrowFoward /></>}
        </Button>
    )
}