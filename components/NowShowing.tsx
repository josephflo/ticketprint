import { FaAward, FaStar, FaChartLine, FaHeart } from "react-icons/fa";

const cards = [
	{
		icon: <FaAward className="text-3xl text-cyan-300" />,
		title: "Cosmic Points",
		value: "2450",
		subtitle: "Earn more by booking!",
		valueColor: "text-blue-400",
		glow: "shadow-[0_0_24px_4px_#ec4899]",
		border: "border-pink-500",
		iconGlow: "shadow-[0_0_24px_4px_#ec4899]",
		titleColor: "text-pink-400",
    bg: "bg-white"
	},
	{
		icon: <FaStar className="text-3xl text-pink-300" />,
		title: "Badges Earned",
		value: "3",
		subtitle: "Cyberpunk level",
		valueColor: "text-blue-400",
		glow: "shadow-[0_0_24px_4px_#ec4899]",
		border: "border-pink-500",
		iconGlow: "shadow-[0_0_24px_4px_#ec4899]",
		titleColor: "text-pink-400",
    bg: "bg-pink-500"
	},
	{
		icon: <FaChartLine className="text-3xl text-green-400" />,
		title: "Movies Watched",
		value: "47",
		subtitle: "This cyber-year",
		valueColor: "text-blue-400",
		glow: "shadow-[0_0_24px_4px_#22d3ee]",
		border: "border-pink-500",
		iconGlow: "shadow-[0_0_24px_4px_#22d3ee]",
		titleColor: "text-white",
    bg: "bg-white"
	},
	{
		icon: <FaHeart className="text-3xl text-orange-400" />,
		title: "Wishlist Items",
		value: "2",
		subtitle: "Digital queue",
		valueColor: "text-blue-400",
		glow: "shadow-[0_0_24px_4px_#f59e42]",
		border: "border-pink-500",
		iconGlow: "shadow-[0_0_24px_4px_#f59e42]",
		titleColor: "text-white",
    bg: "bg-white"
	},
];

export default function NowShowing() {
	return (
		<div className="grid grid-cols-1 md:grid-cols-4 gap-6 w-full mb-12">
			{cards.map((card, i) => (
				<div
					key={i}
					className={`bg-[#211f32] rounded-2xl p-6 border-2 ${card.border} ${card.glow} flex flex-col items-center`}
				>
					<div className={`mb-2 w-12 h-12 flex items-center justify-center rounded-full ${card.iconGlow,card.bg}`}>{card.icon}</div>
					<div className={`font-bold mb-1 ${card.titleColor}`}>
						{card.title}
					</div>
					<div
						className={`text-3xl font-extrabold mb-1 ${card.valueColor}`}
					>
							{card.value}
					</div>
					<div className="text-sm text-gray-300">{card.subtitle}</div>
				</div>
			))}
		</div>
	);
}