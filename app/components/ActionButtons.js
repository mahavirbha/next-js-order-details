import { BUTTON_STYLES } from "../styles/buttons";

export default function ActionButtons() {
    return (
      <div className="bg-white p-4 md:p-6 pb-6 pt-4 flex gap-4 w-full">
          <button className={BUTTON_STYLES.outline}>
              Explore more
          </button>
          <button className={BUTTON_STYLES.primary}>
              Track Order
          </button>
      </div>
    );
  }
