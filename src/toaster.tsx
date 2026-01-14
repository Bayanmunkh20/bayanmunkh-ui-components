"use client";

import {
  Toast,
  ToastClose,
  ToastDescription,
  ToastTitle,
  ToastViewport,
  useToast,
} from "./toast";

export function Toaster() {
  const { toasts } = useToast();

  return (
    <>
      {toasts.map(({ id, title, description, icon, ...props }) => (
        <Toast key={id} {...props}>
          <div className="flex items-start gap-3">
            {icon && <div className="mt-0.5">{icon}</div>}
            <div className="grid gap-1 flex-1">
              {title && <ToastTitle>{title}</ToastTitle>}
              {description && (
                <ToastDescription>{description}</ToastDescription>
              )}
            </div>
          </div>
          <ToastClose />
        </Toast>
      ))}
      <ToastViewport />
    </>
  );
}
