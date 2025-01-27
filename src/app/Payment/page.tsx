'use client'
import { useState } from 'react';
import { FormEvent } from 'react';

const PaymentForm = () => {
  const [paymentMethod, setPaymentMethod] = useState('credit-card');
  const [formData, setFormData] = useState({
    cardNumber: '',
    expiry: '',
    cvv: '',
    mobileNumber: '',
  });
  const [errors, setErrors] = useState({
    cardNumber: false,
    expiry: false,
    cvv: false,
    mobileNumber: false,
  });

  const validateForm = () => {
    const newErrors = { ...errors };

    // Basic validation logic
    if (paymentMethod === 'credit-card') {
      newErrors.cardNumber = !formData.cardNumber.trim();
      newErrors.expiry = !formData.expiry.trim();
      newErrors.cvv = !formData.cvv.trim();
    } else if (paymentMethod === 'easypaisa' || paymentMethod === 'jazzcash') {
      newErrors.mobileNumber = !formData.mobileNumber.trim();
    }

    setErrors(newErrors);

    // Return true if no errors
    return !Object.values(newErrors).includes(true);
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (validateForm()) {
      // Submit form data
      console.log('Form submitted:', formData);
    } else {
      console.log('Form validation failed');
    }
  };

  const renderPaymentFields = () => {
    switch (paymentMethod) {
      case 'credit-card':
        return (
          <>
            <div className="mb-4">
              <label htmlFor="card-number" className="block text-sm font-medium text-gray-700">Card Number</label>
              <input
                type="text"
                id="card-number"
                name="card-number"
                value={formData.cardNumber}
                onChange={(e) => setFormData({ ...formData, cardNumber: e.target.value })}
                className={`w-full mt-2 p-2 border ${errors.cardNumber ? 'border-red-500' : 'border-gray-300'} rounded-lg focus:ring-2 focus:ring-blue-400`}
                placeholder="XXXX XXXX XXXX XXXX"
              />
              {errors.cardNumber && <p className="text-sm text-red-500">Card number is required</p>}
            </div>
            <div className="grid grid-cols-2 gap-4 mb-4">
              <div>
                <label htmlFor="expiry" className="block text-sm font-medium text-gray-700">Expiry Date</label>
                <input
                  type="text"
                  id="expiry"
                  name="expiry"
                  value={formData.expiry}
                  onChange={(e) => setFormData({ ...formData, expiry: e.target.value })}
                  className={`w-full mt-2 p-2 border ${errors.expiry ? 'border-red-500' : 'border-gray-300'} rounded-lg focus:ring-2 focus:ring-blue-400`}
                  placeholder="MM/YY"
                />
                {errors.expiry && <p className="text-sm text-red-500">Expiry date is required</p>}
              </div>
              <div>
                <label htmlFor="cvv" className="block text-sm font-medium text-gray-700">CVV</label>
                <input
                  type="text"
                  id="cvv"
                  name="cvv"
                  value={formData.cvv}
                  onChange={(e) => setFormData({ ...formData, cvv: e.target.value })}
                  className={`w-full mt-2 p-2 border ${errors.cvv ? 'border-red-500' : 'border-gray-300'} rounded-lg focus:ring-2 focus:ring-blue-400`}
                  placeholder="XXX"
                />
                {errors.cvv && <p className="text-sm text-red-500">CVV is required</p>}
              </div>
            </div>
          </>
        );
      case 'easypaisa':
      case 'jazzcash':
        return (
          <div className="mb-4">
            <label htmlFor="mobile-number" className="block text-sm font-medium text-gray-700">Mobile Number</label>
            <input
              type="text"
              id="mobile-number"
              name="mobile-number"
              value={formData.mobileNumber}
              onChange={(e) => setFormData({ ...formData, mobileNumber: e.target.value })}
              className={`w-full mt-2 p-2 border ${errors.mobileNumber ? 'border-red-500' : 'border-gray-300'} rounded-lg focus:ring-2 focus:ring-blue-400`}
              placeholder="Your Mobile Number"
            />
            {errors.mobileNumber && <p className="text-sm text-red-500">Mobile number is required</p>}
          </div>
        );
      case 'cod':
        return (
          <div className="mb-4">
            <p className="text-sm text-gray-700">Cash on Delivery (COD) is available. Please pay when your order is delivered.</p>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen p-5">
      <div className="w-full max-w-lg bg-white p-6 rounded-lg shadow-lg">
        <h2 className="text-2xl font-semibold text-center text-gray-700 mb-6">Payment Details</h2>

        <form onSubmit={handleSubmit}>

          <div className="mb-4">
            <label htmlFor="payment-method" className="block text-sm font-medium text-gray-700">Select Payment Method</label>
            <select
              id="payment-method"
              name="payment-method"
              value={paymentMethod}
              onChange={(e) => setPaymentMethod(e.target.value)}
              className="w-full mt-2 p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-400"
            >
              <option value="credit-card">Credit/Debit Card</option>
              <option value="easypaisa">Easypaisa</option>
              <option value="jazzcash">JazzCash</option>
              <option value="cod">Cash on Delivery</option>
            </select>
          </div>

          {renderPaymentFields()}

          <div className="text-center">
            <button
              type="submit"
              className="w-full mt-4 bg-blue-500 text-white p-3 rounded-lg font-semibold hover:bg-blue-600"
            >
              Pay Now
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default PaymentForm;

