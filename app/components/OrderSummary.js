import Image from "next/image";
import { formatPrice } from "../utils/format";
import { TEXT_STYLES } from "../styles/typography";

export default function OrderSummary({ items, pricing, additionalCount }) {
  return (
    <div className="bg-white p-4 md:px-6 pt-0">
      <h3 className={`${TEXT_STYLES.sectionTitle} mb-4`}>Order Summary</h3>

      <div className={`${TEXT_STYLES.labelRegular} mb-2`}>Items</div>
      
      {/* Items List */}
      <div className="space-y-4 mb-4">
        {items.map((item, index) => (
          <div key={item.id} className="flex gap-4">
            <div className="w-16 h-12 border border-gray-200 rounded shrink-0 relative overflow-hidden">
               <Image 
                 src={item.image} 
                 alt={item.name} 
                 fill 
                 className="object-cover" 
                 priority={index === 0}
               />
            </div>
            <div>
              <div className={TEXT_STYLES.itemName}>{item.name}</div>
              <div className={TEXT_STYLES.itemDescription}>{item.description}</div>
            </div>
          </div>
        ))}
      </div>

      {additionalCount > 0 && (
        <div className={TEXT_STYLES.itemsMoreCount}>+{additionalCount} More items</div>
      )}

      <div className="border-b border-gray-200 mb-6"></div>

      {/* Pricing Table */}
      <div className={TEXT_STYLES.pricingContainer}>
        <div className={`${TEXT_STYLES.pricingRow} bg-white`}>
          <span className="align-middle">Item total (MRP)</span>
          <span className={TEXT_STYLES.pricingValue}>{formatPrice(pricing.itemTotal)}</span>
        </div>
        <div className={`${TEXT_STYLES.pricingRow} bg-white`}>
            <span className="align-middle">Handling charges</span>
            <span className={TEXT_STYLES.pricingValue}>{formatPrice(pricing.handlingCharges)}</span>
        </div>
        <div className={`${TEXT_STYLES.pricingRow} ${TEXT_STYLES.pricingDiscountText}`}>
            <span className="align-middle">Total Discount:</span>
            <span className="align-middle">-{formatPrice(Math.abs(pricing.totalDiscount))}</span>
        </div>
        <div className={`${TEXT_STYLES.pricingRow} ${TEXT_STYLES.pricingDiscountText}`}>
            <span className="align-middle">Coupon Code</span>
            <span className="align-middle">-{formatPrice(Math.abs(pricing.couponCode))}</span>
        </div>
        <div className={`${TEXT_STYLES.pricingRow} ${TEXT_STYLES.pricingDiscountText}`}>
            <span className="align-middle">Medcart Credits</span>
            <span className="align-middle">-{formatPrice(Math.abs(pricing.credits))}</span>
        </div>
        <div className={TEXT_STYLES.pricingRow}>
            <span className="align-middle">Shipping fee</span>
            <span className={TEXT_STYLES.pricingValue}>{formatPrice(pricing.shippingFee)}</span>
        </div>
      </div>

      <div className="border-t border-gray-200 pt-4 flex justify-between items-center mb-6">
          <span className={TEXT_STYLES.amountPaidLabel}>Amount paid</span>
          <span className={TEXT_STYLES.amountPaidValue}>{formatPrice(pricing.amountPaid)}*</span>
      </div>

      {/* Savings Banner */}
      <div className="relative mb-6 mt-2">
        {/* Wavy Top Pattern */}
        <div className="absolute -top-2.5 left-0 w-full h-2.5 z-20">
            <div 
                className="w-full h-full"
                style={{
                    backgroundImage: 'radial-gradient(circle at 50% 100%, #4359D9 10px, transparent 10.5px)',
                    backgroundSize: '20px 10px',
                    backgroundRepeat: 'repeat-x',
                    backgroundPosition: 'center bottom'
                }}
            />
        </div>

        <div className={TEXT_STYLES.savingsBanner}>
          <div className="flex items-center justify-center gap-2">
            <span>🎉</span>
            You saved {formatPrice(pricing.savings)} on this order
          </div>
        </div>
      </div>

      <div className={TEXT_STYLES.disclaimerText}>
        *Prices shown on the page are indicative, inclusive of all taxes and may slightly vary once the final bill.... <span className="text-purple-700 font-medium cursor-pointer">See more</span>
      </div>
      
      <div className="border-b border-gray-200 mt-6"></div>

    </div>
  );
}

