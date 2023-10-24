import Dropzone from "components/dropzone";
import {
  Code as CodeIcon,
  Download as DownloadIcon,
  Info as InfoIcon,
  XCircle as StartOverIcon,
} from "lucide-react";
import Link from "next/link";

export default function Footer({ events, startOver, handleImageDropped }) {
  return (
    <footer className="w-full my-8">
      <div className="text-center">
        <Link href="/about" className="lil-button">

          <InfoIcon className="icon" />Что это?
        </Link>

        {events.length > 1 && (
          <button className="lil-button" onClick={startOver}>
            <StartOverIcon className="icon" />
            Начать заново
          </button>
        )}

        <Dropzone onImageDropped={handleImageDropped} />

        {events.length > 2 && (
          (<Link
            href={events.findLast((ev) => ev.image).image}
            className="lil-button"
            target="_blank"
            rel="noopener noreferrer">

            <DownloadIcon className="icon" />Скачать изображение
          </Link>)
        )}

        <Link
          href="https://github.com/cloverfield11"
          className="lil-button"
          target="_blank"
          rel="noopener noreferrer">

          <CodeIcon className="icon" />GitHub
        </Link>
      </div>
      
    </footer>
  );
}
