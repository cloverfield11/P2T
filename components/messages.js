import { RotateCcw as UndoIcon } from "lucide-react";
import Image from "next/image";
import { Fragment, useEffect, useRef } from "react";
import PulseLoader from "react-spinners/PulseLoader";
import Message from "./message";

export default function Messages({ events, isProcessing, onUndo }) {
  const messagesEndRef = useRef(null);

  useEffect(() => {
    if (events.length > 2) {
      messagesEndRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [events.length]);

  return (
    <section className="w-full">
      {events.map((ev, index) => {
        if (ev.image) {
          return (
            <Fragment key={"image-" + index}>
              <Message sender="replicate" shouldFillWidth>
                <Image
                  alt={
                    ev.prompt
                      ? `Результат промпта "${ev.prompt}" предыдущего изображения`
                      : "Исходное изображение"
                  }
                  width="512"
                  height="512"
                  priority={true}
                  className="w-full h-auto rounded-lg"
                  src={ev.image}
                />

                {onUndo && index > 0 && index === events.length - 1 && (
                  <div className="mt-2 text-right">
                    <button
                      className="lil-button"
                      onClick={() => {
                        onUndo(index);
                      }}
                    >
                      <UndoIcon className="icon" /> Откатитесь и попробуйте заново
                    </button>
                  </div>
                )}
              </Message>

              {(isProcessing || index < events.length - 1) && (
                <Message sender="replicate" isSameSender>
                  {index === 0
                    ? "Что нам изменить??"
                    : "Что нам следует изменить сейчас??"}
                </Message>
              )}
            </Fragment>
          );
        }

        if (ev.prompt) {
          return (
            <Message key={"prompt-" + index} sender="user">
              {ev.prompt}
            </Message>
          );
        }
      })}

      {isProcessing && (
        <Message sender="replicate">
          <PulseLoader color="#999" size={7} />
        </Message>
      )}

      <div ref={messagesEndRef} />
    </section>
  );
}
