import cars from "@/data/cars.json";

type carProps = {
  id: number;
  name: string;
  price: string;
  url: string;
  seats: number;
  miles: string;
  features: string[];
  description: string;
};

export const useCars = () => {
  return {
    cars: cars as carProps[],
  };
};
