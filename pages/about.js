import Head from "next/head";
import Link from "next/link";
import { ArrowLeft as ArrowLeftIcon } from "lucide-react";

import appName from "./index";

export default function About() {
  return (
    <div>
      <Head>
        <title>{appName}</title>
      </Head>

      <main className="container max-w-[600px] mx-auto p-5">
        <h1 className="text-center text-5xl font-bold m-6">{appName}</h1>

        <p className="prose">
        Этот веб-сайт с открытым исходным кодом предоставляет простой интерфейс для изменения изображения 
        с помощью текстовых инструкций. Вы можете загрузить изображение, предоставить 
        текстовая подсказка, описывающая, как изменить это изображение и создать новое 
        изображения по подсказке.
        </p>

        <p className="prose">
          Изображение сгенерировано при помощи{" "}
          <Link href="https://www.timothybrooks.com/instruct-pix2pix/">
            InstructPix2Pix
          </Link>
          , модель машинного обучения с открытым исходным кодом
          from <Link href="https://openai.com/api/">GPT-3</Link> and{" "}
          <Link href="https://replicate.com/stability-ai/stable-diffusion?utm_source=project&utm_campaign=paintbytext">
            Stable Diffusion
          </Link>{" "}
          для создания большого набора данных примеров редактирования изображений. Эта модель была 
          созданный в Калифорнийском университете в Беркли{" "}
          <Link href="https://timothybrooks.com/about">Tim Brooks</Link>,{" "}
          <Link href="http://www.holynski.org/">Aleksander Holynski</Link>, and{" "}
          <Link href="https://people.eecs.berkeley.edu/~efros/">
            Alexei A. Efros
          </Link>
          .
        </p>

        <div className="text-center mt-10">
          <Link
            href="/"
            className="bg-black text-white rounded-md text-small inline-block p-3 flex-none">

            <ArrowLeftIcon className="icon" />Вернуться к рисованию
          </Link>
        </div>
      </main>
    </div>
  );
}
