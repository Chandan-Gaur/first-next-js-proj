import NaveBar from "@/app/components/NaveBar";
import Link from "next/link";
import Header from "../components/Header";
import RestaurantNavBar from "../components/RestaurantNavBar";
import Menu from "../components/Menu";
import { prisma } from "@/server/db/client";

const fetchrestaurantMenu = async (slug: string) => {
  const restaurant = await prisma.restaurant.findUnique({
    where: {
      slug,
    },
    select: {
      items: true,
    },
  });
  if (!restaurant) {
    throw Error("restaurent menu not defined");
  }
  return restaurant.items;
};

export default async function RestaurantMenu({
  params,
}: {
  params: { slug: string };
}) {
  const menu = await fetchrestaurantMenu(params.slug);

  return (
    <>
      <div className="bg-white w-[100%] rounded p-3 shadow">
        <RestaurantNavBar slug={params.slug} />
        <Menu menu={menu} />
      </div>
    </>
  );
}
