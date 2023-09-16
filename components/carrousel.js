import Carousal from "@itseasy21/react-elastic-carousel";
import styles from "../styles/Elastic.module.css";

import { Card, CardFooter, Image, Button } from "@nextui-org/react";

const breakPoints = [
  { width: 1, itemsToShow: 1 },
  { width: 550, itemsToShow: 1, itemsToScroll: 2 },
  { width: 768, itemsToShow: 2 },
  { width: 1200, itemsToShow: 3 },
];

export default function Carousel() {
  return (
    <div className={styles.container}>
      <div className={styles.contWrapper}>
        <Carousal breakPoints={breakPoints}>
          <Card isFooterBlurred radius="lg" className="border-none">
            <Image
              alt="Woman listing to music"
              className="object-cover"
              height={300}
              src="/img/casa.jpg"
              width={300}
            />
            <CardFooter className="justify-between before:bg-white/10 border-white/20 border-1 overflow-hidden py-1 absolute before:rounded-xl rounded-large bottom-1 w-[calc(100%_-_8px)] shadow-small ml-1 z-10">
              <p className="text-tiny text-black/80">Available soon.</p>
              <Button
                className="text-tiny text-black bg-black/20"
                variant="flat"
                color="default"
                radius="lg"
                size="sm"
              >
                Notify me
              </Button>
            </CardFooter>
          </Card>
          <Card isFooterBlurred radius="lg" className="border-none">
            <Image
              alt="Woman listing to music"
              className="object-cover"
              height={300}
              src="/img/celu.jpeg"
              width={300}
            />
            <CardFooter className="justify-between before:bg-white/10 border-white/20 border-1 overflow-hidden py-1 absolute before:rounded-xl rounded-large bottom-1 w-[calc(100%_-_8px)] shadow-small ml-1 z-10">
              <p className="text-tiny text-black/80">Available soon.</p>
              <Button
                className="text-tiny text-black bg-black/20"
                variant="flat"
                color="default"
                radius="lg"
                size="sm"
              >
                Notify me
              </Button>
            </CardFooter>
          </Card>
          <Card isFooterBlurred radius="lg" className="border-none">
            <Image
              alt="Woman listing to music"
              className="object-cover"
              height={300}
              src="/img/celu.jpeg"
              width={300}
            />
            <CardFooter className="justify-between before:bg-white/10 border-white/20 border-1 overflow-hidden py-1 absolute before:rounded-xl rounded-large bottom-1 w-[calc(100%_-_8px)] shadow-small ml-1 z-10">
              <p className="text-tiny text-black/80">Available soon.</p>
              <Button
                className="text-tiny text-black bg-black/20"
                variant="flat"
                color="default"
                radius="lg"
                size="sm"
              >
                Notify me
              </Button>
            </CardFooter>
          </Card>
          <Card isFooterBlurred radius="lg" className="border-none">
            <Image
              alt="Woman listing to music"
              className="object-cover"
              height={300}
              src="/img/celu.jpeg"
              width={300}
            />
            <CardFooter className="justify-between before:bg-white/10 border-white/20 border-1 overflow-hidden py-1 absolute before:rounded-xl rounded-large bottom-1 w-[calc(100%_-_8px)] shadow-small ml-1 z-10">
              <p className="text-tiny text-black/80">Available soon.</p>
              <Button
                className="text-tiny text-black bg-black/20"
                variant="flat"
                color="default"
                radius="lg"
                size="sm"
              >
                Notify me
              </Button>
            </CardFooter>
          </Card>
        </Carousal>
      </div>
    </div>
  );
}
