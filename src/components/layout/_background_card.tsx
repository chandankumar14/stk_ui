import {
  Card,
  CardHeader,
  CardBody,
  Typography,
} from "@material-tailwind/react";
import { ProductProps } from "../models/_product_model";
const src= "https://media.samyakk.com/pub/media/wysiwyg/codilar/Lehenga-saga/image_6.png"

export function BackgroundBlogCard(props:ProductProps) {
  return (
    <Card
      shadow={false}
      onPointerEnterCapture={false}
      onPointerLeaveCapture={false}
      placeholder=""
      className="relative grid h-[40rem] w-full max-w-[28rem] 
        items-end justify-center overflow-hidden text-center"
    >
      <CardHeader
        floated={false}
        shadow={false}
        color="transparent"
        onPointerEnterCapture={false}
        onPointerLeaveCapture={false}
        placeholder=""
        className="absolute inset-0 m-0 h-full w-full rounded-none 
          bg-cover bg-center"
      >
        <div className="to-bg-black-10 absolute inset-0 h-full w-full bg-gradient-to-t from-black/80 via-black/50" />
      </CardHeader>
      <CardBody
        className="relative py-14 px-6 md:px-12"
        onPointerEnterCapture={false}
        onPointerLeaveCapture={false}
        placeholder=""
      >
        <Typography
          variant="h2"
          color="white"
          className="mb-6 font-medium leading-[1.5]"
          onPointerEnterCapture={false}
          onPointerLeaveCapture={false}
          placeholder=""
        >
          How we design and code open-source projects?
        </Typography>
        <Typography
          variant="h5"
          className="mb-4 text-gray-400"
          onPointerEnterCapture={false}
          onPointerLeaveCapture={false}
          placeholder=""
        >
          Tania Andrew
        </Typography>
      </CardBody>
    </Card>
  );
}
