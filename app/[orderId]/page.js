"use client";

import { useParams } from "next/navigation";
import Navbar from "../components/Navbar";
import OrderStatus from "../components/OrderStatus";
import DeliveryInfo from "../components/DeliveryInfo";
import OrderSummary from "../components/OrderSummary";
import PaymentInfo from "../components/PaymentInfo";
import ActionButtons from "../components/ActionButtons";
import { getOrderById } from "../data/mockData";

export default function OrderDetailsPage() {
  const params = useParams();
  const orderId = params.orderId;
  
  const orderData = getOrderById(orderId);

  // Handle invalid order ID
  if (!orderData) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-800 mb-4">Order Not Found</h1>
          <p className="text-gray-600">The order you're looking for doesn't exist.</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col font-sans md:h-screen md:overflow-hidden">
      <Navbar />
      
      <main className="flex-1 flex flex-col md:flex-row w-full relative md:overflow-hidden">
        {/* Left Section - Order Status */}

        <div
          className={`w-full md:w-[55%] lg:w-[70%] flex flex-col relative transition-all duration-300 ease-in-out bg-brand-primary h-auto md:h-full
            2xl:h-150 2xl:max-h-150 2xl:min-h-150 2xl:overflow-hidden
          `}
        >
          <div className="w-full h-full relative">
            <OrderStatus order={orderData} />
          </div>
        </div>

        {/* Right Section - Details Panel */}
        <div className={`w-full md:w-[45%] lg:w-[30%] bg-white border-l border-gray-100 flex flex-col transition-all duration-300 ease-in-out h-auto md:h-full`}>
            
            {/* Scrollable content area - Always scrollable on Desktop, Auto on Mobile */}
            <div className="flex-1 scrollbar-hide md:overflow-y-auto">
                <DeliveryInfo delivery={orderData.delivery} />
                <OrderSummary 
                    items={orderData.items} 
                    pricing={orderData.pricing}
                    additionalCount={orderData.additionalItemsCount} 
                />
                <PaymentInfo payment={orderData.payment} />
                <div className="h-4"></div>
            </div>
            
            {/* Sticky Action Buttons */}
            <div className="bg-white shadow-[0_-4px_12px_rgba(0,0,0,0.08)] z-30 mt-auto relative">
                <ActionButtons />
            </div>
        </div>
      </main>
    </div>
  );
}
