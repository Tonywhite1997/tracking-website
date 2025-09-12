import { useParams } from "react-router-dom";
import { useRef } from "react";
import { useReactToPrint } from "react-to-print";
import useOrder from "../../customHooks/useOrder";

function InvoiceDetails() {
  const { id } = useParams();
  const { order, isRefetching, isLoading, error } = useOrder(id);

  const printRef = useRef(null);

  const handlePrint = useReactToPrint({
    contentRef: printRef, // ✅ use contentRef instead of content()
    documentTitle: `Invoice-${id}`,
  });

  if (isLoading || isRefetching) {
    return <div className="text-center py-10">Loading invoice...</div>;
  }

  if (error) {
    return (
      <div className="text-center py-10 text-red-500">
        Failed to load invoice. Please try again.
      </div>
    );
  }

  const data = order?.data;
  if (!data) {
    return <div className="text-center py-10">No invoice found.</div>;
  }

  const issueDate = new Date(data.createdAt).toISOString().split("T")[0];

  return (
    <div className="max-w-3xl mx-auto p-1">
      {/* Print button */}
      <div className="flex justify-end mb-4">
        <button
          onClick={handlePrint}
          className="px-4 py-2 bg-orange-500 hover:bg-orange-600 text-white font-semibold rounded-md transition"
        >
          Print / Download PDF
        </button>
      </div>

      {/* Printable content */}
      <div
        ref={printRef}
        className="bg-white text-gray-900 shadow-lg rounded-md p-6"
      >
        {/* Barcode */}
        <div className="text-center mb-6">
          <img
            src={`https://barcode.tec-it.com/barcode.ashx?data=${data.trackingCode}&code=Code128&translate-esc=false`}
            alt="barcode"
            className="mx-auto"
          />
        </div>

        {/* Tracking Code */}
        <h2 className="text-center text-2xl font-bold mb-4">
          {data.trackingCode}
        </h2>
        <hr className="border-gray-300 mb-6" />

        {/* Sender / Receiver */}
        <div className="grid grid-cols-2 gap-6 text-sm mb-6">
          <div>
            <h3 className="font-bold">SENDER</h3>
            <p>
              {data.sender.address} <br />
              {data.sender.name}
            </p>
          </div>
          <div>
            <h3 className="font-bold">RECEIVER</h3>
            <p>
              {data.receiver.address} <br />
              {data.receiver.name} <br />
              {data.receiver.phone} <br />
              {data.receiver.email}
            </p>
          </div>
        </div>

        {/* Origin / Destination */}
        <div className="grid grid-cols-2 gap-6 text-sm mb-6">
          <div>
            <h3 className="font-bold">Origin</h3>
            <p>{data.currentLocation}</p>
          </div>
          <div>
            <h3 className="font-bold">Destination</h3>
            <p>{data.destination}</p>
          </div>
        </div>

        {/* Details Box */}
        <div className="grid grid-cols-2 border border-black text-sm">
          <div className="border border-black p-2">
            <div className="font-bold">WEIGHT VOLUME</div>
            {data.packageDescription.weight}
          </div>
          <div className="border border-black p-2">
            <div className="font-bold">TERM</div>
            Express
          </div>
          <div className="border border-black p-2">
            <div className="font-bold">PHYSICAL WEIGHT</div>
            Express
          </div>
          <div className="border border-black p-2">
            <div className="font-bold"># OF PIECES</div>
            {data.packageDescription.quantity}
          </div>
        </div>

        {/* Issue Date */}
        <div className="text-center mt-8">
          <div className="font-bold">ISSUE DATE</div>
          <p>{issueDate}</p>
        </div>
      </div>
    </div>
  );
}

export default InvoiceDetails;
