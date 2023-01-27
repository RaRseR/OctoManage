import { useRef } from "react";
export default function CreateModal({ children, forwardedRef }: Modal) {
    const ref = useRef<HTMLDialogElement>(null);

    function openModal() {
        ref.current?.showModal();
        ref.current?.addEventListener("click", handleOutsideClick);
    }

    function handleOutsideClick(event: MouseEvent) {
        const rect = ref.current?.getBoundingClientRect();
        if (
            event.clientY < rect?.top! ||
            event.clientY > rect?.bottom! ||
            event.clientX < rect?.left! ||
            event.clientX > rect?.right!
        ) {
            ref.current?.close();
            ref.current?.removeEventListener("click", handleOutsideClick);
        }
    }
    return [<dialog ref={forwardedRef}>{children}</dialog>, openModal];
}


type Modal = {
    children: React.ReactNode;
    forwardedRef: React.RefObject<HTMLDialogElement>;
};
