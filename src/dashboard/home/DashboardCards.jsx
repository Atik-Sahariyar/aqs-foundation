import { FaClipboardList, FaFileInvoiceDollar, FaPenNib, FaBox } from "react-icons/fa";

const DashboardCards = () => {
  const cards = [
    {
      id: 1,
      icon: <FaClipboardList size={30} />,
      title: "ORDERS",
      value: "1,685",
      percentage: "+12%",
      isPositive: true,
      description: "Since last month",
    },
    {
      id: 2,
      icon: <FaFileInvoiceDollar size={30} />,
      title: "REVENUE",
      value: "52,368",
      percentage: "-28%",
      isPositive: false,
      description: "Since last month",
    },
    {
      id: 3,
      icon: <FaPenNib size={30} />,
      title: "AVERAGE PRICE",
      value: "15.8",
      percentage: "0%",
      isPositive: true,
      description: "Since last month",
    },
    {
      id: 4,
      icon: <FaBox size={30} />,
      title: "PRODUCTS",
      value: "2,436",
      percentage: "+84%",
      isPositive: true,
      description: "Since last month",
    },
  ];

  return (
    <div className=" container grid grid-cols-1 md:grid-cols-4 gap-4 p-4">
      {cards.map((card) => (
        <div
          key={card.id}
          className="bg-blue-500 hover:bg-blue-700 text-white  rounded-lg shadow-md p-4 flex items-center justify-between hover:shadow-lg transition-shadow duration-300"
        >
          <div className="flex items-center space-x-4 ">
            <div className="bg-blue-400 hover:bg-blue-600 p-2 rounded-full">{card.icon}</div>
            <div className="   ">
              <h4 className="text-lg font-semibold ">{card.title}</h4>
              <p className="text-2xl font-bold">{card.value}</p>
              <p className="text-sm">{card.description}</p>
            </div>
          </div>
          <div className="text-right">
            <p
              className={`text-sm font-bold ${
                card.isPositive ? "text-green-400" : "text-red-400"
              }`}
            >
              {card.percentage}
              {card.isPositive ? " ↑" : " ↓"}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default DashboardCards;
