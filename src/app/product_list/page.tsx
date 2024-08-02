"use client";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Button,
} from "@material-tailwind/react";

export default function ProductList() {
  return (
    <>
      <div className="m-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
       
        <Card
          className="w-96 m-3"
          onPointerEnterCapture={null}
          onPointerLeaveCapture={null}
          placeholder=""
        >
          <CardHeader
            shadow={false}
            floated={false}
            className="h-96"
            onPointerEnterCapture={null}
            onPointerLeaveCapture={null}
            placeholder=""
          >
            <img
              src="https://images.unsplash.com/photo-1629367494173-c78a56567877?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=927&q=80"
              alt="card-image"
              className="h-full w-full object-cover"
            />
          </CardHeader>
          <CardBody
            onPointerEnterCapture={null}
            onPointerLeaveCapture={null}
            placeholder=""
          >
            <div className="mb-2 flex items-center justify-between">
              <Typography
                color="blue-gray"
                className="font-medium"
                onPointerEnterCapture={null}
                onPointerLeaveCapture={null}
                placeholder=""
              >
                Apple AirPods
              </Typography>
              <Typography
                color="blue-gray"
                className="font-medium"
                onPointerEnterCapture={null}
                onPointerLeaveCapture={null}
                placeholder=""
              >
                $95.00
              </Typography>
            </div>
          </CardBody>
          <CardFooter
            className="pt-0"
            onPointerEnterCapture={null}
            onPointerLeaveCapture={null}
            placeholder=""
          >
            <Button
              ripple={false}
              fullWidth={true}
              onPointerEnterCapture={null}
              onPointerLeaveCapture={null}
              placeholder=""
              className="bg-blue-gray-900/10 text-blue-gray-900 shadow-none hover:scale-105 hover:shadow-none focus:scale-105 focus:shadow-none active:scale-100"
            >
              Add to Cart
            </Button>
          </CardFooter>
        </Card>

       
      </div>
    </>
  );
}
