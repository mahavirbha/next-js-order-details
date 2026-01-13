import { TEXT_STYLES } from "../styles/typography";
import Image from "next/image";

export default function OrderStatus({ order }) {
  return (
    <div className="bg-linear-to-b from-brand-dark to-brand-light text-white p-4 md:p-8 flex flex-col items-center text-center justify-between w-full h-full">
      <div className="relative mb-6 flex items-center justify-center w-full mt-8">
        {/* Confetti Background - Fluid and Responsive */}
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[18%] max-w-md h-auto aspect-square pointer-events-none flex items-center justify-center">
          <Image
            src="/abstract-colorful-confetti-isolated.svg"
            alt=""
            width={200}
            height={200}
            className="w-full h-full object-contain opacity-90"
            priority
          />
        </div>

        <div className="relative z-10 bg-white rounded-full p-4 shadow-lg">
          <Image
            src="/green_tick.svg"
            alt="Order Placed"
            width={32}
            height={32}
            className="w-8 h-8"
          />
        </div>
      </div>

      <div className="w-full flex flex-col items-center text-center justify-center space-y-4">
        <h2 className={TEXT_STYLES.statusSubheading}>Great Job</h2>
        <h1 className={TEXT_STYLES.statusHeading}>
          Your order no. {order.orderNumber} is placed!
        </h1>
        <p className={TEXT_STYLES.statusBody}>
          We will notify you once this order gets confirmed and send your
          updates thereafter
        </p>

        {/* Prescription Review Card */}
        <div className="bg-white text-gray-800 rounded-lg p-6 w-full shadow-[0_8px_30px_rgb(0,0,0,0.12)] flex flex-col items-center">
          <div className="mb-4 w-32 h-40 flex items-center justify-center">
            <Image
              src="/Status_Rx.svg"
              alt="Prescription"
              width={128}
              height={160}
              className="w-full h-full object-contain"
            />
          </div>
          <p className={TEXT_STYLES.statusCardText}>
            We&#39;re reviewing your prescription now to confirm your order
          </p>
        </div>
      </div>
    </div>
  );
}
