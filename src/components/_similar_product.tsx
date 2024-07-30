"use client";
import {
  Card,
  CardHeader,
  CardBody,
  Typography,
  Button,
} from "@material-tailwind/react";
import { ProductProps } from "./models/_product_model";

export default function SimilarProductCard(props: ProductProps) {
  return (
    <>
      <div className="ml-2 bg-slate-50 rounded-lg">
        <Card
          onPointerEnterCapture={false}
          onPointerLeaveCapture={false}
          placeholder=""
        >
          <CardHeader
            shadow={false}
            floated={false}
            onPointerEnterCapture={false}
            onPointerLeaveCapture={false}
            placeholder=""
          >
            <img
              src={props.product_image}
              alt="card-image"
              className="object-cover rounded-sm"
            />
          </CardHeader>
          <CardBody
            onPointerEnterCapture={false}
            onPointerLeaveCapture={false}
            placeholder=""
          >
            <div className="flex items-center justify-between">
              <Typography
                color="blue-gray"
                className="font-medium"
                onPointerEnterCapture={false}
                onPointerLeaveCapture={false}
                placeholder=""
              >
                Apple AirPods Apple AirPods Apple AirPods
              </Typography>
              <Typography
                color="blue-gray"
                className="font-medium"
                onPointerEnterCapture={false}
                onPointerLeaveCapture={false}
                placeholder=""
              >
                $95.00
              </Typography>
            </div>
          </CardBody>
          <Button
            color="green"
            onPointerEnterCapture={false}
            onPointerLeaveCapture={false}
            placeholder=""
            className="bg-green-400"
          >
            Add to Cart
          </Button>
        </Card>
      </div>
    </>
  );
}
