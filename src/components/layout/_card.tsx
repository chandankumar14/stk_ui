"use client";
import {
  Card,
  CardHeader,
  CardBody,
  Typography,
  Button,
} from "@material-tailwind/react";
import { DemoModelProp,  } from "../models/_product_model";

export default function Cardlayout(props: DemoModelProp) {
  return (
    <>
      <h2 className="text-base font-semibold leading-7">Heading</h2>
      <hr />
      <div className="grid grid-cols-1 gap-x-6 gap-y-2 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">

        {props.propList.map((product) => (
          <div className="ml-2 bg-slate-50 rounded-lg" key={product.id}>
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
                src=""
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
                 {product.title}
                </Typography>
                {/* <Typography
                  color="blue-gray"
                  className="font-medium"
                  onPointerEnterCapture={false}
                  onPointerLeaveCapture={false}
                  placeholder=""
                >
                  $95.00
                </Typography> */}
              </div>
            </CardBody>
            {/* <Button
              color="green"
              onPointerEnterCapture={false}
              onPointerLeaveCapture={false}
              placeholder=""
              className="bg-green-400"
            >
              Add to Cart
            </Button> */}
          </Card>
        </div>
        ))}

      
      </div>
    </>
  );
}
