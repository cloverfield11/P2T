import { Upload as UploadIcon } from "lucide-react";
import { useCallback } from "react";
import { useDropzone } from "react-dropzone";

export default function Dropzone(props) {
  const onImageDropped = props.onImageDropped;
  const onDrop = useCallback(
    (acceptedFiles) => {
      onImageDropped(acceptedFiles[0]);
    },
    [onImageDropped]
  );
  const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop });

  return (
    <div className="lil-button cursor-pointer select-none" {...getRootProps()}>
      <div className="m-auto">
        <input {...getInputProps()} />
        {isDragActive ? (
          <p>Поместите изображение ...</p>
        ) : (
          <p>
            <UploadIcon className="icon" />
            Загрузить изображение на сайт
          </p>
        )}
      </div>
    </div>
  );
}
